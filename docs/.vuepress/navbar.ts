import type {NavItem} from 'vuepress-theme-plume'

export const myNavbar = [
    {text: '首页', link: '/', icon: 'material-symbols:home-outline'},
    {
        text: '博客',
        link: '/blog/',
        icon: 'material-symbols:article-outline',
        activeMatch: '^/(blog|article)/',
    },
    {
        text: '笔记',
        icon: 'icon-park-outline:more-three',
        items: [
            {text: '笔记组 5555', link: '/sponsor/', icon: 'line-md:coffee-loop'},
            {
                text: '笔记组3333', link: '/sponsor1/', icon: 'carbon:friendship',
                items: [
                    'T1', 'T2'
                ]
            },
            {
                text: '笔记组9999',
                icon: 'logos:vue',
                items: [
                    {text: '官方文档', link: 'https://v2.vuepress.vuejs.org', icon: 'logos:vue'},
                    {text: '生态系统', link: 'https://ecosystem.vuejs.press/', icon: 'logos:vue'},
                ],
            },
        ],
    },
    {
        text: '更多',
        icon: 'icon-park-outline:more-three',
        items: [
            {text: '书籍推荐', link: '/more1/', icon: 'line-md:coffee-loop'},
            {text: '站点导航', link: '/more2/', icon: 'jam:tools'},
        ],
    },
] as NavItem[]

