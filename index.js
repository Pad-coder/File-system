const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8000;
const folder = path.join("Timefile");

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

app.get("/create-file", (req, res) => {
  const timestamp = new Date().toISOString().replace(/[-:.]/g, "");

  const filePath = path.join(folder, `${timestamp}.txt`);

  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error creating file" });
    }
    res.status(200).send({
      message: "File created succecsfully",
      fileName: `${timestamp}.txt`,
    });
  });
});

app.get("/read-file", (req, res) => {
  fs.readdir(folder, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading directory" });
    }
    const textFiles = data.filter((file) => file.endsWith(".txt"));
    res.status(200).send({ files: textFiles });
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
