"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const events_1 = __importDefault(require("events"));
const inbound_js_1 = require("./inbound.js");
const normalize_js_1 = require("../utils/normalize.js");
/**
 * Server Class
 * @remarks Start Server listening on a network address.
 * {@link ServerOptions} Link to the options that can be passed into props.
 * @since 1.0.0
 */
class Server extends events_1.default {
    /**
     * @since 1.0.0
     * @param props {@link ServerOptions}
     * @example
     *
     * Non-TLS:
     * ```
     * const server = new Server()
     * ```
     *
     * TLS:
     * ```
     * const server = new Server(
     *   {
     *     tls:
     *       {
     *         key: fs.readFileSync(path.join('certs/', 'server-key.pem')), // where your certs are
     *         cert: fs.readFileSync(path.join('certs/', 'server-crt.pem')), // where your certs are
     *         rejectUnauthorized: false
     *       }
     *   })
     *   ```
     *
     */
    constructor(props) {
        super();
        this._opt = (0, normalize_js_1.normalizeServerOptions)(props);
    }
    /** This creates an instance of a HL7 server.
     * @remarks You would specify your port and what it will do when it gets a message.
     * @since 1.0.0
     * @example
     *```
     * const server = new Server()
     *
     * const IB = server.createInbound({port: 3000}, async (req, res) => {
     *   const messageReq = req.getMessage()
     *   const messageRes = res.getAckMessage()
     *   // do your code here
     * })
     *```
     *
     * */
    createInbound(props, cb) {
        return new inbound_js_1.Inbound(this, props, cb);
    }
}
exports.Server = Server;
