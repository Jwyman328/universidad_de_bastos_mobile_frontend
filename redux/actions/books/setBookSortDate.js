const { SET_SORT_DATE } = require("../../types/books");

function setBookSortDate(dateSort){
    return {type:SET_SORT_DATE, payload:dateSort}
}

export default setBookSortDate;