# pathlib

[pathlib --- 面向对象的文件系统路径](https://docs.python.org/zh-cn/3/library/pathlib.html)

该模块提供表示文件系统路径的类。路径类分为提供纯计算操作没有I/O的纯路径，及从纯路径继承而来但提供I/O操作的具体路径

![pathlib-inheritance.png](../assets/pathlib-inheritance.png)

## 纯路径

有三种方式访问这些类

### pathlib.PurePath(*pathsegments)

一个通用的类，代表当前系统的路径风格（实例化为PurePosixPath或者PureWindowsPath）

```python
>>>PurePath(’setup.py’)     # running on a unix machine
PurePosixPath('setup.py')
```

每一个pathsegments的元素可能是一个代表路径片段的字符串，一个返回字符串的实现了os.PathLike接口的对象，或者另一个路径对象

```python
>>> PurePath('foo', 'some/path', 'bar')
PurePosixPath('foo/some/path/bar')
>>> PurePath(Path('foo'), Path('bar'))
PurePosixPath('foo/bar')
```

当pathsegments为空的时候，假定为当前目录

```python
>>> PurePath()
PurePosixPath('.')
```

纯路径对象实现了os.PathLike接口，允许它们在任何接受此接口的地方使用

### pathlib.PurePosixPath(*pathsegments)

PurePath的子类，Linux路径风格

```python
>>> PurePosixPath('/etc')
PurePosixPath('/etc')
```

### pathlib.PureWindowsPath(*pathsegments)

PurePath的子类，Windows路径风格

```python
>>> PureWindowsPath('c:/Program Files/')
PureWindowsPath('c:/Program Files')
```

## 运算符

斜杠`/` 有助于创建子路径，类似于`os.path.join()`

 

```python
>>> p = PurePath('/etc')
>>> p
PurePosixPath('/etc')
>>> p / 'init.d' / 'apache2'
PurePosixPath('/etc/init.d/apache2')
>>> q = PurePath('bin')
>>> '/usr' / q
PurePosixPath('/usr/bin')
```

文件对象可用于任何接受`os.PathLike` 接口实现的地方

```python
>>> import os
>>> p = PurePath('/etc')
>>> os.fspath(p)
'/etc'
```

路径的字符串表示法为它自己原始的文件系统路径（以原生形式，Windows下使用反斜杠）。

```python
>>> p = PurePath('/etc')
>>> str(p)
'/etc'
>>> p = PureWindowsPath('c:/Program Files')
>>> str(p)
'c:\\Program Files'
```

## 访问个别部分

### PurePath.parts

一个元组，可以访问路径的多个组件

```python
>>> p = PurePath('/usr/bin/python3')
>>> p.parts
('/', 'usr', 'bin', 'python3')

>>> p = PureWindowsPath('c:/Program Files/PSF')
>>> p.parts
('c:\\', 'Program Files', 'PSF')
```

## 方法和特征属性

### PurePath.drive

一个表示驱动器盘符或命名的字符串，如果存在

```python
>>> PureWindowsPath('c:/Program Files/').drive
'c:'
>>> PureWindowsPath('/Program Files/').drive
''
>>> PurePosixPath('/etc').drive
''
```

UNC分享也被认作驱动器

```python
>>> PureWindowsPath('//host/share/foo.txt').drive
'\\\\host\\share'
```

### PurePath.root

一个表示（本地或全局）根的字符串，如果存在

```python
>>> PureWindowsPath('c:/Program Files/').root
'\\'
>>> PureWindowsPath('c:Program Files/').root
''
>>> PurePosixPath('/etc').root
'/'
```

UNC分享一样拥有根

```python
>>> PureWindowsPath('//host/share').root
'\\'
```

### PurePath.anchor

驱动器和根的联合

```python
>>> PureWindowsPath('c:/Program Files/').anchor
'c:\\'
>>> PureWindowsPath('c:Program Files/').anchor
'c:'
>>> PurePosixPath('/etc').anchor
'/'
>>> PureWindowsPath('//host/share').anchor
'\\\\host\\share\\'
```

### PurePath.parents

提供路径的逻辑父路径的不可变序列

```python
>>> p = PureWindowsPath('c:/foo/bar/setup.py')
>>> p.parents[0]
PureWindowsPath('c:/foo/bar')
>>> p.parents[1]
PureWindowsPath('c:/foo')
>>> p.parents[2]
PureWindowsPath('c:/')
```

### PurePath.parent

此路径的逻辑父路径

```python
>>> p = PurePosixPath('/a/b/c/d')
>>> p.parent
PurePosixPath('/a/b/c')
```

不能超过一个anchor或空路径

```python
>>> p = PurePosixPath('/')
>>> p.parent
PurePosixPath('/')
>>> p = PurePosixPath('.')
>>> p.parent
PurePosixPath('.')
```

### PurePath.name

表示最后路径组件的字符串，排除了驱动器与根目录，如果存在的话

```python
>>> PurePosixPath('my/library/setup.py').name
'setup.py'
```

UNC驱动器名不被考虑

```python
>>> PureWindowsPath('//some/share/setup.py').name
'setup.py'
>>> PureWindowsPath('//some/share').name
''
```

### PurePath.suffix

最后一个组件的文件扩展名，如果存在

```python
>>> PurePosixPath('my/library/setup.py').suffix
'.py'
>>> PurePosixPath('my/library.tar.gz').suffix
'.gz'
>>> PurePosixPath('my/library').suffix
''
```

### PurePath.suffixes

路径的文件扩展名列表

```python
>>> PurePosixPath('my/library.tar.gar').suffixes
['.tar', '.gar']
>>> PurePosixPath('my/library.tar.gz').suffixes
['.tar', '.gz']
>>> PurePosixPath('my/library').suffixes
[]
```

### PurePath.stem

最后一个路径组件，除去后缀

```python
>>> PurePosixPath('my/library.tar.gz').stem
'library.tar'
>>> PurePosixPath('my/library.tar').stem
'library'
>>> PurePosixPath('my/library').stem
'library'
```

### PurePath.as_posix()

返回使用正斜杠`/` 的路径字符串

```python
>>> p = PureWindowsPath('c:\\windows')
>>> str(p)
'c:\\windows'
>>> p.as_posix()
'c:/windows'
```

### PurePath.as_uri()

将路径表示为`file` URL。如果并非绝对路径，抛出ValueError

```python
>>>p = PurePosixPath('/etc/passwd')
>>>p.as_uri()
'file:///etc/passwd'
>>>p = PureWindowsPath('c:/Windows')
>>>p.as_uri()
'file:///c:/Windows'
```

### PurePath.is_absolute()

返回此路径是否为绝对路径。如果路径同时拥有驱动器符与根路径（如果风格允许）则将被认作绝对路径

```python
>>> PurePosixPath('/a/b').is_absolute()
True
>>> PurePosixPath('a/b').is_absolute()
False

>>> PureWindowsPath('c:/a/b').is_absolute()
True
>>> PureWindowsPath('/a/b').is_absolute()
False
>>> PureWindowsPath('c:').is_absolute()
False
>>> PureWindowsPath('//some/share').is_absolute()
True
```

### PurePath.is_relative_to(*other)

返回此路径是否相对于other的路径

```python
>>>p = PurePath('/etc/passwd')
>>>p.is_relative_to('/etc')
True
>>>p.is_relative_to('/usr')
False
```

### PurePath.isreserved()

在`PureWindowsPath` ，如果路径是被Windows保留的则返回True，否则False。在`PurePosixPath` ，总是返回False

```python
>>>PureWindowsPath('nul').is_reserved()
True
>>>PurePosixPath('nul').is_reserved()
False
```

当保留路径上的文件系统被调用，则可能出现玄学失败或意料之外的效应

### PurePath.joinpath(*other)

调用此方法等同于将每个other参数中的项目连接在一起

```python
>>> PurePosixPath('/etc').joinpath('passwd')
PurePosixPath('/etc/passwd')
>>> PurePosixPath('/etc').joinpath(PurePosixPath('passwd'))
PurePosixPath('/etc/passwd')
>>> PurePosixPath('/etc').joinpath('init.d', 'apache2')
PurePosixPath('/etc/init.d/apache2')
>>> PureWindowsPath('c:').joinpath('/Program Files')
PureWindowsPath('c:/Program Files')
```

### PurePath.match(pattern)

将此路径与提供的通配符风格的模式匹配。如果匹配成功则返回True，否则返回False。

如果pattern是相对的，则路径可以是相对路径或绝对路径，并且匹配是从右侧完成的

```python
>>> PurePath('a/b.py').match('*.py')
True
>>> PurePath('/a/b/c.py').match('b/*.py')
True
>>> PurePath('/a/b/c.py').match('a/*.py')
False
```

如果pattern是绝对的，则路径必须是绝对的，并且路径必须完全匹配

```python
>>> PurePath('/a.py').match('/*.py')
True
>>> PurePath('a/b.py').match('/*.py')
False
```

与其他方法一样，是否大小写敏感遵循平台的默认规则

```python
>>> PurePosixPath('b.py').match('*.PY')
False
>>> PureWindowsPath('b.py').match('*.PY')
True
```

### PurePath.relative_to(*other)

计算此路径相对other表示路径的版本。如果不可计算，则抛出ValueError

```python
>>> p = PurePosixPath('/etc/passwd')
>>> p.relative_to('/')
PurePosixPath('etc/passwd')
>>> p.relative_to('/etc')
PurePosixPath('passwd')
>>> p.relative_to('/usr')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "pathlib.py", line 694, in relative_to
    .format(str(self), str(formatted)))
ValueError: '/etc/passwd' is not in the subpath of '/usr' OR one path is relative and the other absolute.
```

> Tip：此函数是PurePath的一部分并且适用于字符串。它不会检查或访问下层的文件结构。
> 

### PurePath.with_name(name)

返回一个新的路径并修改name。如果原本路径没有name，ValueError被抛出

```python
>>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
>>> p.with_name('setup.py')
PureWindowsPath('c:/Downloads/setup.py')
>>> p = PureWindowsPath('c:/')
>>> p.with_name('setup.py')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/antoine/cpython/default/Lib/pathlib.py", line 751, in with_name
    raise ValueError("%r has an empty name" % (self,))
ValueError: PureWindowsPath('c:/') has an empty name
```

### PurePath.with_stem(stem)

返回一个带有修改后stem的新路径。如果原路径没有名称，则会引发ValueError

```python
>>> p = PureWindowsPath('c:/Downloads/draft.txt')
>>> p.with_stem('final')
PureWindowsPath('c:/Downloads/final.txt')
>>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
>>> p.with_stem('lib')
PureWindowsPath('c:/Downloads/lib.gz')
>>> p = PureWindowsPath('c:/')
>>> p.with_stem('')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/home/antoine/cpython/default/Lib/pathlib.py", line 861, in with_stem
    return self.with_name(stem + self.suffix)
  File "/home/antoine/cpython/default/Lib/pathlib.py", line 851, in with_name
    raise ValueError("%r has an empty name" % (self,))
ValueError: PureWindowsPath('c:/') has an empty name
```

### PurePath.with_suffix(suffix)

返回一个新的路径并修改suffix。如果原本的路径没有后缀，新的suffix则被追加以代替。如果suffix是空字符串，则原本的后缀被移除

```python
>>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
>>> p.with_suffix('.bz2')
PureWindowsPath('c:/Downloads/pathlib.tar.bz2')
>>> p = PureWindowsPath('README')
>>> p.with_suffix('.txt')
PureWindowsPath('README.txt')
>>> p = PureWindowsPath('README.txt')
>>> p.with_suffix('')
PureWindowsPath('README')
```

## 实体路径

实体路径是纯路径的子类。除了纯路径提供的操作以外，还提供了对路径对象进行系统调用的方法。实例化方法与纯路径相同，但只能实例化与当前系统风格相同的类。

## 方法

除纯路径方法外，实体路径还提供以下方法。如果系统调用失败（例如因为路径不存在），这些方法中许多都会引发OSError

### *classmethod* Path.cwd()

返回一个新的表示当前目录的路径对象（和`os.getcwd()`返回的相同）

```python
>>> Path.cwd()
PosixPath('/home/antoine/pathlib')
```

### *classmethod* Path.home()

返回一个表示用户家目录的新路径对象，如果无法解析家目录，引发RuntimeError

```python
>>> Path.home()
PosixPath('/home/antoine')
```

### Path.stat(*, follow_symlinks=True)

返回一个`os.stat_result` 对象，其中包含有关此路径的信息，例如`os.stat()` 。结果会在每次调用此方法时重新搜索。

此方法通常会跟随符号链接；要对symlink使用stat请添加参数`follow_symlinkes=False` ，或者使用`lstat()`。

```python
>>> p = Path('setup.py')
>>> p.stat().st_size
956
>>> p.stat().st_mtime
1327883547.852554
```

### Path.chmod(mode, *, follow_symlinks=True)

改变文件模式和权限，和`os.chmod()`一样

此方法通常会跟随符号链接。某些Unix变种支持改变symlink本身的权限；在这些平台上你可以添加参数`follow_symlinkes=False` ,或者使用`lchmod()`。

```python
>>> p = Path('setup.py')
>>> p.stat().st_mode
33277
>>> p.chmod(0o444)
>>> p.stat().st_mode
33060
```

### Path.exists()

此路径是否指向一个已存在的文件或目录

```python
>>> Path('.').exists()
True
>>> Path('setup.py').exists()
True
>>> Path('/etc').exists()
True
>>> Path('nonexistentfile').exists()
False
```

> Tip：如果路径指向一个符号链接，`exists()` 返回此符号链接是否指向存在的文件或目录。
> 

### Path.expanduser()

返回带有扩展`~` 和`~user` 构造的新路径，与`os.path.expanduser()` 所返回的相同。如果无法解析家目录，则会引发RuntimeError。

```python
>>> p = PosixPath('~/films/Monty Python')
>>> p.expanduser()
PosixPath('/home/eric/films/Monty Python')
```

### Path.glob(pattern)

解析相对于此路径的通配符pattern,产生所有匹配的文件

```python
>>> sorted(Path('.').glob('*.py'))
[PosixPath('pathlib.py'), PosixPath('setup.py'), PosixPath('test_pathlib.py')]
>>> sorted(Path('.').glob('*/*.py'))
[PosixPath('docs/conf.py')]
```

pattern的形式与`fnmatch` 的相同，还增加`**` 表示”此目录以及所有子目录，递归通配“。

```python
>>> sorted(Path('.').glob('**/*.py'))
[PosixPath('build/lib/pathlib.py'),
 PosixPath('docs/conf.py'),
 PosixPath('pathlib.py'),
 PosixPath('setup.py'),
 PosixPath('test_pathlib.py')]
```

> Tip：在一个较大的目录树中使用`**` 模式可能会消耗非常多的时间
> 

### Path.iterdir()

当路径指向一个目录时，产生该路径下的对象的路径

```python
>>> p = Path('docs')
>>> for child in p.iterdir(): child
...
PosixPath('docs/conf.py')
PosixPath('docs/_templates')
PosixPath('docs/make.bat')
PosixPath('docs/index.rst')
PosixPath('docs/_build')
PosixPath('docs/_static')
PosixPath('docs/Makefile')
```

子条目会以任意顺序生成，并且不包括特殊条目`.` 和`..` 。如果有文件在迭代器创建之后在目录中被创建或移除，是否要包括该文件对应的路径对象并没有规定。

### Path.mkdir(mode=511, parents=False, exist_ok=False)

新建给定路径的目录。如果给出了mode，它将与当前进程的`umask` 值合并来决定文件模式和访问标志。如果路径已存在，抛出FileExistsError。

如果parents为true，任何找不到的父目录都会伴随着此路径被创建；他们会以默认权限被创建，而不考虑mode设置（模仿POSIX的`mkdir -p` 命令）

如果parents为false（默认），找不到的父级目录会导致FileNotFoundError。

如果exist_ok为false（默认），在目标已存在的情况下抛出FileExistsError。

如果exist_ok为true，则FileExistsError异常被忽略，但是只有在最后一个路径组件不是现存的非目录文件时才生效。

### Path.open(mode=’r’, buffering=-1, encoding=None, errors=None, newline=None)

打开路径指向的文件，就像内置的`open()`函数一样

```python
>>> p = Path('setup.py')
>>> with p.open() as f:
...     f.readline()
...
'#!/usr/bin/env python3\n'
```

### Path.read_text(encoding=None, errors=None)

以字符串形式返回路径指向的文件的解码后文本内容。

```python
>>> p = Path('my_text_file')
>>> p.write_text('Text file contents')
18
>>> p.read_text()
'Text file contents'
```

文件先被打开然后关闭

### Path.readlink()

返回符号链接指向的路径

```python
>>> p = Path('mylink')
>>> p.symlink_to('setup.py')
>>> p.readlink()
PosixPath('setup.py')
```

### Path.rename(target)

将文件或目录重命名为给定的target，并返回一个新的指向target的Path实例。在Unix上，如果target存在且为一个文件，如果用户有足够权限，则它将被静默的替换。target可以是一个字符串或者另一个路径对象

```python
>>> p = Path('foo')
>>> p.open('w').write('some text')
9
>>> target = Path('bar')
>>> p.rename(target)
PosixPath('bar')
>>> target.open().read()
'some text'
```

目标路径可能为绝对或相对路径。相对路径解释为相对当前工作目录，而不是相对Path对象的目录

### Path.replace(target)

将文件名目录重命名为给定的target。。。（其余同rename）

### Path.resolve(strict=False)

将路径绝对化，解析任何符号链接。返回新的路径对象

```python
>>> p = Path()
>>> p
PosixPath('.')
>>> p.resolve()
PosixPath('/home/antoine/pathlib')
```

`..` 组件也将被消除（只有这一种方法这么做）

```python
>>> p = Path('docs/../setup.py')
>>> p.resolve()
PosixPath('/home/antoine/pathlib/setup.py')
```

如果路径不存在并且strict为True，抛出FileNotFoundError。如果strict为False，则路径将被尽可能地解析并且任何剩余部分都会被不检查是否存在的追加。如果在解析路径上发生无限循环，抛出RuntimeError。

### Path.rglob(*pattern*)

递归匹配子目录,相当于调用Path.glob时在给定的pattern前面添加了`**/` 

```python
>>> sorted(Path().rglob("*.py"))
[PosixPath('build/lib/pathlib.py'),
 PosixPath('docs/conf.py'),
 PosixPath('pathlib.py'),
 PosixPath('setup.py'),
 PosixPath('test_pathlib.py')]
```

### Path.rmdir()

移除此目录。此目录必须为空

### Path.symlink_to(target, target_is_directory=False)

将此路径创建为指向target的符号链接。在 Windows 下，如果链接的目标是一个目录则 *target_is_directory*必须为 true（默认为 `False`）。在 POSIX 下，*target_is_directory*
的值将被忽略。

```python
>>> p = Path('mylink')
>>> p.symlink_to('setup.py')
>>> p.resolve()
PosixPath('/home/antoine/pathlib/setup.py')
>>> p.stat().st_size
956
>>> p.lstat().st_size
8
```

### Path.hardlink_to(target)

将此路径设为一个指向与target相同文件的硬链接

### Path.touch(mode=438, exist_ok=True)

将给定的路径创建为文件

### Path.unlink(missing_ok=False)

移除此文件或符号链接。如果路径指向目录，则用`Path.rmdir()` 代替

missing_ok为True，则FileNotFoundError异常被忽略

### Path.write_text(data, encoding=None, errors=None, newline=None)

将文件以文本模式打开，写入data并关闭
