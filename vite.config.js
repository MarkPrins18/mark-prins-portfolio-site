import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
            'resources/js/portfolio.js',
            'resources/js/easter-eggs.js',
            'resources/js/mockups.js',
        ]),
    ],
});
