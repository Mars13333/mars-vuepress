import {definePlumeNotesConfig} from 'vuepress-theme-plume'

export const myNotes = definePlumeNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        // {
        //     dir: 'theme/guide',
        //     link: '/guide/',
        //     sidebar: [
        //         {
        //             text: '快速开始',
        //             collapsed: false,
        //             icon: 'carbon:idea',
        //             items: ['介绍', '安装与使用', '博客', '知识笔记', '编写文章', '国际化', '部署'],
        //         },
        //         {
        //             text: '写作',
        //             icon: 'fluent-mdl2:edit-create',
        //             collapsed: false,
        //             items: [
        //                 {
        //                     text: 'markdown',
        //                     icon: 'material-symbols:markdown-outline',
        //                     dir: 'markdown',
        //                     items: ['基础', '扩展', '进阶'],
        //                 },
        //                 {
        //                     text: '代码块',
        //                     dir: '代码',
        //                     icon: 'ph:code-bold',
        //                     items: ['介绍', '特性支持', '代码组', '导入代码', 'twoslash'],
        //                 },
        //                 {
        //                     text: '代码演示',
        //                     dir: '代码演示',
        //                     icon: 'carbon:demo',
        //                     items: ['前端', 'rust', 'golang', 'kotlin', 'codepen', 'jsFiddle', 'codeSandbox', 'replit'],
        //                 },
        //                 {
        //                     text: '图表',
        //                     icon: 'mdi:chart-line',
        //                     dir: '图表',
        //                     items: ['chart', 'echarts', 'mermaid', 'flowchart'],
        //                 },
        //                 {
        //                     text: '资源嵌入',
        //                     icon: 'dashicons:embed-video',
        //                     dir: '嵌入',
        //                     items: ['pdf', 'bilibili', 'youtube'],
        //                 },
        //             ],
        //         },
        //         {
        //             text: '功能',
        //             icon: 'lucide:box',
        //             collapsed: false,
        //             dir: '功能',
        //             items: ['代码复制', '内容搜索', '评论', '加密', '组件', '文章水印', '友情链接页', 'seo', 'sitemap'],
        //         },
        //         {
        //             text: '自定义',
        //             icon: 'material-symbols:dashboard-customize-outline-rounded',
        //             collapsed: false,
        //             items: ['自定义首页', '自定义样式', '布局插槽', '组件覆写'],
        //         },
        //         {
        //             text: 'API',
        //             icon: 'mdi:api',
        //             collapsed: false,
        //             items: ['api-客户端', 'api-node'],
        //         },
        //     ],
        // },
        // {
        //     dir: 'theme/config',
        //     link: '/config/',
        //     sidebar: [
        //         {
        //             text: '配置',
        //             collapsed: false,
        //             items: [
        //                 '配置说明',
        //                 '多语言配置',
        //                 '主题配置',
        //                 '导航栏配置',
        //                 'notes配置',
        //             ],
        //         },
        //         {
        //             text: 'frontmatter',
        //             dir: 'frontmatter',
        //             collapsed: false,
        //             items: ['basic', 'home', 'post', 'friend'],
        //         },
        //         {
        //             text: '内置插件',
        //             dir: 'plugins',
        //             collapsed: false,
        //             items: ['', '代码高亮', '搜索', '阅读统计', 'markdown增强', 'markdownPower', '百度统计', '水印'],
        //         },
        //     ],
        // },
        // {
        //     dir: 'plugins',
        //     link: '/plugins/',
        //     sidebar: [
        //         {
        //             text: '插件',
        //             items: [
        //                 'caniuse',
        //                 'iconify',
        //                 'shiki',
        //                 'md-power',
        //                 'content-updated',
        //                 {
        //                     text: 'plugin-netlify-functions',
        //                     dir: 'netlify-functions',
        //                     link: '/plugin-netlify-functions/',
        //                     items: [
        //                         '介绍',
        //                         '使用',
        //                         '功能',
        //                         'api',
        //                         'functions',
        //                     ],
        //                 },
        //             ],
        //         },
        //     ],
        // },
        {
            dir: 'sponsor1',
            link: '/sponsor1/',
            sidebar: [
                {
                    text: '工具ABC',
                    icon: 'tabler:tools',
                    items: ['T1', 'T2'],
                },
            ],
        },
    ],
})
