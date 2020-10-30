import {SET_LOGIN_REQUEST_STATUS} from '../../types/user'

function setLoginRequestStatus(status){
    return {type:SET_LOGIN_REQUEST_STATUS, payload:status}
}

export default setLoginRequestStatus