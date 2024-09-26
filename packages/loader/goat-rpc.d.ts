import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace goat_rpc. */
export namespace goat_rpc {

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage kind */
        kind?: (goat_rpc.ClientMessage.Kind|null);

        /** ClientMessage unaryCall */
        unaryCall?: (goat_rpc.IUnaryCall|null);

        /** ClientMessage serverStreamingCall */
        serverStreamingCall?: (goat_rpc.IServerStreamingCall|null);

        /** ClientMessage clientStreamingCall */
        clientStreamingCall?: (goat_rpc.IClientStreamingCall|null);

        /** ClientMessage clientStreamingData */
        clientStreamingData?: (goat_rpc.IClientStreamingData|null);

        /** ClientMessage clientStreamingEnd */
        clientStreamingEnd?: (goat_rpc.IClientStreamingEnd|null);

        /** ClientMessage bidiStreamingCall */
        bidiStreamingCall?: (goat_rpc.IBidiStreamingCall|null);

        /** ClientMessage bidiStreamingData */
        bidiStreamingData?: (goat_rpc.IBidiStreamingData|null);

        /** ClientMessage bidiStreamingEnd */
        bidiStreamingEnd?: (goat_rpc.IBidiStreamingEnd|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientMessage);

        /** ClientMessage kind. */
        public kind: goat_rpc.ClientMessage.Kind;

        /** ClientMessage unaryCall. */
        public unaryCall?: (goat_rpc.IUnaryCall|null);

        /** ClientMessage serverStreamingCall. */
        public serverStreamingCall?: (goat_rpc.IServerStreamingCall|null);

        /** ClientMessage clientStreamingCall. */
        public clientStreamingCall?: (goat_rpc.IClientStreamingCall|null);

        /** ClientMessage clientStreamingData. */
        public clientStreamingData?: (goat_rpc.IClientStreamingData|null);

        /** ClientMessage clientStreamingEnd. */
        public clientStreamingEnd?: (goat_rpc.IClientStreamingEnd|null);

        /** ClientMessage bidiStreamingCall. */
        public bidiStreamingCall?: (goat_rpc.IBidiStreamingCall|null);

        /** ClientMessage bidiStreamingData. */
        public bidiStreamingData?: (goat_rpc.IBidiStreamingData|null);

        /** ClientMessage bidiStreamingEnd. */
        public bidiStreamingEnd?: (goat_rpc.IBidiStreamingEnd|null);

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: goat_rpc.IClientMessage): goat_rpc.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link goat_rpc.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link goat_rpc.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientMessage;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientMessage {

        /** Kind enum. */
        enum Kind {
            UnaryCall = 2,
            ServerStreamingCall = 3,
            ClientStreamingCall = 4,
            ClientStreamingData = 5,
            ClientStreamingEnd = 6,
            BidiStreamingCall = 7,
            BidiStreamingData = 8,
            BidiStreamingEnd = 9
        }
    }

    /** Properties of an UnaryCall. */
    interface IUnaryCall {

        /** UnaryCall callId */
        callId?: (number|null);

        /** UnaryCall service */
        service?: (string|null);

        /** UnaryCall method */
        method?: (string|null);

        /** UnaryCall metadata */
        metadata?: ({ [k: string]: string }|null);

        /** UnaryCall data */
        data?: (Uint8Array|null);
    }

    /** Represents an UnaryCall. */
    class UnaryCall implements IUnaryCall {

        /**
         * Constructs a new UnaryCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IUnaryCall);

        /** UnaryCall callId. */
        public callId: number;

        /** UnaryCall service. */
        public service: string;

        /** UnaryCall method. */
        public method: string;

        /** UnaryCall metadata. */
        public metadata: { [k: string]: string };

        /** UnaryCall data. */
        public data: Uint8Array;

        /**
         * Creates a new UnaryCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnaryCall instance
         */
        public static create(properties?: goat_rpc.IUnaryCall): goat_rpc.UnaryCall;

        /**
         * Encodes the specified UnaryCall message. Does not implicitly {@link goat_rpc.UnaryCall.verify|verify} messages.
         * @param message UnaryCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IUnaryCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnaryCall message, length delimited. Does not implicitly {@link goat_rpc.UnaryCall.verify|verify} messages.
         * @param message UnaryCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IUnaryCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnaryCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnaryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.UnaryCall;

        /**
         * Decodes an UnaryCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnaryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.UnaryCall;

        /**
         * Verifies an UnaryCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnaryCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnaryCall
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.UnaryCall;

        /**
         * Creates a plain object from an UnaryCall message. Also converts values to other types if specified.
         * @param message UnaryCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.UnaryCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnaryCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnaryCall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerStreamingCall. */
    interface IServerStreamingCall {

        /** ServerStreamingCall callId */
        callId?: (number|null);

        /** ServerStreamingCall service */
        service?: (string|null);

        /** ServerStreamingCall method */
        method?: (string|null);

        /** ServerStreamingCall metadata */
        metadata?: ({ [k: string]: string }|null);

        /** ServerStreamingCall data */
        data?: (Uint8Array|null);
    }

    /** Represents a ServerStreamingCall. */
    class ServerStreamingCall implements IServerStreamingCall {

        /**
         * Constructs a new ServerStreamingCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IServerStreamingCall);

        /** ServerStreamingCall callId. */
        public callId: number;

        /** ServerStreamingCall service. */
        public service: string;

        /** ServerStreamingCall method. */
        public method: string;

        /** ServerStreamingCall metadata. */
        public metadata: { [k: string]: string };

        /** ServerStreamingCall data. */
        public data: Uint8Array;

        /**
         * Creates a new ServerStreamingCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStreamingCall instance
         */
        public static create(properties?: goat_rpc.IServerStreamingCall): goat_rpc.ServerStreamingCall;

        /**
         * Encodes the specified ServerStreamingCall message. Does not implicitly {@link goat_rpc.ServerStreamingCall.verify|verify} messages.
         * @param message ServerStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IServerStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingCall.verify|verify} messages.
         * @param message ServerStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IServerStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStreamingCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ServerStreamingCall;

        /**
         * Decodes a ServerStreamingCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ServerStreamingCall;

        /**
         * Verifies a ServerStreamingCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStreamingCall
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ServerStreamingCall;

        /**
         * Creates a plain object from a ServerStreamingCall message. Also converts values to other types if specified.
         * @param message ServerStreamingCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ServerStreamingCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStreamingCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerStreamingCall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStreamingCall. */
    interface IClientStreamingCall {

        /** ClientStreamingCall callId */
        callId?: (number|null);

        /** ClientStreamingCall service */
        service?: (string|null);

        /** ClientStreamingCall method */
        method?: (string|null);

        /** ClientStreamingCall metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a ClientStreamingCall. */
    class ClientStreamingCall implements IClientStreamingCall {

        /**
         * Constructs a new ClientStreamingCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientStreamingCall);

        /** ClientStreamingCall callId. */
        public callId: number;

        /** ClientStreamingCall service. */
        public service: string;

        /** ClientStreamingCall method. */
        public method: string;

        /** ClientStreamingCall metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new ClientStreamingCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamingCall instance
         */
        public static create(properties?: goat_rpc.IClientStreamingCall): goat_rpc.ClientStreamingCall;

        /**
         * Encodes the specified ClientStreamingCall message. Does not implicitly {@link goat_rpc.ClientStreamingCall.verify|verify} messages.
         * @param message ClientStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingCall.verify|verify} messages.
         * @param message ClientStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamingCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientStreamingCall;

        /**
         * Decodes a ClientStreamingCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientStreamingCall;

        /**
         * Verifies a ClientStreamingCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamingCall
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientStreamingCall;

        /**
         * Creates a plain object from a ClientStreamingCall message. Also converts values to other types if specified.
         * @param message ClientStreamingCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientStreamingCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamingCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamingCall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStreamingData. */
    interface IClientStreamingData {

        /** ClientStreamingData data */
        data?: (Uint8Array|null);
    }

    /** Represents a ClientStreamingData. */
    class ClientStreamingData implements IClientStreamingData {

        /**
         * Constructs a new ClientStreamingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientStreamingData);

        /** ClientStreamingData data. */
        public data: Uint8Array;

        /**
         * Creates a new ClientStreamingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamingData instance
         */
        public static create(properties?: goat_rpc.IClientStreamingData): goat_rpc.ClientStreamingData;

        /**
         * Encodes the specified ClientStreamingData message. Does not implicitly {@link goat_rpc.ClientStreamingData.verify|verify} messages.
         * @param message ClientStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamingData message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingData.verify|verify} messages.
         * @param message ClientStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientStreamingData;

        /**
         * Decodes a ClientStreamingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientStreamingData;

        /**
         * Verifies a ClientStreamingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamingData
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientStreamingData;

        /**
         * Creates a plain object from a ClientStreamingData message. Also converts values to other types if specified.
         * @param message ClientStreamingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientStreamingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamingData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStreamingEnd. */
    interface IClientStreamingEnd {
    }

    /** Represents a ClientStreamingEnd. */
    class ClientStreamingEnd implements IClientStreamingEnd {

        /**
         * Constructs a new ClientStreamingEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientStreamingEnd);

        /**
         * Creates a new ClientStreamingEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamingEnd instance
         */
        public static create(properties?: goat_rpc.IClientStreamingEnd): goat_rpc.ClientStreamingEnd;

        /**
         * Encodes the specified ClientStreamingEnd message. Does not implicitly {@link goat_rpc.ClientStreamingEnd.verify|verify} messages.
         * @param message ClientStreamingEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientStreamingEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamingEnd message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingEnd.verify|verify} messages.
         * @param message ClientStreamingEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientStreamingEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamingEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientStreamingEnd;

        /**
         * Decodes a ClientStreamingEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientStreamingEnd;

        /**
         * Verifies a ClientStreamingEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamingEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamingEnd
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientStreamingEnd;

        /**
         * Creates a plain object from a ClientStreamingEnd message. Also converts values to other types if specified.
         * @param message ClientStreamingEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientStreamingEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamingEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamingEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BidiStreamingCall. */
    interface IBidiStreamingCall {

        /** BidiStreamingCall callId */
        callId?: (number|null);

        /** BidiStreamingCall service */
        service?: (string|null);

        /** BidiStreamingCall method */
        method?: (string|null);

        /** BidiStreamingCall metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a BidiStreamingCall. */
    class BidiStreamingCall implements IBidiStreamingCall {

        /**
         * Constructs a new BidiStreamingCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IBidiStreamingCall);

        /** BidiStreamingCall callId. */
        public callId: number;

        /** BidiStreamingCall service. */
        public service: string;

        /** BidiStreamingCall method. */
        public method: string;

        /** BidiStreamingCall metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new BidiStreamingCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BidiStreamingCall instance
         */
        public static create(properties?: goat_rpc.IBidiStreamingCall): goat_rpc.BidiStreamingCall;

        /**
         * Encodes the specified BidiStreamingCall message. Does not implicitly {@link goat_rpc.BidiStreamingCall.verify|verify} messages.
         * @param message BidiStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IBidiStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidiStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingCall.verify|verify} messages.
         * @param message BidiStreamingCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IBidiStreamingCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidiStreamingCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidiStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.BidiStreamingCall;

        /**
         * Decodes a BidiStreamingCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidiStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.BidiStreamingCall;

        /**
         * Verifies a BidiStreamingCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidiStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidiStreamingCall
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.BidiStreamingCall;

        /**
         * Creates a plain object from a BidiStreamingCall message. Also converts values to other types if specified.
         * @param message BidiStreamingCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.BidiStreamingCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidiStreamingCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BidiStreamingCall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BidiStreamingData. */
    interface IBidiStreamingData {

        /** BidiStreamingData data */
        data?: (Uint8Array|null);
    }

    /** Represents a BidiStreamingData. */
    class BidiStreamingData implements IBidiStreamingData {

        /**
         * Constructs a new BidiStreamingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IBidiStreamingData);

        /** BidiStreamingData data. */
        public data: Uint8Array;

        /**
         * Creates a new BidiStreamingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BidiStreamingData instance
         */
        public static create(properties?: goat_rpc.IBidiStreamingData): goat_rpc.BidiStreamingData;

        /**
         * Encodes the specified BidiStreamingData message. Does not implicitly {@link goat_rpc.BidiStreamingData.verify|verify} messages.
         * @param message BidiStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IBidiStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidiStreamingData message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingData.verify|verify} messages.
         * @param message BidiStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IBidiStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidiStreamingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidiStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.BidiStreamingData;

        /**
         * Decodes a BidiStreamingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidiStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.BidiStreamingData;

        /**
         * Verifies a BidiStreamingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidiStreamingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidiStreamingData
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.BidiStreamingData;

        /**
         * Creates a plain object from a BidiStreamingData message. Also converts values to other types if specified.
         * @param message BidiStreamingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.BidiStreamingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidiStreamingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BidiStreamingData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BidiStreamingEnd. */
    interface IBidiStreamingEnd {
    }

    /** Represents a BidiStreamingEnd. */
    class BidiStreamingEnd implements IBidiStreamingEnd {

        /**
         * Constructs a new BidiStreamingEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IBidiStreamingEnd);

        /**
         * Creates a new BidiStreamingEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BidiStreamingEnd instance
         */
        public static create(properties?: goat_rpc.IBidiStreamingEnd): goat_rpc.BidiStreamingEnd;

        /**
         * Encodes the specified BidiStreamingEnd message. Does not implicitly {@link goat_rpc.BidiStreamingEnd.verify|verify} messages.
         * @param message BidiStreamingEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IBidiStreamingEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidiStreamingEnd message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingEnd.verify|verify} messages.
         * @param message BidiStreamingEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IBidiStreamingEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidiStreamingEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidiStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.BidiStreamingEnd;

        /**
         * Decodes a BidiStreamingEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidiStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.BidiStreamingEnd;

        /**
         * Verifies a BidiStreamingEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidiStreamingEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidiStreamingEnd
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.BidiStreamingEnd;

        /**
         * Creates a plain object from a BidiStreamingEnd message. Also converts values to other types if specified.
         * @param message BidiStreamingEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.BidiStreamingEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidiStreamingEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BidiStreamingEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerMessage. */
    interface IServerMessage {

        /** ServerMessage callId */
        callId?: (number|null);

        /** ServerMessage kind */
        kind?: (goat_rpc.ServerMessage.Kind|null);

        /** ServerMessage unaryStatus */
        unaryStatus?: (goat_rpc.IUnaryStatus|null);

        /** ServerMessage serverStreamingMetadata */
        serverStreamingMetadata?: (goat_rpc.IServerStreamingMetadata|null);

        /** ServerMessage serverStreamingData */
        serverStreamingData?: (goat_rpc.IServerStreamingData|null);

        /** ServerMessage serverStreamingStatus */
        serverStreamingStatus?: (goat_rpc.IServerStreamingStatus|null);

        /** ServerMessage clientStreamingMetadata */
        clientStreamingMetadata?: (goat_rpc.IClientStreamingMetadata|null);

        /** ServerMessage clientStreamingStatus */
        clientStreamingStatus?: (goat_rpc.IClientStreamingStatus|null);

        /** ServerMessage bidiStreamingMetadata */
        bidiStreamingMetadata?: (goat_rpc.IBidiStreamingMetadata|null);

        /** ServerMessage bidiStreamingData */
        bidiStreamingData?: (goat_rpc.IBidiStreamingData|null);

        /** ServerMessage bidiStreamingStatus */
        bidiStreamingStatus?: (goat_rpc.IBidiStreamingStatus|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IServerMessage);

        /** ServerMessage callId. */
        public callId: number;

        /** ServerMessage kind. */
        public kind: goat_rpc.ServerMessage.Kind;

        /** ServerMessage unaryStatus. */
        public unaryStatus?: (goat_rpc.IUnaryStatus|null);

        /** ServerMessage serverStreamingMetadata. */
        public serverStreamingMetadata?: (goat_rpc.IServerStreamingMetadata|null);

        /** ServerMessage serverStreamingData. */
        public serverStreamingData?: (goat_rpc.IServerStreamingData|null);

        /** ServerMessage serverStreamingStatus. */
        public serverStreamingStatus?: (goat_rpc.IServerStreamingStatus|null);

        /** ServerMessage clientStreamingMetadata. */
        public clientStreamingMetadata?: (goat_rpc.IClientStreamingMetadata|null);

        /** ServerMessage clientStreamingStatus. */
        public clientStreamingStatus?: (goat_rpc.IClientStreamingStatus|null);

        /** ServerMessage bidiStreamingMetadata. */
        public bidiStreamingMetadata?: (goat_rpc.IBidiStreamingMetadata|null);

        /** ServerMessage bidiStreamingData. */
        public bidiStreamingData?: (goat_rpc.IBidiStreamingData|null);

        /** ServerMessage bidiStreamingStatus. */
        public bidiStreamingStatus?: (goat_rpc.IBidiStreamingStatus|null);

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        public static create(properties?: goat_rpc.IServerMessage): goat_rpc.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link goat_rpc.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link goat_rpc.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ServerMessage;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ServerMessage;

        /**
         * Verifies a ServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMessage
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerMessage {

        /** Kind enum. */
        enum Kind {
            UnaryStatus = 3,
            ServerStreamingMetadata = 4,
            ServerStreamingData = 5,
            ServerStreamingStatus = 6,
            ClientStreamingMetadata = 7,
            ClientStreamingStatus = 8,
            BidiStreamingMetadata = 9,
            BidiStreamingData = 10,
            BidiStreamingStatus = 11
        }
    }

    /** Properties of a Status. */
    interface IStatus {

        /** Status code */
        code?: (number|null);

        /** Status details */
        details?: (string|null);

        /** Status metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a Status. */
    class Status implements IStatus {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IStatus);

        /** Status code. */
        public code: number;

        /** Status details. */
        public details: string;

        /** Status metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new Status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Status instance
         */
        public static create(properties?: goat_rpc.IStatus): goat_rpc.Status;

        /**
         * Encodes the specified Status message. Does not implicitly {@link goat_rpc.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link goat_rpc.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.Status;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.Status;

        /**
         * Verifies a Status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Status
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.Status;

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @param message Status
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Status to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Status
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UnaryStatus. */
    interface IUnaryStatus {

        /** UnaryStatus status */
        status?: (goat_rpc.IStatus|null);

        /** UnaryStatus data */
        data?: (Uint8Array|null);
    }

    /** Represents an UnaryStatus. */
    class UnaryStatus implements IUnaryStatus {

        /**
         * Constructs a new UnaryStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IUnaryStatus);

        /** UnaryStatus status. */
        public status?: (goat_rpc.IStatus|null);

        /** UnaryStatus data. */
        public data: Uint8Array;

        /**
         * Creates a new UnaryStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnaryStatus instance
         */
        public static create(properties?: goat_rpc.IUnaryStatus): goat_rpc.UnaryStatus;

        /**
         * Encodes the specified UnaryStatus message. Does not implicitly {@link goat_rpc.UnaryStatus.verify|verify} messages.
         * @param message UnaryStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IUnaryStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnaryStatus message, length delimited. Does not implicitly {@link goat_rpc.UnaryStatus.verify|verify} messages.
         * @param message UnaryStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IUnaryStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnaryStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnaryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.UnaryStatus;

        /**
         * Decodes an UnaryStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnaryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.UnaryStatus;

        /**
         * Verifies an UnaryStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnaryStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnaryStatus
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.UnaryStatus;

        /**
         * Creates a plain object from an UnaryStatus message. Also converts values to other types if specified.
         * @param message UnaryStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.UnaryStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnaryStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UnaryStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerStreamingMetadata. */
    interface IServerStreamingMetadata {

        /** ServerStreamingMetadata metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a ServerStreamingMetadata. */
    class ServerStreamingMetadata implements IServerStreamingMetadata {

        /**
         * Constructs a new ServerStreamingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IServerStreamingMetadata);

        /** ServerStreamingMetadata metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new ServerStreamingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStreamingMetadata instance
         */
        public static create(properties?: goat_rpc.IServerStreamingMetadata): goat_rpc.ServerStreamingMetadata;

        /**
         * Encodes the specified ServerStreamingMetadata message. Does not implicitly {@link goat_rpc.ServerStreamingMetadata.verify|verify} messages.
         * @param message ServerStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IServerStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingMetadata.verify|verify} messages.
         * @param message ServerStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IServerStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStreamingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ServerStreamingMetadata;

        /**
         * Decodes a ServerStreamingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ServerStreamingMetadata;

        /**
         * Verifies a ServerStreamingMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStreamingMetadata
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ServerStreamingMetadata;

        /**
         * Creates a plain object from a ServerStreamingMetadata message. Also converts values to other types if specified.
         * @param message ServerStreamingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ServerStreamingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStreamingMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerStreamingMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerStreamingData. */
    interface IServerStreamingData {

        /** ServerStreamingData data */
        data?: (Uint8Array|null);
    }

    /** Represents a ServerStreamingData. */
    class ServerStreamingData implements IServerStreamingData {

        /**
         * Constructs a new ServerStreamingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IServerStreamingData);

        /** ServerStreamingData data. */
        public data: Uint8Array;

        /**
         * Creates a new ServerStreamingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStreamingData instance
         */
        public static create(properties?: goat_rpc.IServerStreamingData): goat_rpc.ServerStreamingData;

        /**
         * Encodes the specified ServerStreamingData message. Does not implicitly {@link goat_rpc.ServerStreamingData.verify|verify} messages.
         * @param message ServerStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IServerStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStreamingData message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingData.verify|verify} messages.
         * @param message ServerStreamingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IServerStreamingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStreamingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ServerStreamingData;

        /**
         * Decodes a ServerStreamingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ServerStreamingData;

        /**
         * Verifies a ServerStreamingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStreamingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStreamingData
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ServerStreamingData;

        /**
         * Creates a plain object from a ServerStreamingData message. Also converts values to other types if specified.
         * @param message ServerStreamingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ServerStreamingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStreamingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerStreamingData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerStreamingStatus. */
    interface IServerStreamingStatus {

        /** ServerStreamingStatus status */
        status?: (goat_rpc.IStatus|null);
    }

    /** Represents a ServerStreamingStatus. */
    class ServerStreamingStatus implements IServerStreamingStatus {

        /**
         * Constructs a new ServerStreamingStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IServerStreamingStatus);

        /** ServerStreamingStatus status. */
        public status?: (goat_rpc.IStatus|null);

        /**
         * Creates a new ServerStreamingStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStreamingStatus instance
         */
        public static create(properties?: goat_rpc.IServerStreamingStatus): goat_rpc.ServerStreamingStatus;

        /**
         * Encodes the specified ServerStreamingStatus message. Does not implicitly {@link goat_rpc.ServerStreamingStatus.verify|verify} messages.
         * @param message ServerStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IServerStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingStatus.verify|verify} messages.
         * @param message ServerStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IServerStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStreamingStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ServerStreamingStatus;

        /**
         * Decodes a ServerStreamingStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ServerStreamingStatus;

        /**
         * Verifies a ServerStreamingStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStreamingStatus
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ServerStreamingStatus;

        /**
         * Creates a plain object from a ServerStreamingStatus message. Also converts values to other types if specified.
         * @param message ServerStreamingStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ServerStreamingStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStreamingStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerStreamingStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStreamingMetadata. */
    interface IClientStreamingMetadata {

        /** ClientStreamingMetadata metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a ClientStreamingMetadata. */
    class ClientStreamingMetadata implements IClientStreamingMetadata {

        /**
         * Constructs a new ClientStreamingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientStreamingMetadata);

        /** ClientStreamingMetadata metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new ClientStreamingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamingMetadata instance
         */
        public static create(properties?: goat_rpc.IClientStreamingMetadata): goat_rpc.ClientStreamingMetadata;

        /**
         * Encodes the specified ClientStreamingMetadata message. Does not implicitly {@link goat_rpc.ClientStreamingMetadata.verify|verify} messages.
         * @param message ClientStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingMetadata.verify|verify} messages.
         * @param message ClientStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientStreamingMetadata;

        /**
         * Decodes a ClientStreamingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientStreamingMetadata;

        /**
         * Verifies a ClientStreamingMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamingMetadata
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientStreamingMetadata;

        /**
         * Creates a plain object from a ClientStreamingMetadata message. Also converts values to other types if specified.
         * @param message ClientStreamingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientStreamingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamingMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamingMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStreamingStatus. */
    interface IClientStreamingStatus {

        /** ClientStreamingStatus status */
        status?: (goat_rpc.IStatus|null);

        /** ClientStreamingStatus data */
        data?: (Uint8Array|null);
    }

    /** Represents a ClientStreamingStatus. */
    class ClientStreamingStatus implements IClientStreamingStatus {

        /**
         * Constructs a new ClientStreamingStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IClientStreamingStatus);

        /** ClientStreamingStatus status. */
        public status?: (goat_rpc.IStatus|null);

        /** ClientStreamingStatus data. */
        public data: Uint8Array;

        /**
         * Creates a new ClientStreamingStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamingStatus instance
         */
        public static create(properties?: goat_rpc.IClientStreamingStatus): goat_rpc.ClientStreamingStatus;

        /**
         * Encodes the specified ClientStreamingStatus message. Does not implicitly {@link goat_rpc.ClientStreamingStatus.verify|verify} messages.
         * @param message ClientStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IClientStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingStatus.verify|verify} messages.
         * @param message ClientStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IClientStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamingStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.ClientStreamingStatus;

        /**
         * Decodes a ClientStreamingStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.ClientStreamingStatus;

        /**
         * Verifies a ClientStreamingStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamingStatus
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.ClientStreamingStatus;

        /**
         * Creates a plain object from a ClientStreamingStatus message. Also converts values to other types if specified.
         * @param message ClientStreamingStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.ClientStreamingStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamingStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamingStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BidiStreamingMetadata. */
    interface IBidiStreamingMetadata {

        /** BidiStreamingMetadata metadata */
        metadata?: ({ [k: string]: string }|null);
    }

    /** Represents a BidiStreamingMetadata. */
    class BidiStreamingMetadata implements IBidiStreamingMetadata {

        /**
         * Constructs a new BidiStreamingMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IBidiStreamingMetadata);

        /** BidiStreamingMetadata metadata. */
        public metadata: { [k: string]: string };

        /**
         * Creates a new BidiStreamingMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BidiStreamingMetadata instance
         */
        public static create(properties?: goat_rpc.IBidiStreamingMetadata): goat_rpc.BidiStreamingMetadata;

        /**
         * Encodes the specified BidiStreamingMetadata message. Does not implicitly {@link goat_rpc.BidiStreamingMetadata.verify|verify} messages.
         * @param message BidiStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IBidiStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidiStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingMetadata.verify|verify} messages.
         * @param message BidiStreamingMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IBidiStreamingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidiStreamingMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidiStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.BidiStreamingMetadata;

        /**
         * Decodes a BidiStreamingMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidiStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.BidiStreamingMetadata;

        /**
         * Verifies a BidiStreamingMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidiStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidiStreamingMetadata
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.BidiStreamingMetadata;

        /**
         * Creates a plain object from a BidiStreamingMetadata message. Also converts values to other types if specified.
         * @param message BidiStreamingMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.BidiStreamingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidiStreamingMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BidiStreamingMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BidiStreamingStatus. */
    interface IBidiStreamingStatus {

        /** BidiStreamingStatus status */
        status?: (goat_rpc.IStatus|null);
    }

    /** Represents a BidiStreamingStatus. */
    class BidiStreamingStatus implements IBidiStreamingStatus {

        /**
         * Constructs a new BidiStreamingStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: goat_rpc.IBidiStreamingStatus);

        /** BidiStreamingStatus status. */
        public status?: (goat_rpc.IStatus|null);

        /**
         * Creates a new BidiStreamingStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BidiStreamingStatus instance
         */
        public static create(properties?: goat_rpc.IBidiStreamingStatus): goat_rpc.BidiStreamingStatus;

        /**
         * Encodes the specified BidiStreamingStatus message. Does not implicitly {@link goat_rpc.BidiStreamingStatus.verify|verify} messages.
         * @param message BidiStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: goat_rpc.IBidiStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BidiStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingStatus.verify|verify} messages.
         * @param message BidiStreamingStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: goat_rpc.IBidiStreamingStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BidiStreamingStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BidiStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goat_rpc.BidiStreamingStatus;

        /**
         * Decodes a BidiStreamingStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BidiStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goat_rpc.BidiStreamingStatus;

        /**
         * Verifies a BidiStreamingStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BidiStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BidiStreamingStatus
         */
        public static fromObject(object: { [k: string]: any }): goat_rpc.BidiStreamingStatus;

        /**
         * Creates a plain object from a BidiStreamingStatus message. Also converts values to other types if specified.
         * @param message BidiStreamingStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: goat_rpc.BidiStreamingStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BidiStreamingStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BidiStreamingStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
