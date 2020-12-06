import { SET_GET_BOOK_REQUEST_STATUS } from "../../types/books";

function setGetBookRequestStatus(status){
    return {type:SET_GET_BOOK_REQUEST_STATUS, payload:status}
}

export default setGetBookRequestStatus;