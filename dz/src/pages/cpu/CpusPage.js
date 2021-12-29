import {CpuCardComponent} from "../../components/cpu-card/CpuCardComponents.js";
import { BackButtonComponent } from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import { MainPage } from "../main/MainPage.js";
import {CpuPage} from "../cpu/CpuPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class CpusPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    async getData() {
        return ajax.get(urls.cpus())
    }
    
    get page() {
        return document.getElementById('main-page')
    }
    
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const cpuPage = new CpuPage(this.parent, cardId)
        cpuPage.render()
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    async clickAdd() {
        const cpuPage = new CpuPage(this.parent)
        cpuPage.render(1)
    }
    
    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        

        const data = await this.getData()
        data.data.forEach((item) => {
            const CpuCard = new CpuCardComponent(this.page)
            CpuCard.render(item, this.clickCard.bind(this))
        })
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const updateButton = new ButtonComponent(this.page, 'Добавить')
        updateButton.render(this.clickAdd.bind(this))
    }
}