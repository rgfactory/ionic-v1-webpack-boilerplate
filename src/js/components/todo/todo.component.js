class TodoCtrl {
    constructor() {
        'ngInject';

    }
}

let todo = {
    bindings: {
        data: '<'
    },
    controller: TodoCtrl,
    template: require('./todo.html')
};

export default todo;