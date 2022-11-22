# Seafile

init 初始化seafile配置文件夹
`seaf-cli init -d /home/www/seafile-config`

start 启动seafile服务
`seaf-cli start`

start 启动seafile服务
`seaf-cli start`

list-remote获取远程服务器的资料库列表，命令例子：
`seaf-cli list-remote -s [服务器地址] -u [用户名] -p [密码]`
`seaf-cli list-remote -s <http://192.168.2.8> -u tszhang@quantaeye.com -p zhangts123`

list 获取本地已同步的文件夹，命令例子：
`seaf-cli list`

download下载远程资料库，并且会默认的同步,命令例子：
`seaf-cli download -l [Library ID] -s [服务器地址] -d /home/www/sea -u [用户名] -p [密码]`

create 创建资料库，命令例子：
`seaf-cli create -n zhangsan -s [服务器地址] -u [用户名] -p [密码]`

sync把本地文件夹和远程资料库绑定同步,命令例子：
`seaf-cli sync -l [Library ID] -s [服务器地址] -d /home/www/sea/zhangsan/ -u [用户名] -p [密码]`
`seaf-cli sync -l e551e239-8512-4147-94a1-f49a6522cbba -s <http://192.168.2.8> -d /home/liuyang/Documents/calibration_data/calibration_hex_data/水质 -u tszhang@quantaeye.com -p zhangts123`

desync 解除同步，命令例子：
`seaf-cli desync -d /home/www/sea/zhangsan/`
`seaf-cli desync -d /home/liuyang/Documents/calibration_data/calibration_hex_data/水质`

stop 停止seafile服务
`seaf-cli stop`

status 查看状态
`seaf-cli status`
