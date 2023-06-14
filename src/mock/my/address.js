import Mock  from 'mockjs'
// console.log(111);
const data = Mock.mock({
    code:'200',
    message:'获取成功',
    data:{
        title:'一只特立独行的猪',
        price:16,
        address:'广东广州',
        desc:'想要生活过的去，就得当一头猪。',
        discout:'七折优惠',
    }
})

Mock.mock('/getmyaddress', 'post', () => {
    return data
})