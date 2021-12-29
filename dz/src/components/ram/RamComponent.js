export class RamComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    ОЗУ
                </div>
                <div class='card-body'>
                    <h4 class='card-title'>${data.name}</h4>
                    <p class='card-text'>Тип памяти: ${data.type}</p>
                    <p class='card-text'>Частота работы: ${data.frequency}</p>
                    <p class='card-text'>Объем: ${data.volume}</p>
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
                    ОЗУ
                </div>
                <div class='card-body'>
                    <textarea id='name' class='card-title'>${data.name}</textarea>
                    <br>
                    Тип памяти:
                    <br>
                    <textarea id='type' class='card-text'>${data.type}</textarea>
                    <br>
                    Частота работы:
                    <br>
                    <textarea id='frequency' class='card-text'>${data.frequency}</textarea>
                    <br>
                    Объем:
                    <br>
                    <textarea id='volume' class='card-text'>${data.volume}</textarea>
                </div>
            </div>
            `
        )
    }

    render(data, isUpdate = 0) {
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