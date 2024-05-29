import express from 'express';
import { booksController, authorsController } from '../controllers';

const router = express.Router();

router.get('/authors', authorsController.get);
router.post('/authors', authorsController.create);
router.put('/authors/:id', authorsController.update);
router.delete('/authors/:id', authorsController.delete);

router.get('/books', booksController.get);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.delete);

export default router;