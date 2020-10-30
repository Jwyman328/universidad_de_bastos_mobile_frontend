import {USER_LOGGED_OUT} from '../../types/user'

function logOutUser(){
    return {type:USER_LOGGED_OUT} 
}

export default logOutUser;