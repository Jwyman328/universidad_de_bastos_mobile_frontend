const { SET_GET_ARTICLES_REQUEST_STATUS } = require("../../types/articles")



function setGetArticleRequestStatus(status){
    return {type:SET_GET_ARTICLES_REQUEST_STATUS, payload:status}
}

export default setGetArticleRequestStatus