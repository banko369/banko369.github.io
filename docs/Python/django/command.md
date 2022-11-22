# Django Command

`django-admin startproject <project>` 生成指定django项目目录

`python manage.py startapp <app>` 生成指定app目录

`python manage.py makemigrations <app>` 检测模型修改，生成数据库迁移文件 

`python manage.py sqlmigrate <app> 0001` 返回指定迁移文件的SQL语句

`python manage.py migrate` 应用数据库迁移，同步数据库结构

`python manage.py inspectdb —database <db_name> >> <app>/models.py` 根据指定数据库生成models到指定app下

`python manage.py createsuperuser --email admin@example.com --username admin` 创建管理员用户

`python manage.py shell` 创建交互式命令行
