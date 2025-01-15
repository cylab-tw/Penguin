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
export class HL7ServerError extends HL7Error {
    constructor(message) {
        super(500, message);
        /** @internal */
        this.name = "HL7ServerError";
    }
}
/** Listener Error
 * @since 1.0.0 */
export class HL7ListenerError extends Error {
    constructor() {
        super(...arguments);
        /** @internal */
        this.name = "HL7ListenerError";
    }
}
