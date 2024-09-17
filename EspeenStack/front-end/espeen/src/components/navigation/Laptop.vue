<!--
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
-->

<template>
    <nav class="fixed top-0 left-0 w-full m-w-full flex justify-end items-center p-0">
        <router-link to="/" class="font-black text-2xl px-4" @click="scrollTop()">{{ siteName }}</router-link>
        <router-link
            v-for="link in Links"
            :key="link.name"
            :to="link.path"
            @click="scrollTop()"
            class="flex items-center px-5 h-full"
        >
            {{ link.name }}
        </router-link>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { siteName } from '@/datas/config';
import { Links } from '@/datas/config';

function scrollTop() {
    window.scrollTo(0, 0);
}
</script>

<style scoped>
nav {
    background: var(--color-green);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    height: 64px;
}

nav a {
    text-decoration: none;
    color: var(--color-absolute-light);
}

nav a:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

nav a:first-child {
    margin-right: auto;
    background-color: transparent !important;
}

.router-link-active {
    font-weight: 900;
}
</style>

