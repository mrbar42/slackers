'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Base;

var _preact = require('preact');

function Base(_ref) {
  var text = _ref.text,
      backgroundImage = _ref.backgroundImage,
      children = _ref.children,
      className = _ref.className;

  var _styles = styles(),
      base = _styles.base,
      box = _styles.box,
      icon = _styles.icon;

  icon.backgroundImage = 'url(\'' + backgroundImage + '\')';
  return (0, _preact.h)('div', {
    className: className,
    style: base
  }, (0, _preact.h)('div', { style: box }, (0, _preact.h)('div', { style: icon }), text || '', children));
}

function styles() {
  return {
    base: {
      backgroundColor: 'rgb(244, 252, 255)',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    box: {
      color: '#ED6C30',
      textAlign: 'center',
      display: 'block',
      fontSize: '44px',
      fontWeight: 'bold',
      position: 'absolute',
      width: 300,
      height: 405,
      margin: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    icon: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      width: 230,
      height: 230,
      margin: 'auto'
    }
  };
}
module.exports = exports['default'];