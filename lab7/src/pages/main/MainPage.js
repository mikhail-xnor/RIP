import {CpuCardComponent} from "../../components/cpu-card/CpuCardComponents.js";
import {CpuPage} from "../../Cpu/CpuPage.js";
import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class MainPage {
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
    
    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        

        const data = await this.getData()
        data.data.forEach((item) => {
            const CpuCard = new CpuCardComponent(this.page)
            CpuCard.render(item, this.clickCard.bind(this))
        })
    }
}