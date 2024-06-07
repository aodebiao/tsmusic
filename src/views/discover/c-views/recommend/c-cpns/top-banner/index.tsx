import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode,ElementRef } from 'react'
import { Carousel } from 'antd'

import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/views/discover/c-views/recommend/c-cpns/top-banner/style'
import { appShallowEqual, useAppSelector } from '@/store'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {

    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
    const [currentIndex,setCurrentIndex] = useState<number>(0)

  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

    function handlePreClick(){
        bannerRef.current?.prev()
    }
    function handleNextClick(){
        bannerRef.current?.next()
    }
    function handleAfterChange(current:number){
        setCurrentIndex(current)
    }

    function handleBeforeChange(from:number,to:number){
        setTimeout(()=>{
            console.log('sleep')
        },600000)
        setCurrentIndex(-1)
    }

    let bgImageUrl
    if (currentIndex >= 0 && banners.length > 0){
        bgImageUrl = banners[currentIndex].imageUrl + "?imageView&blur=40x20"
        console.log(currentIndex,bgImageUrl)
    }




    return (
    <BannerWrapper style={{background:`url('${bgImageUrl}') center center / 6000px`}}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
              dots={false}
              effect={'fade'}
              autoplay
              ref={bannerRef}
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.title} />
                </div>
              )
            })}
          </Carousel>

           <ul className={'dots'}>
               {
                   banners.map((item,index) =>{
                       return (
                           <li key={item.imageUrl}>
                               <span className={classNames('item',{active:index === currentIndex})}></span>
                           </li>
                       )
                   })
               }
           </ul>
        </BannerLeft>


          <BannerRight></BannerRight>
          <BannerControl>
              <button className='btn left' onClick={handlePreClick}></button>
              <button className='btn right' onClick={handleNextClick}></button>
          </BannerControl>

      </div>

    </BannerWrapper>
  )
}

export default memo(TopBanner)
