import proto from '@goat-rpc/proto'
import WebSocket, { RawData, WebSocketServer } from 'ws'
import { EventEmitter } from 'node:events'

type Transport = EventEmitter<{}>

const a = new Transport()
a.on('a', (...args) => {})
a.emit('a')

abstract class Writer {
  async write(data: Uint8Array): Promise<void> {
    await this.writeImpl(data)
  }

  abstract writeImpl(data: Uint8Array): Promise<void>
}

class WebSocketWriter extends Writer {
  constructor(private webSocket: WebSocket) {
    super()
  }

  async writeImpl(data: Uint8Array): Promise<void> {
    if (this.webSocket.readyState !== WebSocket.OPEN) {
      throw new Error('websocket is not open')
    }

    return new Promise((resolve, reject) => {
      this.webSocket.send(data, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }
}

type Context = {
  writer: Writer
}

type Receiver = {
  onMessage: (ctx: Context, data: Uint8Array) => void
  onRequest: (ctx: Context, request: proto.goat_rpc.IRequest) => void
  onSubscribe: (ctx: Context, subscribe: proto.goat_rpc.ISubscribe) => void
  onUnsubscribe: (
    ctx: Context,
    unsubscribe: proto.goat_rpc.IUnsubscribe
  ) => void
}

function onRequest(ctx: Context, request: proto.goat_rpc.IRequest) {
  console.log(ctx, request)
}
function onSubscribe(ctx: Context, subscribe: proto.goat_rpc.ISubscribe) {
  console.log(ctx, subscribe)
}
function onUnsubscribe(ctx: Context, unsubscribe: proto.goat_rpc.IUnsubscribe) {
  console.log(ctx, unsubscribe)
}

function onMessage(ctx: Context, data: Uint8Array) {
  const send = proto.goat_rpc.Send.decode(data)
  const { kind, request, subscribe, unsubscribe } = send
  if (!kind) {
    throw new Error('send data must include kind')
  }

  switch (kind) {
    case 'request':
      {
        if (!request) {
          throw new Error('send data must include request')
        }
        onRequest(ctx, request)
      }
      break
    case 'subscribe':
      {
        if (!subscribe) {
          throw new Error('send data must include subscribe')
        }
        onSubscribe(ctx, subscribe)
      }
      break
    case 'unsubscribe':
      {
        if (!unsubscribe) {
          throw new Error('send data must include unsubscribe')
        }
        onUnsubscribe(ctx, unsubscribe)
      }
      break
    default: {
      const exhaustiveCheck: never = kind
      throw new Error(`unhandled case: ${JSON.stringify(exhaustiveCheck)}`)
    }
  }
}

function parseMessage(data: RawData, isBinary: boolean): Uint8Array {
  if (!isBinary) {
    throw new Error('data must be binary')
  }

  if (!Buffer.isBuffer(data)) {
    throw new Error('data must be Buffer')
  }

  return data
}

abstract class Writer1 {
  async write(data: Uint8Array): Promise<void> {
    // 비동기 처리 로직을 반드시 구현하도록 강제
    await this.doWrite(data)
  }

  protected abstract doWrite(data: Uint8Array): Promise<void>
}

class WebSocketWriter1 extends Writer1 {
  protected doWrite(data: Uint8Array): Promise<void> {
    throw new Error('a')
  }
}

new WebSocketWriter1().write(new Uint8Array()).catch((e: unknown) => {
  console.error('b', e)
})

// const server = new WebSocketServer({ port: 8080 })
// server.on('connection', (socket, request) => {
//   console.log(socket, request)
//   socket.on('close', (code, reason) => {
//     console.log(code, reason)
//   })
//   socket.on('message', (data, isBinary) => {
//     const parsedData = parseMessage(data, isBinary)

//     const writer: Writer = {
//       write: (data) =>
//         new Promise((resolve, reject) => {
//           socket.send(data, (error) => {
//             if (error) {
//               reject(error)
//             } else {
//               resolve()
//             }
//           })
//         }),
//     }

//     const receiver: Receiver = {
//       onMessage,
//       onRequest,
//       onSubscribe,
//       onUnsubscribe,
//     }

//     const ctx: Context = {
//       writer,
//     }

//     receiver.onMessage(ctx, parsedData)
//   })
//   socket.on('open', () => {
//     console.log('open')
//   })
//   socket.on('ping', (data) => {
//     console.log(data)
//   })
//   socket.send('')
// })
// server.on('close', () => {
//   console.log('close')
// })
// server.on('error', (error) => {
//   console.log(error)
// })
// server.on('headers', (headers, request) => {
//   console.log(headers, request)
// })
// server.on('listening', () => {
//   console.log('listening')
// })
