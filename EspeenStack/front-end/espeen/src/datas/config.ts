/*
	>> dragusheen - { dragusheen.epitech@gmail.com }

	(„• ֊ •„)❤
	┏━U━━━U━━━━━━━━━━━━━┓
	┃ Have a good day ! ┃
	┗━━━━━━━━━━━━━━━━━━━┛
*/

/* Site Name */
export const siteName = "Espeen";


/* Site Icon */
export const siteIcon = "img/espeen-logo.svg";


/* Pages */
import HomeView from '@/views/HomeView.vue'
import SettingsView from '@/views/SettingsView.vue'

// Pages for the router
export const Pages = [
	{
		path: '/',
		name: 'Home',
		component: HomeView
	},
	{
		path: '/settings',
		name: 'Settings',
		component: SettingsView
	},
];

// Links for the navbar
export const Links = Pages.filter(page => page.path !== '/').map(page => { return { name: page.name, path: page.path } });
