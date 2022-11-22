# npm

本地安装
`npm install <package>`

从指定源地址安装
`npm install <package> --registry=<sourcelink>`
官方源`https://registry.npmmirror.com`
淘宝源`https://registry.npm.taobao.org`

全局安装
`npm install -g <package>`

生成`package.json`
`npm init`

添加到 `package.json`的`dependencies`中
`npm install <package_name> --save`


添加到 `package.json's`的`devDependencies`中
`npm install <package_name> --save-dev`

安装指定版本的模块
`npm install <package>@<version>`

更新指定模块到最新版
`npm update <package>`

卸载指定模块
`npm uninstall <package>`

从`package.json`中删除依赖
`npm uninstall --save <package>`
`npm uninstall --save-dev <package>`

查看全局安装的所有模块
`npm list -g`

查看指定模块版本号
`npm list <package>`

查询指定模块
`npm search <package>`

查看指定命令详细帮助
`npm help <command>`

清空npm本地缓存，应对使用相同版本号发布新版本代码的人
`npm cache clear`
