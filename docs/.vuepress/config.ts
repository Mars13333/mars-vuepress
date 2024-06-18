import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'
import {myNavbar} from "./navbar";
import { myNotes } from './notes.js'

export default defineUserConfig({
    lang: 'zh-CN',
    theme: plumeTheme({
        profile: {
            name: 'Mars Chin',
            description: '知行合一，不负韶华。',
            avatar: '/images/avatar.png',
            circle: true, // 是否为圆形头像
        },
        notes: myNotes,
        navbar: myNavbar,
        footer: { copyright: 'Copyright © 2021-present Mars Chin' },
    }),
    bundler: viteBundler(),
})
