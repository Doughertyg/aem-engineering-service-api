import express from 'express';
import romanNumeralsRouter from './roman-numerals-route';

const router = express.Router();

router.use("/roman-numerals", romanNumeralsRouter);

export default router;
