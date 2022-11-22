# pyenv

[github地址](https://github.com/pyenv/pyenv)

1. **Check out Pyenv where you want it installed**
    1. git clone [https://github.com/pyenv/pyenv.git](https://github.com/pyenv/pyenv.git) ~/.pyenv
    2. cd ~/.pyenv && src/configure && make -C src
2. **Configure your shell's environment for Pyenv**
    1. **If your `~/.profile` sources `~/.bashrc` (Debian, Ubuntu, Mint):**
        
        ```bash
        # the sed invocation inserts the lines at the start of the file
        # after any initial comment lines
        sed -Ei -e '/^([^#]|$)/ {a \
        export PYENV_ROOT="$HOME/.pyenv"
        a \
        export PATH="$PYENV_ROOT/bin:$PATH"
        a \
        ' -e ':a' -e '$!{n;ba};}' ~/.profile
        echo 'eval "$(pyenv init --path)"' >>~/.profile
        
        echo 'eval "$(pyenv init -)"' >> ~/.bashrc
        ```
        
    2. **If your `~/.bash_profile` sources `~/.bashrc` (Red Hat, Fedora, CentOS):**
        
        ```bash
        sed -Ei -e '/^([^#]|$)/ {a \
        export PYENV_ROOT="$HOME/.pyenv"
        a \
        export PATH="$PYENV_ROOT/bin:$PATH"
        a \
        ' -e ':a' -e '$!{n;ba};}' ~/.bash_profile
        echo 'eval "$(pyenv init --path)"' >> ~/.bash_profile
        
        echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.profile
        echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.profile
        echo 'eval "$(pyenv init --path)"' >> ~/.profile
        
        echo 'eval "$(pyenv init -)"' >> ~/.bashrc
        ```
        
3. `source .profile    source .bashrc`
4. `pyenv install <version>`
5. `pyenv global <version>`
6. 网络不好时，手动下载python安装包，.pyenv文件夹下创建cache文件夹，放入其中，执行命令，安装对应版本：
    ```bash
    pyenv install <version>
    ```
