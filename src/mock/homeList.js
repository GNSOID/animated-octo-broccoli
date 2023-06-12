import Mock from 'mockjs'
const  data = {
    code:'200',
    message:'获取商品列表成功',
    data:[ 
    {
      price1:20,
      name1: "沉默的大多数",
      addre1: "北京朝阳",
      new1: "7成新",
      // img1: "../imgs/20.jpg",
    },
     { 
      price2:60,
      name2: "人类大瘟疫",
      addre2: "上海浦东",
      new2: "8成新",
      // img2: "../imgs/23.jpg",
    },
     {
      price3:32,
      name3: "黄金时代",
      new3: "6成新",
      addre3: "山东青岛",
      // img3: "../imgs/33.jpg", 
    },
     {
      price4:40,
      name4: "探索",
      new4: "7成新",
      addre4: "海南",
      // img4: "../imgs/29.jpg"
    },
  ]
      
}
// console.log(data);
Mock.mock('/gethomelist','get',()=>{
    console.log('登录页面');
    // console.log(JSON.parse(config.body));
    // data.data.push(JSON.parse(config.body))
    return data
})