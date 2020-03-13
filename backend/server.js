const express = require('express');
const cors = require('cors');
 require("./db");

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
