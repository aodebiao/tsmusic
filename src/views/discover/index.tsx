import React, { memo, Suspense } from 'react'
import type {ReactNode,FC} from 'react'
import { Link, Outlet, useRoutes } from 'react-router-dom'
import routes from '@/router'
import NavBar from '@/views/discover/c-cpns/nav-bar'

interface IProps  {
    children?:ReactNode
}
const Discover:FC<IProps> = ()=>{
      return  <div>
          <div>
            <NavBar/>


          </div>
          <Suspense fallback={"llllllllll"}>
              <Outlet/>
          </Suspense>
      </div>
}

export default memo(Discover)
