module.exports = function awaitStart() {
    console.log('App is starting...');
    require('../packages/music-cover-renderer/server/app');
    require('../server/display');
    require('../server/backend/app')

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}