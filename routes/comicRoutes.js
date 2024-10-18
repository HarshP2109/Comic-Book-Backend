const express = require('express');
const { createComicBook, getComicBooks, getComicBookById, updateComicBook, deleteComicBook } = require('../controllers/mainController');

const router = express.Router();

router.post('/comics', createComicBook);
router.get('/comics', getComicBooks);
router.get('/comics/:id', getComicBookById);
router.put('/comics/:id', updateComicBook);
router.delete('/comics/:id', deleteComicBook);

module.exports = router;
