exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variavel local'
    next();
};
  
exports.outroMiddleware = (req, res, next) => {
   next();
};

exports.checkErrorCSRF = (e, req, res, next)=>{
    if(e && e.code === "EBADCSRFTOKEN"){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken()
    next()
}