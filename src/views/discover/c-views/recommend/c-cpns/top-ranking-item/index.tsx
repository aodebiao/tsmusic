import React,{memo} from 'react';
import type {FC,ReactNode} from 'react';
import { RankingItemWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item/styled'
import { getImageUrlSize } from '@/utils/format'
interface IProps {
    children?:ReactNode
    itemData:any
}

const TopRankingItem:FC<IProps> = (props) => {
    const {itemData} = props
    const {tracks = []} = itemData
 return (
  <RankingItemWrapper>
      <div className="header">
          <div className="image">
              <img src={getImageUrlSize(itemData.coverImgUrl,80)} alt="" />
              <a href="" className='cover sprite_cover'></a>
          </div>
          <div className="info">
              <div className="name">{itemData.name}</div>
              <div>
                  <button className='sprite_02 btn play'></button>
                  <button className='sprite_02 btn favor'></button>

              </div>
          </div>
      </div>
      <div className="list">
          {
              tracks.slice(0,10).map((item:any,index:number) =>{
                  return <div className='item' key={item.id}>
                      <div className="index">{index+1}</div>
                      <div className="info">
                          <div className="name">{item.name}</div>
                          <div className="operator">
                              <button className="btn sprite_02 play"></button>
                              <button className="btn sprite_icon2 add"></button>
                              <button className="btn sprite_02 favor"></button>
                          </div>
                      </div>
                  </div>
              })
          }
      </div>
      <div className="footer">
          <a href="#/discover/ranking">查看全部&gt;</a>
      </div>
  </RankingItemWrapper>
 );
};

export default memo(TopRankingItem)
