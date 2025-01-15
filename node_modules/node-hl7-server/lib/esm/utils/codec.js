import { PROTOCOL_MLLP_END, PROTOCOL_MLLP_FOOTER, PROTOCOL_MLLP_HEADER, } from "./constants.js";
/** MLLPCodec Class
 * @since 3.1.0 */
export class MLLPCodec {
    /**
     * @since 3.1.0
     * @param encoding
     * @param returnCharacter
     */
    constructor(encoding = "utf-8", returnCharacter = "\r") {
        /** @internal */
        this.lastMessage = null;
        /** @internal */
        this.dataBuffer = Buffer.alloc(0);
        this._encoding = encoding;
        this._returnCharacter = returnCharacter;
    }
    /**
     * Process the stored message that was sent over.
     * @since 3.1.0
     * @private
     */
    processMessage() {
        const messages = [];
        const dataString = this.dataBuffer.toString(this._encoding);
        const messageParts = dataString.split("\u001c\r");
        // loop though the message parts
        for (const part of messageParts) {
            if (part.trim() !== "") {
                const trimmedPart = part.trim();
                messages.push(this.stripMLLPCharacters(trimmedPart));
            }
        }
        // put the entire message together
        this.lastMessage = messages.join(this._returnCharacter);
        // clear the data buffer
        this.dataBuffer = Buffer.alloc(0);
    }
    /**
     * @since 3.1.0
     * @param message
     * @private
     */
    stripMLLPCharacters(message) {
        // eslint-disable-next-line no-control-regex
        return message.replace(/\u000b/g, "").replace(/\u001c/g, "");
    }
    /**
     * Process the incoming data from the client.
     * @since 3.1.0
     * @param data
     */
    receiveData(data) {
        this.dataBuffer = Buffer.concat([this.dataBuffer, data]);
        // only go into this code see that the last part of the dataBuffer contains the end and footer protocol
        if (this.dataBuffer.includes(0x1c) && this.dataBuffer.includes(0x0d)) {
            // process the message now
            void this.processMessage();
            // return true
            return true;
        }
        // return false because we are still waiting for more of the message to come over
        return false;
    }
    /**
     * Get the last message.
     * @since 3.1.0
     */
    getLastMessage() {
        return this.lastMessage;
    }
    /**
     * Send a message and send it to the remote side.
     * @since 3.1.0
     * @param socket
     * @param message
     * @param encoding
     */
    sendMessage(socket, message, encoding) {
        const messageBuffer = Buffer.concat([
            PROTOCOL_MLLP_HEADER,
            Buffer.from(message, encoding),
            PROTOCOL_MLLP_END,
            PROTOCOL_MLLP_FOOTER,
        ]);
        socket?.write(messageBuffer);
    }
}
