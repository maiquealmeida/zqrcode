"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataURL = getDataURL;
exports.getImageStream = getImageStream;
var QRCode = _interopRequireWildcard(require("../qrcode"));
var _qrcode2 = require("../config/qrcode");
var _stream = require("stream");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function getDataURL(value) {
  const dataURL = await QRCode.toDataURL(value, _qrcode2.qrCodeDataUrlDefaultParams);
  return dataURL;
}
async function getImageStream(value) {
  const qrStream = new _stream.PassThrough();
  await QRCode.toFileStream(qrStream, value, _qrcode2.qrCodeImagestreamDefaultParams);
  return qrStream;
}