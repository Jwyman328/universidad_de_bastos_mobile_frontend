//setLoginData

import {SET_LOGIN_DATA} from '../../types/user'

function setLoginData(username,token){ 
    return {type:SET_LOGIN_DATA, payload:{username:username, token:token}} 
}

export default setLoginData