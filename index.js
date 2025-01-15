import { Server } from 'node-hl7-server'

const server = new Server()

const IB = server.createInbound({port: 3000}, async (req, res) => {
    const messageReq = req.getMessage()._text
    const messageRes = res.getAckMessage()
    console.log(messageReq)
})