/* 
let express = require('express');
let routes = express.Router()
 */

module.exports = (app) => {
    app.get('/',(req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('<h2>Hello world</h2>');
     });
};