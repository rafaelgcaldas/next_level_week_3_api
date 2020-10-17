import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesControlles from './controllers/OrphanagesControlles'

const routes = Router();
const upload = multer(uploadConfig);

// index, show, create, update, delete

routes.get('/orphanages', OrphanagesControlles.index);
routes.get('/orphanages/:id', OrphanagesControlles.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControlles.create);

export default routes;