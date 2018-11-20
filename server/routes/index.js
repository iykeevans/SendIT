import express from 'express';
import parcels from './ParcelRoute';
import users from './UserRoute';

const router = express.Router();

router.all('/api/v1', (req, res) => res.json({ message: 'welcome to my API' }));
router.use('/api/v1/parcels', parcels);
router.use('/api/v1/users', users);

export default router;
