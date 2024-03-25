import QRCode, { QRCodeToDataURLOptionsOther } from 'qrcode';
import { qrCodeDataUrlDefaultParams, qrCodeImagestreamDefaultParams } from '../config/qrcode';
import { PassThrough } from 'stream';

export async function getDataURL(value: string) {
  const dataURL = await QRCode.toDataURL(value, qrCodeDataUrlDefaultParams);
  return dataURL;
}

export async function getImageStream(value: string) {
  const qrStream = new PassThrough();

  await QRCode.toFileStream(qrStream, value, qrCodeImagestreamDefaultParams);

  return qrStream;
}