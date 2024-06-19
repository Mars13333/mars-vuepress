// @PF: 导航栏配置
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
        icon: 'material-symbols:book-2',
        items: [
            {text: 'js', link: '/js/', icon: 'logos:jss'},
            {text: 'vue', link: '/vue/', icon: 'logos:vue'},
            {text: 'react', link: '/react/', icon: 'logos:react',},
        ],
    },
    {
        text: '更多',
        icon: 'icon-park-outline:more-two',
        items: [
            {text: '书籍推荐', link: '/more1/', icon: 'line-md:coffee-loop'},
            {text: '站点导航', link: '/more2/', icon: 'jam:tools'},
        ],
    },
] as NavItem[]

