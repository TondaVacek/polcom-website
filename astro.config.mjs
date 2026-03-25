// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs', 'lt', 'ro'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
