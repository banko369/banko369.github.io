# Problems

## No module named ‘_lzma’

1. 安装lzma
    1. `sudo apt-get install liblzma-dev`
    2. `pip install backports.lzma` 
2. 修改`lzma.py`文件
    
    `%PYTHON_HOME%/lib/python3.8/lzma.py line 27` 修改如下：
    
    ```python
    try:
        from _lzma import *
        from _lzma import _encode_filter_properties, _decode_filter_properties
    except ImportError:
        from backports.lzma import *
        from backports.lzma import _encode_filter_properties, _decode_filter_properties
    ```

## gunicorn部署Django静态文件加载问题

urls.py中添加如下代码：

```python
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# ... the rest of your URLconf goes here ...

urlpatterns += staticfiles_urlpatterns()
```

## OpenCV-python在pycharm中没有代码提示解决方法

安装opencv-python，导入cv2,Ctrl单击进入__init__.py:

```python
'''
OpenCV Python binary extension loader
'''
import os
import importlib
import sys

__all__ = []

try:
    import numpy
    import numpy.core.multiarray
except ImportError:
    print('OpenCV bindings requires "numpy" package.')
    print('Install it via command:')
    print('    pip install numpy')
    raise
```

import下面添加三行代码：

```python
'''
OpenCV Python binary extension loader
'''
import os
import importlib
import sys
os.environ["PATH"] += os.pathsep + os.path.dirname(os.path.realpath(__file__))
from .cv2 import *
globals().update(importlib.import_module('cv2.cv2').__dict__)
__all__ = []

try:
    import numpy
    import numpy.core.multiarray
except ImportError:
    print('OpenCV bindings requires "numpy" package.')
    print('Install it via command:')
    print('    pip install numpy')
    raise
```

重启Pycharm
