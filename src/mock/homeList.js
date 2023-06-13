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
      img1: "https://ts1.cn.mm.bing.net/th/id/R-C.f26766a202c0d075c0b6121a3a4f2f1c?rik=dotLIe2Sq3LTJg&riu=http%3a%2f%2fimage.96192.com%2fproduct_pic%2f20201113%2f5665903.jpg&ehk=vAWhD1bw4vyc2AIc0UXf2eYkbiA1FypR34Czs5%2fGbrE%3d&risl=&pid=ImgRaw&r=0",
    },
     { 
      price2:60,
      name2: "人类大瘟疫",
      addre2: "上海浦东",
      new2: "8成新",
      img2: "https://img.alicdn.com/bao/uploaded/i4/594774941/O1CN01ahZEH81mN1YgY7GnX_!!0-item_pic.jpg",
    },
     {
      price3:32,
      name3: "黄金时代",
      new3: "6成新",
      addre3: "山东青岛",
      img3: "https://ts1.cn.mm.bing.net/th/id/R-C.09212e7cf76a1b1693e54a6611631ba0?rik=nm6FOhtnzF01LA&riu=http%3a%2f%2fimg.geek-docs.com%2freading%2fliterature%2fthe-golden-age%2fthe-golden-age-thumb.jpg&ehk=KWesgaGzn%2f7XwzXgiqTE9752YEq5zVDMeUEmFFhx2oE%3d&risl=&pid=ImgRaw&r=0", 
    },
     {
      price4:40,
      name4: "探索",
      new4: "7成新",
      addre4: "海南",
      img4: "https://tse3-mm.cn.bing.net/th/id/OIP-C.3rguo2e6Z-eLvK-tAMzKhQHaJl?w=160&h=207&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      price:20,
      name: "沉默的大多数",
      addre: "北京朝阳",
      new: "7成新",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3702751410,1445414065&os=2414110904,3476385870&simid=3702751410,1445414065&pn=1&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F19%2F25%2F59052d48e5843_610.jpg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D",
    },
     { 
      price:60,
      name: "人类大瘟疫",
      addre: "上海浦东",
      new: "8成新",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=135837507,851407289&os=1019944796,49545302&simid=135837507,851407289&pn=0&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F09%2F02%2Fc47a5eea35a8f2246a7db66bf32bd73c.jpg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D",
    },
     {
      price:32,
      name: "黄金时代",
      new: "6成新",
      addre: "山东青岛",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3033218400,3818241178&os=4113282954,931634980&simid=4233118913,758826382&pn=7&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fbpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F53%2F28%2F5bc5298c2ce43_610.jpg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D", 
    },
     {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
    },
    {
      price:40,
      name: "探索",
      new: "7成新",
      addre: "海南",
      // img: "https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E4%B9%A6%E5%8D%A1%E9%80%9A%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3808020193,896989680&os=2106411512,1622574357&simid=4248987223,720946089&pn=14&rn=1&di=7214885350303334401&ln=1959&fr=&fmq=1686574541195_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=96&objurl=https%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F08%2F02%2F5bc68a4265b389d12e5498ecd57f2311.jpg%2521%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDYsNCw1LDMsMiw4LDcsOQ%3D%3D"
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