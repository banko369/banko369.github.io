# yarn入门

## 1 - 简介

Yarn 对你的代码来说是一个软件包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码给全世界的开发者。Yarn 做这些事情快捷、安全、可靠，所以你不用担心什么。

通过 Yarn 你可以使用其他开发者针对不同问题的解决方案，简化你开发软件的过程。 如果使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复， 你可以使用 Yarn 更新。

代码通过 **软件包（package）** 的方式被共享。一个软件包里包含了所有需要共享的代码，以及一个描述软件包信息的文件 `package.json` （叫做 **清单**）。

## 2 - 安装

> **从 Yarn 1 迁移到 Yarn 2**
>
> 我们一直在编纂 [迁移指南](https://www.yarnpkg.cn/getting-started/migration)，为从 Yarn 1 迁移到 Yarn 2 提供有用的建议。请查看此指南，如果发现尚未涵盖的内容请反馈！如果遇到问题，请查阅 [PnP 兼容列表](https://www.yarnpkg.cn/features/pnp#compatibility-table) 并 [开启 node-modules 插件](https://www.yarnpkg.cn/getting-started/migration#if-required-enable-the-node-modules-plugin)！

### 关于全局安装

在整个系统中使用单个包管理器一直是个问题。为了保持稳定，需要跨环境并使用相同的包管理器版本来执行安装操作，否则我们有可能在版本之间引入意外的重大风险 - 毕竟，这就是为什么首先引入了锁文件（lockfile）的概念！在某种意义上来说，由于 Yarn 是您的第一个项目依赖项，因此"锁定它"也是应该的。

因此，Yarn 2 及更高版本应按项目管理。别担心，改变很小！只需确保首先在全局安装 Yarn 二进制文件即可，我们将使用该二进制文件来生成本地的二进制文件：

```text
npm install -g yarn
```

当你你遵循上述说明（从主目录下运行 `yarn --version` 命令将输出类似 `1.22.0` 的信息），请转到下一节，了解如何在项目中实际启用 Yarn 2。

> 你可能已经注意到全局安装的 Yarn 是属于 “经典版本” 序列（即 1.x）。这是刻意安排的！这一安排的一个额外好处是，为 Yarn 1 配置的项目将继续使用 Yarn 1，而无需突然强制迁移到 Yarn 2.x 的配置格式。如果 Yarn 一开始就被“项目锁定”了，我们就不必这样做了，毕竟是 [事后诸葛](https://en.wiktionary.org/wiki/hindsight_is_20/20) 😉

### 按项目安装

1. 全局安装 Yarn 的最新版本：

```bash
npm install -g yarn
```

1. 进入你的项目目录：

```bash
cd ~/path/to/project
```

1. 运行以下命令：

```bash
yarn set version berry
```

> "Berry" 是 Yarn 2 发布序列的代号，同时也是我们的 [代码仓库](https://github.com/yarnpkg/berry) 的名称！

1. 提交新增和修改过的文件。参见 [哪些文件需要被添加到 .gitignore 配置文件中？](https://www.yarnpkg.cn/getting-started/qa#which-files-should-be-gitignored)

### 更新到最新版本

如果以后要将 Yarn 更新到最新版本，请运行：

```bash
yarn set version latest
```

Yarn 将从我们的网站下载最新的二进制文件，并将其安装在您的项目中。然后，不要忘记更新依赖项并提交更新结果！

### 安装 master 分支的最新构建版本

随着时间的推移，即使最新版本也不够新了，那么你可能希望尝试最新的 master 代码分支，以检查 Bug 是否已修复。这在 Yarn 2 中已经变得非常简单了！只需运行以下命令即可：

```bash
yarn set version from sources
```

同样的，还可以使用 `--branch` 参数来指定要安装特定的 PR：

```bash
yarn set version from sources --branch 1211
```

## 3 - 用法

现在你已经 [安装了](https://www.yarnpkg.cn/getting-started/install) Yarn，那就开始使用 Yarn 吧。以下列出的是一些最常用的命令。

> **从 Yarn 1 迁移到 Yarn 2**
>
> 我们一直在编纂 [迁移指南](https://www.yarnpkg.cn/getting-started/migration) 为从 Yarn 1 迁移到 Yarn 2 提供有用的建议。请查看此指南，如果发现尚未涵盖的内容请反馈给我们！如果遇到问题，请查阅 [PnP 兼容列表](https://www.yarnpkg.cn/features/pnp#compatibility-table) 并 [开启 node-modules 插件](https://www.yarnpkg.cn/getting-started/migration#if-required-enable-the-node-modules-plugin)！

### 显示命令列表

```bash
yarn help
```

### 初始化一个新项目

```bash
yarn init
```

### 安装所有依赖项

```bash
yarn
yarn install
```

### 添加依赖项

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### 将依赖项添加到不同的依赖类别中

```bash
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies
```

### 更新依赖项

```bash
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]
```

### 删除依赖项

```bash
yarn remove [package]
```

### 更新 Yarn 本体

```bash
yarn set version latest
yarn set version from sources
```