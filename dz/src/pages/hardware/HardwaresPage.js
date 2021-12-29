import {HardwareCardComponent} from "../../components/hardware-card/HardwareCardComponents.js";
import { BackButtonComponent } from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import { MainPage } from "../main/MainPage.js";
import {HardwarePage} from "../hardware/HardwarePage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class HardwaresPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    async getData() {
        return ajax.get(urls.hardwares())
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
    
        const hardwarePage = new HardwarePage(this.parent, cardId)
        hardwarePage.render()
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    async clickAdd() {
        const hardwarePage = new HardwarePage(this.parent)
        hardwarePage.render(1)
    }
    
    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        

        const data = await this.getData()
        data.data.forEach((item) => {
            const HardwareCard = new HardwareCardComponent(this.page)
            HardwareCard.render(item, this.clickCard.bind(this))
        })
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const updateButton = new ButtonComponent(this.page, 'Добавить')
        updateButton.render(this.clickAdd.bind(this))
    }
}