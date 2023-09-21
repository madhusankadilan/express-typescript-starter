import express from 'express';
import {testController} from "../controllers";
import { TestValidation } from '../middlewares';

const router = express.Router();

router.get('/test', testController.testGet);

router.post('/test', TestValidation.validateTest, testController.testPost);

export default router;