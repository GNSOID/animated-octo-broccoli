import Mock from 'mockjs'
const  data = {
    code:'200',
    message:'获取商品列表成功',
    data:[ 
     {
      price4:40,
      name4: "探索",
      new4: "7成新",
      addre4: "海南",
      img4: "https://tse3-mm.cn.bing.net/th/id/OIP-C.3rguo2e6Z-eLvK-tAMzKhQHaJl?w=160&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      price:20,
      name: "沉默的大多数",
      addre: "北京朝阳",
      new: "7成新",
      img: "https://ts1.cn.mm.bing.net/th/id/R-C.f26766a202c0d075c0b6121a3a4f2f1c?rik=dotLIe2Sq3LTJg&riu=http%3a%2f%2fimage.96192.com%2fproduct_pic%2f20201113%2f5665903.jpg&ehk=vAWhD1bw4vyc2AIc0UXf2eYkbiA1FypR34Czs5%2fGbrE%3d&risl=&pid=ImgRaw&r=0",
     },
     { 
      price:60,
      name: "人类大瘟疫",
      addre: "上海浦东",
      new: "8成新",
      img2: "https://img.alicdn.com/bao/uploaded/i4/594774941/O1CN01ahZEH81mN1YgY7GnX_!!0-item_pic.jpg",    },
     {
      price:32,
      name: "黄金时代",
      new: "6成新",
      addre: "山东青岛",
      img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3033218400,3818241178&os=4113282954,931634980&simid=4233118913,758826382&pn=7&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F53%2F28%2F5bc5298c2ce43_610.jpg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D", 
    },
     {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      img4: "https://tse3-mm.cn.bing.net/th/id/OIP-C.3rguo2e6Z-eLvK-tAMzKhQHaJl?w=160&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7"
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