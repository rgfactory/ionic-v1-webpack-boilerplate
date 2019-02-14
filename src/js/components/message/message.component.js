
class MessageCtrl {

    constructor() {
        'ngInject';
    }
}

let message = {
    bindings: {
        data: '<'
    },
    template: require('./message.html'),
    controller: MessageCtrl
};

export default message;