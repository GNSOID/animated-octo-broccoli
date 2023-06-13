import { ajax } from "@/utils/request2";
import '@/mock/kind/kind.js'


// 商品列表
export function getKind() {
    return ajax({
        url: "/getkind",
    });
}

// 添加商品
// export function getProAdd (data) {
//     return ajax({
//         url: "/getproadd",
//         method: 'post',
//         data
//     });
// }