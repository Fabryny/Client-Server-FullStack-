module.exports = {
    send: (err, req, res, code = 400) => {
        console.log(`error x: ${JSON.stringify(err)}`);
        res.status(400).json({
            error: err
        })
    }
}