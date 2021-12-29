export class DiskComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class='card text-white bg-dark' style='width: 300px'>
                <div class="card-header">
                    Диск
                </div>
                <div class='card-body'>
                    <h4 class='card-title'>Тип накопителя: ${data.type}</h4>
                    <p class='card-text'>Скорость записи: ${data.rs}</p>
                    <p class='card-text'>Скорость чтения: ${data.ws}</p>
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
                    Диск
                </div>
                <div class='card-body'>
                    Тип накопителя:
                    <br>
                    <textarea id='type' class='card-text'>${data.type}</textarea>
                    <br>
                    Скорость записи:
                    <br>
                    <textarea id='disk_ws' class='card-text'>${data.ws}</textarea>
                    <br>
                    Скорость чтения:
                    <br>
                    <textarea id='disk_rs' class='card-text'>${data.rs}</textarea>
                    <br>
                    Объем:
                    <br>
                    <textarea id='volume' class='card-text'>${data.volume}</textarea>
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