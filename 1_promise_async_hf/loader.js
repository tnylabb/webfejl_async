const service = new Service(people);
const table = new Table();
const manager = new Manager(table);

class Loader {
    constructor(service, manager) {
        this.service = service;
        this.manager = manager;

        this.button = document.createElement('button');
        this.button.textContent = 'Adatok betöltése';
        document.body.appendChild(this.button);

        this.button.addEventListener('click', () => {
            this.service.getPeople().then(people => {
                this.manager.addData(people);
                this.button.remove();
            });
        });
    }
}

new Loader(service, manager);
