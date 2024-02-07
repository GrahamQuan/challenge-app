import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ creatorInfo: 'I am Graham Quan, a fullstack developer.' });
});

export default router;
