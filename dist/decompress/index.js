"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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