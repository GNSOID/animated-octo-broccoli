import { ajax } from "@/utils/request2";
import '@/mock/my/address.js'
// 添加商品
export function getMyAdd (data) {
    return ajax({
        url: "/getmyaddress",
        method: 'post',
        data
    });
}