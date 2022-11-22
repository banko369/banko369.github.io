# Tag

`git tag`

列出已有的标签

`git tag -l "v1.8*"`

-l按照通配符模式列出标签

`git tag -a <version> -m <description>`

-a添加附注标签（存储在Git中的完整对象，可以被校验），-m标签信息

`git show <version>`

查看标签信息及对应的提交信息

`git tag <version>`

创建轻量标签（某次提交的引用）

`git tag -a <version> <checksum>`

对指定版本创建标签

`git push <remote> <tagname>`

推送指定标签到远程服务器

`git push <remote> --tags`

将所有不在远程服务器的标签推送上去

`git tag -d <tagname>`

删除本地标签

`git push <remote> --delete <tagname>`

删除远程标签
