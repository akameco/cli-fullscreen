# cli-fullscreen [![Build Status](https://travis-ci.org/akameco/cli-fullscreen.svg?branch=master)](https://travis-ci.org/akameco/cli-fullscreen)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/cli-fullscreen.svg)](https://greenkeeper.io/)

> fullscreen for cli


## Install

```
$ npm install --save cli-fullscreen
```


## Usage

```js
const cliFullscreen = require('cli-fullscreen');

cliFullscreen.enter();
cliFullscreen.leave();
```

## API

### cliFullscreen.enter

Enter Fullscreen.
Hide cusur.
Ignore stdin.

### cliFullscreen.leave

Restore screen.
Show cusur.

## License

MIT © [akameco](http://akameco.github.io)
