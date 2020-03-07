const nativeTheme = require('electron');
const path = require('path');
const os = require('os');
const fs = require('fs');

// TODO: Maybe there is some better way with some decorate ... function
const CONFIG_FILE = '.hyper.js';
const KEYS = {
    'CONFIG': 'nightAndDay',
    'LIGHT': 'day',
    'DARK': 'night',
};

function confPath() {
    dev = path.resolve("./" + CONFIG_FILE);
    prod = path.join(os.homedir(), CONFIG_FILE);
    return (fs.existsSync(dev) ? dev : prod);
}

function decorateConfig(config) {
    themeType = (nativeTheme.shouldUseDarkColors? KEYS.DARK : KEYS.LIGHT);
    themeName = require(confPath())[KEYS.CONFIG][themeType];
    decoratedConfig = require(themeName).decorateConfig(config);
    return decorateConfig;
}

exports.decorateConfig = decorateConfig;

// TODO: Maybe this is helpful somehow for updating the theme on the fly.

// function middleware(store, action) {
//     console.log(store);
//     console.log(action);
// }

// exports.middleware = store => next => action => {
//     middleware(store, action);
//     next(action);
// };
