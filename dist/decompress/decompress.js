"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decompress = decompress;
var _jsoncrush = _interopRequireDefault(require("jsoncrush"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function decompress(compressedData) {
  const decompressedData = _jsoncrush.default.uncrush(compressedData);
  return JSON.parse(decompressedData);
}