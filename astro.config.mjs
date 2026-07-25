import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://somedosecoffee.ie',
  output: 'static',
  compressHTML: true,
  image: {
    domains: [],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
