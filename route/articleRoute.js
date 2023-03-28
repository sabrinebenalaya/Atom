const express = require("express");
const {
    getAllArticles,
    deleteArticle,
    updateArticle,
    getOneArticle,
    
    createArticle,
    searchByName,
} = require("../controllers/articleController.js");
const router = express.Router();
router.get("/article", getAllArticles);
router.get("/article/:id", getOneArticle);
router.delete("/article/:id", deleteArticle);
router.put("/article/:id", updateArticle);
router.post("/article", createArticle);
router.get("/searchArticle", searchByName);

module.exports = router;
