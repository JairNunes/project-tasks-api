const checkParam = (req, res, next) => {
  if(!req.params.id){
    return res.status(400).json({erro: "parametro id obrigatório"});
  }
  return next();
};


const qtdRequests = (req, res, next) => {
console.count('quantidade de requests');
}
export {checkParam, qtdRequests};