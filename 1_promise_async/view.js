class viewDataController{
    #div

    constructor(){
        this.#div = document.createElement('div')
        document.body.appendChild(this.#div)
    }

    renderData(array){
        this.#div.textContent = ""
        for(const i of array) {
            const div = document.createElement('div')
            div.textContent = `${i.name}-${i.age}-${i.sex}`
            this.#div.appendChild(div)
        }
    }
}