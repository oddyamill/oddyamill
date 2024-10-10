import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://oddya.ru',
  output: 'hybrid',
  adapter: cloudflare(),
  build: {
    assets: 'assets',
  },
  markdown: {
    remarkPlugins: [
      () => {
        return (_, file) =>
          void (file.data.astro.frontmatter.layout ??= '@layouts/Layout.astro')
      },
    ],
  },
  integrations: [sitemap()],
})
