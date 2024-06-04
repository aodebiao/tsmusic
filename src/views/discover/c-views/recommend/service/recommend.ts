import hyRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getBanners(){
    return hyRequest.get({
        url:'/banner',
        headers: new AxiosHeaders()
    })
}
