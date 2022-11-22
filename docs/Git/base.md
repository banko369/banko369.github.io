# Base

`git init`

创建.git子目录，初始化当前目录为git项目

`git add`

添加到暂存区

`git commit -m “”`

提交到当前分支

`git commit -a -m “”`

自动把跟踪过的文件暂存起来一并提交

`git rm <file>`

删除指定文件

`git rm -f <file>`

如果文件已被修改或暂存，需强制删除

`git rm --cached file`

删除仓库中的file文件，保留当前目录下的file文件 

`git mv <file_from> <file_to>`

Git中对文件改名

`git clone <url>`

克隆远程仓库

`git clone <url> <local_dir>`

克隆远程仓库，自定义本地仓库名

`git status`

检查当前文件状态

`git diff`

查看尚未暂存的文件更新了哪些部分

`git diff --staged`

查看已暂存文件与最后一次提交的文件差异，与`--cached`同义

`git difftool --tool-help`

查看支持哪些diff工具

`git commit --amend`

修补提交，提交后发现漏掉了几个文件或提交信息写错，可使用此命令替换旧的提交信息

`git reset HEAD <file>`

取消暂存文件

`git checkout -- <file>`

还原为上次提交时版本,将丢失当前工作区更改

`git remote`

列出指定的每个远程服务器的简写

`git remote -v`

显示需要读写的远程仓库与其对应的URL

`git remote add <shortname> <url>`

添加远程仓库，同时指定一个简写

`git fetch <remote>`

从远程仓库拉取数据

`git pull`

抓取数据并合并到当前分支

`git push <remote> <branch>`

推送指定分支到指定服务器

`git remote show <remote>`

查看指定远程仓库的信息

`git remote rename <current_name> <new_name>`

修改远程仓库的简写

`git remote remove <remote>`

删除指定远程仓库

`git help <verb>`

`git <verb> --help`

`man git-<verb>`

获取指定命令的帮助文档

`git <verb> -h`

获得可用选项的快速参考
