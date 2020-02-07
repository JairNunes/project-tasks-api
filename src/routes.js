import { Router } from 'express';
import ProjectController from './app/controllers/projectController';
import { checkParam, qtdRequests } from './app/middlewares';

const routes = new Router();

routes.use(qtdRequests);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);

routes.put('/projects/:id', ProjectController.update, checkParam);
routes.delete('/projects/:id', ProjectController.delete, checkParam);

routes.post('/projects/:id/tasks', ProjectController.addTask, checkParam);

export default routes;
