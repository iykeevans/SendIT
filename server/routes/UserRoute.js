import express from 'express';

const router = express.Router();

router.get('/:id/parcels', (req, res) => {
  res.status(200).json({ message: 'All user parcels comming through' });
});

export default router;
