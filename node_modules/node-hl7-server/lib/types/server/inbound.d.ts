import EventEmitter from "events";
import { Socket } from "net";
import { ListenerOptions, normalizeListenerOptions } from "../utils/normalize.js";
import { InboundRequest } from "./modules/inboundRequest.js";
import { SendResponse } from "./modules/sendResponse.js";
import { Server } from "./server.js";
/**
 * Inbound Handler
 * @remarks The handler that will handle the user parsing a received message by the client to the server.
 * @since 1.0.0
 * @example
 * In this example, we are processing the results in an async handler.
 *```ts
 *  const IB_ADT = server.createInbound({port: 3000}, async (req, res) => {
 *    const messageReq = req.getMessage()
 *    const messageRes = res.getAckMessage()
 *  })
 *```
 */
export type InboundHandler = (req: InboundRequest, res: SendResponse) => void;
export interface Inbound extends EventEmitter {
    /** When the connection form the client is closed. We might have an error, we might not. */
    on(name: "client.close", cb: (hasError: boolean) => void): this;
    /** When a connection from the client is made. */
    on(name: "client.connect", cb: (socket: Socket) => void): this;
    /** When an error was sent by the connecting source. */
    on(name: "client.error", cb: (err: any) => void): this;
    /** Something wrong happened during data parsing. */
    on(name: "data.error", cb: (err: any) => void): this;
    /** The raw data received by this particular inbound connection. */
    on(name: "data.raw", cb: (rawData: string) => void): this;
    /** When the socket itself has an error. */
    on(name: "error", cb: (err: any) => void): this;
    /** When the socket is ready and listening on the port. */
    on(name: "listen", cb: () => void): this;
    /** An HL7 response was sent */
    on(name: "response.sent", cb: () => void): this;
}
/**
 * Inbound Listener Class
 * @since 1.0.0
 */
export declare class Inbound extends EventEmitter implements Inbound {
    /** @internal */
    private readonly _handler;
    /** @internal */
    _main: Server;
    /** @internal */
    _opt: ReturnType<typeof normalizeListenerOptions>;
    /** @internal */
    private readonly _socket;
    /** @internal */
    private readonly _sockets;
    /** @internal */
    private _dataResult;
    /** @internal */
    private _codec;
    /** @internal */
    readonly stats: {
        /** Total message received to server.
         * @since 2.0.0 */
        received: number;
        /** Total message parsed by the server..
         * @since 2.0.0 */
        totalMessage: number;
    };
    /**
     * Build a Listener
     * @since 1.0.0
     * @param server
     * @param props
     * @param handler
     */
    constructor(server: Server, props: ListenerOptions, handler: InboundHandler);
    /** Close Listener Instance.
     * This be called for each listener, but if the server instance is closed and shut down, this will also fire off.
     * @since 1.0.0 */
    close(): Promise<boolean>;
    /** @internal */
    private _listen;
    /** @internal */
    private _onTcpClientConnected;
    /** @internal */
    private _closeSocket;
}
