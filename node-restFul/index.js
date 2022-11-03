// INICIAR SERVIDOR COM HTTP 
/*
const http = require('http');

let server = http.createServer((req,res) => {
    console.log('URL', req.url);
    console.log('metodo', req.method);


    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h2>Hello world</h2>');

        break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify({
                users: [{
                    name:'Fabryny',
                    email: 'fabryny.silva@gmail.com',
                    id: 1
                }]
            }));
            break;

    }
});

server.listen(3699,'127.0.0.1', () => {
    console.log('servidor rodando');
})
*/





 //INICIAR SERVIDOR  COM EXPRESS

 const express = require('express');
 let consign = require('consign');
 let app = express();

 app.use(express.urlencoded({ extended: true, limit: '50mb'}))
 app.use(express.json({limit: '50mb'}))
 
 consign().include('routes').include('utils').into(app)

/*
 let routesIndex = require('./routes/index')
 let routesUsers = require('./routes/users')

  app.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h2>Hello world</h2>');
 });

 app.get('/users',(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
        users: [{
            name:'Fabryny',
            email: 'fabryny.silva@gmail.com',
            id: 1
        }]
    });
 }); 

 app.use(routesIndex);
 app.use('/users', routesUsers);
 */

 app.listen(4000,'127.0.0.1', () => {
     console.log('servidor rodando');
 })

