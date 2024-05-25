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
