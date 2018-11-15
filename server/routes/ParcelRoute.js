import express from 'express';

import parcels from '../controllers/ParcelController';
import m from '../helpers/middleware';

const router = express.Router();

// gets all parcel delivery order
router.get('/', parcels.getItems);

router.get('/:id', parcels.getItem);

router.post('/', m.checkFieldsPost, parcels.addItem);

router.put('/:id/cancel', parcels.cancelItem);

export default router;
