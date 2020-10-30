const { MARK_VIDEO_AS_WATCHED } = require("../../types/videos");

function setVideoAsWatched(id){
    return {type:MARK_VIDEO_AS_WATCHED, payload:id}
}

export default setVideoAsWatched