const express = require('express');
const bodyParser = require('body-parser');
const comicRoutes = require('./routes/comicRoutes');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use('/api', comicRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
