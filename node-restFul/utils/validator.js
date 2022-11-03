const {validationResult, body } = require('express-validator');


module.exports ={
    user: (app, req, res) => {
        body('_name', 'O nome é obrigatorio.').notEmpty();
        body('_email', 'O e-mail está inválido').notEmpty().isEmail();
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            app.utils.error.send(errors, req, res);
            return true
        } else {
            return true
        }
    }

}