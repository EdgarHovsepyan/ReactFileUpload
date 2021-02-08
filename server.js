const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const newFileName = Math.random().toString(26).slice(2);
    const fileType = file.name.split(".")[1];
    fs.rename(
      `${__dirname}\\client\\public\\uploads\\${file.name}`,
      `${__dirname}\\client\\public\\uploads\\${newFileName}.${fileType}`,
      function (err) {
        if (err) console.log("ERROR: " + err);
      }
    );

    res.status(201).json({
      fileName: `${newFileName}`,
      filePath: `/uploads/${newFileName}.${fileType}`,
    });
  });
});

app.listen(5000, () => console.log("Listening Port 5000, Server Started..."));
