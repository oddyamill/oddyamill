import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
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
})
