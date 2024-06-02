import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/store'
import { changeMessageAction } from '@/store/modules/counter'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

// 通过store中的getState函数，获取getState的函数类型，
// type GetStateFnType = typeof store.getState

// 获取到state的具体类型
// type IRootState = ReturnType<GetStateFnType>

function App() {

    // const {count,message} = useSelector((state:IRootState) => ({
    //     count:state.counter.count,
    //     message:state.counter.message
    // }),shallowEqual)



    const {count,message} = useAppSelector((state) => ({
        count:state.counter.count,
        message:state.counter.message
    }),appShallowEqual)

    const dispatch = useAppDispatch()
    const handleChangeMessage = () => {
        dispatch(changeMessageAction('golang'))
        console.log('test')
    }

  return <div className="App">
        <AppHeader/>
      <Suspense fallback={"loading..."}>
          <div className="main">
              {
                  useRoutes(routes)
              }
          </div>
      </Suspense>
      <AppFooter/>



      {/*<h2>当前计数:{count}</h2>*/}
      {/*<h2>当前消息:{message}</h2>*/}
      {/*<button onClick={handleChangeMessage}>修改message</button>*/}

  </div>
}


export default App
