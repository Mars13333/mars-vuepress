// @PF: 核心配置
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'
import {myNavbar} from "./navbar";
import {myNotes} from './notes.js'
import {iconifyPlugin} from "@vuepress-plume/plugin-iconify";

export default defineUserConfig({
    lang: 'zh-CN',
    theme: plumeTheme({
        profile: {
            name: 'Mars Chin',
            description: 'Full stack engineer.',
            avatar: '/images/avatar.png',
            circle: true,
        },
        notes: myNotes,
        navbar: myNavbar,
        footer: {copyright: 'Copyright © 2021-present Mars Chin'},
    }),
    bundler: viteBundler(),
    plugins: [
        iconifyPlugin({
            componentName: 'Iconify'
        })
    ]
})
