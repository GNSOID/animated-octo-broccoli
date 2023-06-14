import Mock  from 'mockjs'
// console.log(111);
const data = Mock.mock({
    code:'200',
    message:'获取成功',
    data:{
        title:'唐伯虎点秋香',
        price:40,
        address:'北京朝阳',
        desc:'风流倜傥，无敌霸王枪。',
        discout:'八折优惠',
    }
})

Mock.mock('/getmywant', 'post', () => {
    return data
})