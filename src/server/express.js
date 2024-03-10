import express from 'express';
import path from 'path';

import {webpack} from 'webpack';
import wdm from 'webpack-dev-middleware';
import whm from 'webpack-hot-middleware';

import config from '../../config/webpack.dev';


const server = express();

const compiler = webpack(config);

const webpackDevMiddleware = wdm(
    compiler,
    {
        stats: true,
    }
);
const webpackHotMiddleware = whm(compiler);
const staticMiddleware = express.static('dist');

/**
 * Order is important here.
 */
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);
server.listen(8080, () => {
    console.log('server listening');
});
