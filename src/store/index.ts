import { configureStore } from '@reduxjs/toolkit'
import counter from '@/store/modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'


// 创建store
const store = configureStore({
    reducer:{
        counter:counter
    }
})

type GetStateFnType =typeof store.getState
type IRootState = ReturnType<GetStateFnType>

type DispatchType = typeof store.dispatch
type IRootDispatch = ReturnType<DispatchType>



// 基于原有的useSelector，定义一个新的，并添加类型约束，引入的时候 就能自动推导state类型了
// 主要是useAppSelector,下面这两个只是为了统一导入
export const useAppSelector:TypedUseSelectorHook<IRootState> = useSelector

// useDispatch()返回的是一个dispatch函数，所以这里只需要获取函数类型
export const useAppDispatch:()=> DispatchType= useDispatch

export const appShallowEqual = shallowEqual
export default store
