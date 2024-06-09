# React

## 配置别名,import App from '@/App'

- npm i -D @craco/craco
- npm i -D @craco/types

#### 项目根目录创建 `craco.config.js`文件

```
# craco.config.js
const path = require('path')

const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
    webpack:{
        alias:{
            "@":resolve('src')
        }
    }
}

```

```
# index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App'; # 别名引入，这里ts会报错，还需要在tsconfig.json中做相应配置

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

```
# tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".", # tsconfig.json文件所在目录 ，新增为了在ts中使用别名引入时不报错
    "paths": { # 新增为了在ts中使用别名引入时不报错
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": [
    "src"
  ]
}

```

别名配置结束

---

## 集成editorconfig

[官网](https://editorconfig.org/)

```

root = true

[*] # 表示所有文件适用
charset = utf-8
indent_style = space # 缩进网络(tab | space)
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型
trim_trailing_whitespace = true # 去除末尾的人任意空白字符
insert_final_newline = true # 始终在文件末尾插入新行

[*.md]
max_line_length = off
trim_trailing_whitespace = false


[*.{js,py,ts,html,jsx,tsx}]
charset = utf-8

# 4 space indentation
[*.{js,py,ts,html,jsx,tsx}]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab


indent_style = space
indent_size = 2

[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

editorconfig配置结束

---

### prettier配置

[官网](https://prettier.io/docs/en/install)

- npm i prettier -D # 开发时依赖
- 在项目要目录下创建 `.prettierrc` 文件

```
# .prettierrc
useTabs: false #使用 tab | space缩进，false表示space缩进
tabWidth: 2 # tab是空格的情况下，是几个空格，默认是2个
printWidth: 80 # 当行字符的长度
trailingComma: "none" # 在多行输入末尾是否添加一个,
semi: false
singleQuote: true

```

- 创建prettier忽略文件(类似.gitignore)

#### 修改package.json文件中的scripts

```
  "scripts": {
    "start": "craco  start",
    "build": "craco  build",
    "test": "craco  test",
    "eject": "craco   eject",
    "prettier": "prettier --write ."  # 新增
  },
```

prettier配置结束

---

### eslint配置（好像配置失败了）

#### 安装eslint

- npm i eslint -D

#### eslint init

- npx eslint --init
- npm i eslint-plugin-prettier eslint-config-prettier -D
```
# .eslintrc.js文件内容，老板
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {}
}

```


---

# 样式重置
- npm i normalize.css

## 配置less使用
- npm i craco-less
```
const path = require('path')
const CracoLess = require('craco-less') # +++

const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
    plugins:[
        {
            plugin:CracoLess   # ++++
        }
    ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}

```

# 路由
- npm i react-router-dom
> 注意在使用路由时会有隐式的any类型，ts检测会报错，需要在tsconfig.json 添加 `"noImplicitAny": false`

- 当配置了路由懒加载时，需要用Suspense包裹

- 多层嵌套路由懒加载的时候，最好都用<Suspense></Suspense>包裹，不然页面会闪烁(loading)

# redux
- npm install @reduxjs/toolkit react-redux
- 使用`configureStore`创建store
- 在根组件上使用`Provider`包裹并配置`store`属性

```
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


```

# axios
- npm i axios

# 分区开发和生产环境
## 方法一
```
 // 方法1 webpack根据环境使用不同的BASEURL
 let BASE_URL = ''
 if (process.env.NODE_ENV === 'development') {
   BASE_URL = 'http://codercba.com:9002'
 } else if (process.env.NODE_ENV === 'production') {
   BASE_URL = 'http://codercba.prod:9002'
 }

 export { BASE_URL }
```

## 方法二
```

// 方法2,项目根目录下创建两个配置文件
 .env.development
 .env.production
 上面两个配置文件中定义的变量名必须以及REACT_APP_开头
 手动到react-app-env.d.ts中引入的react-scripts文件中加入对应的值,这里就会有提示了
 declare namespace NodeJS {
    interface ProcessEnv{ 与源码包中的ProcessEnv同名，会对原有的进行扩展(合并)而不是覆盖
        readonly REACT_APP_BASE_URL:string
    }
}

 
// console.log(process.env)  就会输出环境变量，包括我们自己定义的，也会合并到process.env中


```

# 样式
- npm install styled-components -D
```
 style-components 样式混入，定义主题文件,src/assets/theme/index.ts,其中mixin中的内容是用于混入的
 利用 style-components 的ThemeProvider 进入混入，在对应的样式文件中使用
 
 
     .content {
        height: 100px;
        // 混入
        ${(props) => props.theme.mixin.wrapv1}
    }
    
```

# antd
- npm i antd
- npm i @ant-design/icons --save
- npm i classnames

# css结构伪类


### 利用promise数组和promise.all保证请求顺序与响应顺序一致，保证等待所有请示同时结束

```
        // 2.将三个结果都拿到，统一放到一个数组中管理
        // 保障一：获取到所有结果后，再dispatch
        // 保障二：获取到的结果一定是有正确顺序的
        const promises:Promise<any>[] = []
        for (let id of rankingIds) {
            // getPlayListDetail(id) 网络请求
            promises.push(getPlayListDetail(id))
        }
        Promise.all(promises).then(res => {
            // res是个数组，顺序和上面 promises.push(getPlayListDetail(id)) 一致
            console.log(res,'11111')
            const playlists = res.map(item => item.playlist)
            dispatch(changeRankingsAction(playlists))
        })
```

379
