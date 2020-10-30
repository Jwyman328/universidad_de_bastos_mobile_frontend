const { SET_FECHA } = require("../../types/articles");

function setArticleDateSort(option){
    return {type:SET_FECHA, payload:{fecha: option}}
}

export default setArticleDateSort;