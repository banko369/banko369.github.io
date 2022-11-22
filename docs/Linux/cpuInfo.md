# 查看CPU信息

## Ubuntu

`more /proc/cpuinfo |grep "physical id"|uniq|wc -l`

查看CPU核数

`more /proc/cpuinfo |grep "physical id"|grep "0"|wc -l`

每个cpu是几核（假设cpu配置相同）

`cat /proc/cpuinfo |grep "physical id"|sort |uniq|wc -l`

查看物理CPU的个数

`cat /proc/cpuinfo |grep "processor"|wc -l`

查看逻辑CPU的个数

`cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c`

逻辑CPU，型号
