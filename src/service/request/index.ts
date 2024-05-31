import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { HYRequestConfig } from '@/service/request/type'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error
import { memo } from 'react'
import { meta } from 'eslint-plugin-prettier'


class HYRequest {
    instance:AxiosInstance

    constructor(config:HYRequestConfig) {
        this.instance = axios.create(config)
        // 全局的请求拦截器
        this.instance.interceptors.request.use(config => {
            return config
        },error => {
            return error
        })
        // 全局的响应拦截器
        this.instance.interceptors.response.use(res => {
            return res.data
        },error => {
            return error
        })


        // 针对特定的HYRequest实例添加对应的拦截器

        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccessFn,
            config.interceptors?.requestFailureFn,
        )

        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccessFn,
            config.interceptors?.responseFailureFn
        )

    }

    request<T =any>(config:HYRequestConfig<T>){
        // 单次请求的成功拦截
        if (config.interceptors?.requestSuccessFn){
            config = config.interceptors.requestSuccessFn(config)
        }
        return new Promise<T>((resolve, reject) => {
            this.instance.request<any,T>(config)
                .then(res => {
                // 单次响应成功拦截处理
                if (config.interceptors?.responseSuccessFn){
                    res = config.interceptors.responseSuccessFn(res)
                }
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }

    get<T =any>(config:HYRequestConfig<T>){
        return this.request({...config,method:"GET"})
    }
    post<T = any>(config:HYRequestConfig<T>){
        return this.request({...config,method:"POST"})
    }

    delete<T = any>(config:HYRequestConfig<T>){
        return this.request({...config,method:"DELETE"})
    }

    put<T =any>(config:HYRequestConfig<T>){
        return this.request({...config,method:"PUT"})
    }

    patch<T =any>(config:HYRequestConfig<T>){
        return this.request({...config,method:"PATCH"})
    }

}

export default HYRequest
