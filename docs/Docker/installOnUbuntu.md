# Docker安装

## OS requirements

- Ubuntu Jammy 22.04 (LTS)
- Ubuntu Impish 21.10
- Ubuntu Focal 20.04 (LTS)
- Ubuntu Bionic 18.04 (LTS)

## Uninstall old versions

 `sudo apt-get remove docker docker-engine docker.io containerd runc`

`sudo rm -rf /var/lib/docker`

## Install using repository

### Set up the respository

1. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:
    
    ```bash
    $ sudo apt-get update
    $ sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```
    
2. Add Docker’s official GPG key:
    
    ```bash
    $ sudo mkdir -p /etc/apt/keyrings
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    ```
    
3. Use the following command to set up the repository:
    
    ```bash
    $ echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    

### Install docker engine

1. Update the `apt` package index, and install the *latest version* of Docker Engine, containerd, and Docker Compose, or go to the next step to install a specific version:
    
    ```bash
     $ sudo apt-get update
     $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    ```
    
2. To install a *specific version* of Docker Engine, list the available versions in the repo, then select and install:
    
    a. List the versions available in your repo:
    
    ```bash
    $ apt-cache madison docker-ce
    docker-ce | 5:20.10.16~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
    docker-ce | 5:20.10.15~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
    docker-ce | 5:20.10.14~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
    docker-ce | 5:20.10.13~3-0~ubuntu-jammy | https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
    ```
    
    b.Install a specific version using the version string from the second column, for example, `5:20.10.16~3-0~ubuntu-jammy`.
    
    ```bash
    $ sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io docker-compose-plugin
    ```
    
3. Verify that Docker Engine is installed correctly by running the `hello-world` image.
    
    ```bash
    $ sudo service docker start
    $ sudo docker run hello-world
    ```
    
    This command downloads a test image and runs it in a container. When the container runs, it prints a message and exits.
    
4. Docker Engine is installed and running. The `docker` group is created but no users are added to it. You need to use `sudo` to run Docker commands.If you don’t want to preface the `docker`
 command with `sudo`, add your user to the `docker` group.
    
    ```bash
    $ sudo usermod -aG docker $USER
    ```
    
5. Log out and log back in so that your group membership is re-evaluated.

## ****Configure Docker to start on boot****
```bash
$ sudo systemctl enable docker.service
$ sudo systemctl enable containerd.service
```
