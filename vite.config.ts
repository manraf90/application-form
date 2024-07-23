import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        plugins: [react(), svgr()],
        server: {
            port: 3000,
            host: '127.0.0.1'
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    };
});
