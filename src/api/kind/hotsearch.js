import { ajax } from "@/utils/request2";
import '@/mock/kind/hotsearch.js'


// 商品列表
export function getHot() {
    return ajax({
        url: "/gethot",
    });
}