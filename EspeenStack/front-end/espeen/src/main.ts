/*
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { siteName, siteIcon } from './datas/config'

const app = createApp(App)

function setFavicon(url: string) {
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
    if (!link) {
        link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url;
}

app.use(router)

app.mount('#app')

document.title = siteName
setFavicon(siteIcon);

