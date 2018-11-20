import express from 'express';
import Parcels from '../controllers/ParcelController';

const router = express.Router();

router.get('/', Parcels.getItem);

export default router;
