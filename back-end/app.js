const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json()); 
app.use(bodyParser.json());
app.use(cors()); 

const surveyRoutes = require('./routes/survey');
app.use('/api', surveyRoutes);

//connect to MongoDB
//mongoose.connect('url',;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app; 