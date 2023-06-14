import { ajax } from "@/utils/request2";
import '@/mock/my/peaddress.js'
// 添加商品
export function getPeAdd (data) {
    return ajax({
        url: "/getpeaddress",
        method: 'post',
        data
    });
}