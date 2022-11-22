# nvm

[github地址](https://github.com/nvm-sh/nvm)

1. `git clone https://github.com/nvm-sh/nvm.git .nvm`
2. `cd ~/.nvm` and check out the latest version with `git checkout v0.39.1`
3. add these lines to your `~/.bashrc` file to have it automatically sourced upon login:
    
    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```
    
4. `source .bashrc` 
5. `nvm install --lts`
