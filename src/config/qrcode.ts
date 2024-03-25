import QRCode, { QRCodeToDataURLOptionsOther, QRCodeToFileStreamOptions } from 'qrcode';

export const qrCodeDataUrlDefaultParams: QRCodeToDataURLOptionsOther = {
  type: 'image/png',
}

export const qrCodeImagestreamDefaultParams: QRCodeToFileStreamOptions = {
  type: 'png',
  width: 200,
  errorCorrectionLevel: 'H'
}