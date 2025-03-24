const http = require('http'); // importing http module 
const server =  http.createServer((req,res) =>{
    // res.writeHead(200,{'content-Type':'text/plain'});
    res.end('Hello World');

});
const port =3000;
// const host ='127.0.0.1';
server.listen(port, () => { 
    // console.log('server running at http://${host}:${port}/');
    console.log(`Server running at http://localhost:${port}`);
});