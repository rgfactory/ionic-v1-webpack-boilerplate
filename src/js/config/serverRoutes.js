let baseUrl = 'https://jsonplaceholder.typicode.com/';

const serverRoutes = {
    todos: {
        url: baseUrl+'todos',
        method: 'GET',
        defaultPopup: false
    }
};

export default serverRoutes;