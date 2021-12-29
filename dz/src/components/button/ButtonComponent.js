export class ButtonComponent {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    addListeners(listener, data) {
        document
            .getElementById(data+"-button")
            .addEventListener("click", listener)
    }

    getHTML(data) {
        return (
            `
                <div class="card text-white bg-dark" style="width: 160px;">
                    <button id="${data}-button" class="btn btn-primary" type="button">${data}</button>
                </div>
            `
        )
    }

    render(listener) {
        const html = this.getHTML(this.data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener, this.data)
    }
}