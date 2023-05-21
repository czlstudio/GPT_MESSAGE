import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        width: '50px',
        height: '50px',
      },
    }),
  ],
})
