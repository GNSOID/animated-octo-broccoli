import { ajax } from "@/utils/request2";
import '@/mock/my/want.js'
// 添加商品
export function getMyWant (data) {
    return ajax({
        url: "/getmywant",
        method: 'post',
        data
    });
}