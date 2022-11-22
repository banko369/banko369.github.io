# command

安装软件包
`pip install <somepackage>`

从指定源地址安装软件包
`pip install -i <sourcelink> <somepackage>`

升级现有模块到最新版本必须显式地发出请求
`pip install --upgrade <somepackage>`

删除软件包
`pip uninstall <somepackage>`

显示软件包的信息
`pip show <somepackage>`

显示环境中安装的所有软件包
`pip list`

生成已安装包列表
`pip freeze > requirements.txt`

根据安装包列表批量安装
`pip install -r requirements.txt`

创建虚拟环境
`python -m venv .venv`

激活虚拟环境（Unix）
`source .venv/bin/activate`

激活虚拟环境（Windows）
`.venv\Scripts\activate.bat`
