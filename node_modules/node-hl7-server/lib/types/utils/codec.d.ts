import { Socket } from "node:net";
/** MLLPCodec Class
 * @since 3.1.0 */
export declare class MLLPCodec {
    /** @internal */
    private lastMessage;
    /** @internal */
    private dataBuffer;
    /** @internal */
    private readonly _encoding;
    /** @internal */
    private readonly _returnCharacter;
    /**
     * @since 3.1.0
     * @param encoding
     * @param returnCharacter
     */
    constructor(encoding?: BufferEncoding, returnCharacter?: string);
    /**
     * Process the stored message that was sent over.
     * @since 3.1.0
     * @private
     */
    private processMessage;
    /**
     * @since 3.1.0
     * @param message
     * @private
     */
    private stripMLLPCharacters;
    /**
     * Process the incoming data from the client.
     * @since 3.1.0
     * @param data
     */
    receiveData(data: Buffer): boolean;
    /**
     * Get the last message.
     * @since 3.1.0
     */
    getLastMessage(): string | null;
    /**
     * Send a message and send it to the remote side.
     * @since 3.1.0
     * @param socket
     * @param message
     * @param encoding
     */
    sendMessage(socket: Socket | undefined, message: string, encoding: BufferEncoding): void;
}
