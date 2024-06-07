const express = require("express");
const path = require("path");
const app = express();
const articles = require("./data/db.json");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/articles", (req, res) => {
  res.render("articles", { articles });
});

app.get("/articles/:pub", (req, res) => {
  const {pub} = req.params;
  const article = articles.find(article => article.pub === pub)

  if(article) {
    res.render("article", { article });
  } else {
    res.render("404");
  }
  
});


app.get("/*", (req, res, next) => {
  res.render("404");
});

const port = 4001;

app.listen(port, function () {
  console.log(`l'application ecoute sur le port ${port}`);
  console.log(`l'application est disponible sur http://localhost:${port}`);
});
