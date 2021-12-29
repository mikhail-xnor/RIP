import {CpuComponent} from "../../components/Cpu/CpuComponent.js";
import {BackButtonComponent} from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import {CpusPage} from "../cpu/CpusPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";


export class CpuPage {
    constructor(parent, id = 0) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        return ajax.get(urls.cpu(this.id))
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
        const mainPage = new CpusPage(this.parent)
        mainPage.render()
    }

    async clickDel() {
        const hardwares = await ajax.get(urls.hardwares())
        for (const item of hardwares.data)  {
            if (item.cpu == this.id)
            {
                await ajax.del(urls.hardware(item.id));
            }
        }
        await ajax.del(urls.cpu(this.id))
        const mainPage = new CpusPage(this.parent)
        mainPage.render()
    }

    async clickUpd() {
        const formData = new FormData();
        formData.append('name', document.getElementById(`name`).value);
        formData.append('frequency', document.getElementById(`frequency`).value);
        formData.append('architecture', document.getElementById(`architecture`).value);
        await ajax.put(urls.cpu(this.id), formData)
        const mainPage = new CpusPage(this.parent)
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
        const cpu = new CpuComponent(this.page)
        cpu.render(data.data, 1)
    }

    async clickAdd() {
        const formData = new FormData();
        formData.append('name', document.getElementById(`name`).value);
        formData.append('frequency', document.getElementById(`frequency`).value);
        formData.append('architecture', document.getElementById(`architecture`).value);
        await ajax.post(urls.cpus(), formData)
        const mainPage = new CpusPage(this.parent)
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
            const cpu = new CpuComponent(this.page)
            cpu.render({name: '', frequency: '', architecture: ''}, 1)
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
            const cpu = new CpuComponent(this.page)
            cpu.render(data.data, 0)
        }
    }
}