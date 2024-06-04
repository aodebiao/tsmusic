import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/views/discover/c-views/recommend/c-cpns/top-banner/style'
import { appShallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.title} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>


          <BannerRight></BannerRight>
          <BannerControl></BannerControl>

      </div>

    </BannerWrapper>
  )
}

export default memo(TopBanner)
