# 使用 create-react-app +typecript 搭建项目

## 建立项目

- 直接使用

```chef
create-react-app my-app --scripts-version=react-scripts-ts
```

::: danger
create-react-app 官网已经不推荐这个项目了，现在我们创建 typescript 项目
可以直接使用 npx create-react-app my-app --typescript 创建项目，如果失败请删除本地安装的 create-react-app 项目
:::
创建项目

- 添加自动提交格式化下项目

```chef
yarn add husky lint-staged prettier
```

husky 可以让我们在 npm 的 scripts 更好的使用 git 钩子
lint-staged 允许我们在 git 的 staged 的文件中执行 scripts
prettier 用来在提交的时候格式化 JavaScript 文件

- 在 scripts 中添加命令行

```js{2}
  "scripts": {
+   "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

- 下面我们在 package.json 中添加 lint-staged 字段

```js{1,2,3,4}
  "lint-staged":{
    "src/**/*.{js,jsx,json,css,ts,tsx}":[
      "prettier --single-quote --write",
      "git add"
    ]
  }
```

这里我们把 js,jsx,json,css,ts,tsx 添加到格式化里面

现在，当我们执行一次 commit 的时候，prettier 会自动格式化文件。
当然你也可以在你喜欢的编辑器里面，把 prettier 作为内置的格式化软件。
[prettier 编辑器配置](https://prettier.io/docs/en/webstorm.html)

- 在 webstorm 中 debug 项目

在 webstorm 中点击 run，然后选择 Edit Configuration ，然后点击+选择 javascript debug，
然后把http://localhost:3000 输入 URL，然后保存配置
