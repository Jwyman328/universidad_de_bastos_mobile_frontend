import {SET_BOOK_READ_STATUS} from '../../types/books'

function setBookAsRead(bookId){
    return {type:SET_BOOK_READ_STATUS, payload:{isRead:true,bookId:bookId}}
}

export default setBookAsRead