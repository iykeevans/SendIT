import express from 'express';
import Parcels from '../controllers/ParcelController';

const router = express.Router();

router.get('/', Parcels.getItems);
router.get('/:id', Parcels.getItem);

export default router;
