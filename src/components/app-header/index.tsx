import React, { memo, useState } from 'react'
import type {FC,ReactNode} from 'react';
import { HeaderLeft, HeaderRight, HeaderWrapper } from '@/components/app-header/style'
import { Button, Input } from 'antd'

import HeaderTitles from '@/assets/data/header_titles.json'
import { Link, NavLink } from 'react-router-dom'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'

interface IProps {
    children?:ReactNode
}

const AppHeader:FC<IProps> = () => {
    // 定义组件内部的状态
    // const [currentIndex,setCurrentIndex] = useState<number>(0);


    const showItem = item => {
        if (item.type === 'path'){
            return <NavLink to={item.link} className={({isActive}) => {
                return isActive ? 'active' : undefined
            }}
            >{item.title}
            <i className='icon sprite_01'></i>
            </NavLink>
        }
        return <a href={item.link} target={"_blank"}>{item.title}</a>
    }


 return (
  <HeaderWrapper>
     <div className='content wrap-v1'>
        <HeaderLeft>
            <a href='#/' className='logo sprite_01'>
                网易云音乐
            </a>
            <div className='title-list'>
                {
                    HeaderTitles.map(item => {
                        return <div className='item' key={item.title}>
                            {showItem(item)}
                        </div>
                    })
                }
            </div>
        </HeaderLeft>
         <HeaderRight>

             <Input className='search' placeholder = '音乐/视频/电台/用户' prefix = {<SearchOutlined />} />
             <span className="center">创作者中心</span>
             <span className="login">登录</span>
         </HeaderRight>
     </div>
      <div className='divider'></div>
  </HeaderWrapper>
 );
};

export default memo(AppHeader)
