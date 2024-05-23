exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Este é o valor da variavel local'
    next();
};
  
exports.outroMiddleware = (req, res, next) => {
   next();
};
