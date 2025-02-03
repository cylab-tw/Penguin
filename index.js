import { Server } from 'node-hl7-server'

const server = new Server()

const IB = server.createInbound({port: 3000}, async (req, res) => {
    const messageReq = req.getMessage()
    const messageRes = res.getAckMessage()
    var a = messageReq._text.split("|")
    for(var i=0;i<a.length;i++){
        console.log(a[i]+"\n")
    }
    await res.sendResponse("AR")
})