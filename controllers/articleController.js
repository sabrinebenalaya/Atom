const Article = require("../models/article");

const getAllArticles = async (request, response) => {
  try {
    const res = await Article.find();
    response.status(200).json({ res });
  } catch (error) {
    response.status(500).json({ msg: "error on getting articles" });
  }
};

const getOneArticle = async (request, response) => {
  const id_article = request.params.id;
  try {
    const article = await Article.findById(id_article);
    if (article) {
      response.status(201).json({ article });
    } else {
      response.status(404).json({ msg: "article not found" });
    }
  } catch (error) {
    response.status(500).json({ msg: "operation getOneArticle is failed" });
  }
};
const deleteArticle = async (request, response) => {
  const id_article = request.params.id;
  try {
    const res = await Article.findByIdAndDelete(id_article);
    response.status(201).json({ msg: "article is deleted" });
  } catch (error) {
    response.status(500).json({ msg: "operation of delete article is failed" });
  }
};

const updateArticle = async (request, response) => {
  const id_article = request.params.id;
  const articleUpdate = request.body;
  try {
    await Article.findByIdAndUpdate(id_article, articleUpdate);
    const article = await Article.findById(id_article);
    response.status(200).json({ article });
  } catch (error) {
    response.status(500).json({ msg: "error on updating article" });
  }
};

const searchByName = async (request, response) => {
  const { articleName } = request.query;
  try {
    const article = await Article.findOne({ articleName :articleName });
    if (article) {
      response.status(200).json({ article });
    } else {
      response.status(404).json({ msg: "article not found" });
    }
  } catch (error) {
    response.status(500).json({ msg: "error on searching article" });
  }
};

const createArticle = async (request, response) => {
  const newArticle = request.body;
  console.log("new article=", newArticle);
  const articledate = new Date(request.body.articleDate)
  const article = new Article({
    articleName: newArticle.articleName,
    articleBody: newArticle.articleBody,
    articleDate:articledate,
  });
  console.log(" article=", article);
  try {
     await article.save();
    console.log(" article=", article);
    if (!article) {
      response.status(404).json({ msg: "article not added" });
    } else {
      response.status(200).json({ article });
    }
  } catch (error) {
    response.status(500).json({ msg: "Operation of addArticle is failed" });
  }
};
module.exports = {
  getAllArticles,
  deleteArticle,
  updateArticle,
  getOneArticle,
  createArticle,
  searchByName,
};
