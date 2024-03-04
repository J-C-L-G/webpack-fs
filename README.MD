# Webpack@5

### Chapter 1: Default configuration (Setup Dev Sever)
![wp-dev-server.png](docs%2Fepisode-1%2Fwp-dev-server.png)

<br/>
<br/>

### Chapter 2: Handling `CSS` and loaders (Intro to Loaders)
![css-loader-inline.png](docs%2Fepisode-2%2Fcss-loader-inline.png)

<br/>
<br/>

### Chapter 3: File Extract loaders for `HTML` and `Images`
![image-with-hash.png](docs%2Fepisode-3%2Fimage-with-hash.png)

<br/>
<br/>

### Chapter 4: [Babel](https://babeljs.io/) JS Transpiler Introduction
![babel-js-transpiler.png](docs%2Fepisode-4%2Fbabel-js-transpiler.png)

<br/>
<br/>

### Chapter 5: [Babel](https://babeljs.io/) Plugins and Presets
```json
  "plugins": [
    "@babel/plugin-transform-arrow-functions",
    "babel-plugin-async-to-promises"
  ]
```
![no-polyfill.png](docs%2Fepisode-5%2Fno-polyfill.png)

![core-js_fn_promise.png](docs%2Fepisode-5%2Fcore-js_fn_promise.png)

![babel-polyfill.png](docs%2Fepisode-5%2Fbabel-polyfill.png)

#### Using `Presets` to include `ES20XX` yearly features

```bash
npm install --save-dev @babel/preset-env
```

`babel.config.json`
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "debug": true,
        "targets": ["last 2 versions"]
      }
    ]
  ]
}
```
- [Browserlist](https://github.com/browserslist/browserslist)
- [Configuration for WebApp](https://browsersl.ist/#q=last+2+versions)

![browserlist-last-2-versions.png](docs%2Fepisode-5%2Fbrowserlist-last-2-versions.png)


```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```
A plugin that enables the re-use of Babel's injected helper code to save on code size. 
The transformation plugin is typically used only in development, but the runtime itself will be depended on by your deployed code.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "debug": true,
        "targets": ["last 2 versions"]
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

