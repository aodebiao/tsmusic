import hyRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getBanners(){
    return hyRequest.get({
        url:'/banner',
        headers: new AxiosHeaders()
    })
}


export function getHotRecommend(limit = 30){
    return hyRequest.get({
        url:'/personalized',
        params:{
            limit,
        },
        headers:new AxiosHeaders()
    })
}

export function getNewAlbum(){
    return hyRequest.get({
        url:'/album/list',
        headers:new AxiosHeaders()
    })
}
