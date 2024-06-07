import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '@/views/discover/c-views/recommend/service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banner',async (arg,{dispatch,getState})=>{
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendDataAction = createAsyncThunk('hotRecommend',async (arg,{dispatch,getState})=>{
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
})


interface IRecommendState {
    banners:any[],
    hotRecommends:any[]
}

const initialState:IRecommendState = {
    banners:[],
    hotRecommends:[]
}

const recommendSlice = createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,action){
            state.banners = action.payload
        },
        changeHotRecommendAction(state,action){
            state.hotRecommends = action.payload
        }
    },
    // extraReducers:(builder) => {
    //     builder
    //         .addCase(fetchBannerDataAction.pending,(state, action)=>{
    //         console.log('pending')
    //     })
    //         .addCase(fetchBannerDataAction.fulfilled,(state, action) =>{
    //         console.log('fulfilled')
    //             state.banners = action.payload
    //     })
    //         .addCase(fetchBannerDataAction.rejected,(state,action) =>{{
    //         console.log('rejected')
    //
    //     }})
    // }
})


export const {changeBannersAction,changeHotRecommendAction} = recommendSlice.actions
export default recommendSlice.reducer
