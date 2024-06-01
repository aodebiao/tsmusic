import HYRequest from '@/service/request'
import { BASE_URL, TIMEOUT } from '@/service/config'
import { config } from 'typescript-eslint'
import { AxiosHeaders } from 'axios'


const hyRequest = new HYRequest({
    baseURL:BASE_URL,
    timeout:TIMEOUT,
    interceptors:{
        requestSuccessFn:(config) => {

            return config;
        }
    },
    data: undefined,
    headers: new AxiosHeaders()
})

export default hyRequest
