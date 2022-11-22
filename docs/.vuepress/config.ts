import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        logo: '/images/hero.png',
        repo: 'https://github.com/vuepress/vuepress-next',
        docsRepo: 'https://gitlab.com/owner/name',
        docsBranch: 'master',
        docsDir: 'docs',
        navbar: [
            // NavbarItem
            {
                text: 'Mysql',
                link: '/Mysql/Xtrabackup.md',
            },
            // NavbarGroup
            {
                text: 'Python',
                children: ['/Python/command.md', '/Python/pyenv.md', '/Python/异步编程入门.md'],
            },
            // 字符串 - 页面文件路径
            '/Docker/harbor.md',
        ],
    }),
})
