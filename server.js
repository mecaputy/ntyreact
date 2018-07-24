const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT);

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern");
