const service = new Service();
const viewDataController = new viewDataController();
service.init().then((array) => {
    viewDataController.renderData(array);
});