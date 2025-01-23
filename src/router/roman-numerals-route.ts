import express from 'express';
import { getRomanNumerals } from '../controller/roman-numerals';

const router = express.Router();

router.get('/romannumerals', getRomanNumerals);

export default router;
