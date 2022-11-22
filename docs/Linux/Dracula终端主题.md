# Dracula bash color

`vim ~/.bashrc`

```bash
#terminal color theme
LS_COLORS="$LS_COLORS:di=01;34;01"
PS1='\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$'
```

`source ~/.bashrc`
