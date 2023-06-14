import Mock, { mock } from 'mockjs'
const data = Mock.mock({
    'data|1-10': [{
        'id|+1': 1
    }]
})
// console.log(data);
Mock.mock('/gethomelist','post',(config)=>{
    // console.log('登录页面');
    // console.log(JSON.parse(config.body));
    data.data.push(JSON.parse(config.body))
    return data
})


