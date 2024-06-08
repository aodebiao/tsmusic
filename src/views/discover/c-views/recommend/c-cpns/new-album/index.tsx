import React, { ElementRef, memo, useRef } from 'react'
import type {FC,ReactNode} from 'react';
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
interface IProps {
    children?:ReactNode
}

const NewAlbum:FC<IProps> = () => {

    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    // 事件处理
    function handlePreClick(){
        console.log('上一次')
        bannerRef.current?.prev()
    }

    function handleNextClick(){
        bannerRef.current?.next()
    }

 return (
  <AlbumWrapper>
   <AreaHeaderV1 title={'新碟上架'} moreLink={'/discover/album'}/>
      <div className="content">
          <button onClick={handlePreClick}  className='arrow arrow-left sprite_02'></button>
          <div className="banner">
                <Carousel ref={bannerRef} dots={false} speed={2000}>
                    {
                        [1,2].map(item => {
                            return <h1 key={item}>{item}</h1>
                        })
                    }
                </Carousel>
          </div>
          <button onClick={handleNextClick} className='arrow arrow-right sprite_02'></button>
      </div>
  </AlbumWrapper>
 );
};

export default memo(NewAlbum)
