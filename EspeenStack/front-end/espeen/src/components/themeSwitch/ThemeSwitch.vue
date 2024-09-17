<template>
    <div class="selectors">
        <select v-model="theme" @change="updateTheme">
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
        </select>

        <select v-model="colorblind" @change="updateColorblind">
            <option value="emerald">Default Theme</option>
            <option value="protanopia">Protanopia-Friendly</option>
            <option value="deuteranopia">Deuteranopia-Friendly</option>
            <option value="tritanopia">Tritanopia-Friendly</option>
            <option value="achromatopsia">Achromatopsia-Friendly</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { theme, colorblind, updateTheme, updateColorblind, initializeThemeAndColorblind } from '@/services/themeManager';

initializeThemeAndColorblind();
</script>

<style scoped>
.selectors {
    display: flex;
    gap: 1rem;
}

select {
    background-color: var(--color-light);
}
</style>
