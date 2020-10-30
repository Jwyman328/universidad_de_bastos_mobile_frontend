const { ADD_VIDEOS } = require("../../types/videos")


function setVideoData(videos){
    return {type:ADD_VIDEOS, payload:videos}
}

export default setVideoData