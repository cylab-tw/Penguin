/** Base Error Class
 * @since 1.0.0 */
declare class HL7Error extends Error {
    /** @internal */
    code: number;
    /** @internal */
    constructor(code: number, message: string);
}
/** Server Error
 * @since 1.0.0 */
export declare class HL7ServerError extends HL7Error {
    /** @internal */
    name: string;
    constructor(message: string);
}
/** Listener Error
 * @since 1.0.0 */
export declare class HL7ListenerError extends Error {
    /** @internal */
    name: string;
}
export {};
