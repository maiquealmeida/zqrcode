"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _compress = require("./compress");
Object.keys(_compress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _compress[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compress[key];
    }
  });
});
var _decompress = require("./decompress");
Object.keys(_decompress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _decompress[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _decompress[key];
    }
  });
});
var _qrcode = require("./qrcode");
Object.keys(_qrcode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _qrcode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _qrcode[key];
    }
  });
});