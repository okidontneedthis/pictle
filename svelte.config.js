import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

const config = {
  preprocess: preprocess(),

  kit: {
    // 👇 Use adapter-static and specify a fallback
    adapter: adapter({
      fallback: 'index.html'
    }),

    // 👇 Important for GitHub Pages
    paths: {
      base: dev ? '' : '/pictle'
    },

    // 👇 The prerender property is no longer needed with the static adapter
    // It's recommended to remove it
  }
};

export default config;