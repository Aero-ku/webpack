# webpack
### 四个核心概念
entry: 规定当前模块入口  
output: 出口，规定输出路径  
plugins:插件  
loader:解析器

* entry有三种模式定义
1. 字符串，适用于当入口文件只有一个的时候
2. 对象，适用于当入口文件有多个的时候

-D 相当于 --save-dev

### webpack的工作流程
初始化 -> 编译 -> 输出

### 如何用shell语句修改配置环境 webpack 
1. webpack --mode=development 生产环境
2. webpack --mode=production  开发环境
如果在shell语句中修改mode方式的话，那么webpack会根据此次的环境进行打包，下一次仍然是根据webpack.config.js当中mode中所设定的环境进行打包。也就是说 shell语句修改配置环境是一次性的

### 在webpack.config.js中配置mode可永久设定当前环境

### 在自定义模块中编写功能模块代码，最后需要将这个自定义模块导出，方法为：当前模块代码中编写
module.exports = '自定义名称'

webpack实现监听方式 webpack --watch 可以让我们不必在每次修改代码之后都得webpack一下才能看到修改之后的效果, 但是如果修改配置环境时那么就必须得重新webpack才能生效
webpack --watch 只能监听能被打包的文件，不能监听配置自己的文件

### 在开发环境下使用服务器
* 下载 npm install webpack-dev-server -D
* 如果遇到 commond not find 说明当前环境不能识别该命令，可以将webpack-dev-server安装到全局解决 即 webpack-dev-server -g

### 配置服务器
webpack.config.js中 => devserver:{ 
  contentBase: 'out' // 规定默认进入窗口
  port:  *** //设定窗口号
}

### webpack-dev-server --hot  模块热替换
这种方式会将已更新的模块更换掉旧的模块，未经改变的模块不更新，也不会重新的进行打包处理。可以让文件编译的速度更快，因为编译的内容变少了。

### HtmlWebpackPlugin  用于单独导出html文件 使用前需先引入

#### 疑问：如果img和js，css等用到hash标识，那么在显示的时候要怎么办？找对应的文件名
 
### mini-css-extract-plugin -D 对css文件单独抽取打包 使用前需先引入
但是注意在使用该插件时，style-loader不再使用，改为对应引入该插件的loader

### webpack-config= *** 存在多个配置文件，根据多个配置文件进行打包.




