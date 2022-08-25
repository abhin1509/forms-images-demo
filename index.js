const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/myget", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/mypost", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/mygetform", (req, res) => {
  res.render("getform");
});

app.get("/mypostform", (req, res) => {
  res.render("postform");
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
