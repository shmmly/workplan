# 使用create-react-app +typecript 搭建项目

## 建立项目

- 直接使用 
```chef
create-react-app my-app --scripts-version=react-scripts-ts
```
创建项目

- 添加自动提交格式化下项目
```chef
yarn add husky lint-staged prettier
```
husky 可以让我们在npm的scripts更好的使用git钩子
lint-staged 允许我们在git的staged的文件中执行scripts
prettier 用来在提交的时候格式化JavaScript文件

- 在scripts中添加命令行
``` js{2}
  "scripts": {
+   "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
- 下面我们在package.json中添加lint-staged 字段
``` js{1,2,3,4}
  "lint-staged":{
    "src/**/*.{js,jsx,json,css,ts,tsx}":[
      "prettier --single-quote --write",
      "git add"
    ]
  }
```
这里我们把js,jsx,json,css,ts,tsx 添加到格式化里面

现在，当我们执行一次commit的时候，prettier会自动格式化文件。
当然你也可以在你喜欢的编辑器里面，把prettier作为内置的格式化软件。
[prettier编辑器配置](https://prettier.io/docs/en/webstorm.html)

- 在webstorm中debug项目

在webstorm中点击run，然后选择Edit Configuration ，然后点击+选择javascript debug，
然后把http://localhost:3000 输入URL，然后保存配置