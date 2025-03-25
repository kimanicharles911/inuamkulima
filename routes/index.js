import express from 'express';
const router = express.Router();
import { createProductFunc, getProductsFunc } from '../controllers/productsController.js';
import { createTransactionFunc } from '../controllers/transactionsController.js';
import { addFarmerFunc, getFarmerFunc } from '../controllers/farmersController.js';
import { addMerchantFunc, getMerchantsFunc } from '../controllers/merchantsController.js';


router.get('/', (req, res) => {
  res.status(200).send('Hello user! Our API heartbeat is found here. ( /api ).')
});

router.post('/products', createProductFunc);
router.post('/transactions', createTransactionFunc);
router.get('/products', getProductsFunc);
router.post('/farmer', addFarmerFunc);
router.get('/farmers', getFarmerFunc);
router.post('/merchant', addMerchantFunc);
router.get('/merchants', getMerchantsFunc);
// router.get('/wallet', getBalanceFunc);

export { router as routes }; 