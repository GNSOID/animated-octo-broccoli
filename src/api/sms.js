import {ajax} from '@/utils/request2.js'
import '@/mock/sms.js'


export function getUserSms(){
    return ajax({
        url:'/getUserSms',
    })
}
