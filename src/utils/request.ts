import axios from "axios"
import { AxiosInstance } from 'axios'
const instance :AxiosInstance = axios.create({
    baseURL: "/",
    timeout: 6000,
   
  });
interface IOptions{
  url:string
  method?:string
  data?:any
}
 export function ajax(options:IOptions){

    const{ url, method='get',data={ } } =options
   if(method.toUpperCase()==='GET'){
       return instance.get(url,{ params: data })
   }else{
       return instance.post(url,data)
   }

}

