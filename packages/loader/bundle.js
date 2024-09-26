/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  syntax: "proto3"
})
.addJSON({
  my_package: {
    nested: {
      MyMessage: {
        oneofs: {
          myOneof: {
            oneof: [
              "myOneofValue0",
              "myOneofValue1"
            ]
          },
          _myOptionalI32: {
            oneof: [
              "myOptionalI32"
            ]
          }
        },
        fields: {
          myI32: {
            type: "int32",
            id: 1
          },
          myString: {
            type: "string",
            id: 2
          },
          myBool: {
            type: "bool",
            id: 3
          },
          myF32: {
            type: "float",
            id: 4
          },
          mySubMessage: {
            type: "MySubMessage",
            id: 5
          },
          myStrings: {
            rule: "repeated",
            type: "string",
            id: 6
          },
          myEnum: {
            type: "MyEnum",
            id: 7
          },
          myOneofValue0: {
            type: "string",
            id: 8
          },
          myOneofValue1: {
            type: "string",
            id: 9
          },
          myTimestamp: {
            type: "google.protobuf.Timestamp",
            id: 10
          },
          myBytes: {
            type: "bytes",
            id: 11
          },
          myOptionalI32: {
            type: "int32",
            id: 12,
            options: {
              proto3_optional: true
            }
          },
          mySubPackageMessage: {
            type: "my_sub_package.MyMessage",
            id: 13
          }
        },
        nested: {
          MySubMessage: {
            fields: {
              mySubI32: {
                type: "int32",
                id: 1
              }
            }
          },
          MyEnum: {
            values: {
              VALUE0: 0,
              VALUE1: 1
            }
          }
        }
      },
      MyService: {
        methods: {
          MyUnary: {
            requestType: "MyMessage",
            responseType: "MyMessage"
          },
          MyClientStream: {
            requestType: "MyMessage",
            requestStream: true,
            responseType: "MyMessage"
          },
          MyServerStream: {
            requestType: "MyMessage",
            responseType: "MyMessage",
            responseStream: true
          },
          MyBidiStream: {
            requestType: "MyMessage",
            requestStream: true,
            responseType: "MyMessage",
            responseStream: true
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        }
      }
    }
  },
  my_sub_package: {
    nested: {
      MyMessage: {
        fields: {
          myInt: {
            type: "int32",
            id: 1
          }
        }
      }
    }
  }
});

export { $root as default };
