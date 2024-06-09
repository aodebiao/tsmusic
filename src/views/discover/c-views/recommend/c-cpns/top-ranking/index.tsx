import React,{memo} from 'react';
import type {FC,ReactNode} from 'react';
import { RankingWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking/styled'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import { findAllByDisplayValue } from '@testing-library/react'
import TopRankingItem from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item'
interface IProps {
    children?:ReactNode
}

const TopRanking:FC<IProps> = () => {

    const {rankings} = useAppSelector(state =>({
      rankings:state.recommend.rankings
    }))

 return (
  <RankingWrapper>
   <AreaHeaderV1 title={'榜单'} moreLink={'/discover/ranking'}/>
    <div className="content">
        {
            rankings.map(item => {
                return <TopRankingItem itemData={item}  key={item.id}>
                    {item.name}
                </TopRankingItem>
            })
        }
    </div>
  </RankingWrapper>
 );
};

export default memo(TopRanking)
