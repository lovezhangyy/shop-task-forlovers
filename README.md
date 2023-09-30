# loveShopping

项目描述：这个项目是基于[Rainbow-Cats-Personal-WeChat-MiniProgram](https://github.com/UxxHans/Rainbow-Cats-Personal-WeChat-MiniProgram)的代码改造而来，转变为网页端应用。它具备多人同时登陆、自定义任务、自定义用户信息、登录、注册、自定义商品和购买商品等功能,
如果是学生的话，可以申请Azure的免费服务器，项目将完全免费！如果你喜欢并感兴趣，请给我一个星星吧！感谢！

## 功能特性

- **多人同时登陆：** 允许多个用户同时访问系统，进行各种操作。

- **自定义任务：** 用户可以创建和管理自己的任务列表，以便更好地组织工作和生活。

- **自定义用户信息：** 提供用户个人信息管理功能，包括头像、昵称、联系信息等。

- **自定义商品：** 允许用户添加、编辑和删除商品信息，以便展示和销售。

- **登录和注册：** 用户可以通过注册账户和登录来访问系统。

- **查看商品，任务，用户信息：** 提供信息查看功能，包括商品、任务、用户信息等。

- **完成删除任务：** 用户可以选择完成自己创建给他人的任务或删除任务。
  
- **购买兑换商品：** 用户可以选择购买系统中的商品，并完成交易流程。

- **丝滑的操作：** 用户体验良好，操作简单

- **可靠使用：** 只有特定的用户才能进行特定用户的操作，保护了用户的使用安全

## 部署指南
1.先用vscode打包webSever项目，拿到dist里的文件，复制到宝塔，新建站点完成前端的部署
2.用idea打包sever项目，用maven打包项目，复制打包好的项目，用终端启动你的项目

nohup java -jar 【 打包好的项目文件名（jar结尾）】 > output.log 2>&1 &

tail -f output.log

3.用宝塔新建mysql数据库，
数据库名字命名为：webserver
用户名命名为：webserver
用户名密码为= webserver123
![image](https://github.com/Yanyutin753/loveShopping/assets/132346501/ae048adb-cea9-4ec9-aede-4222af18424f)
点击管理
![image](https://github.com/Yanyutin753/loveShopping/assets/132346501/82fc9390-104b-4d1a-b035-f8928bb7ac45)
点击SQL复制[文件](https://github.com/Yanyutin753/loveShopping/blob/main/MySql%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)里的内容





1. **克隆仓库：** 使用以下命令将项目克隆到你的服务器上：

