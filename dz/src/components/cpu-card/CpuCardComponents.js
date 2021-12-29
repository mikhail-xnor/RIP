export class CpuCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card text-white bg-dark" style="width: 300px;">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <!--<p class="card-text">${data.frequency}</p>architecture-->
                        <!--<p class="card-text">${data.architecture}</p>-->
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
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }

}