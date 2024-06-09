import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    getBanners,
    getHotRecommend,
    getNewAlbum,
    getPlayListDetail,
} from '@/views/discover/c-views/recommend/service/recommend'

export const fetchRecommendDataAction = createAsyncThunk(
    'fetchData',
    async (args, { dispatch }) => {
        getBanners().then((res) => {
            dispatch(changeBannersAction(res.banners))
        })
        getHotRecommend(8).then((res) => {
            dispatch(changeHotRecommendAction(res.result))
        })
        getNewAlbum().then((res) => {
            dispatch(changeAlbumAction(res.albums))
        })
    },
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
    'ranking',
    async (args, { dispatch, getState }) => {
        // 每个请示单独处理
        // for (const id of rankingIds) {
        //     getPlayListDetail(id).then((res) => {
        //         switch (id) {
        //             case 19723756:
        //                 console.log('飙升榜数据', res)
        //                 break
        //             case 3779629:
        //                 console.log('新歌榜数据', res)
        //                 break;
        //             case 2884035:
        //                 console.log('原创榜数据', res)
        //                 break
        //         }
        //     })
        // }

        // 2.将三个结果都拿到，统一放到一个数组中管理
        // 保障一：获取到所有结果后，再dispatch
        // 保障二：获取到的结果一定是有正确顺序的
        const promises:Promise<any>[] = []
        for (let id of rankingIds) {
            promises.push(getPlayListDetail(id))
        }
        Promise.all(promises).then(res => {
            // res是个数组，顺序和上面 promises.push(getPlayListDetail(id)) 一致
            console.log(res,'11111')
            const playlists = res.map(item => item.playlist)
            dispatch(changeRankingsAction(playlists))
        })

    },
)

interface IRecommendState {
    banners: any[]
    hotRecommends: any[]
    albums: any[]
    rankings: any[]
}

const initialState: IRecommendState = {
    banners: [],
    hotRecommends: [],
    albums: [],
    rankings: [],
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
        },
        changeRankingsAction(state,action){
            state.rankings = action.payload
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

export const {
    changeBannersAction,
    changeHotRecommendAction,
    changeAlbumAction,
    changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
