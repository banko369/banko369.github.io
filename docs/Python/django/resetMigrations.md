# 重置migrations

## 不需要原有数据库数据

1. 首先删除数据库中的相关APP下的数据表
2. 然后删除APP下的migration模块中的所有 文件，[除了init.py](http://xn--init-ps5fn029a.py/) 文件
3. 执行下面的命令
    
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
    

## 保留现有数据库数据，重建migrations

1. 首先要保证,目前的migration文件和数据库是同步的，通过执行
    
    ```bash
    python manage.py makemigrations
    ```
    
2. 查看当前项目下所有APP对应的已经生效的（已经成功执行的）migration文件，命令如下:
    
    ```bash
    python manage.py showmigrations
    ```
    
    如下所示：
    
    ```bash
    auth
     [X] 0001_initial
     [X] 0002_alter_permission_name_max_length
     [X] 0003_alter_user_email_max_length
     [X] 0004_alter_user_username_opts
     [X] 0005_alter_user_last_login_null
     [X] 0006_require_contenttypes_0002
     [X] 0007_alter_validators_add_error_messages
     [X] 0008_alter_user_username_max_length
     [X] 0009_alter_user_last_name_max_length
     [X] 0010_alter_group_name_max_length
     [X] 0011_update_proxy_permissions
     [X] 0012_alter_user_first_name_max_length
    captcha
     [X] 0001_initial
    contenttypes
     [X] 0001_initial
     [X] 0002_remove_content_type_name
    oa
     [X] 0001_initial
     [X] 0002_alter_project_status
     [X] 0003_remove_demand_remark
     [X] 0004_remove_task_remark
     [X] 0005_auto_20221010_1456
     [X] 0006_auto_20221010_1515
     [X] 0007_auto_20221011_1446
     [X] 0008_auto_20221014_1116
    sessions
     [X] 0001_initial
    system
     [X] 0001_initial
    ```
    
3. 重置你的APP的操作，使它们恢复到没有执行的状态，这里注意一下fake前面的符号，是两个“-”，另外，explore 是APP的名字
    
    ```bash
    python manage.py migrate --fake oa zero
    ```
    
    重装完后进行检查：
    
    ```bash
    python manage.py showmigrations
    ```
    
    如果是要重置的APP前面[x]变成了[ ]则操作正确：
    
    ```bash
    auth
     [X] 0001_initial
     [X] 0002_alter_permission_name_max_length
     [X] 0003_alter_user_email_max_length
     [X] 0004_alter_user_username_opts
     [X] 0005_alter_user_last_login_null
     [X] 0006_require_contenttypes_0002
     [X] 0007_alter_validators_add_error_messages
     [X] 0008_alter_user_username_max_length
     [X] 0009_alter_user_last_name_max_length
     [X] 0010_alter_group_name_max_length
     [X] 0011_update_proxy_permissions
     [X] 0012_alter_user_first_name_max_length
    captcha
     [X] 0001_initial
    contenttypes
     [X] 0001_initial
     [X] 0002_remove_content_type_name
    oa
     [ ] 0001_initial
     [ ] 0002_alter_project_status
     [ ] 0003_remove_demand_remark
     [ ] 0004_remove_task_remark
     [ ] 0005_auto_20221010_1456
     [ ] 0006_auto_20221010_1515
     [ ] 0007_auto_20221011_1446
     [ ] 0008_auto_20221014_1116
    sessions
     [X] 0001_initial
    system
     [X] 0001_initial
    ```
    
    **这里要注意，如果有其它数据库的状态有[x]变成了[ ]，则该APP也要重置（因为外键的原因）**
    
4. 然后放心大胆地删除migrations文件夹下面，除了__init__.py文件，的所有的带有序号的.py文件，包括pycache文件夹
5. 执行下面的命令，再次为这个APP 生成 0001_initial.py 之类的文件
    
    ```bash
    python manage.py makemigrations
    ```
    
6. 最后执行下面的命令，使刚刚生成的0001_initial.py文件记录到django_migrations数据表中，大功告成
    
    ```bash
    python manage.py migrate --fake-initial
    ```
    