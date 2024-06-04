import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '@/views/discover/c-views/recommend/service/recommend'

export const fetchBannerDataAction = createAsyncThunk('banner',async (arg,{dispatch,getState})=>{
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
})


interface IRecommendState {
    banners:any[]
}

const initialState:IRecommendState = {
    banners:[]
}

const recommendSlice = createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,action){
            state.banners = action.payload
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


export const {changeBannersAction} = recommendSlice.actions
export default recommendSlice.reducer
