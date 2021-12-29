import {DisksPage} from "../../pages/disk/DisksPage.js";
import { RamsPage } from "../../pages/ram/RamsPage.js";
import { CpusPage } from "../../pages/cpu/CpusPage.js";
import {HardwaresPage} from "../../pages/hardware/HardwaresPage.js";
import { ButtonComponent } from "../../components/button/ButtonComponent.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
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

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    clickHardwaresPage(e) {
        const hardwaresPage = new HardwaresPage(this.parent, document.getElementById('root'))
        hardwaresPage.render()
    }

    clickCpusPage(e) {
        const cpusPage = new CpusPage(this.parent, document.getElementById('root'))
        cpusPage.render()
    }

    clickRamsPage(e) {
        const ramsPage = new RamsPage(this.parent, document.getElementById('root'))
        ramsPage.render()
    }

    clickDisksPage(e) {
        const disksPage = new DisksPage(this.parent, document.getElementById('root'))
        disksPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const buttonHard = new ButtonComponent(this.page, 'Компьютеры')
        buttonHard.render(this.clickHardwaresPage.bind(this))
        const buttonCpu = new ButtonComponent(this.page, 'Процессоры')
        buttonCpu.render(this.clickCpusPage.bind(this))
        const buttonRam = new ButtonComponent(this.page, 'ОЗУ')
        buttonRam.render(this.clickRamsPage.bind(this))
        const buttonDisk = new ButtonComponent(this.page, 'Накопители')
        buttonDisk.render(this.clickDisksPage.bind(this))
    }
    
}