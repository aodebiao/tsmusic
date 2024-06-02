import React,{memo} from 'react';
import type {FC,ReactNode} from 'react';
import { HeaderLeft, HeaderRight, HeaderWrapper } from '@/components/app-header/style'

import { headerLinks } from '@/assets/data/local-data'
import { Link } from 'react-router-dom'

interface IProps {
    children?:ReactNode
}

const AppHeader:FC<IProps> = () => {

    const showItem = item => {
        if (item.type === 'path'){
            return <Link to={item.link}>item.title</Link>
        }
        return <a href={item.link}>{item.title}</a>
    }


 return (
  <HeaderWrapper>
     <div className='content wrap-v1'>
        <HeaderLeft>
            <a href='/' className='logo sprite_01'>
                网易云音乐
            </a>
            <div className='title-list'>
                {
                    headerLinks.map(item => {
                        return <div className={'item'} key={item.title}>
                            {showItem(item)}
                        </div>
                    })
                }
            </div>
        </HeaderLeft>
         <HeaderRight>

         </HeaderRight>
     </div>
  </HeaderWrapper>
 );
};

export default memo(AppHeader)
