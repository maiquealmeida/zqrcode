"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decompress = decompress;
var _JSONCrush = _interopRequireDefault(require("../packages/JSONCrush"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function decompress(compressedData) {
  const decompressedData = _JSONCrush.default.uncrush(compressedData);
  return JSON.parse(decompressedData);
}