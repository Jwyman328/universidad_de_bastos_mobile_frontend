const { SET_SORT_READ } = require("../../types/books");

function setBookSortRead(readSort){
    return {type:SET_SORT_READ, payload:readSort}
}

export default setBookSortRead;