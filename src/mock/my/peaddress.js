import Mock  from 'mockjs'
// console.log(111);
const data = Mock.mock({
    code:'200',
    message:'获取成功',
    data:{
        name:'法外狂徒张三',
        phone:'178-666-8888',
        address:'广东省-广州市-天河区五山路234号',
        
    }
})

Mock.mock('/getpeaddress', 'post', () => {
    return data
})