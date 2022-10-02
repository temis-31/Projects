const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
const a = 12;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const aricleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Articles", aricleSchema);

// Request targetting all articles

app
  .route("/articles")

  .get((req, res) => {
    Article.find({}, (err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send("Successfully added a new article");
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany({}, (err, deleteResult) => {
      if (!err) {
        res.send("Successfully delted document");
      } else {
        res.send(console.log(err));
      }
    });
  });

// Request Targetting a specific articles

app
  .route("/articles/:articleTitle")

  .get((req, res) => {
    Article.findOne(
      { title: req.params.articleTitle },
      (err, foundArticles) => {
        if (!err) {
          res.send(foundArticles);
        } else {
          res.send("No articles matching that title was found");
        }
      }
    );
  })

  .put((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      (err) => {
        if (!err) {
          res.send("Successfully updated document.");
        } else {
          res.send(err);
        }
      }
    );
  })

  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: { title: req.body.title } },
      (err) => {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send("Successfully deleted article");
      } else {
        res.send(err);
      }
    });
  });

//Anything

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
