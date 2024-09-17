<!--
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
-->


<template>
    <div class="h-[64px]"></div>
    <div class="navbar-laptop"><navbar-laptop /></div>
    <div class="navbar-mobile"><navbar-mobile /></div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarLaptop from '@/components/navigation/Laptop.vue'
import NavbarMobile from '@/components/navigation/Mobile.vue';
import { initializeThemeAndColorblind } from '@/services/themeManager';

initializeThemeAndColorblind();
</script>

<style scoped>
.navbar-laptop {
    display: block;
}

.navbar-mobile {
    display: none;
}

@media (max-width: 1000px) {
    .navbar-laptop {
        display: none;
    }

    .navbar-mobile {
        display: block;
    }
}
</style>