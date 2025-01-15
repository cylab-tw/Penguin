"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundRequest = void 0;
const exception_js_1 = require("../../utils/exception.js");
/**
 * Inbound Request
 * @since 1.0.0
 */
class InboundRequest {
    /**
     * @since 1.0.0
     * @param message
     * @param props
     */
    constructor(message, props) {
        this._fromType = props.type;
        this._message = message;
    }
    /** '
     * Get Stored Message
     * @since 1.0.0
     */
    getMessage() {
        if (typeof this._message !== "undefined") {
            return this._message;
        }
        throw new exception_js_1.HL7ListenerError("Message is not defined.");
    }
    getType() {
        return this._fromType;
    }
}
exports.InboundRequest = InboundRequest;
