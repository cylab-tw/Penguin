"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HL7ListenerError = exports.HL7ServerError = void 0;
/** Base Error Class
 * @since 1.0.0 */
class HL7Error extends Error {
    /** @internal */
    constructor(code, message) {
        super(message);
        this.name = "HL7ServerError";
        this.code = code;
    }
}
/** Server Error
 * @since 1.0.0 */
class HL7ServerError extends HL7Error {
    constructor(message) {
        super(500, message);
        /** @internal */
        this.name = "HL7ServerError";
    }
}
exports.HL7ServerError = HL7ServerError;
/** Listener Error
 * @since 1.0.0 */
class HL7ListenerError extends Error {
    constructor() {
        super(...arguments);
        /** @internal */
        this.name = "HL7ListenerError";
    }
}
exports.HL7ListenerError = HL7ListenerError;
