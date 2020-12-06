const { SET_SORT_CATEGORIA } = require("../../types/books");

function setBookSortCategoria(categoriaSort){
    return {type:SET_SORT_CATEGORIA, payload:categoriaSort}
}

export default setBookSortCategoria;