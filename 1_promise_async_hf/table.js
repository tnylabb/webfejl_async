class Table {
    constructor() {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }

    callback(people) {
        for (let person of people) {
            const div = document.createElement('div');
            div.textContent = `${person.name} (${person.age}) rendelkezik egy ${person.car.color} színű ${person.car.type} típusú autóval.`;
            this.container.appendChild(div);
        }
    }
}
