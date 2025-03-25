import express from 'express';
const router = express.Router();
import { createProductFunc } from '../controllers/productsController.js';
import { createTransactionFunc } from '../controllers/transactionsController.js';


router.get('/', (req, res) => {
  res.status(200).send('Hello user! Our API heartbeat is found here. ( /api ).')
});

router.post('/products', createProductFunc);
router.post('/transactions', createTransactionFunc);
// router.get('/products', getProductsFunc);
// router.get('/wallet', getBalanceFunc);

export { router as routes }; 