class Manager {
    constructor(table) {
        this.table = table;
    }

    addData(people) {   
        this.table.callback(people);
    }
}
