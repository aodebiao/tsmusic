import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
    count:number,
    message:string,
    address:string,
    height:number
}

const initialState:IState = {
    count: 100,
    message: 'Hello Redux',
    address:'成都市',
    height:1.88
}



const counterSlice = createSlice({
  name: 'counter',
  initialState,
    // 属性必须要有
  reducers: {
      // changeMessageAction(state,{payload}){
      //       state.message = payload
      // }

      // 指定payload的类型
      changeMessageAction(state,action:PayloadAction<string>){
          state.message = action.payload
      }
  }
})

export const {changeMessageAction} = counterSlice.actions
export default counterSlice.reducer
