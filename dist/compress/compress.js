"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;
var _jsoncrush = _interopRequireDefault(require("jsoncrush"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function compress(data) {
  const textWithoutSpaces = JSON.stringify(data, undefined, 0);
  return _jsoncrush.default.crush(textWithoutSpaces);
}