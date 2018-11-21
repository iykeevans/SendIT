import express from 'express';
import Parcels from '../controllers/ParcelController';
import middleware from '../helpers/middleware';

const router = express.Router();

router.get('/', Parcels.getItems);

router.get('/:id', Parcels.getItem);

router.post('/', middleware.checkFieldsPost, Parcels.addItem);

router.put('/:id/cancel', Parcels.cancelItem);

export default router;
