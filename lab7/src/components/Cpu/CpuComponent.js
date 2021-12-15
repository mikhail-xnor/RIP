export class CpuComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    Процессор
                </div>
                <div class='card-body'>
                    <h4 class='card-title'>${data.name}</h4>
                    <p class='card-text'>Рабочая частота: ${data.frequency}</p>
                    <p class='card-text'>Архитектура: ${data.architecture}</p>
                </div>
            </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}