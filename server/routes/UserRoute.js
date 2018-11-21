import express from 'express';
import users from '../controllers/UserController';

const router = express.Router();

router.get('/:id/parcels', users.getItems);

export default router;
