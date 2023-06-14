import {ajax} from '@/utils/request2'
import '@/mock/register.js'
import '@/mock/sms.js'
export function setRegister(data){
    return ajax({
        url:'/setRegister',
        method:'post',
        data

    })
}

export function getUserSms(){
    return ajax({
        url:'/getUserSms',
    })
}
