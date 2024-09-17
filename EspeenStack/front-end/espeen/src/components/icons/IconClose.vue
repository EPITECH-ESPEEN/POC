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
        <path d="M13.5147 34.4853L24 24M34.4853 13.5147L24 24M24 24L13.5147 13.5147M24 24L34.4853 34.4853" :stroke="color" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
