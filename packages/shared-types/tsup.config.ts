import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: {
    only: true,
    resolve: false, // Don't resolve external types
  },
  clean: true,
  sourcemap: false,
  external: ['zod'], // Don't bundle dependencies
  tsconfig: './tsconfig.json',
});
