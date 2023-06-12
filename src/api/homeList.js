import { ajax } from '@/utils/request2.js'
import '@/mock/homeList.js'


export function getHomeList(){
    return ajax({
        url:'/gethomelist',
    })
}