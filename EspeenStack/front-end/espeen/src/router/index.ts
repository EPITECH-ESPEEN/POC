/*
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from '@/datas/config'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: Pages,
})

export default router
