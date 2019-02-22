let baseUrl = 'https://jsonplaceholder.typicode.com/';

const serverRoutes = {
    todos: {
        url: baseUrl+'todos',
        method: 'GET',
        params: {
            userId: 1
        },
        defaultPopup: false
    }
};

export default serverRoutes;