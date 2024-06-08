import React, { ElementRef, memo, useRef } from 'react'
import type {FC,ReactNode} from 'react';
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'
interface IProps {
    children?:ReactNode
}

const NewAlbum:FC<IProps> = () => {


    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    const {albums} = useAppSelector(state => ({
        albums:state.recommend.albums
    }))


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
                        [0,1].map(item => {
                            return <div className='album-list' key={item}>
                                {
                                    albums.slice(item*5,(item+1) * 5).map(album => {
                                        return <NewAlbumItem key={album.id} itemData={album}/>
                                    })
                                }
                            </div>
                        })
                    }
                </Carousel>
          </div>
          <button onClick={handleNextClick} className='arrow arrow-right sprite_02'></button>
      </div>
  </AlbumWrapper>
 );
};

export default  memo(NewAlbum)
