import { ajax } from "@/utils/request2";
import '@/mock/my/first.js'


// 商品列表
export function getMyFirst() {
    return ajax({
        url: "/getmyfirst",
    });
}