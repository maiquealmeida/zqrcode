/// <reference types="node" />
import { QrCodeStreamPassThrough } from './types';
export declare function getDataURL(value: string): Promise<string>;
export declare function getImageStream(value: string): Promise<QrCodeStreamPassThrough>;
