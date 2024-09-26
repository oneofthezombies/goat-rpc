import protobuf from 'protobufjs'
import * as grpc from '@grpc/grpc-js'

const protoRoot = protobuf.loadSync('src/my_package.proto')

const myService = protoRoot.lookupService('my_package.MyService')

const myUnaryMethod = myService.methods['MyUnary']
const myClientStreamMethod = myService.methods['MyClientStream']
const myServerStreamMethod = myService.methods['MyServerStream']
const myBidiStreamMethod = myService.methods['MyBidiStream']

const myServiceImpl = myService.create((method, requestData, callback) => {
  console.log(method, requestData, callback)
})

const myUnaryRequestType = protoRoot.lookupType(
  myUnaryMethod?.requestType ?? ''
)

const myUnaryResponseType = protoRoot.lookupType(
  myUnaryMethod?.responseType ?? ''
)

// myServiceImpl.rpcCall(
//   myUnaryMethod as unknown as protobuf.Method,
//   myUnaryRequestType,
//   myUnaryResponseType,
//   {},
//   (err, response) => {
//     console.log(err, response)
//   }
// )

const server = new grpc.Server()
const grpcDefinition = grpc.loadPackageDefinition({})
server.addService(myService.methods, {})

console.log(
  protoRoot,
  myService,
  myUnaryMethod,
  myClientStreamMethod,
  myServerStreamMethod,
  myBidiStreamMethod,
  myUnaryRequestType,
  server,
  grpcDefinition,
  myServiceImpl,
  myUnaryResponseType
)
