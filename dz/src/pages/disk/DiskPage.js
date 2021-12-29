import {DiskComponent} from "../../components/Disk/DiskComponent.js";
import {BackButtonComponent} from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import {DisksPage} from "../disk/DisksPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";


export class DiskPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        return ajax.get(urls.disk(this.id))
    }

    get page() {
        return document.getElementById('stock-page')
    }

    getHTML() {
        return (
            `
                <div id="stock-page">
                </div>
            `
        )
    }

    clickBack() {
        const mainPage = new DisksPage(this.parent)
        mainPage.render()
    }

    async clickDel() {
        const hardwares = await ajax.get(urls.hardwares())
        for (const item of hardwares.data)  {
            if (item.diskstor == this.id)
            {
                await ajax.del(urls.hardware(item.id));
            }
        }
        await ajax.del(urls.disk(this.id))
        const mainPage = new DisksPage(this.parent)
        mainPage.render()
    }

    async clickUpd() {
        const formData = new FormData();
        formData.append('type', document.getElementById(`type`).value);
        formData.append('ws', document.getElementById(`disk_ws`).value);
        formData.append('rs', document.getElementById(`disk_rs`).value);
        formData.append('volume', document.getElementById(`volume`).value);
        await ajax.put(urls.disk(this.id), formData)
        const mainPage = new DisksPage(this.parent)
        mainPage.render()
    }

    async clickUpdate() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const updateButton = new ButtonComponent(this.page, 'Сохранить')
        updateButton.render(this.clickUpd.bind(this))
        const data = await this.getData()
        const disk = new DiskComponent(this.page)
        disk.render(data.data, 1)
    }

    async clickAdd() {
        const formData = new FormData();
        formData.append('type', document.getElementById(`type`).value);
        formData.append('ws', document.getElementById(`disk_ws`).value);
        formData.append('rs', document.getElementById(`disk_rs`).value);
        formData.append('volume', document.getElementById(`volume`).value);
        await ajax.post(urls.disks(), formData)
        const mainPage = new DisksPage(this.parent)
        mainPage.render()
    }

    async render(isCreate = 0) {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        if (isCreate == 1)
        {
            const backButton = new BackButtonComponent(this.page)
            backButton.render(this.clickBack.bind(this))
            const updateButton = new ButtonComponent(this.page, 'Сохранить')
            updateButton.render(this.clickAdd.bind(this))
            const disk = new DiskComponent(this.page)
            disk.render({type: '', ws: '', rs: '', volume: ''}, 1)
        }
        else
        {
            const backButton = new BackButtonComponent(this.page)
            backButton.render(this.clickBack.bind(this))
            const delButton = new ButtonComponent(this.page, 'Удалить')
            delButton.render(this.clickDel.bind(this))
            const updateButton = new ButtonComponent(this.page, 'Обновить')
            updateButton.render(this.clickUpdate.bind(this))
            const data = await this.getData()
            const disk = new DiskComponent(this.page)
            disk.render(data.data, 0)
        }
    }
}