import {RamCardComponent} from "../../components/ram-card/RamCardComponents.js";
import { BackButtonComponent } from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import { MainPage } from "../main/MainPage.js";
import {RamPage} from "../ram/RamPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class RamsPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    async getData() {
        return ajax.get(urls.rams())
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
    
        const ramPage = new RamPage(this.parent, cardId)
        ramPage.render()
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    async clickAdd() {
        const ramPage = new RamPage(this.parent)
        ramPage.render(1)
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        

        const data = await this.getData()
        data.data.forEach((item) => {
            const RamCard = new RamCardComponent(this.page)
            RamCard.render(item, this.clickCard.bind(this))
        })
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const updateButton = new ButtonComponent(this.page, 'Добавить')
        updateButton.render(this.clickAdd.bind(this))
    }
}