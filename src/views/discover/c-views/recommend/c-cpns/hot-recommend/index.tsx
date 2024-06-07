

import React ,{memo}from 'react'
import type {ReactNode,FC} from 'react'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-recommend/style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { appShallowEqual, useAppSelector } from '@/store'
import SongMenuItem from '@/components/songs-item'

interface IProps  {
    children?:ReactNode
}
const HotRecommend:FC<IProps> = ()=>{
    const {hotRecommends} = useAppSelector(state =>({
        hotRecommends:state.recommend.hotRecommends
    }),appShallowEqual)
      return <RecommendWrapper>
          <AreaHeaderV1 title={'热门推荐'} keywords={['华语','流行','欧美','经典','嘿嘿','摇滚']} moreLink={'/discover/songs'}/>

          <div className='recommend-list'>
              {
                  hotRecommends.map(item => {
                      return <SongMenuItem itemData={item} key={item.id}>
                          {item.name}
                      </SongMenuItem>
                  })
              }
          </div>
    </RecommendWrapper>
}

export default memo(HotRecommend)
