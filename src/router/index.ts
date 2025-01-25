import express from 'express';
import romanNumeralsRouter from './roman-numerals-route';

const router = express.Router();

router.use('/romannumeral', romanNumeralsRouter);

export default router;
