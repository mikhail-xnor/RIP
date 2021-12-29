import {DiskCardComponent} from "../../components/disk-card/DiskCardComponents.js";
import { BackButtonComponent } from "../../components/back-button/BackButtonComponent.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";
import { MainPage } from "../main/MainPage.js";
import {DiskPage} from "../disk/DiskPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class DisksPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    async getData() {
        return ajax.get(urls.disks())
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
    
        const diskPage = new DiskPage(this.parent, cardId)
        diskPage.render()
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    async clickAdd() {
        const diskPage = new DiskPage(this.parent)
        diskPage.render(1)
    }
    
    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        

        const data = await this.getData()
        data.data.forEach((item) => {
            const DiskCard = new DiskCardComponent(this.page)
            DiskCard.render(item, this.clickCard.bind(this))
        })
        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))
        const updateButton = new ButtonComponent(this.page, 'Добавить')
        updateButton.render(this.clickAdd.bind(this))
    }
}