<!--
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
-->

<template>
    <div class="full" :class="{hidden: !showSidebar}" ></div>
    <nav class="fixed top-0 left-0 w-full m-w-full flex justify-between items-center p-0">
        <RouterLink to="/" class="fake-title" @click="scrollTop()">{{ siteName }}</RouterLink>
        <div class="fake-title" @click="showSidebar = !showSidebar">
            <icon-menu />
        </div>
    </nav>
    <div class="fiex top-0 right-0 sidebar" :class="showSidebar ? 'slide-in' : 'slide-out'">
        <div class="close_button" @click="showSidebar = !showSidebar">
            <icon-close />
        </div>
        <router-link
            v-for="link in Links"
            :key="link.name"
            :to="link.path"
            @click="scrollTop()"
        >
            {{ link.name }}
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconMenu from '@/components/icons/IconMenu.vue';
import IconClose from '@/components/icons/IconClose.vue';
import { ref } from 'vue';
import { siteName } from '@/datas/config';
import { Links } from '@/datas/config';

let showSidebar = ref(false);

function scrollTop() {
    showSidebar.value = false;
    window.scrollTo(0, 0);
}
</script>

<style scoped>
.full {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
}

nav {
    background: var(--color-white);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    height: 64px;
}

a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: var(--color-black);
    padding: var(--size-1) var(--size-2);
}

.router-link-active {
    font-weight: var(--weight-extrabold);
}

.fake-title {
    font-weight: var(--weight-black);
    font-size: 1.5em;
    padding: var(--size-1) var(--size-2);
}

.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    background-color: var(--color-light);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
    z-index: 1001;
}

.close_button {
    display: flex;
    justify-content: flex-end;
    padding: var(--size-2);
}

.slide-in {
    transform: translateX(0);
}

.slide-out {
    transform: translateX(100%);
}

@media (max-width: 600px) {
    .sidebar {
        width: 100%;
    }
}

</style>