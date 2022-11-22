# Ubuntu18.04安装MySQL5.7.34

1. 下载MySQL
    
    [https://dev.mysql.com/downloads/mysql/5.7.html](https://dev.mysql.com/downloads/mysql/5.7.html) 选择ubuntu18的64位的tar包
    
    mysql-server_5.7.34-1ubuntu18.04_amd64.deb-bundle.tar*
    
2. 解压后，按如下顺序安装，代码块为额外依赖
    
    dpkg -i mysql-common_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i libmysqlclient20_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i libmysqlclient-dev_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i libmysqld-dev_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i libmysqlclient20_5.7.34-1ubuntu18.04_amd64.deb
    
    `wget [http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb](http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb)`
    
    `dpkg -i libmecab2_0.996-1.2ubuntu1_amd64.deb`
    
    dpkg -i mysql-community-client_5.7.34-1ubuntu18.04_amd64.deb
    
    `apt install libtinfo5`
    
    dpkg -i mysql-client_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i mysql-community-server_5.7.34-1ubuntu18.04_amd64.deb
    
    dpkg -i mysql-server_5.7.34-1ubuntu18.04_amd64.deb
    
3. 修改配置`vim /etc/mysql/mysql.conf.d/mysqld.conf`
    
    ```bash
    bind-address=127.0.0.1
    character-set-server=utf8
    ```
    
4. 重启MySQL服务`systemctl restart mysql.service`
