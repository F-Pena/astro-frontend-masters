import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters.netlify.app',
  output: 'static',

  integrations: [
      react({ include: ['**/react/*'] }),
      solidJs({ include: ['**/solid/*'] }),
	],

  adapter: netlify(),
});