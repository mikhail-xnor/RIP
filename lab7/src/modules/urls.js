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
}

export const urls = new Urls()