const { SET_GET_VIDEOS_REQUEST_STATUS } = require("../../types/videos")


function setGetVideoRequestStatus(status){
    return {type:SET_GET_VIDEOS_REQUEST_STATUS, payload:status}
}

export default setGetVideoRequestStatus;