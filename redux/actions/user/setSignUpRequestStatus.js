import {SET_SIGNUP_REQUEST_STATUS} from '../../types/user'

function setSignUpRequestStatus(status){
    return {type:SET_SIGNUP_REQUEST_STATUS, payload:status}
}

export default setSignUpRequestStatus;