"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;
var _JSONCrush = _interopRequireDefault(require("../packages/JSONCrush"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function compress(data) {
  const textWithoutSpaces = JSON.stringify(data, undefined, 0);
  return _JSONCrush.default.crush(textWithoutSpaces);
}