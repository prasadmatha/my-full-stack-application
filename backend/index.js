const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
let db = null;
let dbPath = path.join(__dirname, "data.db");
const initializedbAndServer = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
  console.log(db);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
initializedbAndServer();

app.get("/", (req, res) => {
  res.send("Welcome to Card91");
});
