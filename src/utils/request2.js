import axios from "axios"
const instance = axios.create({
    baseURL: "/",
    timeout: 600000,
   
  });

 export function ajax(options){
    const{ url, method='get',data={ } } =options
   if(method.toUpperCase()==='GET'){
       return instance.get(url,{ params: data })
   }else{
       return instance.post(url,data)
   }

}

