import { Message } from "node-hl7-client";
/**
 * Inbound Request Props
 * @since 1.0.0
 */
export interface InboundRequestProps {
    type: string;
}
/**
 * Inbound Request
 * @since 1.0.0
 */
export declare class InboundRequest {
    /** @internal */
    private readonly _message?;
    /** @internal */
    private readonly _fromType;
    /**
     * @since 1.0.0
     * @param message
     * @param props
     */
    constructor(message: Message, props: InboundRequestProps);
    /** '
     * Get Stored Message
     * @since 1.0.0
     */
    getMessage(): Message;
    getType(): string;
}
