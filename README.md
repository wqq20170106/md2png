# md2png

[![Build Status][actions-img]][actions-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![Code Style][style-img]][style-url]

> Awesome node modules.

## Installation

```shell
$ npm install md2png

# or yarn
$ yarn add md2png
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const md2Png = require('md2png')
const result = md2Png('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### md2Png(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx md2png <input> [options]
```

Globally install:

```shell
$ npm install md2png -g
# or yarn
$ yarn global add md2png
```

```shell
$ md2png --help
md2png/0.1.0

Usage:
  $ md2png <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ md2png --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ md2png w --host zce.me
```

## Related

- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [wangqianqian07](https://rock.me)



[actions-img]: https://img.shields.io/github/workflow/status/wqq20170106/md2png/CI
[actions-url]: https://github.com/wqq20170106/md2png/actions
[codecov-img]: https://img.shields.io/codecov/c/github/wqq20170106/md2png
[codecov-url]: https://codecov.io/gh/wqq20170106/md2png
[license-img]: https://img.shields.io/github/license/wqq20170106/md2png
[license-url]: https://github.com/wqq20170106/md2png/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/md2png
[downloads-url]: https://npm.im/md2png
[version-img]: https://img.shields.io/npm/v/md2png
[version-url]: https://npm.im/md2png
[dependency-img]: https://img.shields.io/librariesio/github/wqq20170106/md2png
[dependency-url]: https://github.com/wqq20170106/md2png
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
