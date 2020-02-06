import { Router } from "express";


const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({status: 'on'});
})


export default routes;
