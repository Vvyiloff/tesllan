import publicKey from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Aurora Launcher',
};

export const api = {
    ws: 'wss://vvyil-vpn.ru/launcher-api/ws',
    web: 'https://vvyil-vpn.ru/launcher-api',
    publicKey,
};

export const appPath = '.aurora-launcher';
