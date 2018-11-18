import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'All parcels comming through' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'One parcel coming through' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'added one parcel to database' });
});

router.put('/:id/cancel', (req, res) => {
  res.status(200).json({ message: 'item was successfully changed' });
});

export default router;
