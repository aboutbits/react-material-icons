import { type UserConfig, defineConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  // One entry per icon: consumers import single icons, never a barrel
  entry: ['src/Icon*.tsx'],
  format: 'esm',
  platform: 'neutral',
  unbundle: true,
  dts: false, // emitted by tsc (tsconfig.build.json), ~6x faster for 20k files
  report: { summary: true },
})

export default config
