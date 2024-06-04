import React, { memo, FC, ReactNode, useState, useEffect } from 'react'
import { AxiosHeaders } from 'axios'
import hyRequest from '@/service'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/views/discover/c-views/recommend/store/recommend'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'

interface IProps {
    children?: ReactNode
}


const Recommend: FC<IProps> = () => {
    // 发起action,获取数据
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBannerDataAction())
    }, [])
    return <div>

        <TopBanner/>
        Recommend
    </div>
}


export default memo(Recommend)
