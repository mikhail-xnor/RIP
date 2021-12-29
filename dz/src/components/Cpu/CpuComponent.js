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

    getHTMLUpdate(data) {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    Процессор
                </div>
                <div class='card-body'>
                    <textarea id='name' class='card-text'>${data.name}</textarea>
                    <br>
                    Рабочая частота:
                    <br>
                    <textarea id='frequency' class='card-text'>${data.frequency}</textarea>
                    <br>
                    Архитектура:
                    <br>
                    <textarea id='architecture' class='card-text'>${data.architecture}</textarea>
                </div>
            </div>
            `
        )
    }

    render(data, isUpdate) {
        if (isUpdate == 1)
        {
            const html = this.getHTMLUpdate(data)
            this.parent.insertAdjacentHTML('beforeend', html)
        }
        else
        {
            const html = this.getHTML(data)
            this.parent.insertAdjacentHTML('beforeend', html)
        }
    }
}