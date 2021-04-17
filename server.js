// console.log('dari server js');
const http = require ('http');
const routes = require ('./routes');
console.log(routes.someText);
console.log('edit');
// console.log('routes.handler',routes.handler);
const server = http.createServer(routes.requestHandler);

server.listen(3000);
