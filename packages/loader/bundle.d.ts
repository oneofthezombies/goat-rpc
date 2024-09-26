import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace my_package. */
export namespace my_package {

    /** Properties of a MyMessage. */
    interface IMyMessage {

        /** MyMessage myI32 */
        myI32?: (number|null);

        /** MyMessage myString */
        myString?: (string|null);

        /** MyMessage myBool */
        myBool?: (boolean|null);

        /** MyMessage myF32 */
        myF32?: (number|null);

        /** MyMessage mySubMessage */
        mySubMessage?: (my_package.MyMessage.IMySubMessage|null);

        /** MyMessage myStrings */
        myStrings?: (string[]|null);

        /** MyMessage myEnum */
        myEnum?: (my_package.MyMessage.MyEnum|null);

        /** MyMessage myOneofValue0 */
        myOneofValue0?: (string|null);

        /** MyMessage myOneofValue1 */
        myOneofValue1?: (string|null);

        /** MyMessage myTimestamp */
        myTimestamp?: (google.protobuf.ITimestamp|null);

        /** MyMessage myBytes */
        myBytes?: (Uint8Array|null);

        /** MyMessage myOptionalI32 */
        myOptionalI32?: (number|null);

        /** MyMessage mySubPackageMessage */
        mySubPackageMessage?: (my_sub_package.IMyMessage|null);
    }

    /** Represents a MyMessage. */
    class MyMessage implements IMyMessage {

        /**
         * Constructs a new MyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: my_package.IMyMessage);

        /** MyMessage myI32. */
        public myI32: number;

        /** MyMessage myString. */
        public myString: string;

        /** MyMessage myBool. */
        public myBool: boolean;

        /** MyMessage myF32. */
        public myF32: number;

        /** MyMessage mySubMessage. */
        public mySubMessage?: (my_package.MyMessage.IMySubMessage|null);

        /** MyMessage myStrings. */
        public myStrings: string[];

        /** MyMessage myEnum. */
        public myEnum: my_package.MyMessage.MyEnum;

        /** MyMessage myOneofValue0. */
        public myOneofValue0?: (string|null);

        /** MyMessage myOneofValue1. */
        public myOneofValue1?: (string|null);

        /** MyMessage myTimestamp. */
        public myTimestamp?: (google.protobuf.ITimestamp|null);

        /** MyMessage myBytes. */
        public myBytes: Uint8Array;

        /** MyMessage myOptionalI32. */
        public myOptionalI32?: (number|null);

        /** MyMessage mySubPackageMessage. */
        public mySubPackageMessage?: (my_sub_package.IMyMessage|null);

        /** MyMessage myOneof. */
        public myOneof?: ("myOneofValue0"|"myOneofValue1");

        /**
         * Creates a new MyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyMessage instance
         */
        public static create(properties?: my_package.IMyMessage): my_package.MyMessage;

        /**
         * Encodes the specified MyMessage message. Does not implicitly {@link my_package.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: my_package.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyMessage message, length delimited. Does not implicitly {@link my_package.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: my_package.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): my_package.MyMessage;

        /**
         * Decodes a MyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): my_package.MyMessage;

        /**
         * Verifies a MyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyMessage
         */
        public static fromObject(object: { [k: string]: any }): my_package.MyMessage;

        /**
         * Creates a plain object from a MyMessage message. Also converts values to other types if specified.
         * @param message MyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: my_package.MyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MyMessage {

        /** Properties of a MySubMessage. */
        interface IMySubMessage {

            /** MySubMessage mySubI32 */
            mySubI32?: (number|null);
        }

        /** Represents a MySubMessage. */
        class MySubMessage implements IMySubMessage {

            /**
             * Constructs a new MySubMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: my_package.MyMessage.IMySubMessage);

            /** MySubMessage mySubI32. */
            public mySubI32: number;

            /**
             * Creates a new MySubMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MySubMessage instance
             */
            public static create(properties?: my_package.MyMessage.IMySubMessage): my_package.MyMessage.MySubMessage;

            /**
             * Encodes the specified MySubMessage message. Does not implicitly {@link my_package.MyMessage.MySubMessage.verify|verify} messages.
             * @param message MySubMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: my_package.MyMessage.IMySubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MySubMessage message, length delimited. Does not implicitly {@link my_package.MyMessage.MySubMessage.verify|verify} messages.
             * @param message MySubMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: my_package.MyMessage.IMySubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MySubMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MySubMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): my_package.MyMessage.MySubMessage;

            /**
             * Decodes a MySubMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MySubMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): my_package.MyMessage.MySubMessage;

            /**
             * Verifies a MySubMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MySubMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MySubMessage
             */
            public static fromObject(object: { [k: string]: any }): my_package.MyMessage.MySubMessage;

            /**
             * Creates a plain object from a MySubMessage message. Also converts values to other types if specified.
             * @param message MySubMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: my_package.MyMessage.MySubMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MySubMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MySubMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** MyEnum enum. */
        enum MyEnum {
            VALUE0 = 0,
            VALUE1 = 1
        }
    }

    /** Represents a MyService */
    class MyService extends $protobuf.rpc.Service {

        /**
         * Constructs a new MyService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new MyService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MyService;

        /**
         * Calls MyUnary.
         * @param request MyMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and MyMessage
         */
        public myUnary(request: my_package.IMyMessage, callback: my_package.MyService.MyUnaryCallback): void;

        /**
         * Calls MyUnary.
         * @param request MyMessage message or plain object
         * @returns Promise
         */
        public myUnary(request: my_package.IMyMessage): Promise<my_package.MyMessage>;

        /**
         * Calls MyClientStream.
         * @param request MyMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and MyMessage
         */
        public myClientStream(request: my_package.IMyMessage, callback: my_package.MyService.MyClientStreamCallback): void;

        /**
         * Calls MyClientStream.
         * @param request MyMessage message or plain object
         * @returns Promise
         */
        public myClientStream(request: my_package.IMyMessage): Promise<my_package.MyMessage>;

        /**
         * Calls MyServerStream.
         * @param request MyMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and MyMessage
         */
        public myServerStream(request: my_package.IMyMessage, callback: my_package.MyService.MyServerStreamCallback): void;

        /**
         * Calls MyServerStream.
         * @param request MyMessage message or plain object
         * @returns Promise
         */
        public myServerStream(request: my_package.IMyMessage): Promise<my_package.MyMessage>;

        /**
         * Calls MyBidiStream.
         * @param request MyMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and MyMessage
         */
        public myBidiStream(request: my_package.IMyMessage, callback: my_package.MyService.MyBidiStreamCallback): void;

        /**
         * Calls MyBidiStream.
         * @param request MyMessage message or plain object
         * @returns Promise
         */
        public myBidiStream(request: my_package.IMyMessage): Promise<my_package.MyMessage>;
    }

    namespace MyService {

        /**
         * Callback as used by {@link my_package.MyService#myUnary}.
         * @param error Error, if any
         * @param [response] MyMessage
         */
        type MyUnaryCallback = (error: (Error|null), response?: my_package.MyMessage) => void;

        /**
         * Callback as used by {@link my_package.MyService#myClientStream}.
         * @param error Error, if any
         * @param [response] MyMessage
         */
        type MyClientStreamCallback = (error: (Error|null), response?: my_package.MyMessage) => void;

        /**
         * Callback as used by {@link my_package.MyService#myServerStream}.
         * @param error Error, if any
         * @param [response] MyMessage
         */
        type MyServerStreamCallback = (error: (Error|null), response?: my_package.MyMessage) => void;

        /**
         * Callback as used by {@link my_package.MyService#myBidiStream}.
         * @param error Error, if any
         * @param [response] MyMessage
         */
        type MyBidiStreamCallback = (error: (Error|null), response?: my_package.MyMessage) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace my_sub_package. */
export namespace my_sub_package {

    /** Properties of a MyMessage. */
    interface IMyMessage {

        /** MyMessage myInt */
        myInt?: (number|null);
    }

    /** Represents a MyMessage. */
    class MyMessage implements IMyMessage {

        /**
         * Constructs a new MyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: my_sub_package.IMyMessage);

        /** MyMessage myInt. */
        public myInt: number;

        /**
         * Creates a new MyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyMessage instance
         */
        public static create(properties?: my_sub_package.IMyMessage): my_sub_package.MyMessage;

        /**
         * Encodes the specified MyMessage message. Does not implicitly {@link my_sub_package.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: my_sub_package.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyMessage message, length delimited. Does not implicitly {@link my_sub_package.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: my_sub_package.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): my_sub_package.MyMessage;

        /**
         * Decodes a MyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): my_sub_package.MyMessage;

        /**
         * Verifies a MyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyMessage
         */
        public static fromObject(object: { [k: string]: any }): my_sub_package.MyMessage;

        /**
         * Creates a plain object from a MyMessage message. Also converts values to other types if specified.
         * @param message MyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: my_sub_package.MyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
