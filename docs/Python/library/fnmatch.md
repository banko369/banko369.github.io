# fnmatch

[fnmatch --- Unix 文件名模式匹配](https://docs.python.org/zh-cn/3/library/fnmatch.html)

该模块提供了Unix shell风格的通配符。shell风格通配符所使用的特殊字符如下：

 `*` 匹配所有

`?` 匹配任何单个字符

`[seq]` 匹配seq中的任何字符

`[!seq]` 匹配任何不在seq中的字符

对于字面值匹配，将原字符用方括号括起来。例如`[?]` 将匹配`?` 

### fnmatch.fnmatch(filename, pattern)

检测filename字符串是否匹配pattern字符串，返回true或false。两个形参都会使用`os.path.normcase()` 进行大小写正规化。

    

```python
import fnmatch
import os

for file in os.listdir('.'):
    if fnmatch.fnmatch(file, '*.txt'):
        print(file)
```

### fnmatch.fnmatchcase(filename, pattern)

此比较是大小写敏感的，并且不会应用`os.path.normcase()` 

### fnmatch.filter(names, patern)

基于可迭代对象names中匹配pattern的元素构造一个列表

### fnmatch.translate(pattern)

返回shell风格pattern转换成的正则表达式以便用于`re.match()`
