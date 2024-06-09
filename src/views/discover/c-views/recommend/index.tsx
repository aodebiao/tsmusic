import React, { memo, FC, ReactNode, useState, useEffect } from 'react'
import { AxiosHeaders } from 'axios'
import hyRequest from '@/service'
import { useAppDispatch } from '@/store'
import {
    fetchRankingDataAction, fetchRecommendDataAction,
} from '@/views/discover/c-views/recommend/store/recommend'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/new-album'
import TopRanking from '@/views/discover/c-views/recommend/c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起action,获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
            <TopRanking/>
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
