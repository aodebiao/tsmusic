import React, { memo, FC, ReactNode, useState, useEffect } from 'react'
import { AxiosHeaders } from 'axios'
import hyRequest from '@/service'

interface IProps {
    children?: ReactNode
}


export interface IBannerData {
    imageUrl: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url: any
    exclusive: boolean
    scm: string
    bannerBizType: string
}



const Recommend: FC<IProps> = () => {
    const [banners, setBanners] = useState<IBannerData[]>([])
    useEffect(() => {
      hyRequest
        .get({
          url: '/banner',
          headers: new AxiosHeaders()
        })
        .then((res) => {
          setBanners(res.banners)
            console.log(res.banners)
        })
    }, [])

    // 测试网络请求
    return <div>
        {
            banners.map(item => {
                return (<div key={item.imageUrl}>
                    {item.imageUrl
                    }
                </div>)
            })
        }
    </div>
}


export default memo(Recommend)
