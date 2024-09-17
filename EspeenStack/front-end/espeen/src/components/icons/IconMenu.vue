<!--
    Author:
    >> dragusheen - { dragusheen.epitech@gmail.com }

    Description:
    >> IconMenu component

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━━┓
    ┃ Have a good day ! ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
-->

<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 10.5C4.5 9.39543 5.17157 8.5 6 8.5H42C42.8284 8.5 43.5 9.39543 43.5 10.5C43.5 11.6046 42.8284 12.5 42 12.5H6C5.17157 12.5 4.5 11.6046 4.5 10.5Z" :fill="color"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 24.5C4.5 23.3954 5.17157 22.5 6 22.5H42C42.8284 22.5 43.5 23.3954 43.5 24.5C43.5 25.6046 42.8284 26.5 42 26.5H6C5.17157 26.5 4.5 25.6046 4.5 24.5Z" :fill="color"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 38.5C4.5 37.3954 5.17157 36.5 6 36.5H42C42.8284 36.5 43.5 37.3954 43.5 38.5C43.5 39.6046 42.8284 40.5 42 40.5H6C5.17157 40.5 4.5 39.6046 4.5 38.5Z" :fill="color"/>
    </svg>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

withDefaults(defineProps<{
    size?: number,
    color?: string
}>(), {
    size: 32,
    color: 'var(--color-dark)'
})
</script>
