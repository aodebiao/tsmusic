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

export function getNewAlbum(limit = 10){
    return hyRequest.get({
        url:'/album/newest',
        params:{
          limit
        },
        headers:new AxiosHeaders()
    })
}


export function getPlayListDetail(id:number){
    return hyRequest.get({
        url:'/playlist/detail',
        params:{
            id
        },
        headers:new AxiosHeaders()
    })
}
