//     Author:
//     >> dragusheen - { dragusheen.epitech@gmail.com }

//     („• ֊ •„)❤
//     ┏━U━━━U━━━━━━━━━━━━━┓
//     ┃ Have a good day !             ┃
//     ┗━━━━━━━━━━━━━━━━━━━┛

import { ref, onMounted } from 'vue';

export const theme = ref('dark');
export const colorblind = ref('emerald');

export const updateTheme = () => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme.value}-theme`);
};

export const updateColorblind = () => {
    document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia', 'emerald');
    document.body.classList.add(colorblind.value);
};

export const initializeThemeAndColorblind = () => {
    onMounted(() => {
        if (document.body.classList.contains('light-theme')) {
            theme.value = 'light';
        } else {
            theme.value = 'dark';
        }

        if (document.body.classList.contains('protanopia')) {
            colorblind.value = 'protanopia';
        } else if (document.body.classList.contains('deuteranopia')) {
            colorblind.value = 'deuteranopia';
        } else if (document.body.classList.contains('tritanopia')) {
            colorblind.value = 'tritanopia';
        } else if (document.body.classList.contains('achromatopsia')) {
            colorblind.value = 'achromatopsia';
        } else {
            colorblind.value = 'emerald';
        }

        updateTheme();
        updateColorblind();
    });
};
