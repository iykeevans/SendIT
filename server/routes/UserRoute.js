import express from 'express';
import users from '../controllers/users.ctrl';

const router = express.Router();

router.get('/:id/parcels', users.getItems);

export default router;
