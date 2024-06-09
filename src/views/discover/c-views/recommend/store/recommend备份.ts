import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum
} from '@/views/discover/c-views/recommend/service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (arg, { dispatch, getState }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchHotRecommendDataAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch, getState }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumAction = createAsyncThunk(
  'album',
  async (args, { dispatch, getState }) => {
    const res = await getNewAlbum()
    console.log(res, 'album')
    dispatch(changeAlbumAction(res.albums))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  albums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  albums: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, action) {
      state.banners = action.payload
    },
    changeHotRecommendAction(state, action) {
      state.hotRecommends = action.payload
    },
    changeAlbumAction(state, action) {
      state.albums = action.payload
    }
  }
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

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeAlbumAction
} = recommendSlice.actions
export default recommendSlice.reducer
