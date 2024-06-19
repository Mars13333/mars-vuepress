// @PF: 笔记组配置
/*
notes.ts: 配置对应navbar下的左侧子菜单,items[]自动解析
*/
import {definePlumeNotesConfig} from 'vuepress-theme-plume'

export const myNotes = definePlumeNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        {
            dir: 'react',
            link: '/react/',
            sidebar: [
                {
                    text: '工具ABC',
                    icon: 'tabler:tools',
                    items: ['R1', 'R2'],
                },
            ],
        },
        {
            dir: 'vue',
            link: '/vue/',
            sidebar: [
                {
                    text: '聊聊Vue',
                    icon: 'tabler:tools',
                    items: ['V1', 'V2'],
                },
            ],
        },
    ],
})
