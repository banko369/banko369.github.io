---
icon: git
date: 2022-11-27
category:
  - git
tag:
  - 工具
  - 版本控制
order: 31
isOriginal: true
---

# gitignore文件规范

## 概述

`.gitignore`文件指明 Git 需要忽略的文件，并且对已经跟踪的文件不起作用。

`.gitignore`文件中的每行指定一条匹配规则。

Git 通常按照以下顺序检查`.gitignore`匹配规则：

- 命令行

- 当前目录的`.gitignore`文件，或父级目录（直至顶层目录），底层匹配规则覆盖上级。匹配规则以`.gitignore`文件所在目录为初始目录。

- `$GIT_DIR/info/exclude`

- 配置变量`core.excludesFile`指定的文件，变量内容保存于`~/.gitconfig`文件 

  ```sh
  # 配置全局忽略规则文件
  git config --global core.excludesFile ~/.gitignore
  ```

匹配规则写在什么地方：

- 需要管理起来，并克隆到其它仓库的匹配规则（即所有人都需要的匹配规则），写到`.gitignore`文件
- 特定一个用户需要的匹配规则，写到`$GIT_DIR/info/exclude`文件
- 特定一个用户需要的匹配规则，并且应用于所有项目，写到配置变量`core.excludesFile`指定的文件

## 匹配规则

- 所有空行或者以 `#` 开头的行都会被 Git 忽略。

- 空格会被忽略，除非被`\`包裹。

- 开头或中间（或两者）存在`/`，匹配规则以`.gitignore`所在目录为根目录进行匹配。如果结尾存在`/`，匹配规则将以`.gitignore`所在目录及其下任意层级子目录为根目录进行匹配。

  ```
  # 可匹配 doc/frotz 文件夹，但不能匹配 a/doc/frotz 文件夹
  doc/frotz/
  
  # 效果同上
  /doc/frotz/
  
  # 可匹配 frotz 和 a/frotz 文件夹
  frotz/
  ```

- 以`/`结尾，只匹配目录。否则匹配文件和目录。

- `*`匹配零个或多个任意字符，`/`除外。

- `?`匹配任意一个字符，`/`除外。

- `[a-zA-Z]`匹配范围内任意一个字符。

- 以`!`开头，表示不忽略匹配到的文件或目录。**如果父目录被忽略，以`!`开头不起作用**。`!`可以使用`\`转义。

- 以`**/`开头，表示匹配任意层级目录。

- 以`/**`结尾，表示以`.gitignore`所在目录为根目录，匹配其下任意文件或目录。

- `/**/`存在中间位置，表示匹配零个或多个层级目录。

  ```
  # 可匹配 foo 和 a/foo
  **/foo
  
  # 效果同上
  foo
  
  # 可匹配 abc 文件夹下任意文件或目录，但不能匹配 a/abc 文件夹下
  abc/**
  
  # 可匹配 a/b 和 a/x/b 和 a/x/y/b
  a/**/b
  ```

  

## 示例

```
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 foo/test.json，但不忽略 foo/bar/hello.c，因为 * 不匹配 / 符号
foo/*

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

## 注意

对管理中的文件解除跟踪，可使用以下命令

```sh
git rm --cached <file>
```

## 参考链接

[Git - gitignore Documentation (git-scm.com)](https://git-scm.com/docs/gitignore)

