/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            backgroundImage: {
                'banner': "url('/banner-sm.webp')",
                'rio': "url('/rio-bg-sm.webp')",
                'backgroundtrajetoria': "url(/trajetoria/background-trajetoria.png)"
            },
            colors: {
                "light-green": "#dee8da",
                "green": "#73ef51",
                "blue": "#0c0d65 ",
                "dark-blue": "#01012f",
            },
            animation: {
                'spin-minute': 'spin 60s linear infinite',
                'spin-hour': 'spin 3600s linear infinite',
                'spin-day': 'spin 86400s linear infinite',
            },
            fontFamily: {
                'geo-hair': 'Geo-hair',
                'geo-bold': 'Geo-bold',
                'geo-thin': 'Geo-thin',
                'geo-regular': 'Geo-regular',
                'hum-thin': 'Hum-thin',
                'uni-heavy': 'Uni-heavy',
                'uni-italic': 'Uni-italic',
                'uni-thin': 'Uni-thin',
                'uni-thin-italic': 'Uni-thin-italic',
            },
            letterSpacing: {
                tightest: '-.075em',
                tight: '-.025em',
                normal: '0',
                wide: '.025em',
                wider: '.05em',
                widest: '.25em',
            }
        },
	},
	plugins: [],
}
