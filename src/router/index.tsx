
import React from 'react'
import { Navigate, RouteObject, useNavigate } from 'react-router-dom'
import discover from '@/views/discover'


// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'


// 分包，懒加载，后面打包的时候 ，会被打包到不同的js文件中
const Discover = React.lazy(()=> import('@/views/discover'))
const Recommend = React.lazy(()=>import('@/views/discover/c-views/recommend'))
const Ranking = React.lazy(()=>import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(()=>import('@/views/discover/c-views/songs'))
const Djradio = React.lazy(()=>import('@/views/discover/c-views/djradio'))
const Album = React.lazy(()=>import('@/views/discover/c-views/album'))
const Artist = React.lazy(()=>import('@/views/discover/c-views/artist'))

const Mine = React.lazy(()=> import('@/views/mine'))
const Download = React.lazy(()=>import('@/views/download'))
const Focus = React.lazy(()=>import('@/views/focus'))


const routes:RouteObject[] = [
    {
      path:'/',
        // 相当于重定向
      element:<Navigate to='/discover'/>
    },
    {
        path:'/discover',
        // 在ts中不能 这样写 element:<Discover />
        element:<Discover/>,
        // 二级路由
        children:[

            {
                path:'/discover',
                element:<Navigate to={'/discover/recommend'}/>
            },
            {
                path:'/discover/recommend',
                element:<Recommend/>
            },
            {
                path:'/discover/djradio',
                element:<Djradio/>
            },
            {
                path:'/discover/album',
                element:<Album/>
            },
            {
                path:'/discover/songs',
                element:<Songs/>
            },
            {
                path:'/discover/ranking',
                element:<Ranking/>
            },
            {
                path:'/discover/artist',
                element:<Artist/>
            }

        ]
    },
    {
        path:'/mine',
        element:<Mine/>
    },
    {
        path:'/focus',
        element:<Focus/>
    },
    {
        path:'/download',
        element:<Download/>
    }


]


export default routes



