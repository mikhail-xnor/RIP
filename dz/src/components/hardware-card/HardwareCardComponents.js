import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class HardwareCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data, cpu) {
        return (
            `
                <div class="card text-white bg-dark" style="width: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">Компьютер на процессоре ${cpu.name}</h5>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    async getCpu(data) {
        return ajax.get(urls.cpu(data.cpu))
    }
    
    async render(data, listener) {
        const cpu = await this.getCpu(data)
        const html = this.getHTML(data, cpu.data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }

}