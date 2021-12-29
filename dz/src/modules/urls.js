class Urls {
    constructor() {
        this.url = 'http://localhost:8000/api/';
    }

    cpus() {
        return `${this.url}cpu/`
    }

    cpu(id) {
        return `${this.url}cpu/${id}/`
    }

    disks() {
        return `${this.url}disk/`
    }

    disk(id) {
        return `${this.url}disk/${id}/`
    }

    rams() {
        return `${this.url}ram/`
    }

    ram(id) {
        return `${this.url}ram/${id}/`
    }

    hardwares() {
        return `${this.url}hardware/`
    }

    hardware(id) {
        return `${this.url}hardware/${id}/`
    }
}

export const urls = new Urls()