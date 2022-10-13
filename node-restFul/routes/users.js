
/* let express = require('express');
let routes = express.Router() */

let api = '/users/'

let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true // Deixa sempre carregado, se n tiver, ele cria.
});

 module.exports = (app) => {

    app.get( `${api}` ,(req, res) => {
     db.find({}).sort({name: 1 }).exec((err, users) => {// sort() 1 ascendente, -1 descendente
         if(err) {
            app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.status(200).json({
                    users //users: users   -> mesma coisa
                })
            }
     }); 
    
    });

    app.get( `${api}:id` ,(req, res) => {
        db.findOne({_id:req.params.id}).exec((err, user) => {
            if(err) {
                app.utils.error.send(err, req, res);
                } else {
                    res.status(200).json(user)
              
                }
        })
    });

    const { check } = require('express-validator');

    app.post( `${api}`,
              check ('name').notEmpty().withMessage('Nome é obrigatorio!'),
              check('email').isEmail().withMessage('Email invalido!'),
              (req, res) => {/* 
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json'); */

        /*   res.json(req.body); */

        if(!app.utils.validator.user(app, req, res)) return false
        db.insert(req.body, (err, user) => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user)
            }
        })
    });

    app.put( `${api}:id`,
              check ('name').notEmpty().withMessage('Nome é obrigatorio!'),
              check('email').isEmail().withMessage('Email invalido!'),
              (req, res) => {

       if(!app.utils.validator.user(app, req, res)) return false

                
        db.update({_id:req.params.id}, req.body, err => {
            if(err) {
                app.utils.error.send(err, req, res);
                } else {
                    res.status(200).json(Object.assign(req.params, req.body));
                }
        });
    });

    app.delete( `${api}:id` ,(req, res) => {
        db.remove({_id:req.params.id}, req.body, err => {
            if(err) {
                app.utils.error.send(err, req, res);
                } else {
                    res.status(200).json(req.params);
                }
        });
    });



}