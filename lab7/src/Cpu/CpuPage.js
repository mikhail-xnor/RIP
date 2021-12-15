import {CpuComponent} from "../components/Cpu/CpuComponent.js";
import {BackButtonComponent} from "../components/back-button/BackButtonComponent.js";
import {MainPage} from "../pages/main/MainPage.js";
import { urls } from "../modules/urls.js";
import { ajax } from "../modules/ajax.js";


export class CpuPage {
    constructor(parent, id) {
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
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
    
        const data = await this.getData()
        const cpu = new CpuComponent(this.page)
        cpu.render(data.data)
    }
}