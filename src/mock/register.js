// var Mock = require('mockjs')
import{ Mock } from 'mockjs'

// console.log(data);
Mock.mock('/setRegister','post',(config)=>{
    console.log(JSON.parse(config.body));
     return{
        code: "200",
        message:"继续注册"
     }
})                                                     