const { comic } = require('../models/comicBook');

// Comic book Creation = POST Request
const createComicBook = async (req, res) => {
  try {
    const comicBook = new comic(req.body);
    console.log("Comic is Creating!!");
    await comicBook.save();
    res.json({ message: "Comic Book created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Comic books with pagination, filtering, and sorting - GET Request
const getComicBooks = async (req, res) => {
  const { page = 1, limit = 10, sort = 'name', ...filters } = req.query;
  try {
    const comics = await comic.find(filters).sort(sort).skip((page - 1) * limit).limit(Number(limit));
    console.log("Comic is displaying!!");
    console.log(comics);
    res.json(comics);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Comic book by ID - GET Request
const getComicBookById = async (req, res) => {
  try {
    console.log(req.params.id);
    const comicBook = await comic.findById(req.params.id);
    console.log(comicBook);
    if (!comicBook) return res.json({ message: 'Comic not found' });
    console.log("Comic is being displayed!!");
    res.json(comicBook);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Comic book Updation - PUT Request
const updateComicBook = async (req, res) => {
  try {
    const comicBook = await comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comicBook) return res.json({ message: 'Comic not found' });
    console.log("Comic is updating!!");
    console.log(comicBook);
    res.json(comicBook);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Comic book Deletion - Delete Request
const deleteComicBook = async (req, res) => {
  try {
    const comicBook = await comic.findByIdAndDelete(req.params.id);
    if (!comicBook) return res.json({ message: 'Comic not found' });
    console.log("ComicBook is deleted!!");
    res.json({ message: 'Comic book deleted' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
    createComicBook,
    getComicBooks,
    getComicBookById,
    updateComicBook,
    deleteComicBook
}