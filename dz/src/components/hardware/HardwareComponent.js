import { urls } from "../../modules/urls.js";
import { ajax } from "../../modules/ajax.js";

export class HardwareComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(cpu, ram, disk) {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    Компьютер
                </div>
                <div class='card-body'>
                    <h4 class='card-title'>Характеристики: </h4>
                    <p class='card-text'>Процессор: ${cpu.name}</p>
                    <p class='card-text'>ОЗУ: ${ram.name}</p>
                    <p class='card-text'>Накопитель: ${disk.type}</p>
                </div>
            </div>
            `
        )
    }

    getHTMLUpdate() {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    Компьютер
                </div>
                <div class='card-body'>
                    <h4 class='card-title'>Характеристики: </h4>
                    <br>
                    Процессор:
                    <br>
                    <select id="cpu">
                    </select> 
                    <br>
                    ОЗУ:
                    <br>
                    <select id="ram">
                    </select> 
                    <br>
                    Накопитель:
                    <br>
                    <select id="disk">
                    </select> 
                </div>
            </div>
            `
        )
    }

    async getCpus(data) {
        return ajax.get(urls.cpus())
    }

    async getRams(data) {
        return ajax.get(urls.rams())
    }

    async getDisks(data) {
        return ajax.get(urls.disks())
    }

    async getCpu(data) {
        return ajax.get(urls.cpu(data.cpu))
    }

    async getRam(data) {
        return ajax.get(urls.ram(data.ram))
    }

    async getDisk(data) {
        return ajax.get(urls.disk(data.diskstor))
    }

    async render(data, isUpdate = 0) {
        if (isUpdate == 1)
        {
            const html = this.getHTMLUpdate()
            this.parent.insertAdjacentHTML('beforeend', html)
            const cpus = await this.getCpus()
            const cpuSelect = document.getElementById('cpu')
            cpus.data.forEach((item) => {
                const cpuOption = document.createElement('option')
                cpuOption.value = item.id
                cpuOption.innerHTML = item.name
                cpuSelect.appendChild(cpuOption)
            })
            cpuSelect.value = data.cpu

            const rams = await this.getRams()
            const ramSelect = document.getElementById('ram')
            rams.data.forEach((item) => {
                const ramOption = document.createElement('option')
                ramOption.value = item.id
                ramOption.innerHTML = item.name
                ramSelect.appendChild(ramOption)
            })
            ramSelect.value = data.ram

            const disks = await this.getDisks()
            const diskSelect = document.getElementById('disk')
            disks.data.forEach((item) => {
                const diskOption = document.createElement('option')
                diskOption.value = item.id
                diskOption.innerHTML = item.type + ' ' + item.volume
                diskSelect.appendChild(diskOption)
            })
            diskSelect.value = data.diskstor
        }
        else
        {
            const cpu = await this.getCpu(data)
            const ram = await this.getRam(data)
            const disk = await this.getDisk(data)
            const html = this.getHTML(cpu.data, ram.data, disk.data)
            this.parent.insertAdjacentHTML('beforeend', html)
        }
    }
}