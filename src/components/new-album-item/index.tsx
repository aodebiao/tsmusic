import React,{memo} from 'react';
import type {FC,ReactNode} from 'react';
import { AlbumItemWrapper } from '@/components/new-album-item/style'
interface IProps {
    children?:ReactNode
    itemData:any
}

const NewAlbumItem:FC<IProps> = (props) => {
    const {itemData} = props


 return (
  <AlbumItemWrapper>
      {itemData.name}
  </AlbumItemWrapper>
 );
};

export default memo(NewAlbumItem)
