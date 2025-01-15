"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAME_FORMAT = exports.PROTOCOL_MLLP_FOOTER = exports.PROTOCOL_MLLP_END = exports.PROTOCOL_MLLP_HEADER = void 0;
/** @internal */
exports.PROTOCOL_MLLP_HEADER = Buffer.from([0x0b]);
/** @internal */
exports.PROTOCOL_MLLP_END = Buffer.from([0x1c]);
/** @internal */
exports.PROTOCOL_MLLP_FOOTER = Buffer.from([0x0d]);
/** @internal */
exports.NAME_FORMAT = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/; //eslint-disable-line
