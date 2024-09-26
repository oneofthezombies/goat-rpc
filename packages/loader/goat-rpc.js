/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const goat_rpc = $root.goat_rpc = (() => {

    /**
     * Namespace goat_rpc.
     * @exports goat_rpc
     * @namespace
     */
    const goat_rpc = {};

    goat_rpc.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof goat_rpc
         * @interface IClientMessage
         * @property {goat_rpc.ClientMessage.Kind|null} [kind] ClientMessage kind
         * @property {goat_rpc.IUnaryCall|null} [unaryCall] ClientMessage unaryCall
         * @property {goat_rpc.IServerStreamingCall|null} [serverStreamingCall] ClientMessage serverStreamingCall
         * @property {goat_rpc.IClientStreamingCall|null} [clientStreamingCall] ClientMessage clientStreamingCall
         * @property {goat_rpc.IClientStreamingData|null} [clientStreamingData] ClientMessage clientStreamingData
         * @property {goat_rpc.IClientStreamingEnd|null} [clientStreamingEnd] ClientMessage clientStreamingEnd
         * @property {goat_rpc.IBidiStreamingCall|null} [bidiStreamingCall] ClientMessage bidiStreamingCall
         * @property {goat_rpc.IBidiStreamingData|null} [bidiStreamingData] ClientMessage bidiStreamingData
         * @property {goat_rpc.IBidiStreamingEnd|null} [bidiStreamingEnd] ClientMessage bidiStreamingEnd
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof goat_rpc
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {goat_rpc.IClientMessage=} [properties] Properties to set
         */
        function ClientMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMessage kind.
         * @member {goat_rpc.ClientMessage.Kind} kind
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.kind = 2;

        /**
         * ClientMessage unaryCall.
         * @member {goat_rpc.IUnaryCall|null|undefined} unaryCall
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.unaryCall = null;

        /**
         * ClientMessage serverStreamingCall.
         * @member {goat_rpc.IServerStreamingCall|null|undefined} serverStreamingCall
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.serverStreamingCall = null;

        /**
         * ClientMessage clientStreamingCall.
         * @member {goat_rpc.IClientStreamingCall|null|undefined} clientStreamingCall
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.clientStreamingCall = null;

        /**
         * ClientMessage clientStreamingData.
         * @member {goat_rpc.IClientStreamingData|null|undefined} clientStreamingData
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.clientStreamingData = null;

        /**
         * ClientMessage clientStreamingEnd.
         * @member {goat_rpc.IClientStreamingEnd|null|undefined} clientStreamingEnd
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.clientStreamingEnd = null;

        /**
         * ClientMessage bidiStreamingCall.
         * @member {goat_rpc.IBidiStreamingCall|null|undefined} bidiStreamingCall
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.bidiStreamingCall = null;

        /**
         * ClientMessage bidiStreamingData.
         * @member {goat_rpc.IBidiStreamingData|null|undefined} bidiStreamingData
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.bidiStreamingData = null;

        /**
         * ClientMessage bidiStreamingEnd.
         * @member {goat_rpc.IBidiStreamingEnd|null|undefined} bidiStreamingEnd
         * @memberof goat_rpc.ClientMessage
         * @instance
         */
        ClientMessage.prototype.bidiStreamingEnd = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_unaryCall", {
            get: $util.oneOfGetter($oneOfFields = ["unaryCall"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_serverStreamingCall", {
            get: $util.oneOfGetter($oneOfFields = ["serverStreamingCall"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_clientStreamingCall", {
            get: $util.oneOfGetter($oneOfFields = ["clientStreamingCall"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_clientStreamingData", {
            get: $util.oneOfGetter($oneOfFields = ["clientStreamingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_clientStreamingEnd", {
            get: $util.oneOfGetter($oneOfFields = ["clientStreamingEnd"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_bidiStreamingCall", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingCall"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_bidiStreamingData", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientMessage.prototype, "_bidiStreamingEnd", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingEnd"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {goat_rpc.IClientMessage=} [properties] Properties to set
         * @returns {goat_rpc.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link goat_rpc.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {goat_rpc.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.kind);
            if (message.unaryCall != null && Object.hasOwnProperty.call(message, "unaryCall"))
                $root.goat_rpc.UnaryCall.encode(message.unaryCall, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.serverStreamingCall != null && Object.hasOwnProperty.call(message, "serverStreamingCall"))
                $root.goat_rpc.ServerStreamingCall.encode(message.serverStreamingCall, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.clientStreamingCall != null && Object.hasOwnProperty.call(message, "clientStreamingCall"))
                $root.goat_rpc.ClientStreamingCall.encode(message.clientStreamingCall, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.clientStreamingData != null && Object.hasOwnProperty.call(message, "clientStreamingData"))
                $root.goat_rpc.ClientStreamingData.encode(message.clientStreamingData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.clientStreamingEnd != null && Object.hasOwnProperty.call(message, "clientStreamingEnd"))
                $root.goat_rpc.ClientStreamingEnd.encode(message.clientStreamingEnd, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.bidiStreamingCall != null && Object.hasOwnProperty.call(message, "bidiStreamingCall"))
                $root.goat_rpc.BidiStreamingCall.encode(message.bidiStreamingCall, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.bidiStreamingData != null && Object.hasOwnProperty.call(message, "bidiStreamingData"))
                $root.goat_rpc.BidiStreamingData.encode(message.bidiStreamingData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.bidiStreamingEnd != null && Object.hasOwnProperty.call(message, "bidiStreamingEnd"))
                $root.goat_rpc.BidiStreamingEnd.encode(message.bidiStreamingEnd, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link goat_rpc.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {goat_rpc.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.kind = reader.int32();
                        break;
                    }
                case 2: {
                        message.unaryCall = $root.goat_rpc.UnaryCall.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.serverStreamingCall = $root.goat_rpc.ServerStreamingCall.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.clientStreamingCall = $root.goat_rpc.ClientStreamingCall.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.clientStreamingData = $root.goat_rpc.ClientStreamingData.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.clientStreamingEnd = $root.goat_rpc.ClientStreamingEnd.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.bidiStreamingCall = $root.goat_rpc.BidiStreamingCall.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.bidiStreamingData = $root.goat_rpc.BidiStreamingData.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.bidiStreamingEnd = $root.goat_rpc.BidiStreamingEnd.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                default:
                    return "kind: enum value expected";
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.unaryCall != null && message.hasOwnProperty("unaryCall")) {
                properties._unaryCall = 1;
                {
                    let error = $root.goat_rpc.UnaryCall.verify(message.unaryCall);
                    if (error)
                        return "unaryCall." + error;
                }
            }
            if (message.serverStreamingCall != null && message.hasOwnProperty("serverStreamingCall")) {
                properties._serverStreamingCall = 1;
                {
                    let error = $root.goat_rpc.ServerStreamingCall.verify(message.serverStreamingCall);
                    if (error)
                        return "serverStreamingCall." + error;
                }
            }
            if (message.clientStreamingCall != null && message.hasOwnProperty("clientStreamingCall")) {
                properties._clientStreamingCall = 1;
                {
                    let error = $root.goat_rpc.ClientStreamingCall.verify(message.clientStreamingCall);
                    if (error)
                        return "clientStreamingCall." + error;
                }
            }
            if (message.clientStreamingData != null && message.hasOwnProperty("clientStreamingData")) {
                properties._clientStreamingData = 1;
                {
                    let error = $root.goat_rpc.ClientStreamingData.verify(message.clientStreamingData);
                    if (error)
                        return "clientStreamingData." + error;
                }
            }
            if (message.clientStreamingEnd != null && message.hasOwnProperty("clientStreamingEnd")) {
                properties._clientStreamingEnd = 1;
                {
                    let error = $root.goat_rpc.ClientStreamingEnd.verify(message.clientStreamingEnd);
                    if (error)
                        return "clientStreamingEnd." + error;
                }
            }
            if (message.bidiStreamingCall != null && message.hasOwnProperty("bidiStreamingCall")) {
                properties._bidiStreamingCall = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingCall.verify(message.bidiStreamingCall);
                    if (error)
                        return "bidiStreamingCall." + error;
                }
            }
            if (message.bidiStreamingData != null && message.hasOwnProperty("bidiStreamingData")) {
                properties._bidiStreamingData = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingData.verify(message.bidiStreamingData);
                    if (error)
                        return "bidiStreamingData." + error;
                }
            }
            if (message.bidiStreamingEnd != null && message.hasOwnProperty("bidiStreamingEnd")) {
                properties._bidiStreamingEnd = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingEnd.verify(message.bidiStreamingEnd);
                    if (error)
                        return "bidiStreamingEnd." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientMessage)
                return object;
            let message = new $root.goat_rpc.ClientMessage();
            switch (object.kind) {
            default:
                if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                }
                break;
            case "UnaryCall":
            case 2:
                message.kind = 2;
                break;
            case "ServerStreamingCall":
            case 3:
                message.kind = 3;
                break;
            case "ClientStreamingCall":
            case 4:
                message.kind = 4;
                break;
            case "ClientStreamingData":
            case 5:
                message.kind = 5;
                break;
            case "ClientStreamingEnd":
            case 6:
                message.kind = 6;
                break;
            case "BidiStreamingCall":
            case 7:
                message.kind = 7;
                break;
            case "BidiStreamingData":
            case 8:
                message.kind = 8;
                break;
            case "BidiStreamingEnd":
            case 9:
                message.kind = 9;
                break;
            }
            if (object.unaryCall != null) {
                if (typeof object.unaryCall !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.unaryCall: object expected");
                message.unaryCall = $root.goat_rpc.UnaryCall.fromObject(object.unaryCall);
            }
            if (object.serverStreamingCall != null) {
                if (typeof object.serverStreamingCall !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.serverStreamingCall: object expected");
                message.serverStreamingCall = $root.goat_rpc.ServerStreamingCall.fromObject(object.serverStreamingCall);
            }
            if (object.clientStreamingCall != null) {
                if (typeof object.clientStreamingCall !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.clientStreamingCall: object expected");
                message.clientStreamingCall = $root.goat_rpc.ClientStreamingCall.fromObject(object.clientStreamingCall);
            }
            if (object.clientStreamingData != null) {
                if (typeof object.clientStreamingData !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.clientStreamingData: object expected");
                message.clientStreamingData = $root.goat_rpc.ClientStreamingData.fromObject(object.clientStreamingData);
            }
            if (object.clientStreamingEnd != null) {
                if (typeof object.clientStreamingEnd !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.clientStreamingEnd: object expected");
                message.clientStreamingEnd = $root.goat_rpc.ClientStreamingEnd.fromObject(object.clientStreamingEnd);
            }
            if (object.bidiStreamingCall != null) {
                if (typeof object.bidiStreamingCall !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.bidiStreamingCall: object expected");
                message.bidiStreamingCall = $root.goat_rpc.BidiStreamingCall.fromObject(object.bidiStreamingCall);
            }
            if (object.bidiStreamingData != null) {
                if (typeof object.bidiStreamingData !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.bidiStreamingData: object expected");
                message.bidiStreamingData = $root.goat_rpc.BidiStreamingData.fromObject(object.bidiStreamingData);
            }
            if (object.bidiStreamingEnd != null) {
                if (typeof object.bidiStreamingEnd !== "object")
                    throw TypeError(".goat_rpc.ClientMessage.bidiStreamingEnd: object expected");
                message.bidiStreamingEnd = $root.goat_rpc.BidiStreamingEnd.fromObject(object.bidiStreamingEnd);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {goat_rpc.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.kind = options.enums === String ? "UnaryCall" : 2;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.goat_rpc.ClientMessage.Kind[message.kind] === undefined ? message.kind : $root.goat_rpc.ClientMessage.Kind[message.kind] : message.kind;
            if (message.unaryCall != null && message.hasOwnProperty("unaryCall")) {
                object.unaryCall = $root.goat_rpc.UnaryCall.toObject(message.unaryCall, options);
                if (options.oneofs)
                    object._unaryCall = "unaryCall";
            }
            if (message.serverStreamingCall != null && message.hasOwnProperty("serverStreamingCall")) {
                object.serverStreamingCall = $root.goat_rpc.ServerStreamingCall.toObject(message.serverStreamingCall, options);
                if (options.oneofs)
                    object._serverStreamingCall = "serverStreamingCall";
            }
            if (message.clientStreamingCall != null && message.hasOwnProperty("clientStreamingCall")) {
                object.clientStreamingCall = $root.goat_rpc.ClientStreamingCall.toObject(message.clientStreamingCall, options);
                if (options.oneofs)
                    object._clientStreamingCall = "clientStreamingCall";
            }
            if (message.clientStreamingData != null && message.hasOwnProperty("clientStreamingData")) {
                object.clientStreamingData = $root.goat_rpc.ClientStreamingData.toObject(message.clientStreamingData, options);
                if (options.oneofs)
                    object._clientStreamingData = "clientStreamingData";
            }
            if (message.clientStreamingEnd != null && message.hasOwnProperty("clientStreamingEnd")) {
                object.clientStreamingEnd = $root.goat_rpc.ClientStreamingEnd.toObject(message.clientStreamingEnd, options);
                if (options.oneofs)
                    object._clientStreamingEnd = "clientStreamingEnd";
            }
            if (message.bidiStreamingCall != null && message.hasOwnProperty("bidiStreamingCall")) {
                object.bidiStreamingCall = $root.goat_rpc.BidiStreamingCall.toObject(message.bidiStreamingCall, options);
                if (options.oneofs)
                    object._bidiStreamingCall = "bidiStreamingCall";
            }
            if (message.bidiStreamingData != null && message.hasOwnProperty("bidiStreamingData")) {
                object.bidiStreamingData = $root.goat_rpc.BidiStreamingData.toObject(message.bidiStreamingData, options);
                if (options.oneofs)
                    object._bidiStreamingData = "bidiStreamingData";
            }
            if (message.bidiStreamingEnd != null && message.hasOwnProperty("bidiStreamingEnd")) {
                object.bidiStreamingEnd = $root.goat_rpc.BidiStreamingEnd.toObject(message.bidiStreamingEnd, options);
                if (options.oneofs)
                    object._bidiStreamingEnd = "bidiStreamingEnd";
            }
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientMessage
         * @function getTypeUrl
         * @memberof goat_rpc.ClientMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientMessage";
        };

        /**
         * Kind enum.
         * @name goat_rpc.ClientMessage.Kind
         * @enum {number}
         * @property {number} UnaryCall=2 UnaryCall value
         * @property {number} ServerStreamingCall=3 ServerStreamingCall value
         * @property {number} ClientStreamingCall=4 ClientStreamingCall value
         * @property {number} ClientStreamingData=5 ClientStreamingData value
         * @property {number} ClientStreamingEnd=6 ClientStreamingEnd value
         * @property {number} BidiStreamingCall=7 BidiStreamingCall value
         * @property {number} BidiStreamingData=8 BidiStreamingData value
         * @property {number} BidiStreamingEnd=9 BidiStreamingEnd value
         */
        ClientMessage.Kind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2] = "UnaryCall"] = 2;
            values[valuesById[3] = "ServerStreamingCall"] = 3;
            values[valuesById[4] = "ClientStreamingCall"] = 4;
            values[valuesById[5] = "ClientStreamingData"] = 5;
            values[valuesById[6] = "ClientStreamingEnd"] = 6;
            values[valuesById[7] = "BidiStreamingCall"] = 7;
            values[valuesById[8] = "BidiStreamingData"] = 8;
            values[valuesById[9] = "BidiStreamingEnd"] = 9;
            return values;
        })();

        return ClientMessage;
    })();

    goat_rpc.UnaryCall = (function() {

        /**
         * Properties of an UnaryCall.
         * @memberof goat_rpc
         * @interface IUnaryCall
         * @property {number|null} [callId] UnaryCall callId
         * @property {string|null} [service] UnaryCall service
         * @property {string|null} [method] UnaryCall method
         * @property {Object.<string,string>|null} [metadata] UnaryCall metadata
         * @property {Uint8Array|null} [data] UnaryCall data
         */

        /**
         * Constructs a new UnaryCall.
         * @memberof goat_rpc
         * @classdesc Represents an UnaryCall.
         * @implements IUnaryCall
         * @constructor
         * @param {goat_rpc.IUnaryCall=} [properties] Properties to set
         */
        function UnaryCall(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnaryCall callId.
         * @member {number} callId
         * @memberof goat_rpc.UnaryCall
         * @instance
         */
        UnaryCall.prototype.callId = 0;

        /**
         * UnaryCall service.
         * @member {string} service
         * @memberof goat_rpc.UnaryCall
         * @instance
         */
        UnaryCall.prototype.service = "";

        /**
         * UnaryCall method.
         * @member {string} method
         * @memberof goat_rpc.UnaryCall
         * @instance
         */
        UnaryCall.prototype.method = "";

        /**
         * UnaryCall metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.UnaryCall
         * @instance
         */
        UnaryCall.prototype.metadata = $util.emptyObject;

        /**
         * UnaryCall data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.UnaryCall
         * @instance
         */
        UnaryCall.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new UnaryCall instance using the specified properties.
         * @function create
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {goat_rpc.IUnaryCall=} [properties] Properties to set
         * @returns {goat_rpc.UnaryCall} UnaryCall instance
         */
        UnaryCall.create = function create(properties) {
            return new UnaryCall(properties);
        };

        /**
         * Encodes the specified UnaryCall message. Does not implicitly {@link goat_rpc.UnaryCall.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {goat_rpc.IUnaryCall} message UnaryCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.callId);
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified UnaryCall message, length delimited. Does not implicitly {@link goat_rpc.UnaryCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {goat_rpc.IUnaryCall} message UnaryCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnaryCall message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.UnaryCall} UnaryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.UnaryCall(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.service = reader.string();
                        break;
                    }
                case 3: {
                        message.method = reader.string();
                        break;
                    }
                case 4: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                case 5: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnaryCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.UnaryCall} UnaryCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnaryCall message.
         * @function verify
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnaryCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isInteger(message.callId))
                    return "callId: integer expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an UnaryCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.UnaryCall} UnaryCall
         */
        UnaryCall.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.UnaryCall)
                return object;
            let message = new $root.goat_rpc.UnaryCall();
            if (object.callId != null)
                message.callId = object.callId >>> 0;
            if (object.service != null)
                message.service = String(object.service);
            if (object.method != null)
                message.method = String(object.method);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.UnaryCall.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an UnaryCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {goat_rpc.UnaryCall} message UnaryCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnaryCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.callId = 0;
                object.service = "";
                object.method = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this UnaryCall to JSON.
         * @function toJSON
         * @memberof goat_rpc.UnaryCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnaryCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UnaryCall
         * @function getTypeUrl
         * @memberof goat_rpc.UnaryCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UnaryCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.UnaryCall";
        };

        return UnaryCall;
    })();

    goat_rpc.ServerStreamingCall = (function() {

        /**
         * Properties of a ServerStreamingCall.
         * @memberof goat_rpc
         * @interface IServerStreamingCall
         * @property {number|null} [callId] ServerStreamingCall callId
         * @property {string|null} [service] ServerStreamingCall service
         * @property {string|null} [method] ServerStreamingCall method
         * @property {Object.<string,string>|null} [metadata] ServerStreamingCall metadata
         * @property {Uint8Array|null} [data] ServerStreamingCall data
         */

        /**
         * Constructs a new ServerStreamingCall.
         * @memberof goat_rpc
         * @classdesc Represents a ServerStreamingCall.
         * @implements IServerStreamingCall
         * @constructor
         * @param {goat_rpc.IServerStreamingCall=} [properties] Properties to set
         */
        function ServerStreamingCall(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStreamingCall callId.
         * @member {number} callId
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         */
        ServerStreamingCall.prototype.callId = 0;

        /**
         * ServerStreamingCall service.
         * @member {string} service
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         */
        ServerStreamingCall.prototype.service = "";

        /**
         * ServerStreamingCall method.
         * @member {string} method
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         */
        ServerStreamingCall.prototype.method = "";

        /**
         * ServerStreamingCall metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         */
        ServerStreamingCall.prototype.metadata = $util.emptyObject;

        /**
         * ServerStreamingCall data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         */
        ServerStreamingCall.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ServerStreamingCall instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {goat_rpc.IServerStreamingCall=} [properties] Properties to set
         * @returns {goat_rpc.ServerStreamingCall} ServerStreamingCall instance
         */
        ServerStreamingCall.create = function create(properties) {
            return new ServerStreamingCall(properties);
        };

        /**
         * Encodes the specified ServerStreamingCall message. Does not implicitly {@link goat_rpc.ServerStreamingCall.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {goat_rpc.IServerStreamingCall} message ServerStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.callId);
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified ServerStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {goat_rpc.IServerStreamingCall} message ServerStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStreamingCall message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ServerStreamingCall} ServerStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ServerStreamingCall(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.service = reader.string();
                        break;
                    }
                case 3: {
                        message.method = reader.string();
                        break;
                    }
                case 4: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                case 5: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStreamingCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ServerStreamingCall} ServerStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStreamingCall message.
         * @function verify
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStreamingCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isInteger(message.callId))
                    return "callId: integer expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a ServerStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ServerStreamingCall} ServerStreamingCall
         */
        ServerStreamingCall.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ServerStreamingCall)
                return object;
            let message = new $root.goat_rpc.ServerStreamingCall();
            if (object.callId != null)
                message.callId = object.callId >>> 0;
            if (object.service != null)
                message.service = String(object.service);
            if (object.method != null)
                message.method = String(object.method);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.ServerStreamingCall.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a ServerStreamingCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {goat_rpc.ServerStreamingCall} message ServerStreamingCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStreamingCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.callId = 0;
                object.service = "";
                object.method = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this ServerStreamingCall to JSON.
         * @function toJSON
         * @memberof goat_rpc.ServerStreamingCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStreamingCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerStreamingCall
         * @function getTypeUrl
         * @memberof goat_rpc.ServerStreamingCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerStreamingCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ServerStreamingCall";
        };

        return ServerStreamingCall;
    })();

    goat_rpc.ClientStreamingCall = (function() {

        /**
         * Properties of a ClientStreamingCall.
         * @memberof goat_rpc
         * @interface IClientStreamingCall
         * @property {number|null} [callId] ClientStreamingCall callId
         * @property {string|null} [service] ClientStreamingCall service
         * @property {string|null} [method] ClientStreamingCall method
         * @property {Object.<string,string>|null} [metadata] ClientStreamingCall metadata
         */

        /**
         * Constructs a new ClientStreamingCall.
         * @memberof goat_rpc
         * @classdesc Represents a ClientStreamingCall.
         * @implements IClientStreamingCall
         * @constructor
         * @param {goat_rpc.IClientStreamingCall=} [properties] Properties to set
         */
        function ClientStreamingCall(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientStreamingCall callId.
         * @member {number} callId
         * @memberof goat_rpc.ClientStreamingCall
         * @instance
         */
        ClientStreamingCall.prototype.callId = 0;

        /**
         * ClientStreamingCall service.
         * @member {string} service
         * @memberof goat_rpc.ClientStreamingCall
         * @instance
         */
        ClientStreamingCall.prototype.service = "";

        /**
         * ClientStreamingCall method.
         * @member {string} method
         * @memberof goat_rpc.ClientStreamingCall
         * @instance
         */
        ClientStreamingCall.prototype.method = "";

        /**
         * ClientStreamingCall metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.ClientStreamingCall
         * @instance
         */
        ClientStreamingCall.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new ClientStreamingCall instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {goat_rpc.IClientStreamingCall=} [properties] Properties to set
         * @returns {goat_rpc.ClientStreamingCall} ClientStreamingCall instance
         */
        ClientStreamingCall.create = function create(properties) {
            return new ClientStreamingCall(properties);
        };

        /**
         * Encodes the specified ClientStreamingCall message. Does not implicitly {@link goat_rpc.ClientStreamingCall.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {goat_rpc.IClientStreamingCall} message ClientStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.callId);
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {goat_rpc.IClientStreamingCall} message ClientStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientStreamingCall message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientStreamingCall} ClientStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientStreamingCall(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.service = reader.string();
                        break;
                    }
                case 3: {
                        message.method = reader.string();
                        break;
                    }
                case 4: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientStreamingCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientStreamingCall} ClientStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientStreamingCall message.
         * @function verify
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientStreamingCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isInteger(message.callId))
                    return "callId: integer expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a ClientStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientStreamingCall} ClientStreamingCall
         */
        ClientStreamingCall.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientStreamingCall)
                return object;
            let message = new $root.goat_rpc.ClientStreamingCall();
            if (object.callId != null)
                message.callId = object.callId >>> 0;
            if (object.service != null)
                message.service = String(object.service);
            if (object.method != null)
                message.method = String(object.method);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.ClientStreamingCall.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientStreamingCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {goat_rpc.ClientStreamingCall} message ClientStreamingCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientStreamingCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.callId = 0;
                object.service = "";
                object.method = "";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ClientStreamingCall to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientStreamingCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientStreamingCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientStreamingCall
         * @function getTypeUrl
         * @memberof goat_rpc.ClientStreamingCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientStreamingCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientStreamingCall";
        };

        return ClientStreamingCall;
    })();

    goat_rpc.ClientStreamingData = (function() {

        /**
         * Properties of a ClientStreamingData.
         * @memberof goat_rpc
         * @interface IClientStreamingData
         * @property {Uint8Array|null} [data] ClientStreamingData data
         */

        /**
         * Constructs a new ClientStreamingData.
         * @memberof goat_rpc
         * @classdesc Represents a ClientStreamingData.
         * @implements IClientStreamingData
         * @constructor
         * @param {goat_rpc.IClientStreamingData=} [properties] Properties to set
         */
        function ClientStreamingData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientStreamingData data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.ClientStreamingData
         * @instance
         */
        ClientStreamingData.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ClientStreamingData instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {goat_rpc.IClientStreamingData=} [properties] Properties to set
         * @returns {goat_rpc.ClientStreamingData} ClientStreamingData instance
         */
        ClientStreamingData.create = function create(properties) {
            return new ClientStreamingData(properties);
        };

        /**
         * Encodes the specified ClientStreamingData message. Does not implicitly {@link goat_rpc.ClientStreamingData.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {goat_rpc.IClientStreamingData} message ClientStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified ClientStreamingData message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {goat_rpc.IClientStreamingData} message ClientStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientStreamingData message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientStreamingData} ClientStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientStreamingData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientStreamingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientStreamingData} ClientStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientStreamingData message.
         * @function verify
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientStreamingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a ClientStreamingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientStreamingData} ClientStreamingData
         */
        ClientStreamingData.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientStreamingData)
                return object;
            let message = new $root.goat_rpc.ClientStreamingData();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a ClientStreamingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {goat_rpc.ClientStreamingData} message ClientStreamingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientStreamingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this ClientStreamingData to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientStreamingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientStreamingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientStreamingData
         * @function getTypeUrl
         * @memberof goat_rpc.ClientStreamingData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientStreamingData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientStreamingData";
        };

        return ClientStreamingData;
    })();

    goat_rpc.ClientStreamingEnd = (function() {

        /**
         * Properties of a ClientStreamingEnd.
         * @memberof goat_rpc
         * @interface IClientStreamingEnd
         */

        /**
         * Constructs a new ClientStreamingEnd.
         * @memberof goat_rpc
         * @classdesc Represents a ClientStreamingEnd.
         * @implements IClientStreamingEnd
         * @constructor
         * @param {goat_rpc.IClientStreamingEnd=} [properties] Properties to set
         */
        function ClientStreamingEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ClientStreamingEnd instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {goat_rpc.IClientStreamingEnd=} [properties] Properties to set
         * @returns {goat_rpc.ClientStreamingEnd} ClientStreamingEnd instance
         */
        ClientStreamingEnd.create = function create(properties) {
            return new ClientStreamingEnd(properties);
        };

        /**
         * Encodes the specified ClientStreamingEnd message. Does not implicitly {@link goat_rpc.ClientStreamingEnd.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {goat_rpc.IClientStreamingEnd} message ClientStreamingEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ClientStreamingEnd message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {goat_rpc.IClientStreamingEnd} message ClientStreamingEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientStreamingEnd message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientStreamingEnd} ClientStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientStreamingEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientStreamingEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientStreamingEnd} ClientStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientStreamingEnd message.
         * @function verify
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientStreamingEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ClientStreamingEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientStreamingEnd} ClientStreamingEnd
         */
        ClientStreamingEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientStreamingEnd)
                return object;
            return new $root.goat_rpc.ClientStreamingEnd();
        };

        /**
         * Creates a plain object from a ClientStreamingEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {goat_rpc.ClientStreamingEnd} message ClientStreamingEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientStreamingEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ClientStreamingEnd to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientStreamingEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientStreamingEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientStreamingEnd
         * @function getTypeUrl
         * @memberof goat_rpc.ClientStreamingEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientStreamingEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientStreamingEnd";
        };

        return ClientStreamingEnd;
    })();

    goat_rpc.BidiStreamingCall = (function() {

        /**
         * Properties of a BidiStreamingCall.
         * @memberof goat_rpc
         * @interface IBidiStreamingCall
         * @property {number|null} [callId] BidiStreamingCall callId
         * @property {string|null} [service] BidiStreamingCall service
         * @property {string|null} [method] BidiStreamingCall method
         * @property {Object.<string,string>|null} [metadata] BidiStreamingCall metadata
         */

        /**
         * Constructs a new BidiStreamingCall.
         * @memberof goat_rpc
         * @classdesc Represents a BidiStreamingCall.
         * @implements IBidiStreamingCall
         * @constructor
         * @param {goat_rpc.IBidiStreamingCall=} [properties] Properties to set
         */
        function BidiStreamingCall(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BidiStreamingCall callId.
         * @member {number} callId
         * @memberof goat_rpc.BidiStreamingCall
         * @instance
         */
        BidiStreamingCall.prototype.callId = 0;

        /**
         * BidiStreamingCall service.
         * @member {string} service
         * @memberof goat_rpc.BidiStreamingCall
         * @instance
         */
        BidiStreamingCall.prototype.service = "";

        /**
         * BidiStreamingCall method.
         * @member {string} method
         * @memberof goat_rpc.BidiStreamingCall
         * @instance
         */
        BidiStreamingCall.prototype.method = "";

        /**
         * BidiStreamingCall metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.BidiStreamingCall
         * @instance
         */
        BidiStreamingCall.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new BidiStreamingCall instance using the specified properties.
         * @function create
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {goat_rpc.IBidiStreamingCall=} [properties] Properties to set
         * @returns {goat_rpc.BidiStreamingCall} BidiStreamingCall instance
         */
        BidiStreamingCall.create = function create(properties) {
            return new BidiStreamingCall(properties);
        };

        /**
         * Encodes the specified BidiStreamingCall message. Does not implicitly {@link goat_rpc.BidiStreamingCall.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {goat_rpc.IBidiStreamingCall} message BidiStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.callId);
            if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.service);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.method);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BidiStreamingCall message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {goat_rpc.IBidiStreamingCall} message BidiStreamingCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BidiStreamingCall message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.BidiStreamingCall} BidiStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.BidiStreamingCall(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.service = reader.string();
                        break;
                    }
                case 3: {
                        message.method = reader.string();
                        break;
                    }
                case 4: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BidiStreamingCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.BidiStreamingCall} BidiStreamingCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BidiStreamingCall message.
         * @function verify
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BidiStreamingCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isInteger(message.callId))
                    return "callId: integer expected";
            if (message.service != null && message.hasOwnProperty("service"))
                if (!$util.isString(message.service))
                    return "service: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a BidiStreamingCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.BidiStreamingCall} BidiStreamingCall
         */
        BidiStreamingCall.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.BidiStreamingCall)
                return object;
            let message = new $root.goat_rpc.BidiStreamingCall();
            if (object.callId != null)
                message.callId = object.callId >>> 0;
            if (object.service != null)
                message.service = String(object.service);
            if (object.method != null)
                message.method = String(object.method);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.BidiStreamingCall.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BidiStreamingCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {goat_rpc.BidiStreamingCall} message BidiStreamingCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BidiStreamingCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.callId = 0;
                object.service = "";
                object.method = "";
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            if (message.service != null && message.hasOwnProperty("service"))
                object.service = message.service;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this BidiStreamingCall to JSON.
         * @function toJSON
         * @memberof goat_rpc.BidiStreamingCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BidiStreamingCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BidiStreamingCall
         * @function getTypeUrl
         * @memberof goat_rpc.BidiStreamingCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BidiStreamingCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.BidiStreamingCall";
        };

        return BidiStreamingCall;
    })();

    goat_rpc.BidiStreamingData = (function() {

        /**
         * Properties of a BidiStreamingData.
         * @memberof goat_rpc
         * @interface IBidiStreamingData
         * @property {Uint8Array|null} [data] BidiStreamingData data
         */

        /**
         * Constructs a new BidiStreamingData.
         * @memberof goat_rpc
         * @classdesc Represents a BidiStreamingData.
         * @implements IBidiStreamingData
         * @constructor
         * @param {goat_rpc.IBidiStreamingData=} [properties] Properties to set
         */
        function BidiStreamingData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BidiStreamingData data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.BidiStreamingData
         * @instance
         */
        BidiStreamingData.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new BidiStreamingData instance using the specified properties.
         * @function create
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {goat_rpc.IBidiStreamingData=} [properties] Properties to set
         * @returns {goat_rpc.BidiStreamingData} BidiStreamingData instance
         */
        BidiStreamingData.create = function create(properties) {
            return new BidiStreamingData(properties);
        };

        /**
         * Encodes the specified BidiStreamingData message. Does not implicitly {@link goat_rpc.BidiStreamingData.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {goat_rpc.IBidiStreamingData} message BidiStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified BidiStreamingData message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {goat_rpc.IBidiStreamingData} message BidiStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BidiStreamingData message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.BidiStreamingData} BidiStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.BidiStreamingData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BidiStreamingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.BidiStreamingData} BidiStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BidiStreamingData message.
         * @function verify
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BidiStreamingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a BidiStreamingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.BidiStreamingData} BidiStreamingData
         */
        BidiStreamingData.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.BidiStreamingData)
                return object;
            let message = new $root.goat_rpc.BidiStreamingData();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a BidiStreamingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {goat_rpc.BidiStreamingData} message BidiStreamingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BidiStreamingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this BidiStreamingData to JSON.
         * @function toJSON
         * @memberof goat_rpc.BidiStreamingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BidiStreamingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BidiStreamingData
         * @function getTypeUrl
         * @memberof goat_rpc.BidiStreamingData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BidiStreamingData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.BidiStreamingData";
        };

        return BidiStreamingData;
    })();

    goat_rpc.BidiStreamingEnd = (function() {

        /**
         * Properties of a BidiStreamingEnd.
         * @memberof goat_rpc
         * @interface IBidiStreamingEnd
         */

        /**
         * Constructs a new BidiStreamingEnd.
         * @memberof goat_rpc
         * @classdesc Represents a BidiStreamingEnd.
         * @implements IBidiStreamingEnd
         * @constructor
         * @param {goat_rpc.IBidiStreamingEnd=} [properties] Properties to set
         */
        function BidiStreamingEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BidiStreamingEnd instance using the specified properties.
         * @function create
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {goat_rpc.IBidiStreamingEnd=} [properties] Properties to set
         * @returns {goat_rpc.BidiStreamingEnd} BidiStreamingEnd instance
         */
        BidiStreamingEnd.create = function create(properties) {
            return new BidiStreamingEnd(properties);
        };

        /**
         * Encodes the specified BidiStreamingEnd message. Does not implicitly {@link goat_rpc.BidiStreamingEnd.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {goat_rpc.IBidiStreamingEnd} message BidiStreamingEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BidiStreamingEnd message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {goat_rpc.IBidiStreamingEnd} message BidiStreamingEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BidiStreamingEnd message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.BidiStreamingEnd} BidiStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.BidiStreamingEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BidiStreamingEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.BidiStreamingEnd} BidiStreamingEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BidiStreamingEnd message.
         * @function verify
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BidiStreamingEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BidiStreamingEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.BidiStreamingEnd} BidiStreamingEnd
         */
        BidiStreamingEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.BidiStreamingEnd)
                return object;
            return new $root.goat_rpc.BidiStreamingEnd();
        };

        /**
         * Creates a plain object from a BidiStreamingEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {goat_rpc.BidiStreamingEnd} message BidiStreamingEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BidiStreamingEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BidiStreamingEnd to JSON.
         * @function toJSON
         * @memberof goat_rpc.BidiStreamingEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BidiStreamingEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BidiStreamingEnd
         * @function getTypeUrl
         * @memberof goat_rpc.BidiStreamingEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BidiStreamingEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.BidiStreamingEnd";
        };

        return BidiStreamingEnd;
    })();

    goat_rpc.ServerMessage = (function() {

        /**
         * Properties of a ServerMessage.
         * @memberof goat_rpc
         * @interface IServerMessage
         * @property {number|null} [callId] ServerMessage callId
         * @property {goat_rpc.ServerMessage.Kind|null} [kind] ServerMessage kind
         * @property {goat_rpc.IUnaryStatus|null} [unaryStatus] ServerMessage unaryStatus
         * @property {goat_rpc.IServerStreamingMetadata|null} [serverStreamingMetadata] ServerMessage serverStreamingMetadata
         * @property {goat_rpc.IServerStreamingData|null} [serverStreamingData] ServerMessage serverStreamingData
         * @property {goat_rpc.IServerStreamingStatus|null} [serverStreamingStatus] ServerMessage serverStreamingStatus
         * @property {goat_rpc.IClientStreamingMetadata|null} [clientStreamingMetadata] ServerMessage clientStreamingMetadata
         * @property {goat_rpc.IClientStreamingStatus|null} [clientStreamingStatus] ServerMessage clientStreamingStatus
         * @property {goat_rpc.IBidiStreamingMetadata|null} [bidiStreamingMetadata] ServerMessage bidiStreamingMetadata
         * @property {goat_rpc.IBidiStreamingData|null} [bidiStreamingData] ServerMessage bidiStreamingData
         * @property {goat_rpc.IBidiStreamingStatus|null} [bidiStreamingStatus] ServerMessage bidiStreamingStatus
         */

        /**
         * Constructs a new ServerMessage.
         * @memberof goat_rpc
         * @classdesc Represents a ServerMessage.
         * @implements IServerMessage
         * @constructor
         * @param {goat_rpc.IServerMessage=} [properties] Properties to set
         */
        function ServerMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerMessage callId.
         * @member {number} callId
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.callId = 0;

        /**
         * ServerMessage kind.
         * @member {goat_rpc.ServerMessage.Kind} kind
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.kind = 3;

        /**
         * ServerMessage unaryStatus.
         * @member {goat_rpc.IUnaryStatus|null|undefined} unaryStatus
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.unaryStatus = null;

        /**
         * ServerMessage serverStreamingMetadata.
         * @member {goat_rpc.IServerStreamingMetadata|null|undefined} serverStreamingMetadata
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.serverStreamingMetadata = null;

        /**
         * ServerMessage serverStreamingData.
         * @member {goat_rpc.IServerStreamingData|null|undefined} serverStreamingData
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.serverStreamingData = null;

        /**
         * ServerMessage serverStreamingStatus.
         * @member {goat_rpc.IServerStreamingStatus|null|undefined} serverStreamingStatus
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.serverStreamingStatus = null;

        /**
         * ServerMessage clientStreamingMetadata.
         * @member {goat_rpc.IClientStreamingMetadata|null|undefined} clientStreamingMetadata
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.clientStreamingMetadata = null;

        /**
         * ServerMessage clientStreamingStatus.
         * @member {goat_rpc.IClientStreamingStatus|null|undefined} clientStreamingStatus
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.clientStreamingStatus = null;

        /**
         * ServerMessage bidiStreamingMetadata.
         * @member {goat_rpc.IBidiStreamingMetadata|null|undefined} bidiStreamingMetadata
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.bidiStreamingMetadata = null;

        /**
         * ServerMessage bidiStreamingData.
         * @member {goat_rpc.IBidiStreamingData|null|undefined} bidiStreamingData
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.bidiStreamingData = null;

        /**
         * ServerMessage bidiStreamingStatus.
         * @member {goat_rpc.IBidiStreamingStatus|null|undefined} bidiStreamingStatus
         * @memberof goat_rpc.ServerMessage
         * @instance
         */
        ServerMessage.prototype.bidiStreamingStatus = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_unaryStatus", {
            get: $util.oneOfGetter($oneOfFields = ["unaryStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_serverStreamingMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["serverStreamingMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_serverStreamingData", {
            get: $util.oneOfGetter($oneOfFields = ["serverStreamingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_serverStreamingStatus", {
            get: $util.oneOfGetter($oneOfFields = ["serverStreamingStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_clientStreamingMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["clientStreamingMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_clientStreamingStatus", {
            get: $util.oneOfGetter($oneOfFields = ["clientStreamingStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_bidiStreamingMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_bidiStreamingData", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerMessage.prototype, "_bidiStreamingStatus", {
            get: $util.oneOfGetter($oneOfFields = ["bidiStreamingStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {goat_rpc.IServerMessage=} [properties] Properties to set
         * @returns {goat_rpc.ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link goat_rpc.ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {goat_rpc.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callId != null && Object.hasOwnProperty.call(message, "callId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.callId);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.kind);
            if (message.unaryStatus != null && Object.hasOwnProperty.call(message, "unaryStatus"))
                $root.goat_rpc.UnaryStatus.encode(message.unaryStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.serverStreamingMetadata != null && Object.hasOwnProperty.call(message, "serverStreamingMetadata"))
                $root.goat_rpc.ServerStreamingMetadata.encode(message.serverStreamingMetadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.serverStreamingData != null && Object.hasOwnProperty.call(message, "serverStreamingData"))
                $root.goat_rpc.ServerStreamingData.encode(message.serverStreamingData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.serverStreamingStatus != null && Object.hasOwnProperty.call(message, "serverStreamingStatus"))
                $root.goat_rpc.ServerStreamingStatus.encode(message.serverStreamingStatus, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.clientStreamingMetadata != null && Object.hasOwnProperty.call(message, "clientStreamingMetadata"))
                $root.goat_rpc.ClientStreamingMetadata.encode(message.clientStreamingMetadata, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.clientStreamingStatus != null && Object.hasOwnProperty.call(message, "clientStreamingStatus"))
                $root.goat_rpc.ClientStreamingStatus.encode(message.clientStreamingStatus, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.bidiStreamingMetadata != null && Object.hasOwnProperty.call(message, "bidiStreamingMetadata"))
                $root.goat_rpc.BidiStreamingMetadata.encode(message.bidiStreamingMetadata, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.bidiStreamingData != null && Object.hasOwnProperty.call(message, "bidiStreamingData"))
                $root.goat_rpc.BidiStreamingData.encode(message.bidiStreamingData, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.bidiStreamingStatus != null && Object.hasOwnProperty.call(message, "bidiStreamingStatus"))
                $root.goat_rpc.BidiStreamingStatus.encode(message.bidiStreamingStatus, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link goat_rpc.ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {goat_rpc.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ServerMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.callId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.kind = reader.int32();
                        break;
                    }
                case 3: {
                        message.unaryStatus = $root.goat_rpc.UnaryStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.serverStreamingMetadata = $root.goat_rpc.ServerStreamingMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.serverStreamingData = $root.goat_rpc.ServerStreamingData.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.serverStreamingStatus = $root.goat_rpc.ServerStreamingStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.clientStreamingMetadata = $root.goat_rpc.ClientStreamingMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.clientStreamingStatus = $root.goat_rpc.ClientStreamingStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.bidiStreamingMetadata = $root.goat_rpc.BidiStreamingMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.bidiStreamingData = $root.goat_rpc.BidiStreamingData.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.bidiStreamingStatus = $root.goat_rpc.BidiStreamingStatus.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerMessage message.
         * @function verify
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.callId != null && message.hasOwnProperty("callId"))
                if (!$util.isInteger(message.callId))
                    return "callId: integer expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                default:
                    return "kind: enum value expected";
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            if (message.unaryStatus != null && message.hasOwnProperty("unaryStatus")) {
                properties._unaryStatus = 1;
                {
                    let error = $root.goat_rpc.UnaryStatus.verify(message.unaryStatus);
                    if (error)
                        return "unaryStatus." + error;
                }
            }
            if (message.serverStreamingMetadata != null && message.hasOwnProperty("serverStreamingMetadata")) {
                properties._serverStreamingMetadata = 1;
                {
                    let error = $root.goat_rpc.ServerStreamingMetadata.verify(message.serverStreamingMetadata);
                    if (error)
                        return "serverStreamingMetadata." + error;
                }
            }
            if (message.serverStreamingData != null && message.hasOwnProperty("serverStreamingData")) {
                properties._serverStreamingData = 1;
                {
                    let error = $root.goat_rpc.ServerStreamingData.verify(message.serverStreamingData);
                    if (error)
                        return "serverStreamingData." + error;
                }
            }
            if (message.serverStreamingStatus != null && message.hasOwnProperty("serverStreamingStatus")) {
                properties._serverStreamingStatus = 1;
                {
                    let error = $root.goat_rpc.ServerStreamingStatus.verify(message.serverStreamingStatus);
                    if (error)
                        return "serverStreamingStatus." + error;
                }
            }
            if (message.clientStreamingMetadata != null && message.hasOwnProperty("clientStreamingMetadata")) {
                properties._clientStreamingMetadata = 1;
                {
                    let error = $root.goat_rpc.ClientStreamingMetadata.verify(message.clientStreamingMetadata);
                    if (error)
                        return "clientStreamingMetadata." + error;
                }
            }
            if (message.clientStreamingStatus != null && message.hasOwnProperty("clientStreamingStatus")) {
                properties._clientStreamingStatus = 1;
                {
                    let error = $root.goat_rpc.ClientStreamingStatus.verify(message.clientStreamingStatus);
                    if (error)
                        return "clientStreamingStatus." + error;
                }
            }
            if (message.bidiStreamingMetadata != null && message.hasOwnProperty("bidiStreamingMetadata")) {
                properties._bidiStreamingMetadata = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingMetadata.verify(message.bidiStreamingMetadata);
                    if (error)
                        return "bidiStreamingMetadata." + error;
                }
            }
            if (message.bidiStreamingData != null && message.hasOwnProperty("bidiStreamingData")) {
                properties._bidiStreamingData = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingData.verify(message.bidiStreamingData);
                    if (error)
                        return "bidiStreamingData." + error;
                }
            }
            if (message.bidiStreamingStatus != null && message.hasOwnProperty("bidiStreamingStatus")) {
                properties._bidiStreamingStatus = 1;
                {
                    let error = $root.goat_rpc.BidiStreamingStatus.verify(message.bidiStreamingStatus);
                    if (error)
                        return "bidiStreamingStatus." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ServerMessage)
                return object;
            let message = new $root.goat_rpc.ServerMessage();
            if (object.callId != null)
                message.callId = object.callId >>> 0;
            switch (object.kind) {
            default:
                if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                }
                break;
            case "UnaryStatus":
            case 3:
                message.kind = 3;
                break;
            case "ServerStreamingMetadata":
            case 4:
                message.kind = 4;
                break;
            case "ServerStreamingData":
            case 5:
                message.kind = 5;
                break;
            case "ServerStreamingStatus":
            case 6:
                message.kind = 6;
                break;
            case "ClientStreamingMetadata":
            case 7:
                message.kind = 7;
                break;
            case "ClientStreamingStatus":
            case 8:
                message.kind = 8;
                break;
            case "BidiStreamingMetadata":
            case 9:
                message.kind = 9;
                break;
            case "BidiStreamingData":
            case 10:
                message.kind = 10;
                break;
            case "BidiStreamingStatus":
            case 11:
                message.kind = 11;
                break;
            }
            if (object.unaryStatus != null) {
                if (typeof object.unaryStatus !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.unaryStatus: object expected");
                message.unaryStatus = $root.goat_rpc.UnaryStatus.fromObject(object.unaryStatus);
            }
            if (object.serverStreamingMetadata != null) {
                if (typeof object.serverStreamingMetadata !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.serverStreamingMetadata: object expected");
                message.serverStreamingMetadata = $root.goat_rpc.ServerStreamingMetadata.fromObject(object.serverStreamingMetadata);
            }
            if (object.serverStreamingData != null) {
                if (typeof object.serverStreamingData !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.serverStreamingData: object expected");
                message.serverStreamingData = $root.goat_rpc.ServerStreamingData.fromObject(object.serverStreamingData);
            }
            if (object.serverStreamingStatus != null) {
                if (typeof object.serverStreamingStatus !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.serverStreamingStatus: object expected");
                message.serverStreamingStatus = $root.goat_rpc.ServerStreamingStatus.fromObject(object.serverStreamingStatus);
            }
            if (object.clientStreamingMetadata != null) {
                if (typeof object.clientStreamingMetadata !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.clientStreamingMetadata: object expected");
                message.clientStreamingMetadata = $root.goat_rpc.ClientStreamingMetadata.fromObject(object.clientStreamingMetadata);
            }
            if (object.clientStreamingStatus != null) {
                if (typeof object.clientStreamingStatus !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.clientStreamingStatus: object expected");
                message.clientStreamingStatus = $root.goat_rpc.ClientStreamingStatus.fromObject(object.clientStreamingStatus);
            }
            if (object.bidiStreamingMetadata != null) {
                if (typeof object.bidiStreamingMetadata !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.bidiStreamingMetadata: object expected");
                message.bidiStreamingMetadata = $root.goat_rpc.BidiStreamingMetadata.fromObject(object.bidiStreamingMetadata);
            }
            if (object.bidiStreamingData != null) {
                if (typeof object.bidiStreamingData !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.bidiStreamingData: object expected");
                message.bidiStreamingData = $root.goat_rpc.BidiStreamingData.fromObject(object.bidiStreamingData);
            }
            if (object.bidiStreamingStatus != null) {
                if (typeof object.bidiStreamingStatus !== "object")
                    throw TypeError(".goat_rpc.ServerMessage.bidiStreamingStatus: object expected");
                message.bidiStreamingStatus = $root.goat_rpc.BidiStreamingStatus.fromObject(object.bidiStreamingStatus);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {goat_rpc.ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.callId = 0;
                object.kind = options.enums === String ? "UnaryStatus" : 3;
            }
            if (message.callId != null && message.hasOwnProperty("callId"))
                object.callId = message.callId;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.goat_rpc.ServerMessage.Kind[message.kind] === undefined ? message.kind : $root.goat_rpc.ServerMessage.Kind[message.kind] : message.kind;
            if (message.unaryStatus != null && message.hasOwnProperty("unaryStatus")) {
                object.unaryStatus = $root.goat_rpc.UnaryStatus.toObject(message.unaryStatus, options);
                if (options.oneofs)
                    object._unaryStatus = "unaryStatus";
            }
            if (message.serverStreamingMetadata != null && message.hasOwnProperty("serverStreamingMetadata")) {
                object.serverStreamingMetadata = $root.goat_rpc.ServerStreamingMetadata.toObject(message.serverStreamingMetadata, options);
                if (options.oneofs)
                    object._serverStreamingMetadata = "serverStreamingMetadata";
            }
            if (message.serverStreamingData != null && message.hasOwnProperty("serverStreamingData")) {
                object.serverStreamingData = $root.goat_rpc.ServerStreamingData.toObject(message.serverStreamingData, options);
                if (options.oneofs)
                    object._serverStreamingData = "serverStreamingData";
            }
            if (message.serverStreamingStatus != null && message.hasOwnProperty("serverStreamingStatus")) {
                object.serverStreamingStatus = $root.goat_rpc.ServerStreamingStatus.toObject(message.serverStreamingStatus, options);
                if (options.oneofs)
                    object._serverStreamingStatus = "serverStreamingStatus";
            }
            if (message.clientStreamingMetadata != null && message.hasOwnProperty("clientStreamingMetadata")) {
                object.clientStreamingMetadata = $root.goat_rpc.ClientStreamingMetadata.toObject(message.clientStreamingMetadata, options);
                if (options.oneofs)
                    object._clientStreamingMetadata = "clientStreamingMetadata";
            }
            if (message.clientStreamingStatus != null && message.hasOwnProperty("clientStreamingStatus")) {
                object.clientStreamingStatus = $root.goat_rpc.ClientStreamingStatus.toObject(message.clientStreamingStatus, options);
                if (options.oneofs)
                    object._clientStreamingStatus = "clientStreamingStatus";
            }
            if (message.bidiStreamingMetadata != null && message.hasOwnProperty("bidiStreamingMetadata")) {
                object.bidiStreamingMetadata = $root.goat_rpc.BidiStreamingMetadata.toObject(message.bidiStreamingMetadata, options);
                if (options.oneofs)
                    object._bidiStreamingMetadata = "bidiStreamingMetadata";
            }
            if (message.bidiStreamingData != null && message.hasOwnProperty("bidiStreamingData")) {
                object.bidiStreamingData = $root.goat_rpc.BidiStreamingData.toObject(message.bidiStreamingData, options);
                if (options.oneofs)
                    object._bidiStreamingData = "bidiStreamingData";
            }
            if (message.bidiStreamingStatus != null && message.hasOwnProperty("bidiStreamingStatus")) {
                object.bidiStreamingStatus = $root.goat_rpc.BidiStreamingStatus.toObject(message.bidiStreamingStatus, options);
                if (options.oneofs)
                    object._bidiStreamingStatus = "bidiStreamingStatus";
            }
            return object;
        };

        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof goat_rpc.ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerMessage
         * @function getTypeUrl
         * @memberof goat_rpc.ServerMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ServerMessage";
        };

        /**
         * Kind enum.
         * @name goat_rpc.ServerMessage.Kind
         * @enum {number}
         * @property {number} UnaryStatus=3 UnaryStatus value
         * @property {number} ServerStreamingMetadata=4 ServerStreamingMetadata value
         * @property {number} ServerStreamingData=5 ServerStreamingData value
         * @property {number} ServerStreamingStatus=6 ServerStreamingStatus value
         * @property {number} ClientStreamingMetadata=7 ClientStreamingMetadata value
         * @property {number} ClientStreamingStatus=8 ClientStreamingStatus value
         * @property {number} BidiStreamingMetadata=9 BidiStreamingMetadata value
         * @property {number} BidiStreamingData=10 BidiStreamingData value
         * @property {number} BidiStreamingStatus=11 BidiStreamingStatus value
         */
        ServerMessage.Kind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[3] = "UnaryStatus"] = 3;
            values[valuesById[4] = "ServerStreamingMetadata"] = 4;
            values[valuesById[5] = "ServerStreamingData"] = 5;
            values[valuesById[6] = "ServerStreamingStatus"] = 6;
            values[valuesById[7] = "ClientStreamingMetadata"] = 7;
            values[valuesById[8] = "ClientStreamingStatus"] = 8;
            values[valuesById[9] = "BidiStreamingMetadata"] = 9;
            values[valuesById[10] = "BidiStreamingData"] = 10;
            values[valuesById[11] = "BidiStreamingStatus"] = 11;
            return values;
        })();

        return ServerMessage;
    })();

    goat_rpc.Status = (function() {

        /**
         * Properties of a Status.
         * @memberof goat_rpc
         * @interface IStatus
         * @property {number|null} [code] Status code
         * @property {string|null} [details] Status details
         * @property {Object.<string,string>|null} [metadata] Status metadata
         */

        /**
         * Constructs a new Status.
         * @memberof goat_rpc
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {goat_rpc.IStatus=} [properties] Properties to set
         */
        function Status(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status code.
         * @member {number} code
         * @memberof goat_rpc.Status
         * @instance
         */
        Status.prototype.code = 0;

        /**
         * Status details.
         * @member {string} details
         * @memberof goat_rpc.Status
         * @instance
         */
        Status.prototype.details = "";

        /**
         * Status metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.Status
         * @instance
         */
        Status.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof goat_rpc.Status
         * @static
         * @param {goat_rpc.IStatus=} [properties] Properties to set
         * @returns {goat_rpc.Status} Status instance
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link goat_rpc.Status.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.Status
         * @static
         * @param {goat_rpc.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.details);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link goat_rpc.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.Status
         * @static
         * @param {goat_rpc.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.Status(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.details = reader.string();
                        break;
                    }
                case 3: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof goat_rpc.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.details != null && message.hasOwnProperty("details"))
                if (!$util.isString(message.details))
                    return "details: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.Status} Status
         */
        Status.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.Status)
                return object;
            let message = new $root.goat_rpc.Status();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.details != null)
                message.details = String(object.details);
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.Status.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.Status
         * @static
         * @param {goat_rpc.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            if (options.defaults) {
                object.code = 0;
                object.details = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = message.details;
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof goat_rpc.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Status
         * @function getTypeUrl
         * @memberof goat_rpc.Status
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.Status";
        };

        return Status;
    })();

    goat_rpc.UnaryStatus = (function() {

        /**
         * Properties of an UnaryStatus.
         * @memberof goat_rpc
         * @interface IUnaryStatus
         * @property {goat_rpc.IStatus|null} [status] UnaryStatus status
         * @property {Uint8Array|null} [data] UnaryStatus data
         */

        /**
         * Constructs a new UnaryStatus.
         * @memberof goat_rpc
         * @classdesc Represents an UnaryStatus.
         * @implements IUnaryStatus
         * @constructor
         * @param {goat_rpc.IUnaryStatus=} [properties] Properties to set
         */
        function UnaryStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnaryStatus status.
         * @member {goat_rpc.IStatus|null|undefined} status
         * @memberof goat_rpc.UnaryStatus
         * @instance
         */
        UnaryStatus.prototype.status = null;

        /**
         * UnaryStatus data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.UnaryStatus
         * @instance
         */
        UnaryStatus.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new UnaryStatus instance using the specified properties.
         * @function create
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {goat_rpc.IUnaryStatus=} [properties] Properties to set
         * @returns {goat_rpc.UnaryStatus} UnaryStatus instance
         */
        UnaryStatus.create = function create(properties) {
            return new UnaryStatus(properties);
        };

        /**
         * Encodes the specified UnaryStatus message. Does not implicitly {@link goat_rpc.UnaryStatus.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {goat_rpc.IUnaryStatus} message UnaryStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.goat_rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified UnaryStatus message, length delimited. Does not implicitly {@link goat_rpc.UnaryStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {goat_rpc.IUnaryStatus} message UnaryStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnaryStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnaryStatus message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.UnaryStatus} UnaryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.UnaryStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = $root.goat_rpc.Status.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnaryStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.UnaryStatus} UnaryStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnaryStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnaryStatus message.
         * @function verify
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnaryStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.goat_rpc.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an UnaryStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.UnaryStatus} UnaryStatus
         */
        UnaryStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.UnaryStatus)
                return object;
            let message = new $root.goat_rpc.UnaryStatus();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".goat_rpc.UnaryStatus.status: object expected");
                message.status = $root.goat_rpc.Status.fromObject(object.status);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an UnaryStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {goat_rpc.UnaryStatus} message UnaryStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnaryStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.goat_rpc.Status.toObject(message.status, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this UnaryStatus to JSON.
         * @function toJSON
         * @memberof goat_rpc.UnaryStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnaryStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UnaryStatus
         * @function getTypeUrl
         * @memberof goat_rpc.UnaryStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UnaryStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.UnaryStatus";
        };

        return UnaryStatus;
    })();

    goat_rpc.ServerStreamingMetadata = (function() {

        /**
         * Properties of a ServerStreamingMetadata.
         * @memberof goat_rpc
         * @interface IServerStreamingMetadata
         * @property {Object.<string,string>|null} [metadata] ServerStreamingMetadata metadata
         */

        /**
         * Constructs a new ServerStreamingMetadata.
         * @memberof goat_rpc
         * @classdesc Represents a ServerStreamingMetadata.
         * @implements IServerStreamingMetadata
         * @constructor
         * @param {goat_rpc.IServerStreamingMetadata=} [properties] Properties to set
         */
        function ServerStreamingMetadata(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStreamingMetadata metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.ServerStreamingMetadata
         * @instance
         */
        ServerStreamingMetadata.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new ServerStreamingMetadata instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {goat_rpc.IServerStreamingMetadata=} [properties] Properties to set
         * @returns {goat_rpc.ServerStreamingMetadata} ServerStreamingMetadata instance
         */
        ServerStreamingMetadata.create = function create(properties) {
            return new ServerStreamingMetadata(properties);
        };

        /**
         * Encodes the specified ServerStreamingMetadata message. Does not implicitly {@link goat_rpc.ServerStreamingMetadata.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {goat_rpc.IServerStreamingMetadata} message ServerStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {goat_rpc.IServerStreamingMetadata} message ServerStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStreamingMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ServerStreamingMetadata} ServerStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ServerStreamingMetadata(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStreamingMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ServerStreamingMetadata} ServerStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStreamingMetadata message.
         * @function verify
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStreamingMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a ServerStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ServerStreamingMetadata} ServerStreamingMetadata
         */
        ServerStreamingMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ServerStreamingMetadata)
                return object;
            let message = new $root.goat_rpc.ServerStreamingMetadata();
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.ServerStreamingMetadata.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerStreamingMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {goat_rpc.ServerStreamingMetadata} message ServerStreamingMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStreamingMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ServerStreamingMetadata to JSON.
         * @function toJSON
         * @memberof goat_rpc.ServerStreamingMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStreamingMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerStreamingMetadata
         * @function getTypeUrl
         * @memberof goat_rpc.ServerStreamingMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerStreamingMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ServerStreamingMetadata";
        };

        return ServerStreamingMetadata;
    })();

    goat_rpc.ServerStreamingData = (function() {

        /**
         * Properties of a ServerStreamingData.
         * @memberof goat_rpc
         * @interface IServerStreamingData
         * @property {Uint8Array|null} [data] ServerStreamingData data
         */

        /**
         * Constructs a new ServerStreamingData.
         * @memberof goat_rpc
         * @classdesc Represents a ServerStreamingData.
         * @implements IServerStreamingData
         * @constructor
         * @param {goat_rpc.IServerStreamingData=} [properties] Properties to set
         */
        function ServerStreamingData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStreamingData data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.ServerStreamingData
         * @instance
         */
        ServerStreamingData.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ServerStreamingData instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {goat_rpc.IServerStreamingData=} [properties] Properties to set
         * @returns {goat_rpc.ServerStreamingData} ServerStreamingData instance
         */
        ServerStreamingData.create = function create(properties) {
            return new ServerStreamingData(properties);
        };

        /**
         * Encodes the specified ServerStreamingData message. Does not implicitly {@link goat_rpc.ServerStreamingData.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {goat_rpc.IServerStreamingData} message ServerStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified ServerStreamingData message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {goat_rpc.IServerStreamingData} message ServerStreamingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStreamingData message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ServerStreamingData} ServerStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ServerStreamingData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStreamingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ServerStreamingData} ServerStreamingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStreamingData message.
         * @function verify
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStreamingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a ServerStreamingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ServerStreamingData} ServerStreamingData
         */
        ServerStreamingData.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ServerStreamingData)
                return object;
            let message = new $root.goat_rpc.ServerStreamingData();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a ServerStreamingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {goat_rpc.ServerStreamingData} message ServerStreamingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStreamingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this ServerStreamingData to JSON.
         * @function toJSON
         * @memberof goat_rpc.ServerStreamingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStreamingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerStreamingData
         * @function getTypeUrl
         * @memberof goat_rpc.ServerStreamingData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerStreamingData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ServerStreamingData";
        };

        return ServerStreamingData;
    })();

    goat_rpc.ServerStreamingStatus = (function() {

        /**
         * Properties of a ServerStreamingStatus.
         * @memberof goat_rpc
         * @interface IServerStreamingStatus
         * @property {goat_rpc.IStatus|null} [status] ServerStreamingStatus status
         */

        /**
         * Constructs a new ServerStreamingStatus.
         * @memberof goat_rpc
         * @classdesc Represents a ServerStreamingStatus.
         * @implements IServerStreamingStatus
         * @constructor
         * @param {goat_rpc.IServerStreamingStatus=} [properties] Properties to set
         */
        function ServerStreamingStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStreamingStatus status.
         * @member {goat_rpc.IStatus|null|undefined} status
         * @memberof goat_rpc.ServerStreamingStatus
         * @instance
         */
        ServerStreamingStatus.prototype.status = null;

        /**
         * Creates a new ServerStreamingStatus instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {goat_rpc.IServerStreamingStatus=} [properties] Properties to set
         * @returns {goat_rpc.ServerStreamingStatus} ServerStreamingStatus instance
         */
        ServerStreamingStatus.create = function create(properties) {
            return new ServerStreamingStatus(properties);
        };

        /**
         * Encodes the specified ServerStreamingStatus message. Does not implicitly {@link goat_rpc.ServerStreamingStatus.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {goat_rpc.IServerStreamingStatus} message ServerStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.goat_rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.ServerStreamingStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {goat_rpc.IServerStreamingStatus} message ServerStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStreamingStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStreamingStatus message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ServerStreamingStatus} ServerStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ServerStreamingStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = $root.goat_rpc.Status.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStreamingStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ServerStreamingStatus} ServerStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStreamingStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStreamingStatus message.
         * @function verify
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStreamingStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.goat_rpc.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a ServerStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ServerStreamingStatus} ServerStreamingStatus
         */
        ServerStreamingStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ServerStreamingStatus)
                return object;
            let message = new $root.goat_rpc.ServerStreamingStatus();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".goat_rpc.ServerStreamingStatus.status: object expected");
                message.status = $root.goat_rpc.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerStreamingStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {goat_rpc.ServerStreamingStatus} message ServerStreamingStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStreamingStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.goat_rpc.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this ServerStreamingStatus to JSON.
         * @function toJSON
         * @memberof goat_rpc.ServerStreamingStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStreamingStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerStreamingStatus
         * @function getTypeUrl
         * @memberof goat_rpc.ServerStreamingStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerStreamingStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ServerStreamingStatus";
        };

        return ServerStreamingStatus;
    })();

    goat_rpc.ClientStreamingMetadata = (function() {

        /**
         * Properties of a ClientStreamingMetadata.
         * @memberof goat_rpc
         * @interface IClientStreamingMetadata
         * @property {Object.<string,string>|null} [metadata] ClientStreamingMetadata metadata
         */

        /**
         * Constructs a new ClientStreamingMetadata.
         * @memberof goat_rpc
         * @classdesc Represents a ClientStreamingMetadata.
         * @implements IClientStreamingMetadata
         * @constructor
         * @param {goat_rpc.IClientStreamingMetadata=} [properties] Properties to set
         */
        function ClientStreamingMetadata(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientStreamingMetadata metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.ClientStreamingMetadata
         * @instance
         */
        ClientStreamingMetadata.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new ClientStreamingMetadata instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {goat_rpc.IClientStreamingMetadata=} [properties] Properties to set
         * @returns {goat_rpc.ClientStreamingMetadata} ClientStreamingMetadata instance
         */
        ClientStreamingMetadata.create = function create(properties) {
            return new ClientStreamingMetadata(properties);
        };

        /**
         * Encodes the specified ClientStreamingMetadata message. Does not implicitly {@link goat_rpc.ClientStreamingMetadata.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {goat_rpc.IClientStreamingMetadata} message ClientStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {goat_rpc.IClientStreamingMetadata} message ClientStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientStreamingMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientStreamingMetadata} ClientStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientStreamingMetadata(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientStreamingMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientStreamingMetadata} ClientStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientStreamingMetadata message.
         * @function verify
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientStreamingMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a ClientStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientStreamingMetadata} ClientStreamingMetadata
         */
        ClientStreamingMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientStreamingMetadata)
                return object;
            let message = new $root.goat_rpc.ClientStreamingMetadata();
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.ClientStreamingMetadata.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientStreamingMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {goat_rpc.ClientStreamingMetadata} message ClientStreamingMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientStreamingMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ClientStreamingMetadata to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientStreamingMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientStreamingMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientStreamingMetadata
         * @function getTypeUrl
         * @memberof goat_rpc.ClientStreamingMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientStreamingMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientStreamingMetadata";
        };

        return ClientStreamingMetadata;
    })();

    goat_rpc.ClientStreamingStatus = (function() {

        /**
         * Properties of a ClientStreamingStatus.
         * @memberof goat_rpc
         * @interface IClientStreamingStatus
         * @property {goat_rpc.IStatus|null} [status] ClientStreamingStatus status
         * @property {Uint8Array|null} [data] ClientStreamingStatus data
         */

        /**
         * Constructs a new ClientStreamingStatus.
         * @memberof goat_rpc
         * @classdesc Represents a ClientStreamingStatus.
         * @implements IClientStreamingStatus
         * @constructor
         * @param {goat_rpc.IClientStreamingStatus=} [properties] Properties to set
         */
        function ClientStreamingStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientStreamingStatus status.
         * @member {goat_rpc.IStatus|null|undefined} status
         * @memberof goat_rpc.ClientStreamingStatus
         * @instance
         */
        ClientStreamingStatus.prototype.status = null;

        /**
         * ClientStreamingStatus data.
         * @member {Uint8Array} data
         * @memberof goat_rpc.ClientStreamingStatus
         * @instance
         */
        ClientStreamingStatus.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new ClientStreamingStatus instance using the specified properties.
         * @function create
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {goat_rpc.IClientStreamingStatus=} [properties] Properties to set
         * @returns {goat_rpc.ClientStreamingStatus} ClientStreamingStatus instance
         */
        ClientStreamingStatus.create = function create(properties) {
            return new ClientStreamingStatus(properties);
        };

        /**
         * Encodes the specified ClientStreamingStatus message. Does not implicitly {@link goat_rpc.ClientStreamingStatus.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {goat_rpc.IClientStreamingStatus} message ClientStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.goat_rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified ClientStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.ClientStreamingStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {goat_rpc.IClientStreamingStatus} message ClientStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientStreamingStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientStreamingStatus message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.ClientStreamingStatus} ClientStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.ClientStreamingStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = $root.goat_rpc.Status.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientStreamingStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.ClientStreamingStatus} ClientStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientStreamingStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientStreamingStatus message.
         * @function verify
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientStreamingStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.goat_rpc.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a ClientStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.ClientStreamingStatus} ClientStreamingStatus
         */
        ClientStreamingStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.ClientStreamingStatus)
                return object;
            let message = new $root.goat_rpc.ClientStreamingStatus();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".goat_rpc.ClientStreamingStatus.status: object expected");
                message.status = $root.goat_rpc.Status.fromObject(object.status);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a ClientStreamingStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {goat_rpc.ClientStreamingStatus} message ClientStreamingStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientStreamingStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.goat_rpc.Status.toObject(message.status, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this ClientStreamingStatus to JSON.
         * @function toJSON
         * @memberof goat_rpc.ClientStreamingStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientStreamingStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientStreamingStatus
         * @function getTypeUrl
         * @memberof goat_rpc.ClientStreamingStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientStreamingStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.ClientStreamingStatus";
        };

        return ClientStreamingStatus;
    })();

    goat_rpc.BidiStreamingMetadata = (function() {

        /**
         * Properties of a BidiStreamingMetadata.
         * @memberof goat_rpc
         * @interface IBidiStreamingMetadata
         * @property {Object.<string,string>|null} [metadata] BidiStreamingMetadata metadata
         */

        /**
         * Constructs a new BidiStreamingMetadata.
         * @memberof goat_rpc
         * @classdesc Represents a BidiStreamingMetadata.
         * @implements IBidiStreamingMetadata
         * @constructor
         * @param {goat_rpc.IBidiStreamingMetadata=} [properties] Properties to set
         */
        function BidiStreamingMetadata(properties) {
            this.metadata = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BidiStreamingMetadata metadata.
         * @member {Object.<string,string>} metadata
         * @memberof goat_rpc.BidiStreamingMetadata
         * @instance
         */
        BidiStreamingMetadata.prototype.metadata = $util.emptyObject;

        /**
         * Creates a new BidiStreamingMetadata instance using the specified properties.
         * @function create
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {goat_rpc.IBidiStreamingMetadata=} [properties] Properties to set
         * @returns {goat_rpc.BidiStreamingMetadata} BidiStreamingMetadata instance
         */
        BidiStreamingMetadata.create = function create(properties) {
            return new BidiStreamingMetadata(properties);
        };

        /**
         * Encodes the specified BidiStreamingMetadata message. Does not implicitly {@link goat_rpc.BidiStreamingMetadata.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {goat_rpc.IBidiStreamingMetadata} message BidiStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BidiStreamingMetadata message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {goat_rpc.IBidiStreamingMetadata} message BidiStreamingMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BidiStreamingMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.BidiStreamingMetadata} BidiStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.BidiStreamingMetadata(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.metadata === $util.emptyObject)
                            message.metadata = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metadata[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BidiStreamingMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.BidiStreamingMetadata} BidiStreamingMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BidiStreamingMetadata message.
         * @function verify
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BidiStreamingMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!$util.isObject(message.metadata))
                    return "metadata: object expected";
                let key = Object.keys(message.metadata);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.metadata[key[i]]))
                        return "metadata: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a BidiStreamingMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.BidiStreamingMetadata} BidiStreamingMetadata
         */
        BidiStreamingMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.BidiStreamingMetadata)
                return object;
            let message = new $root.goat_rpc.BidiStreamingMetadata();
            if (object.metadata) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".goat_rpc.BidiStreamingMetadata.metadata: object expected");
                message.metadata = {};
                for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BidiStreamingMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {goat_rpc.BidiStreamingMetadata} message BidiStreamingMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BidiStreamingMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.metadata = {};
            let keys2;
            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                object.metadata = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this BidiStreamingMetadata to JSON.
         * @function toJSON
         * @memberof goat_rpc.BidiStreamingMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BidiStreamingMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BidiStreamingMetadata
         * @function getTypeUrl
         * @memberof goat_rpc.BidiStreamingMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BidiStreamingMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.BidiStreamingMetadata";
        };

        return BidiStreamingMetadata;
    })();

    goat_rpc.BidiStreamingStatus = (function() {

        /**
         * Properties of a BidiStreamingStatus.
         * @memberof goat_rpc
         * @interface IBidiStreamingStatus
         * @property {goat_rpc.IStatus|null} [status] BidiStreamingStatus status
         */

        /**
         * Constructs a new BidiStreamingStatus.
         * @memberof goat_rpc
         * @classdesc Represents a BidiStreamingStatus.
         * @implements IBidiStreamingStatus
         * @constructor
         * @param {goat_rpc.IBidiStreamingStatus=} [properties] Properties to set
         */
        function BidiStreamingStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BidiStreamingStatus status.
         * @member {goat_rpc.IStatus|null|undefined} status
         * @memberof goat_rpc.BidiStreamingStatus
         * @instance
         */
        BidiStreamingStatus.prototype.status = null;

        /**
         * Creates a new BidiStreamingStatus instance using the specified properties.
         * @function create
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {goat_rpc.IBidiStreamingStatus=} [properties] Properties to set
         * @returns {goat_rpc.BidiStreamingStatus} BidiStreamingStatus instance
         */
        BidiStreamingStatus.create = function create(properties) {
            return new BidiStreamingStatus(properties);
        };

        /**
         * Encodes the specified BidiStreamingStatus message. Does not implicitly {@link goat_rpc.BidiStreamingStatus.verify|verify} messages.
         * @function encode
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {goat_rpc.IBidiStreamingStatus} message BidiStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.goat_rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BidiStreamingStatus message, length delimited. Does not implicitly {@link goat_rpc.BidiStreamingStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {goat_rpc.IBidiStreamingStatus} message BidiStreamingStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BidiStreamingStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BidiStreamingStatus message from the specified reader or buffer.
         * @function decode
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {goat_rpc.BidiStreamingStatus} BidiStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.goat_rpc.BidiStreamingStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = $root.goat_rpc.Status.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BidiStreamingStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {goat_rpc.BidiStreamingStatus} BidiStreamingStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BidiStreamingStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BidiStreamingStatus message.
         * @function verify
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BidiStreamingStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.goat_rpc.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a BidiStreamingStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {goat_rpc.BidiStreamingStatus} BidiStreamingStatus
         */
        BidiStreamingStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.goat_rpc.BidiStreamingStatus)
                return object;
            let message = new $root.goat_rpc.BidiStreamingStatus();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".goat_rpc.BidiStreamingStatus.status: object expected");
                message.status = $root.goat_rpc.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a BidiStreamingStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {goat_rpc.BidiStreamingStatus} message BidiStreamingStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BidiStreamingStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.goat_rpc.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this BidiStreamingStatus to JSON.
         * @function toJSON
         * @memberof goat_rpc.BidiStreamingStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BidiStreamingStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BidiStreamingStatus
         * @function getTypeUrl
         * @memberof goat_rpc.BidiStreamingStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BidiStreamingStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/goat_rpc.BidiStreamingStatus";
        };

        return BidiStreamingStatus;
    })();

    return goat_rpc;
})();

export { $root as default };
