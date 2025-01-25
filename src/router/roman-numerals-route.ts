import express from 'express';
import { getRomanNumerals } from '../controller/roman-numerals';
import { validateIntegerInput } from '../middleware/validate-Integer-Input';

const router = express.Router();

router.get('/', validateIntegerInput, getRomanNumerals);

export default router;
