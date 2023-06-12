import {ajax} from '@/utils/request'
import '@/mock/register.js'
export function setRegister(data){
    return ajax({
        url:'/setRegister',
        method:'post',
        data

    })
}