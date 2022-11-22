# SDK(版本管理工具)

## Install on Linux

1. `curl -s "https://get.sdkman.io" | bash` 
2. `source "$HOME/.sdkman/bin/sdkman-init.sh"`
3. `sdk version` 

## Uninstall

`rm -rf ~/.sdkman` 

## Installing an SDK

### Latest stable version

`sdk install java`

### Specific version

`sdk install scala 3.1.1` 

### Install local version

`sdk install groovy 3.0.0-SNAPSHOT /path/to/groovy-3.0.0-SNAPSHOT`

`sdk install java 17-zulu /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`

## Remove version

`sdk uninstall scala 3.1.1`

## List candidates

`sdk list` 

## List versions

`sdk list groovy` 

## Use version

`sdk use scala 3.1.1` 

## Default version

`sdk default scala 3.1.1` 

## Current version

`sdk current java` 

`sdk current`

## Env command

`sdk env init` can generate an `.skdmanrc` file in the base directory of project

`sdk env` switch to the configuration present in the `.skdmanrc` file

`sdk env clear` reset the SDKs to their default version

`sdk env install` install these SDKs specified in the project’s `.sdkmanrc` file

set `sdkman_auto_env=true` in the SDKMAN configuration, can automatically switch SDK versions when `cd` into a directory 

## Upgrade version

`sdk upgrade springboot` 

`sdk upgrade` 

## Offline mode

`sdk offline enable`

`sdk offline disable`

## Self update

`sdk selfupdate` 

`sdk selfupdate force` if no new version, re-installation may be forced by this

## Home

`sdk home java 17.0.2-tem` get the absolute path of an SDK resides

## Update

`sdk update` the candidate cache will be refreshed

## Flush

### Flush storage

`sdk flush` 

### Broadcast

`sdk flush broadcast` 

### Archives

`sdk flush archives` 

### Temporary folder

`sdk flush tmp` 

## Help

`sdk help`

## Configuration

`~/.sdkman/etc/config` 

```yaml
# make sdkman non-interactive, preferred for CI environments
sdkman_auto_answer=true|false

# check for newer versions and prompt for update
sdkman_selfupdate_enable=true|false

# disables SSL certificate verification
# https://github.com/sdkman/sdkman-cli/issues/327
# HERE BE DRAGONS....
sdkman_insecure_ssl=true|false

# configure curl timeouts
sdkman_curl_connect_timeout=5
sdkman_curl_continue=true
sdkman_curl_max_time=10

# subscribe to the beta channel
sdkman_beta_channel=true|false

# enable verbose debugging
sdkman_debug_mode=true|false

# enable colour mode
sdkman_colour_enable=true|false

# enable automatic env
sdkman_auto_env=true|false

# enable rosetta2 compatibility for apple silicon
sdkman_rosetta2_compatible=true|false

# enable bash or zsh auto-completion
sdkman_auto_complete=true|false
```
