# create-vue-component

[![Build Status](https://img.shields.io/travis/fengyuanchen/create-vue-component.svg)](https://travis-ci.org/fengyuanchen/create-vue-component) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/create-vue-component.svg)](https://www.npmjs.com/package/@chenfengyuan/create-vue-component) [![Version](https://img.shields.io/npm/v/@chenfengyuan/create-vue-component.svg)](https://www.npmjs.com/package/@chenfengyuan/create-vue-component)

> Convert anything to a Vue component.

## Main

```text
dist/
├── create-vue-component.js        (UMD)
├── create-vue-component.min.js    (UMD, compressed)
├── create-vue-component.common.js (CommonJS, default)
└── create-vue-component.esm.js    (ES Module)
```

## Install

```shell
npm install @chenfengyuan/create-vue-component
```

## Usage

### Syntax

```js
createVueComponent(content, options)
```

- `content`
  - Type: `*`
  - The content for creating Vue component.

- `options` (optional)
  - Type: `Object`
  - The options for creating Vue component.
  - Properties:
    - `tag`
      - Type: `String`
      - Default: `'span'`
      - The tag for root element of the created Vue component.
    - `data`
      - Type: `*`
      - The data as the second parameter if the `content` is a render function.

- (return value)
  - Type: `Object`
  - The created Vue component.
  - If the given content is a valid Vue component then return a clone of the content.
  - If the given content is a function then return a Vue component with the content as the `render` property value.
  - If the given content is anything else then return a Vue component with the content as the `template` property value.

### Examples

```js
import createVueComponent from '@chenfengyuan/create-vue-component';

createVueComponent({
  template: '<p>Hello, World!</p>',
});
// will render as: <p>Hello, World!</p>

createVueComponent('<strong>Hello, World!</strong>');
// will render as: <span><strong>Hello, World!</strong></span>

createVueComponent('Hello, World!');
// will render as: <span>Hello, World!</span>

createVueComponent('Hello, World!', {
  tag: 'p',
});
// will render as: <p>Hello, World!</p>

createVueComponent(true);
// will render as: <span>true</span>

createVueComponent(1);
// will render as: <span>1</span>

createVueComponent(['Hello', 'World']);
// will render as: <span>Hello,World</span>

createVueComponent(function content(createElement, data, context) {
  return createElement('p', `Hello, ${data.name}!`);
}, {
  data: {
    name: 'World',
  },
});
// will render as: <p>Hello, World!</p>

createVueComponent({});
// will render as: <span>[object Object]</span>

createVueComponent();
// will render as: <span>undefined</span>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com)
