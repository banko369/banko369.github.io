# Xtrabackup

## 安装

### Ubuntu

1. 下载安装包
    
    `wget [https://repo.percona.com/apt/percona-release_latest.$](https://repo.percona.com/apt/percona-release_latest.$)(lsb_release -sc)_all.deb`
    
2. 安装
    
    `dpkg -i percona-release_latest.$(lsb_release -sc)_all.deb`
    
3. Enable the repository
    
    `percona-release enable-only tools release`
    
4. Update the local cache
    
    `apt update`
    
5. Install
    
    `sudo apt install percona-xtrabackup-24`
    
6. Make compressed backups
    
    `sudo apt install qpress`
    

### CentOS

1. `yum install [https://repo.percona.com/yum/percona-release-latest.noarch.rpm](https://repo.percona.com/yum/percona-release-latest.noarch.rpm)`
2. `yum list | grep percona`
3. `percona-release enable-only tools release`
4. `yum install percona-xtrabackup-24`
5. `yum install qpress`


## 备份

创建备份用户：

`CREATE USER 'backup'@'localhost' IDENTIFIED BY 'backQuantaEye_123';`

`GRANT all ON *.* TO 'backup'@'localhost';`

`FLUSH PRIVILEGES;`

### 全量备份

```bash
#!/bin/bash
backupdir=/data/backup/mysql/full/
date=$(date +%Y%m%d)
mkdir -p /data/backup/mysql/full/$date
sudo xtrabackup  --user=backup --password=backQuantaEye_123 --backup --target-dir=/data/backup/mysql/full/$date --datadir=/data/mysql/
#删除一个月以前的数据
find  $backupdir -maxdepth 1 -mtime  +60  -type d  -exec rm -rf {} \;
```

`sudo cat full/{date}/xtrabackup_checkpoints`

#### 数据恢复：

1. 停止数据库
    
    `sudo systemctl stop mysql.service`
    
2. 删除之前数据目录和日志文件
    
    `sudo rm -rf /var/lib/mysql`
    
3. 准备恢复
    
    `sudo xtrabackup --prepare --target-dir=/data/backup/mysql/full/{date}/`
    
4. 恢复数据
    
    `sudo xtrabackup --copy-back --target-dir=/data/backup/mysql/full/{date}/`
    
5. 修改数据目录属主属组
    
    `chown -R mysql:mysql /var/lib/mysql`
    
6. 启动mysql
    
    `sudo systemctl start mysql.service`
    
7. 查看数据是否恢复正常

### 增量备份

```bash
#!/bin/bash
date=$(date +%Y%m%d)
dir=$(cd /data/backup/mysql/full && ls -lt|sed -n '2p'|awk '{print $9}')
mkdir -p /data/backup/mysql/increment/$date
sudo xtrabackup --user=backup --password=backQuantaEye_123 --backup --target-dir=/data/backup/mysql/increment/$date --incremental-basedir=/data/backup/mysql/full/$dir --datadir=/data/mysql/
#删除一个月以前的数据
find   /data/backup/mysql/increment/ -maxdepth 1 -mtime  +30  -type d  -exec rm -rf {} \;
```

`sudo cat increment/{date}/xtrabackup_checkpoints`

#### 数据恢复：

1. 停止数据库
    
    `sudo systemctl stop mysql.service`
    
2. 删除之前数据目录和日志文件
    
    `sudo rm -rf /var/lib/mysql`
    
3. 准备恢复,增量备份刷入全量备份中
    
    `sudo xtrabackup --user=backup --password=backQuantaEye_123 --prepare --apply-log-only --target-dir=/data/backup/mysql/full/{date}`
    
    `sudo xtrabackup --user=backup --password=backQuantaEye_123 --prepare --apply-log-only --target-dir=/data/backup/mysql/full/{date} --incremental-dir=/data/backup/mysql/increment/{date1}`
    
    `sudo xtrabackup --user=backup --password=backQuantaEye_123 --prepare --target-dir=/data/backup/mysql/full/{date} --incremental-dir=/data/backup/mysql/increment/{date2}`
    
4. 恢复数据
    
    `sudo xtrabackup --user=backup --password=backQuantaeye_123 --copy-back --target-dir=/data/backup/mysql/full/{date}/`
    
5. 修改数据目录属主属组
    
    `chown -R mysql:mysql /var/lib/mysql`
    
6. 启动mysql
    
    `sudo systemctl start mysql.service`
    
7. 查看数据是否恢复正常
