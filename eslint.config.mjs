import ts from '@aboutbits/eslint-config/configs/ts'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ts,
  {
    ignores: ['dist', 'node_modules'],
  },
])
