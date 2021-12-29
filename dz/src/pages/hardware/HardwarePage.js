import {HardwareComponent} from "../../components/hardware/HardwareComponent.js";
import {BackButtonComponent} from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import {HardwaresPage} from "../hardware/HardwaresPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";


export class HardwarePage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        return ajax.get(urls.hardware(this.id))
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
        const mainPage = new HardwaresPage(this.parent)
        mainPage.render()
    }

    async clickDel() {
        await ajax.del(urls.hardware(this.id))
        const mainPage = new HardwaresPage(this.parent)
        mainPage.render()
    }

    async clickUpd() {
        const formData = new FormData();
        formData.append('cpu', document.getElementById('cpu').value);
        formData.append('ram', document.getElementById(`ram`).value);
        formData.append('diskstor', document.getElementById(`disk`).value);
        await ajax.put(urls.hardware(this.id), formData)
        const mainPage = new HardwaresPage(this.parent)
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
        const hardware = new HardwareComponent(this.page)
        hardware.render(data.data, 1)
    }

    async clickAdd() {
        const formData = new FormData();
        formData.append('cpu', document.getElementById('cpu').value);
        formData.append('ram', document.getElementById(`ram`).value);
        formData.append('diskstor', document.getElementById(`disk`).value);
        await ajax.post(urls.hardwares(), formData)
        const mainPage = new HardwaresPage(this.parent)
        mainPage.render()
    }

    async render(isCreate = 0) {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        if (isCreate == 1)
        {
            this.parent.innerHTML = ''
            const html = this.getHTML()
            this.parent.insertAdjacentHTML('beforeend', html)
            const backButton = new BackButtonComponent(this.page)
            backButton.render(this.clickBack.bind(this))
            const updateButton = new ButtonComponent(this.page, 'Сохранить')
            updateButton.render(this.clickAdd.bind(this))
            const hardware = new HardwareComponent(this.page)
            hardware.render({cpu: '', ram: '', diskstore: ''}, 1)
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
            const hardware = new HardwareComponent(this.page)
            hardware.render(data.data)
        }
    }
}