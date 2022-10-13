const {validationResult } = require('express-validator');

module.exports ={
    user: (app, req, res) => {
        
        req.assert('_name', 'O nome é obrigatorio.').notEmpty();
        req.assert('_email', 'O e-mail está inválido').notEmpty().isEmail();

        const errors = validationResult(req);
        
        if(errors){
            app.utils.error.send(errors, req, res);
            return false
        } else {
            return true
        }
    }

}