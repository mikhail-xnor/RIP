class Urls {
    constructor() {
        this.url = 'http://localhost:8000/api/';
    }

    cpus() {
        return `${this.url}computercomp/`
    }

    cpu(id) {
        return `${this.url}computercomp/${id}/`
    }
}

export const urls = new Urls()