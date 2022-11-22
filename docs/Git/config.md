# Config

`git config --system` 

`/etc/gitconfig`通用配置

`git config --global`

`~/.gitconfig` 和 `~/.config/git/config` 用户配置

`git config --local`

`.git/config` 仓库配置（默认）

`git config --list` 查看所有配置（可能有重复变量，来自不同文件，后项覆盖前项）

`git config --list --show-origin`查看所有配置及它们所在文件

`git config [user.name](http://user.name)` 查看指定配置项

`git config --show-origin [user.name](http://user.name)` 查看指定配置项及来源文件

`git config --global [user.name](http://user.name) <username>`

`git config --global [user.email](http://user.email) <email>`配置用户信息

`git config --global core.editor <editor_name>`配置默认编辑器

`git config --global alias.<alias_name> <command>`定义命令别名，若是外部命令，可以在命令前加上`!`
