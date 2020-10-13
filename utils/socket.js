import socketClient from 'socket.io-client'
const server = "http://127.0.0.1";
const serverPORT = 4000;
const client = socketClient(`${server}:${serverPORT}`)

client.on('connect',()=>{ 
    console.log(`socket is connected to the server ${server}:${serverPORT}, ID : ${client.id}`)
    
    
})
module.exports= client;