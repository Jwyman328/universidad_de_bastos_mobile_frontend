const { ADD_ARTICLES } = require("../../types/articles");


function setArticleData(allArticles){
    return {type:ADD_ARTICLES, payload:allArticles}
}

export default setArticleData;