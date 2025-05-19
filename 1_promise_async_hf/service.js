class Service {
    constructor(data) {
        this.data = data;
    }

    getPeople() {
        return Promise.resolve(this.data);
    }
}