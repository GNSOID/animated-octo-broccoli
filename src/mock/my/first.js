import Mock  from 'mockjs'
// console.log(111);
const data = Mock.mock({
    code:'200',
    message:'获取成功',
    data:['账户安全','客服中心','平台规则','产品详情','低价处理','商品数据','平台规则','平台规则','平台规则']
})

Mock.mock('/getmyfirst', 'get', () => {
    return data
})