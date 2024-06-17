import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    notes: {
      dir: '/notes/', // 声明所有笔记的目录
      link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
      notes: [
        {
          dir: 'typescript', // 声明笔记的目录，相对于 `notes.dir`
          link: '/typescript/', // 声明笔记的链接前缀
          sidebar: [ // 配置侧边栏
            {
              text: '简介',
              icon: 'mdi:language-typescript', // 侧边栏图标
              items: ['foo'] // 简化写法，主题会自动补全为 `foo.md`
            }
          ]
        },
        {
          dir: 'rust',
          link: '/rust/',
          sidebar: [
            { text: '简介', items: ['foo'] }
          ]
        }
      ]
    },
    // notes: { link: '/', dir: 'notes', notes: [] }, 
    profile: {
      name: 'Mars Chin',
      description: '行有不得，反求诸己。',
      avatar: 'blogger.png',
      circle: true, // 是否为圆形头像
    }
  }),
  bundler: viteBundler(),
})