module.exports = function defineUIConfig() {
    const config = {
        plugins: [
            { name: 'music-ui' },
        ],
        dependencies: [
            { name: 'music-code', path: './packages/music-code' },
            { name: 'music-cover-renderer', path: './packages/music-cover-renderer', package: [
                { name: 'music-server', path: './packages/music-cover-renderer/server/music-server' },
                { name: 'api-plugin', path: './packages/music-cover-renderer/server/api-plugin' },
            ] },
        ],
        settings: {
            dashboard: {
                host: 'localhost',
                port: 3001,
            },
            server: {
                renderer: {
                    host: 'localhost',
                    port: 3002,
                },
                backend: {
                    host: 'localhost',
                    port: 3003,
                }
            },
            controlpanel: {
                host: 'localhost',
                port: 3004,
            },
        },
    }
    return config;
}