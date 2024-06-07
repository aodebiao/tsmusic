import React, { memo, FC, ReactNode } from 'react'
import { MenuItemWrapper } from '@/components/songs-item/style'

interface IProps {
    children?: ReactNode
    itemData?:any
}

const SongMenuItem: FC<IProps> = (props) => {
    const {itemData} = props
    return (
      <MenuItemWrapper>
        <div className="top">
          <img src={itemData.picUrl} alt={itemData.title} />
            <div className="cover sprite_covor">
                <div className="info sprite_covor">
                    <span>
                        <i className="sprite_icon headset"></i>
                        <span className="count">{itemData.playCount}</span>
                    </span>
                    <i className="sprite_icon play"></i>
                </div>
            </div>
        </div>
        <div className="bottom"></div>
      </MenuItemWrapper>
    )
}




export default memo(SongMenuItem)
