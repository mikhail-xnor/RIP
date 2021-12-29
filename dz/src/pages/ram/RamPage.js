import {RamComponent} from "../../components/ram/RamComponent.js";
import {BackButtonComponent} from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import {RamsPage} from "../ram/RamsPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";


export class RamPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        return ajax.get(urls.ram(this.id))
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
        const mainPage = new RamsPage(this.parent)
        mainPage.render()
    }

    async clickDel() {
        const hardwares = await ajax.get(urls.hardwares())
        for (const item of hardwares.data)  {
            if (item.ram == this.id)
            {
                await ajax.del(urls.hardware(item.id));
            }
        }
        await ajax.del(urls.ram(this.id))
        const mainPage = new RamsPage(this.parent)
        mainPage.render()
    }

    async clickUpd() {
        const formData = new FormData();
        formData.append('name', document.getElementById(`name`).value);
        formData.append('type', document.getElementById(`type`).value);
        formData.append('frequency', document.getElementById(`frequency`).value);
        formData.append('volume', document.getElementById(`volume`).value);
        await ajax.put(urls.ram(this.id), formData)
        const mainPage = new RamsPage(this.parent)
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
        const ram = new RamComponent(this.page)
        ram.render(data.data, 1)
    }

    async clickAdd() {
        const formData = new FormData();
        formData.append('name', document.getElementById(`name`).value);
        formData.append('type', document.getElementById(`type`).value);
        formData.append('frequency', document.getElementById(`frequency`).value);
        formData.append('volume', document.getElementById(`volume`).value);
        await ajax.post(urls.rams(), formData)
        const mainPage = new RamsPage(this.parent)
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
            const data = await this.getData()
            const ram = new RamComponent(this.page)
            ram.render({name: '', type: '', frequency: '', volume: ''}, 1)
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
            const ram = new RamComponent(this.page)
            ram.render(data.data)
        }
        
    }
}