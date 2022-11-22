# Branch

`git branch <branch>`

创建分支

`git checkout <branch>`

切换分支

`git checkout -b <branch>`

创建并切换分支

`git merge <branch>`

合并分支

`git branch -d <branch>`

删除分支

`git branch -D <branch>`

强制删除分支

`git branch`

分支列表

`git branch -v`

查看每个分支的最后一次提交

`git branch --merged`

查看所有合并到当前分支的分支

`git branch --no-merged`

查看当前分支所有未合并的分支

`git branch --no-merged <branch>`  

查看指定分支所有未合并的分支

`git ls-remote <remote>`

查看远程引用的分支列表

`git remote show <remote>`

查看远程分支的更多信息

`git clone -o <remote>`

克隆时指定远程仓库名字，默认为origin

`git fetch <remote>`

拉取指定远程仓库的数据下来

`git merge <remote/branch>`

合并拉取下来的指定分支到当前分支

`git remote add <remote> <address>`

添加远程仓库引用到当前项目

`git push <remote> <local_branch>`

推送到默认远程分支，如第一次推送，与本地分支同名

`git push <remote> <local_branch>:<remote_branch>`

推送本地分支到指定远程分支

`git checkout -b <local_branch> <remote/branch>`

检出指定远程分支到指定的本地分支

`git checkout --track <remote>/<branch>`

设置远程跟踪分支

`git branch -u <remote>/<branch>`

修改跟踪的远程分支

`git branch -vv`

查看设置的所有跟踪分支，对比的远程仓库为本地缓存的服务器数据

`git fetch --all; git branch -vv`

查看前抓取所有的远程仓库，对比最新服务器数据

`git push <remote> --delete <remote_branch>`

删除远程分支

`git rebase <branch>`

当前分支变基到指定分支

<aside>
💡 总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作

</aside>

`git log --oneline --decorate`

查看各个分支当前所指的对象

`git log --oneline --decorate --graph --all`

查看分叉历史
