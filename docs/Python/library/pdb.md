# pdb

[pdb --- Python 的调试器](https://docs.python.org/zh-cn/3/library/pdb.html)

pdb 模块定义了一个交互式源代码调试器，用于 Python 程序。它支持在源码行间设置（有条件的）断点和单步执行，检视堆栈帧，列出源码列表，以及在任何堆栈帧的上下文中运行任意 Python 代码。它还支持事后调试，可以在程序控制下调用。

## pdb的两种用法

1. 非侵入式(命令行下运行)
    
    `python3 -m pdb [filename.py](http://filename.py)` 
    
2. 侵入式(在被调试代码前添加一行代码)
    
    `import pdb;pdb.set_trace()` 
    

当在命令行看到`(Pdb)` 这个提示符时，说明已经正确打开了pdb

## pdb常用命令

- h(help) 帮助
    
    `h` 显示可用的命令列表
    
    `h [command]` 打印有关该命令的帮助
    
- l(list) 列出源码
    
    `l` `l .` 列出当前执行语句周围的11行代码
    
    `l [first]` 列出first行周围的11行代码
    
    `l [first] [second]` 列出first-second范围内的代码，如果first<second,second被解析为行数
    
    `ll` 查看当前函数或框架的所有源代码，相关行的标记与`l`相同 
    
- b(break) 添加断点
    
    `b` 列出所有中断，包括每个断点、命中该断点的次数、当前的忽略次数以及关联的条件(如果有)
    
    `b [lineno]` 在当前文件lineno行设置断点
    
    `b [funcname]` 在funcname函数可执行第一行语句处设置断点
    
    `b [filename]:[lineno]` 在filename文件lineno行设置断点，该文件在`sys.path` 范围内搜索
    
- tbreak(temporary break) 添加临时断点，执行一次后删除，用法同`b`
- cl(clear) 清除断点
    
    `cl` 清除所有断点
    
    `cl [lineno]` 清除当前文件lineno行断点
    
    `cl [filename]:[lineno]` 清除filename文件lineno行断点
    
    `cl [bpnumber ...]` 清除bpnumber(空格分隔的断点编号列表)等断点
    
- disable [bpnumber ...] 禁用断点，可重新启用
- enable [bpnumber ...] 启用断点
- s(step) 执行下一条语句，会进入被调用的函数体
- n(next) 执行下一条语句，不进入被调用的函数体
- r(return) 继续运行，直到当前函数返回
- c(continue) 继续运行，仅在遇到断点时停止
- unt(until) 继续运行，或当前堆栈结束停止
    
    `unt` 继续运行，直到行号比当前行大时停止
    
    `unt [lineno]` 继续运行，直到行号大于等于lineno时停止
    
- j(jump) 设置即将运行的下一行,仅用于堆栈最底层的跳转(不能跳转到for循环的中间或跳出finally子句)
    
    `j [lineno]` 向后自lineno行重新执行，向前执行到lineno行
    
- p(print) 打印变量
    
    `p [expression]` 打印expression变量值
    
- a(args) 打印当前函数的参数列表
- q(quit) 退出debug
- run/restart 重新启动debug，restart是run的别名
