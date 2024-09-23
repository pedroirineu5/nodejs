exports.middlewareGlobal = (req, res, next) => {
    if (req.body.cliente) {
  
      console.log();
  
      console.log(`Vi que você postou ${req.body.cliente}`);
  
      console.log();
  
    }
    next();
  };
  

module.middlewarefudido = (req,res,next)=>{
    console.log('USANDO O SEGUNDO MIDDLEWARE')
}