const mongoose = require('mongoose');
const { mainDb } = require('../config/db')

const comicBookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  pages: { type: Number, required: true },
  condition: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const comic = mainDb.model('ComicBooks', comicBookSchema);

module.exports = {
  comic
};
