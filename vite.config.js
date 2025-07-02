import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
            'resources/js/portfolio.js',
        ]),
    ],
    base: '/build/',
    build: {
        outDir: 'public/build',
        emptyOutDir: true,
    },
});
