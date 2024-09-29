import proto from '@goat-rpc/proto'
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 8080 })
server.on('connection', (socket, request) => {
  console.log(socket, request)
  socket.on('close', (code, reason) => {
    console.log(code, reason)
  })
  socket.on('error', (error) => {
    console.log(error)
  })
  socket.on('message', (data, isBinary) => {
    console.log(data.toString(), isBinary)
  })
  socket.on('open', () => {
    console.log('open')
  })
  socket.on('ping', (data) => {
    console.log(data)
  })
})
server.on('close', () => {
  console.log('close')
})
server.on('error', (error) => {
  console.log(error)
})
server.on('headers', (headers, request) => {
  console.log(headers, request)
})
server.on('listening', () => {
  console.log('listening')
})
