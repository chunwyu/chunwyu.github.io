import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/chunwyu.github.io' : '',
        },
		adapter: adapter({
			fallback: 'app.html' // may differ from host to host
		})
	}
};

export default config;
