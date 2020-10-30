import {SET_BOOK_READ_STATUS} from '../../types/books'

function setBookAsUnRead(bookId){
    return {type:SET_BOOK_READ_STATUS, payload:{isRead:false,bookId:bookId}}
}

export default setBookAsUnRead