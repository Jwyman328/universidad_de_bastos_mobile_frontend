const { ADD_BOOKS } = require("../../types/books")


function setBookData(bookData){
    return {type:ADD_BOOKS, payload:bookData}
}

export default setBookData;