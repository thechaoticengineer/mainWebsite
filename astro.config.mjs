// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://thechaotic.engineer',
	// Preserve Astro 6's spaces between inline elements.
	compressHTML: true,
	integrations: [mdx(), sitemap()],
});
