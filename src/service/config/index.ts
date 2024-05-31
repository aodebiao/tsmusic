import * as process from 'process'

export const BASE_URL = "http://codercba.com:9002"

export const TIMEOUT = 10000

console.log(process.env.NODE_ENV)



// 方法1 webpack根据环境使用不同的BASEURL
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://codercba.prod:9002'
// }
//
// export { BASE_URL }

// 方法2,根目录下创建两个配置文件
// .env.development
// .env.production
// 里面定义的变量名必须以及REACT_APP_开头
// 手动到react-app-env.d.ts中引入的react-scripts文件中加入对应的值,这里就会有提示了


console.log(process.env.REACT_APP_BASE_URL)
