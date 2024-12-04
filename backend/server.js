const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://almayo:7Io7qZCy4UCs4jpj@cluster0.26zhx4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongoose.connected thats dope!!!"))
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
