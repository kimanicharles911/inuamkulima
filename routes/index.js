import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).send('Hello user! Our API heartbeat is found here. ( /api ).')
});

export { router as routes }; 