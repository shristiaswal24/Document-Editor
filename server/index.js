const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// save document route
app.post("/save", (req, res) => {
  const { title, content } = req.body;

  const data = {
    title,
    content,
    time: new Date().toLocaleString(),
  };

  fs.appendFile(
    "documents.json",
    JSON.stringify(data) + ",\n",
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Save failed" });
      }
      res.json({ message: "Document saved successfully" });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
