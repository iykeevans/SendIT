import express from 'express';
import parcels from './ParcelRoute';

const router = express.Router();

router.all('/api/v1', (req, res) => res.json({ message: 'welcome to my API' }));
router.use('/api/v1/parcels', parcels);

export default router;
