/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["FantasyOuter"] || ($protobuf.roots["FantasyOuter"] = {});

$root.C2G_LoginGameRequest = (function() {

    /**
     * Properties of a C2G_LoginGameRequest.
     * @exports IC2G_LoginGameRequest
     * @interface IC2G_LoginGameRequest
     * @property {string|null} [AccountName] C2G_LoginGameRequest AccountName
     */

    /**
     * Constructs a new C2G_LoginGameRequest.
     * @exports C2G_LoginGameRequest
     * @classdesc 客户端登陆到Gate服务器
     * @implements IC2G_LoginGameRequest
     * @constructor
     * @param {IC2G_LoginGameRequest=} [properties] Properties to set
     */
    function C2G_LoginGameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2G_LoginGameRequest AccountName.
     * @member {string} AccountName
     * @memberof C2G_LoginGameRequest
     * @instance
     */
    C2G_LoginGameRequest.prototype.AccountName = "";

    /**
     * Creates a new C2G_LoginGameRequest instance using the specified properties.
     * @function create
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {IC2G_LoginGameRequest=} [properties] Properties to set
     * @returns {C2G_LoginGameRequest} C2G_LoginGameRequest instance
     */
    C2G_LoginGameRequest.create = function create(properties) {
        return new C2G_LoginGameRequest(properties);
    };

    /**
     * Encodes the specified C2G_LoginGameRequest message. Does not implicitly {@link C2G_LoginGameRequest.verify|verify} messages.
     * @function encode
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {IC2G_LoginGameRequest} message C2G_LoginGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2G_LoginGameRequest.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.AccountName != null && Object.hasOwnProperty.call(message, "AccountName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.AccountName);
        return writer;
    };

    /**
     * Encodes the specified C2G_LoginGameRequest message, length delimited. Does not implicitly {@link C2G_LoginGameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {IC2G_LoginGameRequest} message C2G_LoginGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2G_LoginGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a C2G_LoginGameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2G_LoginGameRequest} C2G_LoginGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2G_LoginGameRequest.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.C2G_LoginGameRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.AccountName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a C2G_LoginGameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2G_LoginGameRequest} C2G_LoginGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2G_LoginGameRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2G_LoginGameRequest message.
     * @function verify
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2G_LoginGameRequest.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.AccountName != null && Object.hasOwnProperty.call(message, "AccountName"))
            if (!$util.isString(message.AccountName))
                return "AccountName: string expected";
        return null;
    };

    /**
     * Creates a C2G_LoginGameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2G_LoginGameRequest} C2G_LoginGameRequest
     */
    C2G_LoginGameRequest.fromObject = function fromObject(object, long) {
        if (object instanceof $root.C2G_LoginGameRequest)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".C2G_LoginGameRequest: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.C2G_LoginGameRequest();
        if (object.AccountName != null)
            message.AccountName = String(object.AccountName);
        return message;
    };

    /**
     * Creates a plain object from a C2G_LoginGameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {C2G_LoginGameRequest} message C2G_LoginGameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2G_LoginGameRequest.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.AccountName = "";
        if (message.AccountName != null && Object.hasOwnProperty.call(message, "AccountName"))
            object.AccountName = message.AccountName;
        return object;
    };

    /**
     * Converts this C2G_LoginGameRequest to JSON.
     * @function toJSON
     * @memberof C2G_LoginGameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2G_LoginGameRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2G_LoginGameRequest
     * @function getTypeUrl
     * @memberof C2G_LoginGameRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2G_LoginGameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2G_LoginGameRequest";
    };

    return C2G_LoginGameRequest;
})();

$root.G2C_LoginGameResponse = (function() {

    /**
     * Properties of a G2C_LoginGameResponse.
     * @exports IG2C_LoginGameResponse
     * @interface IG2C_LoginGameResponse
     */

    /**
     * Constructs a new G2C_LoginGameResponse.
     * @exports G2C_LoginGameResponse
     * @classdesc Represents a G2C_LoginGameResponse.
     * @implements IG2C_LoginGameResponse
     * @constructor
     * @param {IG2C_LoginGameResponse=} [properties] Properties to set
     */
    function G2C_LoginGameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new G2C_LoginGameResponse instance using the specified properties.
     * @function create
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {IG2C_LoginGameResponse=} [properties] Properties to set
     * @returns {G2C_LoginGameResponse} G2C_LoginGameResponse instance
     */
    G2C_LoginGameResponse.create = function create(properties) {
        return new G2C_LoginGameResponse(properties);
    };

    /**
     * Encodes the specified G2C_LoginGameResponse message. Does not implicitly {@link G2C_LoginGameResponse.verify|verify} messages.
     * @function encode
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {IG2C_LoginGameResponse} message G2C_LoginGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    G2C_LoginGameResponse.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        return writer;
    };

    /**
     * Encodes the specified G2C_LoginGameResponse message, length delimited. Does not implicitly {@link G2C_LoginGameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {IG2C_LoginGameResponse} message G2C_LoginGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    G2C_LoginGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a G2C_LoginGameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {G2C_LoginGameResponse} G2C_LoginGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    G2C_LoginGameResponse.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.G2C_LoginGameResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a G2C_LoginGameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {G2C_LoginGameResponse} G2C_LoginGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    G2C_LoginGameResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a G2C_LoginGameResponse message.
     * @function verify
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    G2C_LoginGameResponse.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        return null;
    };

    /**
     * Creates a G2C_LoginGameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {G2C_LoginGameResponse} G2C_LoginGameResponse
     */
    G2C_LoginGameResponse.fromObject = function fromObject(object, long) {
        if (object instanceof $root.G2C_LoginGameResponse)
            return object;
        return new $root.G2C_LoginGameResponse();
    };

    /**
     * Creates a plain object from a G2C_LoginGameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {G2C_LoginGameResponse} message G2C_LoginGameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    G2C_LoginGameResponse.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this G2C_LoginGameResponse to JSON.
     * @function toJSON
     * @memberof G2C_LoginGameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    G2C_LoginGameResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for G2C_LoginGameResponse
     * @function getTypeUrl
     * @memberof G2C_LoginGameResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    G2C_LoginGameResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/G2C_LoginGameResponse";
    };

    return G2C_LoginGameResponse;
})();

$root.C2M_InitComplete = (function() {

    /**
     * Properties of a C2M_InitComplete.
     * @exports IC2M_InitComplete
     * @interface IC2M_InitComplete
     */

    /**
     * Constructs a new C2M_InitComplete.
     * @exports C2M_InitComplete
     * @classdesc 客户端通知服务器可以接收服务器推送的消息
     * @implements IC2M_InitComplete
     * @constructor
     * @param {IC2M_InitComplete=} [properties] Properties to set
     */
    function C2M_InitComplete(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2M_InitComplete instance using the specified properties.
     * @function create
     * @memberof C2M_InitComplete
     * @static
     * @param {IC2M_InitComplete=} [properties] Properties to set
     * @returns {C2M_InitComplete} C2M_InitComplete instance
     */
    C2M_InitComplete.create = function create(properties) {
        return new C2M_InitComplete(properties);
    };

    /**
     * Encodes the specified C2M_InitComplete message. Does not implicitly {@link C2M_InitComplete.verify|verify} messages.
     * @function encode
     * @memberof C2M_InitComplete
     * @static
     * @param {IC2M_InitComplete} message C2M_InitComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2M_InitComplete.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        return writer;
    };

    /**
     * Encodes the specified C2M_InitComplete message, length delimited. Does not implicitly {@link C2M_InitComplete.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2M_InitComplete
     * @static
     * @param {IC2M_InitComplete} message C2M_InitComplete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2M_InitComplete.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a C2M_InitComplete message from the specified reader or buffer.
     * @function decode
     * @memberof C2M_InitComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2M_InitComplete} C2M_InitComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2M_InitComplete.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.C2M_InitComplete();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a C2M_InitComplete message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2M_InitComplete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2M_InitComplete} C2M_InitComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2M_InitComplete.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2M_InitComplete message.
     * @function verify
     * @memberof C2M_InitComplete
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2M_InitComplete.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        return null;
    };

    /**
     * Creates a C2M_InitComplete message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2M_InitComplete
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2M_InitComplete} C2M_InitComplete
     */
    C2M_InitComplete.fromObject = function fromObject(object, long) {
        if (object instanceof $root.C2M_InitComplete)
            return object;
        return new $root.C2M_InitComplete();
    };

    /**
     * Creates a plain object from a C2M_InitComplete message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2M_InitComplete
     * @static
     * @param {C2M_InitComplete} message C2M_InitComplete
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2M_InitComplete.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2M_InitComplete to JSON.
     * @function toJSON
     * @memberof C2M_InitComplete
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2M_InitComplete.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2M_InitComplete
     * @function getTypeUrl
     * @memberof C2M_InitComplete
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2M_InitComplete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2M_InitComplete";
    };

    return C2M_InitComplete;
})();

$root.M2C_UnitCreate = (function() {

    /**
     * Properties of a M2C_UnitCreate.
     * @exports IM2C_UnitCreate
     * @interface IM2C_UnitCreate
     * @property {IUnitInfo|null} [Unit] M2C_UnitCreate Unit
     * @property {boolean|null} [IsSelf] M2C_UnitCreate IsSelf
     */

    /**
     * Constructs a new M2C_UnitCreate.
     * @exports M2C_UnitCreate
     * @classdesc Map服务器通知客户端创建新的Unit
     * @implements IM2C_UnitCreate
     * @constructor
     * @param {IM2C_UnitCreate=} [properties] Properties to set
     */
    function M2C_UnitCreate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * M2C_UnitCreate Unit.
     * @member {IUnitInfo|null|undefined} Unit
     * @memberof M2C_UnitCreate
     * @instance
     */
    M2C_UnitCreate.prototype.Unit = null;

    /**
     * M2C_UnitCreate IsSelf.
     * @member {boolean} IsSelf
     * @memberof M2C_UnitCreate
     * @instance
     */
    M2C_UnitCreate.prototype.IsSelf = false;

    /**
     * Creates a new M2C_UnitCreate instance using the specified properties.
     * @function create
     * @memberof M2C_UnitCreate
     * @static
     * @param {IM2C_UnitCreate=} [properties] Properties to set
     * @returns {M2C_UnitCreate} M2C_UnitCreate instance
     */
    M2C_UnitCreate.create = function create(properties) {
        return new M2C_UnitCreate(properties);
    };

    /**
     * Encodes the specified M2C_UnitCreate message. Does not implicitly {@link M2C_UnitCreate.verify|verify} messages.
     * @function encode
     * @memberof M2C_UnitCreate
     * @static
     * @param {IM2C_UnitCreate} message M2C_UnitCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitCreate.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.Unit != null && Object.hasOwnProperty.call(message, "Unit"))
            $root.UnitInfo.encode(message.Unit, writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
        if (message.IsSelf != null && Object.hasOwnProperty.call(message, "IsSelf"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsSelf);
        return writer;
    };

    /**
     * Encodes the specified M2C_UnitCreate message, length delimited. Does not implicitly {@link M2C_UnitCreate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof M2C_UnitCreate
     * @static
     * @param {IM2C_UnitCreate} message M2C_UnitCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitCreate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a M2C_UnitCreate message from the specified reader or buffer.
     * @function decode
     * @memberof M2C_UnitCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {M2C_UnitCreate} M2C_UnitCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitCreate.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.M2C_UnitCreate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.Unit = $root.UnitInfo.decode(reader, reader.uint32(), undefined, long + 1);
                    break;
                }
            case 2: {
                    message.IsSelf = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a M2C_UnitCreate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof M2C_UnitCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {M2C_UnitCreate} M2C_UnitCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitCreate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a M2C_UnitCreate message.
     * @function verify
     * @memberof M2C_UnitCreate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    M2C_UnitCreate.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.Unit != null && Object.hasOwnProperty.call(message, "Unit")) {
            var error = $root.UnitInfo.verify(message.Unit, long + 1);
            if (error)
                return "Unit." + error;
        }
        if (message.IsSelf != null && Object.hasOwnProperty.call(message, "IsSelf"))
            if (typeof message.IsSelf !== "boolean")
                return "IsSelf: boolean expected";
        return null;
    };

    /**
     * Creates a M2C_UnitCreate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof M2C_UnitCreate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {M2C_UnitCreate} M2C_UnitCreate
     */
    M2C_UnitCreate.fromObject = function fromObject(object, long) {
        if (object instanceof $root.M2C_UnitCreate)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".M2C_UnitCreate: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.M2C_UnitCreate();
        if (object.Unit != null) {
            if (!$util.isObject(object.Unit))
                throw TypeError(".M2C_UnitCreate.Unit: object expected");
            message.Unit = $root.UnitInfo.fromObject(object.Unit, long + 1);
        }
        if (object.IsSelf != null)
            message.IsSelf = Boolean(object.IsSelf);
        return message;
    };

    /**
     * Creates a plain object from a M2C_UnitCreate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof M2C_UnitCreate
     * @static
     * @param {M2C_UnitCreate} message M2C_UnitCreate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    M2C_UnitCreate.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.Unit = null;
            object.IsSelf = false;
        }
        if (message.Unit != null && Object.hasOwnProperty.call(message, "Unit"))
            object.Unit = $root.UnitInfo.toObject(message.Unit, options, q + 1);
        if (message.IsSelf != null && Object.hasOwnProperty.call(message, "IsSelf"))
            object.IsSelf = message.IsSelf;
        return object;
    };

    /**
     * Converts this M2C_UnitCreate to JSON.
     * @function toJSON
     * @memberof M2C_UnitCreate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    M2C_UnitCreate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for M2C_UnitCreate
     * @function getTypeUrl
     * @memberof M2C_UnitCreate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    M2C_UnitCreate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/M2C_UnitCreate";
    };

    return M2C_UnitCreate;
})();

$root.M2C_UnitLeave = (function() {

    /**
     * Properties of a M2C_UnitLeave.
     * @exports IM2C_UnitLeave
     * @interface IM2C_UnitLeave
     * @property {number|Long|null} [UnitId] M2C_UnitLeave UnitId
     */

    /**
     * Constructs a new M2C_UnitLeave.
     * @exports M2C_UnitLeave
     * @classdesc Map通知客户端有Unit离开
     * @implements IM2C_UnitLeave
     * @constructor
     * @param {IM2C_UnitLeave=} [properties] Properties to set
     */
    function M2C_UnitLeave(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * M2C_UnitLeave UnitId.
     * @member {number|Long} UnitId
     * @memberof M2C_UnitLeave
     * @instance
     */
    M2C_UnitLeave.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new M2C_UnitLeave instance using the specified properties.
     * @function create
     * @memberof M2C_UnitLeave
     * @static
     * @param {IM2C_UnitLeave=} [properties] Properties to set
     * @returns {M2C_UnitLeave} M2C_UnitLeave instance
     */
    M2C_UnitLeave.create = function create(properties) {
        return new M2C_UnitLeave(properties);
    };

    /**
     * Encodes the specified M2C_UnitLeave message. Does not implicitly {@link M2C_UnitLeave.verify|verify} messages.
     * @function encode
     * @memberof M2C_UnitLeave
     * @static
     * @param {IM2C_UnitLeave} message M2C_UnitLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitLeave.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UnitId);
        return writer;
    };

    /**
     * Encodes the specified M2C_UnitLeave message, length delimited. Does not implicitly {@link M2C_UnitLeave.verify|verify} messages.
     * @function encodeDelimited
     * @memberof M2C_UnitLeave
     * @static
     * @param {IM2C_UnitLeave} message M2C_UnitLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitLeave.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a M2C_UnitLeave message from the specified reader or buffer.
     * @function decode
     * @memberof M2C_UnitLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {M2C_UnitLeave} M2C_UnitLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitLeave.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.M2C_UnitLeave();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.UnitId = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a M2C_UnitLeave message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof M2C_UnitLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {M2C_UnitLeave} M2C_UnitLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitLeave.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a M2C_UnitLeave message.
     * @function verify
     * @memberof M2C_UnitLeave
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    M2C_UnitLeave.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (!$util.isInteger(message.UnitId) && !(message.UnitId && $util.isInteger(message.UnitId.low) && $util.isInteger(message.UnitId.high)))
                return "UnitId: integer|Long expected";
        return null;
    };

    /**
     * Creates a M2C_UnitLeave message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof M2C_UnitLeave
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {M2C_UnitLeave} M2C_UnitLeave
     */
    M2C_UnitLeave.fromObject = function fromObject(object, long) {
        if (object instanceof $root.M2C_UnitLeave)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".M2C_UnitLeave: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.M2C_UnitLeave();
        if (object.UnitId != null)
            if ($util.Long)
                message.UnitId = $util.Long.fromValue(object.UnitId, false);
            else if (typeof object.UnitId === "string")
                message.UnitId = parseInt(object.UnitId, 10);
            else if (typeof object.UnitId === "number")
                message.UnitId = object.UnitId;
            else if (typeof object.UnitId === "object")
                message.UnitId = new $util.LongBits(object.UnitId.low >>> 0, object.UnitId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a M2C_UnitLeave message. Also converts values to other types if specified.
     * @function toObject
     * @memberof M2C_UnitLeave
     * @static
     * @param {M2C_UnitLeave} message M2C_UnitLeave
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    M2C_UnitLeave.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
            } else
                object.UnitId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (typeof BigInt !== "undefined" && options.longs === BigInt)
                object.UnitId = typeof message.UnitId === "number" ? BigInt(message.UnitId) : $util.Long.fromBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0, false).toBigInt();
            else if (typeof message.UnitId === "number")
                object.UnitId = options.longs === String ? String(message.UnitId) : message.UnitId;
            else
                object.UnitId = options.longs === String ? $util.Long.prototype.toString.call(message.UnitId) : options.longs === Number ? new $util.LongBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0).toNumber() : message.UnitId;
        return object;
    };

    /**
     * Converts this M2C_UnitLeave to JSON.
     * @function toJSON
     * @memberof M2C_UnitLeave
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    M2C_UnitLeave.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for M2C_UnitLeave
     * @function getTypeUrl
     * @memberof M2C_UnitLeave
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    M2C_UnitLeave.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/M2C_UnitLeave";
    };

    return M2C_UnitLeave;
})();

$root.UnitInfo = (function() {

    /**
     * Properties of an UnitInfo.
     * @exports IUnitInfo
     * @interface IUnitInfo
     * @property {number|Long|null} [UnitId] UnitInfo UnitId
     * @property {string|null} [Name] UnitInfo Name
     * @property {IPosition|null} [Pos] UnitInfo Pos
     * @property {number|null} [UnitType] UnitInfo UnitType
     */

    /**
     * Constructs a new UnitInfo.
     * @exports UnitInfo
     * @classdesc Unit信息
     * @implements IUnitInfo
     * @constructor
     * @param {IUnitInfo=} [properties] Properties to set
     */
    function UnitInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UnitInfo UnitId.
     * @member {number|Long} UnitId
     * @memberof UnitInfo
     * @instance
     */
    UnitInfo.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UnitInfo Name.
     * @member {string} Name
     * @memberof UnitInfo
     * @instance
     */
    UnitInfo.prototype.Name = "";

    /**
     * UnitInfo Pos.
     * @member {IPosition|null|undefined} Pos
     * @memberof UnitInfo
     * @instance
     */
    UnitInfo.prototype.Pos = null;

    /**
     * UnitInfo UnitType.
     * @member {number} UnitType
     * @memberof UnitInfo
     * @instance
     */
    UnitInfo.prototype.UnitType = 0;

    /**
     * Creates a new UnitInfo instance using the specified properties.
     * @function create
     * @memberof UnitInfo
     * @static
     * @param {IUnitInfo=} [properties] Properties to set
     * @returns {UnitInfo} UnitInfo instance
     */
    UnitInfo.create = function create(properties) {
        return new UnitInfo(properties);
    };

    /**
     * Encodes the specified UnitInfo message. Does not implicitly {@link UnitInfo.verify|verify} messages.
     * @function encode
     * @memberof UnitInfo
     * @static
     * @param {IUnitInfo} message UnitInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnitInfo.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UnitId);
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            $root.Position.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork(), q + 1).ldelim();
        if (message.UnitType != null && Object.hasOwnProperty.call(message, "UnitType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.UnitType);
        return writer;
    };

    /**
     * Encodes the specified UnitInfo message, length delimited. Does not implicitly {@link UnitInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnitInfo
     * @static
     * @param {IUnitInfo} message UnitInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnitInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes an UnitInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UnitInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnitInfo} UnitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnitInfo.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.UnitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.UnitId = reader.int64();
                    break;
                }
            case 2: {
                    message.Name = reader.string();
                    break;
                }
            case 3: {
                    message.Pos = $root.Position.decode(reader, reader.uint32(), undefined, long + 1);
                    break;
                }
            case 4: {
                    message.UnitType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes an UnitInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnitInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnitInfo} UnitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnitInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UnitInfo message.
     * @function verify
     * @memberof UnitInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UnitInfo.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (!$util.isInteger(message.UnitId) && !(message.UnitId && $util.isInteger(message.UnitId.low) && $util.isInteger(message.UnitId.high)))
                return "UnitId: integer|Long expected";
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            if (!$util.isString(message.Name))
                return "Name: string expected";
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos")) {
            var error = $root.Position.verify(message.Pos, long + 1);
            if (error)
                return "Pos." + error;
        }
        if (message.UnitType != null && Object.hasOwnProperty.call(message, "UnitType"))
            if (!$util.isInteger(message.UnitType))
                return "UnitType: integer expected";
        return null;
    };

    /**
     * Creates an UnitInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnitInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnitInfo} UnitInfo
     */
    UnitInfo.fromObject = function fromObject(object, long) {
        if (object instanceof $root.UnitInfo)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".UnitInfo: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.UnitInfo();
        if (object.UnitId != null)
            if ($util.Long)
                message.UnitId = $util.Long.fromValue(object.UnitId, false);
            else if (typeof object.UnitId === "string")
                message.UnitId = parseInt(object.UnitId, 10);
            else if (typeof object.UnitId === "number")
                message.UnitId = object.UnitId;
            else if (typeof object.UnitId === "object")
                message.UnitId = new $util.LongBits(object.UnitId.low >>> 0, object.UnitId.high >>> 0).toNumber();
        if (object.Name != null)
            message.Name = String(object.Name);
        if (object.Pos != null) {
            if (!$util.isObject(object.Pos))
                throw TypeError(".UnitInfo.Pos: object expected");
            message.Pos = $root.Position.fromObject(object.Pos, long + 1);
        }
        if (object.UnitType != null)
            message.UnitType = object.UnitType | 0;
        return message;
    };

    /**
     * Creates a plain object from an UnitInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnitInfo
     * @static
     * @param {UnitInfo} message UnitInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UnitInfo.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
            } else
                object.UnitId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            object.Name = "";
            object.Pos = null;
            object.UnitType = 0;
        }
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (typeof BigInt !== "undefined" && options.longs === BigInt)
                object.UnitId = typeof message.UnitId === "number" ? BigInt(message.UnitId) : $util.Long.fromBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0, false).toBigInt();
            else if (typeof message.UnitId === "number")
                object.UnitId = options.longs === String ? String(message.UnitId) : message.UnitId;
            else
                object.UnitId = options.longs === String ? $util.Long.prototype.toString.call(message.UnitId) : options.longs === Number ? new $util.LongBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0).toNumber() : message.UnitId;
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            object.Name = message.Name;
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            object.Pos = $root.Position.toObject(message.Pos, options, q + 1);
        if (message.UnitType != null && Object.hasOwnProperty.call(message, "UnitType"))
            object.UnitType = message.UnitType;
        return object;
    };

    /**
     * Converts this UnitInfo to JSON.
     * @function toJSON
     * @memberof UnitInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnitInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UnitInfo
     * @function getTypeUrl
     * @memberof UnitInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UnitInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UnitInfo";
    };

    return UnitInfo;
})();

$root.C2M_MoveRequest = (function() {

    /**
     * Properties of a C2M_MoveRequest.
     * @exports IC2M_MoveRequest
     * @interface IC2M_MoveRequest
     * @property {IPosition|null} [TargetPos] C2M_MoveRequest TargetPos
     */

    /**
     * Constructs a new C2M_MoveRequest.
     * @exports C2M_MoveRequest
     * @classdesc 客户端发送请求移动
     * @implements IC2M_MoveRequest
     * @constructor
     * @param {IC2M_MoveRequest=} [properties] Properties to set
     */
    function C2M_MoveRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2M_MoveRequest TargetPos.
     * @member {IPosition|null|undefined} TargetPos
     * @memberof C2M_MoveRequest
     * @instance
     */
    C2M_MoveRequest.prototype.TargetPos = null;

    /**
     * Creates a new C2M_MoveRequest instance using the specified properties.
     * @function create
     * @memberof C2M_MoveRequest
     * @static
     * @param {IC2M_MoveRequest=} [properties] Properties to set
     * @returns {C2M_MoveRequest} C2M_MoveRequest instance
     */
    C2M_MoveRequest.create = function create(properties) {
        return new C2M_MoveRequest(properties);
    };

    /**
     * Encodes the specified C2M_MoveRequest message. Does not implicitly {@link C2M_MoveRequest.verify|verify} messages.
     * @function encode
     * @memberof C2M_MoveRequest
     * @static
     * @param {IC2M_MoveRequest} message C2M_MoveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2M_MoveRequest.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.TargetPos != null && Object.hasOwnProperty.call(message, "TargetPos"))
            $root.Position.encode(message.TargetPos, writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
        return writer;
    };

    /**
     * Encodes the specified C2M_MoveRequest message, length delimited. Does not implicitly {@link C2M_MoveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2M_MoveRequest
     * @static
     * @param {IC2M_MoveRequest} message C2M_MoveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2M_MoveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a C2M_MoveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2M_MoveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2M_MoveRequest} C2M_MoveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2M_MoveRequest.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.C2M_MoveRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.TargetPos = $root.Position.decode(reader, reader.uint32(), undefined, long + 1);
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a C2M_MoveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2M_MoveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2M_MoveRequest} C2M_MoveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2M_MoveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2M_MoveRequest message.
     * @function verify
     * @memberof C2M_MoveRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2M_MoveRequest.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.TargetPos != null && Object.hasOwnProperty.call(message, "TargetPos")) {
            var error = $root.Position.verify(message.TargetPos, long + 1);
            if (error)
                return "TargetPos." + error;
        }
        return null;
    };

    /**
     * Creates a C2M_MoveRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2M_MoveRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2M_MoveRequest} C2M_MoveRequest
     */
    C2M_MoveRequest.fromObject = function fromObject(object, long) {
        if (object instanceof $root.C2M_MoveRequest)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".C2M_MoveRequest: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.C2M_MoveRequest();
        if (object.TargetPos != null) {
            if (!$util.isObject(object.TargetPos))
                throw TypeError(".C2M_MoveRequest.TargetPos: object expected");
            message.TargetPos = $root.Position.fromObject(object.TargetPos, long + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a C2M_MoveRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2M_MoveRequest
     * @static
     * @param {C2M_MoveRequest} message C2M_MoveRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2M_MoveRequest.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults)
            object.TargetPos = null;
        if (message.TargetPos != null && Object.hasOwnProperty.call(message, "TargetPos"))
            object.TargetPos = $root.Position.toObject(message.TargetPos, options, q + 1);
        return object;
    };

    /**
     * Converts this C2M_MoveRequest to JSON.
     * @function toJSON
     * @memberof C2M_MoveRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2M_MoveRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2M_MoveRequest
     * @function getTypeUrl
     * @memberof C2M_MoveRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2M_MoveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2M_MoveRequest";
    };

    return C2M_MoveRequest;
})();

$root.M2C_MoveResponse = (function() {

    /**
     * Properties of a M2C_MoveResponse.
     * @exports IM2C_MoveResponse
     * @interface IM2C_MoveResponse
     * @property {Array.<IPosition>|null} [Data] M2C_MoveResponse Data
     */

    /**
     * Constructs a new M2C_MoveResponse.
     * @exports M2C_MoveResponse
     * @classdesc Represents a M2C_MoveResponse.
     * @implements IM2C_MoveResponse
     * @constructor
     * @param {IM2C_MoveResponse=} [properties] Properties to set
     */
    function M2C_MoveResponse(properties) {
        this.Data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * M2C_MoveResponse Data.
     * @member {Array.<IPosition>} Data
     * @memberof M2C_MoveResponse
     * @instance
     */
    M2C_MoveResponse.prototype.Data = $util.emptyArray;

    /**
     * Creates a new M2C_MoveResponse instance using the specified properties.
     * @function create
     * @memberof M2C_MoveResponse
     * @static
     * @param {IM2C_MoveResponse=} [properties] Properties to set
     * @returns {M2C_MoveResponse} M2C_MoveResponse instance
     */
    M2C_MoveResponse.create = function create(properties) {
        return new M2C_MoveResponse(properties);
    };

    /**
     * Encodes the specified M2C_MoveResponse message. Does not implicitly {@link M2C_MoveResponse.verify|verify} messages.
     * @function encode
     * @memberof M2C_MoveResponse
     * @static
     * @param {IM2C_MoveResponse} message M2C_MoveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_MoveResponse.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.Data != null && message.Data.length)
            for (var i = 0; i < message.Data.length; ++i)
                $root.Position.encode(message.Data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
        return writer;
    };

    /**
     * Encodes the specified M2C_MoveResponse message, length delimited. Does not implicitly {@link M2C_MoveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof M2C_MoveResponse
     * @static
     * @param {IM2C_MoveResponse} message M2C_MoveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_MoveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a M2C_MoveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof M2C_MoveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {M2C_MoveResponse} M2C_MoveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_MoveResponse.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.M2C_MoveResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.Data && message.Data.length))
                        message.Data = [];
                    message.Data.push($root.Position.decode(reader, reader.uint32(), undefined, long + 1));
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a M2C_MoveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof M2C_MoveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {M2C_MoveResponse} M2C_MoveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_MoveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a M2C_MoveResponse message.
     * @function verify
     * @memberof M2C_MoveResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    M2C_MoveResponse.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.Data != null && Object.hasOwnProperty.call(message, "Data")) {
            if (!Array.isArray(message.Data))
                return "Data: array expected";
            for (var i = 0; i < message.Data.length; ++i) {
                var error = $root.Position.verify(message.Data[i], long + 1);
                if (error)
                    return "Data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a M2C_MoveResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof M2C_MoveResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {M2C_MoveResponse} M2C_MoveResponse
     */
    M2C_MoveResponse.fromObject = function fromObject(object, long) {
        if (object instanceof $root.M2C_MoveResponse)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".M2C_MoveResponse: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.M2C_MoveResponse();
        if (object.Data) {
            if (!Array.isArray(object.Data))
                throw TypeError(".M2C_MoveResponse.Data: array expected");
            message.Data = [];
            for (var i = 0; i < object.Data.length; ++i) {
                if (!$util.isObject(object.Data[i]))
                    throw TypeError(".M2C_MoveResponse.Data: object expected");
                message.Data[i] = $root.Position.fromObject(object.Data[i], long + 1);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a M2C_MoveResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof M2C_MoveResponse
     * @static
     * @param {M2C_MoveResponse} message M2C_MoveResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    M2C_MoveResponse.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults)
            object.Data = [];
        if (message.Data && message.Data.length) {
            object.Data = [];
            for (var j = 0; j < message.Data.length; ++j)
                object.Data[j] = $root.Position.toObject(message.Data[j], options, q + 1);
        }
        return object;
    };

    /**
     * Converts this M2C_MoveResponse to JSON.
     * @function toJSON
     * @memberof M2C_MoveResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    M2C_MoveResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for M2C_MoveResponse
     * @function getTypeUrl
     * @memberof M2C_MoveResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    M2C_MoveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/M2C_MoveResponse";
    };

    return M2C_MoveResponse;
})();

$root.Position = (function() {

    /**
     * Properties of a Position.
     * @exports IPosition
     * @interface IPosition
     * @property {number|null} [X] Position X
     * @property {number|null} [Y] Position Y
     * @property {number|null} [Z] Position Z
     */

    /**
     * Constructs a new Position.
     * @exports Position
     * @classdesc 坐标信息
     * @implements IPosition
     * @constructor
     * @param {IPosition=} [properties] Properties to set
     */
    function Position(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Position X.
     * @member {number} X
     * @memberof Position
     * @instance
     */
    Position.prototype.X = 0;

    /**
     * Position Y.
     * @member {number} Y
     * @memberof Position
     * @instance
     */
    Position.prototype.Y = 0;

    /**
     * Position Z.
     * @member {number} Z
     * @memberof Position
     * @instance
     */
    Position.prototype.Z = 0;

    /**
     * Creates a new Position instance using the specified properties.
     * @function create
     * @memberof Position
     * @static
     * @param {IPosition=} [properties] Properties to set
     * @returns {Position} Position instance
     */
    Position.create = function create(properties) {
        return new Position(properties);
    };

    /**
     * Encodes the specified Position message. Does not implicitly {@link Position.verify|verify} messages.
     * @function encode
     * @memberof Position
     * @static
     * @param {IPosition} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Position.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.X != null && Object.hasOwnProperty.call(message, "X"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.X);
        if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Y);
        if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.Z);
        return writer;
    };

    /**
     * Encodes the specified Position message, length delimited. Does not implicitly {@link Position.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Position
     * @static
     * @param {IPosition} message Position message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Position.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a Position message from the specified reader or buffer.
     * @function decode
     * @memberof Position
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Position.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.Position();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.X = reader.float();
                    break;
                }
            case 2: {
                    message.Y = reader.float();
                    break;
                }
            case 3: {
                    message.Z = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a Position message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Position
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Position} Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Position.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Position message.
     * @function verify
     * @memberof Position
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Position.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.X != null && Object.hasOwnProperty.call(message, "X"))
            if (typeof message.X !== "number")
                return "X: number expected";
        if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
            if (typeof message.Y !== "number")
                return "Y: number expected";
        if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
            if (typeof message.Z !== "number")
                return "Z: number expected";
        return null;
    };

    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Position
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Position} Position
     */
    Position.fromObject = function fromObject(object, long) {
        if (object instanceof $root.Position)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".Position: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.Position();
        if (object.X != null)
            message.X = Number(object.X);
        if (object.Y != null)
            message.Y = Number(object.Y);
        if (object.Z != null)
            message.Z = Number(object.Z);
        return message;
    };

    /**
     * Creates a plain object from a Position message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Position
     * @static
     * @param {Position} message Position
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Position.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.X = 0;
            object.Y = 0;
            object.Z = 0;
        }
        if (message.X != null && Object.hasOwnProperty.call(message, "X"))
            object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
        if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
            object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
        if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
            object.Z = options.json && !isFinite(message.Z) ? String(message.Z) : message.Z;
        return object;
    };

    /**
     * Converts this Position to JSON.
     * @function toJSON
     * @memberof Position
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Position.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Position
     * @function getTypeUrl
     * @memberof Position
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Position";
    };

    return Position;
})();

$root.M2C_UnitMoveState = (function() {

    /**
     * Properties of a M2C_UnitMoveState.
     * @exports IM2C_UnitMoveState
     * @interface IM2C_UnitMoveState
     * @property {number|null} [State] M2C_UnitMoveState State
     * @property {number|Long|null} [UnitId] M2C_UnitMoveState UnitId
     * @property {IPosition|null} [Pos] M2C_UnitMoveState Pos
     */

    /**
     * Constructs a new M2C_UnitMoveState.
     * @exports M2C_UnitMoveState
     * @classdesc 通知客户端Unit移动状态改变
     * @implements IM2C_UnitMoveState
     * @constructor
     * @param {IM2C_UnitMoveState=} [properties] Properties to set
     */
    function M2C_UnitMoveState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * M2C_UnitMoveState State.
     * @member {number} State
     * @memberof M2C_UnitMoveState
     * @instance
     */
    M2C_UnitMoveState.prototype.State = 0;

    /**
     * M2C_UnitMoveState UnitId.
     * @member {number|Long} UnitId
     * @memberof M2C_UnitMoveState
     * @instance
     */
    M2C_UnitMoveState.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * M2C_UnitMoveState Pos.
     * @member {IPosition|null|undefined} Pos
     * @memberof M2C_UnitMoveState
     * @instance
     */
    M2C_UnitMoveState.prototype.Pos = null;

    /**
     * Creates a new M2C_UnitMoveState instance using the specified properties.
     * @function create
     * @memberof M2C_UnitMoveState
     * @static
     * @param {IM2C_UnitMoveState=} [properties] Properties to set
     * @returns {M2C_UnitMoveState} M2C_UnitMoveState instance
     */
    M2C_UnitMoveState.create = function create(properties) {
        return new M2C_UnitMoveState(properties);
    };

    /**
     * Encodes the specified M2C_UnitMoveState message. Does not implicitly {@link M2C_UnitMoveState.verify|verify} messages.
     * @function encode
     * @memberof M2C_UnitMoveState
     * @static
     * @param {IM2C_UnitMoveState} message M2C_UnitMoveState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitMoveState.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.State != null && Object.hasOwnProperty.call(message, "State"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UnitId);
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            $root.Position.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork(), q + 1).ldelim();
        return writer;
    };

    /**
     * Encodes the specified M2C_UnitMoveState message, length delimited. Does not implicitly {@link M2C_UnitMoveState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof M2C_UnitMoveState
     * @static
     * @param {IM2C_UnitMoveState} message M2C_UnitMoveState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M2C_UnitMoveState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a M2C_UnitMoveState message from the specified reader or buffer.
     * @function decode
     * @memberof M2C_UnitMoveState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {M2C_UnitMoveState} M2C_UnitMoveState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitMoveState.decode = function decode(reader, length, error, long) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (long === undefined)
            long = 0;
        if (long > $Reader.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var end, message;
        if (length === undefined)
            end = reader.len;
        else {
            end = reader.pos + length;
            if (end > reader.len)
                throw RangeError("index out of range");
            length = reader.len;
            reader.len = end;
        }
        message = new $root.M2C_UnitMoveState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.State = reader.int32();
                    break;
                }
            case 2: {
                    message.UnitId = reader.int64();
                    break;
                }
            case 3: {
                    message.Pos = $root.Position.decode(reader, reader.uint32(), undefined, long + 1);
                    break;
                }
            default:
                reader.skipType(tag & 7, long);
                break;
            }
        }
        if (length !== undefined) {
            if (reader.pos !== end)
                throw RangeError("index out of range");
            reader.len = length;
        }
        return message;
    };

    /**
     * Decodes a M2C_UnitMoveState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof M2C_UnitMoveState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {M2C_UnitMoveState} M2C_UnitMoveState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M2C_UnitMoveState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a M2C_UnitMoveState message.
     * @function verify
     * @memberof M2C_UnitMoveState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    M2C_UnitMoveState.verify = function verify(message, long) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            return "maximum nesting depth exceeded";
        if (message.State != null && Object.hasOwnProperty.call(message, "State"))
            if (!$util.isInteger(message.State))
                return "State: integer expected";
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (!$util.isInteger(message.UnitId) && !(message.UnitId && $util.isInteger(message.UnitId.low) && $util.isInteger(message.UnitId.high)))
                return "UnitId: integer|Long expected";
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos")) {
            var error = $root.Position.verify(message.Pos, long + 1);
            if (error)
                return "Pos." + error;
        }
        return null;
    };

    /**
     * Creates a M2C_UnitMoveState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof M2C_UnitMoveState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {M2C_UnitMoveState} M2C_UnitMoveState
     */
    M2C_UnitMoveState.fromObject = function fromObject(object, long) {
        if (object instanceof $root.M2C_UnitMoveState)
            return object;
        if (!$util.isObject(object))
            throw TypeError(".M2C_UnitMoveState: object expected");
        if (long === undefined)
            long = 0;
        if (long > $util.recursionLimit)
            throw Error("maximum nesting depth exceeded");
        var message = new $root.M2C_UnitMoveState();
        if (object.State != null)
            message.State = object.State | 0;
        if (object.UnitId != null)
            if ($util.Long)
                message.UnitId = $util.Long.fromValue(object.UnitId, false);
            else if (typeof object.UnitId === "string")
                message.UnitId = parseInt(object.UnitId, 10);
            else if (typeof object.UnitId === "number")
                message.UnitId = object.UnitId;
            else if (typeof object.UnitId === "object")
                message.UnitId = new $util.LongBits(object.UnitId.low >>> 0, object.UnitId.high >>> 0).toNumber();
        if (object.Pos != null) {
            if (!$util.isObject(object.Pos))
                throw TypeError(".M2C_UnitMoveState.Pos: object expected");
            message.Pos = $root.Position.fromObject(object.Pos, long + 1);
        }
        return message;
    };

    /**
     * Creates a plain object from a M2C_UnitMoveState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof M2C_UnitMoveState
     * @static
     * @param {M2C_UnitMoveState} message M2C_UnitMoveState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    M2C_UnitMoveState.toObject = function toObject(message, options, q) {
        if (!options)
            options = {};
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.State = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.UnitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
            } else
                object.UnitId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            object.Pos = null;
        }
        if (message.State != null && Object.hasOwnProperty.call(message, "State"))
            object.State = message.State;
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            if (typeof BigInt !== "undefined" && options.longs === BigInt)
                object.UnitId = typeof message.UnitId === "number" ? BigInt(message.UnitId) : $util.Long.fromBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0, false).toBigInt();
            else if (typeof message.UnitId === "number")
                object.UnitId = options.longs === String ? String(message.UnitId) : message.UnitId;
            else
                object.UnitId = options.longs === String ? $util.Long.prototype.toString.call(message.UnitId) : options.longs === Number ? new $util.LongBits(message.UnitId.low >>> 0, message.UnitId.high >>> 0).toNumber() : message.UnitId;
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            object.Pos = $root.Position.toObject(message.Pos, options, q + 1);
        return object;
    };

    /**
     * Converts this M2C_UnitMoveState to JSON.
     * @function toJSON
     * @memberof M2C_UnitMoveState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    M2C_UnitMoveState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for M2C_UnitMoveState
     * @function getTypeUrl
     * @memberof M2C_UnitMoveState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    M2C_UnitMoveState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/M2C_UnitMoveState";
    };

    return M2C_UnitMoveState;
})();

$root.Fantasy = (function() {

    /**
     * Namespace Fantasy.
     * @exports Fantasy
     * @namespace
     */
    var Fantasy = {};

    Fantasy.Network = (function() {

        /**
         * Namespace Network.
         * @memberof Fantasy
         * @namespace
         */
        var Network = {};

        Network.Message = (function() {

            /**
             * Namespace Message.
             * @memberof Fantasy.Network
             * @namespace
             */
            var Message = {};

            Message.C2G_TestEmptyMessage = (function() {

                /**
                 * Properties of a C2G_TestEmptyMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestEmptyMessage
                 */

                /**
                 * Constructs a new C2G_TestEmptyMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestEmptyMessage.
                 * @implements IC2G_TestEmptyMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestEmptyMessage=} [properties] Properties to set
                 */
                function C2G_TestEmptyMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_TestEmptyMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEmptyMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestEmptyMessage} C2G_TestEmptyMessage instance
                 */
                C2G_TestEmptyMessage.create = function create(properties) {
                    return new C2G_TestEmptyMessage(properties);
                };

                /**
                 * Encodes the specified C2G_TestEmptyMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEmptyMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEmptyMessage} message C2G_TestEmptyMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestEmptyMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestEmptyMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEmptyMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEmptyMessage} message C2G_TestEmptyMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestEmptyMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestEmptyMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestEmptyMessage} C2G_TestEmptyMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestEmptyMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestEmptyMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestEmptyMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestEmptyMessage} C2G_TestEmptyMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestEmptyMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestEmptyMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestEmptyMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_TestEmptyMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestEmptyMessage} C2G_TestEmptyMessage
                 */
                C2G_TestEmptyMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestEmptyMessage)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_TestEmptyMessage();
                };

                /**
                 * Creates a plain object from a C2G_TestEmptyMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestEmptyMessage} message C2G_TestEmptyMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestEmptyMessage.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_TestEmptyMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestEmptyMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestEmptyMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestEmptyMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestEmptyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestEmptyMessage";
                };

                return C2G_TestEmptyMessage;
            })();

            Message.C2G_TestMessage = (function() {

                /**
                 * Properties of a C2G_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestMessage
                 * @property {string|null} [Tag] C2G_TestMessage Tag
                 */

                /**
                 * Constructs a new C2G_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestMessage.
                 * @implements IC2G_TestMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestMessage=} [properties] Properties to set
                 */
                function C2G_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2G_TestMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @instance
                 */
                C2G_TestMessage.prototype.Tag = "";

                /**
                 * Creates a new C2G_TestMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage instance
                 */
                C2G_TestMessage.create = function create(properties) {
                    return new C2G_TestMessage(properties);
                };

                /**
                 * Encodes the specified C2G_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMessage} message C2G_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMessage} message C2G_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestMessage} C2G_TestMessage
                 */
                C2G_TestMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_TestMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_TestMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMessage} message C2G_TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_TestMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestMessage";
                };

                return C2G_TestMessage;
            })();

            Message.C2G_TestRequest = (function() {

                /**
                 * Properties of a C2G_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestRequest
                 * @property {string|null} [Tag] C2G_TestRequest Tag
                 * @property {Uint8Array|null} [Data] C2G_TestRequest Data
                 */

                /**
                 * Constructs a new C2G_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestRequest.
                 * @implements IC2G_TestRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestRequest=} [properties] Properties to set
                 */
                function C2G_TestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2G_TestRequest Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @instance
                 */
                C2G_TestRequest.prototype.Tag = "";

                /**
                 * C2G_TestRequest Data.
                 * @member {Uint8Array} Data
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @instance
                 */
                C2G_TestRequest.prototype.Data = $util.newBuffer([]);

                /**
                 * Creates a new C2G_TestRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest instance
                 */
                C2G_TestRequest.create = function create(properties) {
                    return new C2G_TestRequest(properties);
                };

                /**
                 * Encodes the specified C2G_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequest} message C2G_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequest} message C2G_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        case 2: {
                                message.Data = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                            return "Data: buffer expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestRequest} C2G_TestRequest
                 */
                C2G_TestRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_TestRequest: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_TestRequest();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    if (object.Data != null)
                        if (typeof object.Data === "string")
                            $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                        else if (object.Data.length >= 0)
                            message.Data = object.Data;
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequest} message C2G_TestRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestRequest.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.Tag = "";
                        if (options.bytes === String)
                            object.Data = "";
                        else {
                            object.Data = [];
                            if (options.bytes !== Array)
                                object.Data = $util.newBuffer(object.Data);
                        }
                    }
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                    return object;
                };

                /**
                 * Converts this C2G_TestRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestRequest";
                };

                return C2G_TestRequest;
            })();

            Message.G2C_TestResponse = (function() {

                /**
                 * Properties of a G2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_TestResponse
                 * @property {string|null} [Tag] G2C_TestResponse Tag
                 * @property {Uint8Array|null} [Data] G2C_TestResponse Data
                 * @property {Array.<number>|null} [Lists] G2C_TestResponse Lists
                 */

                /**
                 * Constructs a new G2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_TestResponse.
                 * @implements IG2C_TestResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_TestResponse=} [properties] Properties to set
                 */
                function G2C_TestResponse(properties) {
                    this.Lists = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * G2C_TestResponse Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 */
                G2C_TestResponse.prototype.Tag = "";

                /**
                 * G2C_TestResponse Data.
                 * @member {Uint8Array} Data
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 */
                G2C_TestResponse.prototype.Data = $util.newBuffer([]);

                /**
                 * G2C_TestResponse Lists.
                 * @member {Array.<number>} Lists
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 */
                G2C_TestResponse.prototype.Lists = $util.emptyArray;

                /**
                 * Creates a new G2C_TestResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse instance
                 */
                G2C_TestResponse.create = function create(properties) {
                    return new G2C_TestResponse(properties);
                };

                /**
                 * Encodes the specified G2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestResponse} message G2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
                    if (message.Lists != null && message.Lists.length) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork();
                        for (var i = 0; i < message.Lists.length; ++i)
                            writer.int32(message.Lists[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified G2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestResponse} message G2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_TestResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        case 2: {
                                message.Data = reader.bytes();
                                break;
                            }
                        case 3: {
                                if (!(message.Lists && message.Lists.length))
                                    message.Lists = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    if (end2 > reader.len)
                                        throw RangeError("index out of range");
                                    reader.len = end2;
                                    while (reader.pos < end2)
                                        message.Lists.push(reader.int32());
                                    if (reader.pos !== end2)
                                        throw RangeError("index out of range");
                                    reader.len = end;
                                } else
                                    message.Lists.push(reader.int32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_TestResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_TestResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                            return "Data: buffer expected";
                    if (message.Lists != null && Object.hasOwnProperty.call(message, "Lists")) {
                        if (!Array.isArray(message.Lists))
                            return "Lists: array expected";
                        for (var i = 0; i < message.Lists.length; ++i)
                            if (!$util.isInteger(message.Lists[i]))
                                return "Lists: integer[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a G2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_TestResponse} G2C_TestResponse
                 */
                G2C_TestResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_TestResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.G2C_TestResponse: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.G2C_TestResponse();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    if (object.Data != null)
                        if (typeof object.Data === "string")
                            $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                        else if (object.Data.length >= 0)
                            message.Data = object.Data;
                    if (object.Lists) {
                        if (!Array.isArray(object.Lists))
                            throw TypeError(".Fantasy.Network.Message.G2C_TestResponse.Lists: array expected");
                        message.Lists = [];
                        for (var i = 0; i < object.Lists.length; ++i)
                            message.Lists[i] = object.Lists[i] | 0;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a G2C_TestResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestResponse} message G2C_TestResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_TestResponse.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.Lists = [];
                    if (options.defaults) {
                        object.Tag = "";
                        if (options.bytes === String)
                            object.Data = "";
                        else {
                            object.Data = [];
                            if (options.bytes !== Array)
                                object.Data = $util.newBuffer(object.Data);
                        }
                    }
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                    if (message.Lists && message.Lists.length) {
                        object.Lists = [];
                        for (var j = 0; j < message.Lists.length; ++j)
                            object.Lists[j] = message.Lists[j];
                    }
                    return object;
                };

                /**
                 * Converts this G2C_TestResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_TestResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_TestResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_TestResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_TestResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_TestResponse";
                };

                return G2C_TestResponse;
            })();

            Message.C2G_TestRequestPushMessage = (function() {

                /**
                 * Properties of a C2G_TestRequestPushMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestRequestPushMessage
                 */

                /**
                 * Constructs a new C2G_TestRequestPushMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestRequestPushMessage.
                 * @implements IC2G_TestRequestPushMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestRequestPushMessage=} [properties] Properties to set
                 */
                function C2G_TestRequestPushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_TestRequestPushMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequestPushMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestRequestPushMessage} C2G_TestRequestPushMessage instance
                 */
                C2G_TestRequestPushMessage.create = function create(properties) {
                    return new C2G_TestRequestPushMessage(properties);
                };

                /**
                 * Encodes the specified C2G_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequestPushMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequestPushMessage} message C2G_TestRequestPushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequestPushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestRequestPushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequestPushMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRequestPushMessage} message C2G_TestRequestPushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRequestPushMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestRequestPushMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRequestPushMessage} C2G_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequestPushMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestRequestPushMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestRequestPushMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRequestPushMessage} C2G_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRequestPushMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestRequestPushMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestRequestPushMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_TestRequestPushMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestRequestPushMessage} C2G_TestRequestPushMessage
                 */
                C2G_TestRequestPushMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestRequestPushMessage)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_TestRequestPushMessage();
                };

                /**
                 * Creates a plain object from a C2G_TestRequestPushMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRequestPushMessage} message C2G_TestRequestPushMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestRequestPushMessage.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_TestRequestPushMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestRequestPushMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestRequestPushMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestRequestPushMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestRequestPushMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestRequestPushMessage";
                };

                return C2G_TestRequestPushMessage;
            })();

            Message.G2C_PushMessage = (function() {

                /**
                 * Properties of a G2C_PushMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_PushMessage
                 * @property {string|null} [Tag] 标记
                 */

                /**
                 * Constructs a new G2C_PushMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Gate服务器推送一个消息给客户端
                 * @implements IG2C_PushMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_PushMessage=} [properties] Properties to set
                 */
                function G2C_PushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * 标记
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @instance
                 */
                G2C_PushMessage.prototype.Tag = "";

                /**
                 * Creates a new G2C_PushMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PushMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_PushMessage} G2C_PushMessage instance
                 */
                G2C_PushMessage.create = function create(properties) {
                    return new G2C_PushMessage(properties);
                };

                /**
                 * Encodes the specified G2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.G2C_PushMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PushMessage} message G2C_PushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_PushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified G2C_PushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_PushMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PushMessage} message G2C_PushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_PushMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_PushMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_PushMessage} G2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_PushMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_PushMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_PushMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_PushMessage} G2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_PushMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_PushMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_PushMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a G2C_PushMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_PushMessage} G2C_PushMessage
                 */
                G2C_PushMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_PushMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.G2C_PushMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.G2C_PushMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a G2C_PushMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.G2C_PushMessage} message G2C_PushMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_PushMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this G2C_PushMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_PushMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_PushMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_PushMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_PushMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_PushMessage";
                };

                return G2C_PushMessage;
            })();

            Message.C2G_CreateAddressableRequest = (function() {

                /**
                 * Properties of a C2G_CreateAddressableRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_CreateAddressableRequest
                 */

                /**
                 * Constructs a new C2G_CreateAddressableRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_CreateAddressableRequest.
                 * @implements IC2G_CreateAddressableRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_CreateAddressableRequest=} [properties] Properties to set
                 */
                function C2G_CreateAddressableRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_CreateAddressableRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateAddressableRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_CreateAddressableRequest} C2G_CreateAddressableRequest instance
                 */
                C2G_CreateAddressableRequest.create = function create(properties) {
                    return new C2G_CreateAddressableRequest(properties);
                };

                /**
                 * Encodes the specified C2G_CreateAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateAddressableRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateAddressableRequest} message C2G_CreateAddressableRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateAddressableRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_CreateAddressableRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateAddressableRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateAddressableRequest} message C2G_CreateAddressableRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateAddressableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_CreateAddressableRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_CreateAddressableRequest} C2G_CreateAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateAddressableRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_CreateAddressableRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_CreateAddressableRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_CreateAddressableRequest} C2G_CreateAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateAddressableRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_CreateAddressableRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_CreateAddressableRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_CreateAddressableRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_CreateAddressableRequest} C2G_CreateAddressableRequest
                 */
                C2G_CreateAddressableRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_CreateAddressableRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_CreateAddressableRequest();
                };

                /**
                 * Creates a plain object from a C2G_CreateAddressableRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_CreateAddressableRequest} message C2G_CreateAddressableRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_CreateAddressableRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_CreateAddressableRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_CreateAddressableRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_CreateAddressableRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_CreateAddressableRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_CreateAddressableRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_CreateAddressableRequest";
                };

                return C2G_CreateAddressableRequest;
            })();

            Message.G2C_CreateAddressableResponse = (function() {

                /**
                 * Properties of a G2C_CreateAddressableResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_CreateAddressableResponse
                 */

                /**
                 * Constructs a new G2C_CreateAddressableResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_CreateAddressableResponse.
                 * @implements IG2C_CreateAddressableResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_CreateAddressableResponse=} [properties] Properties to set
                 */
                function G2C_CreateAddressableResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_CreateAddressableResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateAddressableResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_CreateAddressableResponse} G2C_CreateAddressableResponse instance
                 */
                G2C_CreateAddressableResponse.create = function create(properties) {
                    return new G2C_CreateAddressableResponse(properties);
                };

                /**
                 * Encodes the specified G2C_CreateAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateAddressableResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateAddressableResponse} message G2C_CreateAddressableResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateAddressableResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_CreateAddressableResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateAddressableResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateAddressableResponse} message G2C_CreateAddressableResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateAddressableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_CreateAddressableResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_CreateAddressableResponse} G2C_CreateAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateAddressableResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_CreateAddressableResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_CreateAddressableResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_CreateAddressableResponse} G2C_CreateAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateAddressableResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_CreateAddressableResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_CreateAddressableResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_CreateAddressableResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_CreateAddressableResponse} G2C_CreateAddressableResponse
                 */
                G2C_CreateAddressableResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_CreateAddressableResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_CreateAddressableResponse();
                };

                /**
                 * Creates a plain object from a G2C_CreateAddressableResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_CreateAddressableResponse} message G2C_CreateAddressableResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_CreateAddressableResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_CreateAddressableResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_CreateAddressableResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_CreateAddressableResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_CreateAddressableResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_CreateAddressableResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_CreateAddressableResponse";
                };

                return G2C_CreateAddressableResponse;
            })();

            Message.C2M_TestMessage = (function() {

                /**
                 * Properties of a C2M_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2M_TestMessage
                 * @property {string|null} [Tag] C2M_TestMessage Tag
                 */

                /**
                 * Constructs a new C2M_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2M_TestMessage.
                 * @implements IC2M_TestMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2M_TestMessage=} [properties] Properties to set
                 */
                function C2M_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2M_TestMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @instance
                 */
                C2M_TestMessage.prototype.Tag = "";

                /**
                 * Creates a new C2M_TestMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2M_TestMessage} C2M_TestMessage instance
                 */
                C2M_TestMessage.create = function create(properties) {
                    return new C2M_TestMessage(properties);
                };

                /**
                 * Encodes the specified C2M_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestMessage} message C2M_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2M_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestMessage} message C2M_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2M_TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2M_TestMessage} C2M_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_TestMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2M_TestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2M_TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2M_TestMessage} C2M_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_TestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2M_TestMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2M_TestMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2M_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2M_TestMessage} C2M_TestMessage
                 */
                C2M_TestMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2M_TestMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2M_TestMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2M_TestMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2M_TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2M_TestMessage} message C2M_TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2M_TestMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2M_TestMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2M_TestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2M_TestMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2M_TestMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2M_TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2M_TestMessage";
                };

                return C2M_TestMessage;
            })();

            Message.C2M_TestRequest = (function() {

                /**
                 * Properties of a C2M_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2M_TestRequest
                 * @property {string|null} [Tag] C2M_TestRequest Tag
                 */

                /**
                 * Constructs a new C2M_TestRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2M_TestRequest.
                 * @implements IC2M_TestRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2M_TestRequest=} [properties] Properties to set
                 */
                function C2M_TestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2M_TestRequest Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @instance
                 */
                C2M_TestRequest.prototype.Tag = "";

                /**
                 * Creates a new C2M_TestRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2M_TestRequest} C2M_TestRequest instance
                 */
                C2M_TestRequest.create = function create(properties) {
                    return new C2M_TestRequest(properties);
                };

                /**
                 * Encodes the specified C2M_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestRequest} message C2M_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_TestRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2M_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_TestRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_TestRequest} message C2M_TestRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_TestRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2M_TestRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2M_TestRequest} C2M_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_TestRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2M_TestRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2M_TestRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2M_TestRequest} C2M_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_TestRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2M_TestRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2M_TestRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2M_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2M_TestRequest} C2M_TestRequest
                 */
                C2M_TestRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2M_TestRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2M_TestRequest: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2M_TestRequest();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2M_TestRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2M_TestRequest} message C2M_TestRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2M_TestRequest.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2M_TestRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2M_TestRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2M_TestRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2M_TestRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2M_TestRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2M_TestRequest";
                };

                return C2M_TestRequest;
            })();

            Message.M2C_TestResponse = (function() {

                /**
                 * Properties of a M2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IM2C_TestResponse
                 * @property {string|null} [Tag] M2C_TestResponse Tag
                 */

                /**
                 * Constructs a new M2C_TestResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a M2C_TestResponse.
                 * @implements IM2C_TestResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IM2C_TestResponse=} [properties] Properties to set
                 */
                function M2C_TestResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * M2C_TestResponse Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @instance
                 */
                M2C_TestResponse.prototype.Tag = "";

                /**
                 * Creates a new M2C_TestResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_TestResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.M2C_TestResponse} M2C_TestResponse instance
                 */
                M2C_TestResponse.create = function create(properties) {
                    return new M2C_TestResponse(properties);
                };

                /**
                 * Encodes the specified M2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_TestResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_TestResponse} message M2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M2C_TestResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified M2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.M2C_TestResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_TestResponse} message M2C_TestResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M2C_TestResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a M2C_TestResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.M2C_TestResponse} M2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M2C_TestResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.M2C_TestResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a M2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.M2C_TestResponse} M2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M2C_TestResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a M2C_TestResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                M2C_TestResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a M2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.M2C_TestResponse} M2C_TestResponse
                 */
                M2C_TestResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.M2C_TestResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.M2C_TestResponse: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.M2C_TestResponse();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a M2C_TestResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {Fantasy.Network.Message.M2C_TestResponse} message M2C_TestResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                M2C_TestResponse.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this M2C_TestResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                M2C_TestResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for M2C_TestResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.M2C_TestResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                M2C_TestResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.M2C_TestResponse";
                };

                return M2C_TestResponse;
            })();

            Message.C2G_CreateChatRouteRequest = (function() {

                /**
                 * Properties of a C2G_CreateChatRouteRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_CreateChatRouteRequest
                 */

                /**
                 * Constructs a new C2G_CreateChatRouteRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate服务器创建一个Chat的Route连接
                 * @implements IC2G_CreateChatRouteRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_CreateChatRouteRequest=} [properties] Properties to set
                 */
                function C2G_CreateChatRouteRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_CreateChatRouteRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateChatRouteRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_CreateChatRouteRequest} C2G_CreateChatRouteRequest instance
                 */
                C2G_CreateChatRouteRequest.create = function create(properties) {
                    return new C2G_CreateChatRouteRequest(properties);
                };

                /**
                 * Encodes the specified C2G_CreateChatRouteRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateChatRouteRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateChatRouteRequest} message C2G_CreateChatRouteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateChatRouteRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_CreateChatRouteRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateChatRouteRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateChatRouteRequest} message C2G_CreateChatRouteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateChatRouteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_CreateChatRouteRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_CreateChatRouteRequest} C2G_CreateChatRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateChatRouteRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_CreateChatRouteRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_CreateChatRouteRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_CreateChatRouteRequest} C2G_CreateChatRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateChatRouteRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_CreateChatRouteRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_CreateChatRouteRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_CreateChatRouteRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_CreateChatRouteRequest} C2G_CreateChatRouteRequest
                 */
                C2G_CreateChatRouteRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_CreateChatRouteRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_CreateChatRouteRequest();
                };

                /**
                 * Creates a plain object from a C2G_CreateChatRouteRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_CreateChatRouteRequest} message C2G_CreateChatRouteRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_CreateChatRouteRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_CreateChatRouteRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_CreateChatRouteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_CreateChatRouteRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_CreateChatRouteRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_CreateChatRouteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_CreateChatRouteRequest";
                };

                return C2G_CreateChatRouteRequest;
            })();

            Message.G2C_CreateChatRouteResponse = (function() {

                /**
                 * Properties of a G2C_CreateChatRouteResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_CreateChatRouteResponse
                 */

                /**
                 * Constructs a new G2C_CreateChatRouteResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_CreateChatRouteResponse.
                 * @implements IG2C_CreateChatRouteResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_CreateChatRouteResponse=} [properties] Properties to set
                 */
                function G2C_CreateChatRouteResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_CreateChatRouteResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateChatRouteResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_CreateChatRouteResponse} G2C_CreateChatRouteResponse instance
                 */
                G2C_CreateChatRouteResponse.create = function create(properties) {
                    return new G2C_CreateChatRouteResponse(properties);
                };

                /**
                 * Encodes the specified G2C_CreateChatRouteResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateChatRouteResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateChatRouteResponse} message G2C_CreateChatRouteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateChatRouteResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_CreateChatRouteResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateChatRouteResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateChatRouteResponse} message G2C_CreateChatRouteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateChatRouteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_CreateChatRouteResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_CreateChatRouteResponse} G2C_CreateChatRouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateChatRouteResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_CreateChatRouteResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_CreateChatRouteResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_CreateChatRouteResponse} G2C_CreateChatRouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateChatRouteResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_CreateChatRouteResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_CreateChatRouteResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_CreateChatRouteResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_CreateChatRouteResponse} G2C_CreateChatRouteResponse
                 */
                G2C_CreateChatRouteResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_CreateChatRouteResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_CreateChatRouteResponse();
                };

                /**
                 * Creates a plain object from a G2C_CreateChatRouteResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_CreateChatRouteResponse} message G2C_CreateChatRouteResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_CreateChatRouteResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_CreateChatRouteResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_CreateChatRouteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_CreateChatRouteResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_CreateChatRouteResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_CreateChatRouteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_CreateChatRouteResponse";
                };

                return G2C_CreateChatRouteResponse;
            })();

            Message.C2Chat_TestMessage = (function() {

                /**
                 * Properties of a C2Chat_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestMessage
                 * @property {string|null} [Tag] C2Chat_TestMessage Tag
                 */

                /**
                 * Constructs a new C2Chat_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 发送一个Route消息给Chat
                 * @implements IC2Chat_TestMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessage=} [properties] Properties to set
                 */
                function C2Chat_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Chat_TestMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @instance
                 */
                C2Chat_TestMessage.prototype.Tag = "";

                /**
                 * Creates a new C2Chat_TestMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessage} C2Chat_TestMessage instance
                 */
                C2Chat_TestMessage.create = function create(properties) {
                    return new C2Chat_TestMessage(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessage} message C2Chat_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessage} message C2Chat_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessage} C2Chat_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessage} C2Chat_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessage} C2Chat_TestMessage
                 */
                C2Chat_TestMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Chat_TestMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Chat_TestMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Chat_TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestMessage} message C2Chat_TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Chat_TestMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestMessage";
                };

                return C2Chat_TestMessage;
            })();

            Message.C2Chat_TestMessageRequest = (function() {

                /**
                 * Properties of a C2Chat_TestMessageRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestMessageRequest
                 * @property {string|null} [Tag] C2Chat_TestMessageRequest Tag
                 */

                /**
                 * Constructs a new C2Chat_TestMessageRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 发送一个RPCRoute消息给Chat
                 * @implements IC2Chat_TestMessageRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessageRequest=} [properties] Properties to set
                 */
                function C2Chat_TestMessageRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Chat_TestMessageRequest Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @instance
                 */
                C2Chat_TestMessageRequest.prototype.Tag = "";

                /**
                 * Creates a new C2Chat_TestMessageRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessageRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessageRequest} C2Chat_TestMessageRequest instance
                 */
                C2Chat_TestMessageRequest.create = function create(properties) {
                    return new C2Chat_TestMessageRequest(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestMessageRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessageRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessageRequest} message C2Chat_TestMessageRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestMessageRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestMessageRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessageRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestMessageRequest} message C2Chat_TestMessageRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestMessageRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessageRequest} C2Chat_TestMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestMessageRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestMessageRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessageRequest} C2Chat_TestMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestMessageRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestMessageRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestMessageRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestMessageRequest} C2Chat_TestMessageRequest
                 */
                C2Chat_TestMessageRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestMessageRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Chat_TestMessageRequest: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Chat_TestMessageRequest();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Chat_TestMessageRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestMessageRequest} message C2Chat_TestMessageRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestMessageRequest.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Chat_TestMessageRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestMessageRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestMessageRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestMessageRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestMessageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestMessageRequest";
                };

                return C2Chat_TestMessageRequest;
            })();

            Message.Chat2C_TestMessageResponse = (function() {

                /**
                 * Properties of a Chat2C_TestMessageResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IChat2C_TestMessageResponse
                 * @property {string|null} [Tag] Chat2C_TestMessageResponse Tag
                 */

                /**
                 * Constructs a new Chat2C_TestMessageResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a Chat2C_TestMessageResponse.
                 * @implements IChat2C_TestMessageResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IChat2C_TestMessageResponse=} [properties] Properties to set
                 */
                function Chat2C_TestMessageResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Chat2C_TestMessageResponse Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @instance
                 */
                Chat2C_TestMessageResponse.prototype.Tag = "";

                /**
                 * Creates a new Chat2C_TestMessageResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestMessageResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.Chat2C_TestMessageResponse} Chat2C_TestMessageResponse instance
                 */
                Chat2C_TestMessageResponse.create = function create(properties) {
                    return new Chat2C_TestMessageResponse(properties);
                };

                /**
                 * Encodes the specified Chat2C_TestMessageResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestMessageResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestMessageResponse} message Chat2C_TestMessageResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_TestMessageResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified Chat2C_TestMessageResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestMessageResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestMessageResponse} message Chat2C_TestMessageResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_TestMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Chat2C_TestMessageResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.Chat2C_TestMessageResponse} Chat2C_TestMessageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_TestMessageResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.Chat2C_TestMessageResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a Chat2C_TestMessageResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.Chat2C_TestMessageResponse} Chat2C_TestMessageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_TestMessageResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chat2C_TestMessageResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chat2C_TestMessageResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a Chat2C_TestMessageResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.Chat2C_TestMessageResponse} Chat2C_TestMessageResponse
                 */
                Chat2C_TestMessageResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.Chat2C_TestMessageResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.Chat2C_TestMessageResponse: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.Chat2C_TestMessageResponse();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a Chat2C_TestMessageResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {Fantasy.Network.Message.Chat2C_TestMessageResponse} message Chat2C_TestMessageResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chat2C_TestMessageResponse.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this Chat2C_TestMessageResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chat2C_TestMessageResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Chat2C_TestMessageResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.Chat2C_TestMessageResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Chat2C_TestMessageResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.Chat2C_TestMessageResponse";
                };

                return Chat2C_TestMessageResponse;
            })();

            Message.C2M_MoveToMapRequest = (function() {

                /**
                 * Properties of a C2M_MoveToMapRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2M_MoveToMapRequest
                 */

                /**
                 * Constructs a new C2M_MoveToMapRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 发送一个RPC消息给Map，让Map里的Entity转移到另外一个Map上
                 * @implements IC2M_MoveToMapRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2M_MoveToMapRequest=} [properties] Properties to set
                 */
                function C2M_MoveToMapRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2M_MoveToMapRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_MoveToMapRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2M_MoveToMapRequest} C2M_MoveToMapRequest instance
                 */
                C2M_MoveToMapRequest.create = function create(properties) {
                    return new C2M_MoveToMapRequest(properties);
                };

                /**
                 * Encodes the specified C2M_MoveToMapRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_MoveToMapRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_MoveToMapRequest} message C2M_MoveToMapRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_MoveToMapRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2M_MoveToMapRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_MoveToMapRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2M_MoveToMapRequest} message C2M_MoveToMapRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2M_MoveToMapRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2M_MoveToMapRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2M_MoveToMapRequest} C2M_MoveToMapRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_MoveToMapRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2M_MoveToMapRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2M_MoveToMapRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2M_MoveToMapRequest} C2M_MoveToMapRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2M_MoveToMapRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2M_MoveToMapRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2M_MoveToMapRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2M_MoveToMapRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2M_MoveToMapRequest} C2M_MoveToMapRequest
                 */
                C2M_MoveToMapRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2M_MoveToMapRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2M_MoveToMapRequest();
                };

                /**
                 * Creates a plain object from a C2M_MoveToMapRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2M_MoveToMapRequest} message C2M_MoveToMapRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2M_MoveToMapRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2M_MoveToMapRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2M_MoveToMapRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2M_MoveToMapRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2M_MoveToMapRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2M_MoveToMapRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2M_MoveToMapRequest";
                };

                return C2M_MoveToMapRequest;
            })();

            Message.M2C_MoveToMapResponse = (function() {

                /**
                 * Properties of a M2C_MoveToMapResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IM2C_MoveToMapResponse
                 */

                /**
                 * Constructs a new M2C_MoveToMapResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a M2C_MoveToMapResponse.
                 * @implements IM2C_MoveToMapResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IM2C_MoveToMapResponse=} [properties] Properties to set
                 */
                function M2C_MoveToMapResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new M2C_MoveToMapResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_MoveToMapResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.M2C_MoveToMapResponse} M2C_MoveToMapResponse instance
                 */
                M2C_MoveToMapResponse.create = function create(properties) {
                    return new M2C_MoveToMapResponse(properties);
                };

                /**
                 * Encodes the specified M2C_MoveToMapResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_MoveToMapResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_MoveToMapResponse} message M2C_MoveToMapResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M2C_MoveToMapResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified M2C_MoveToMapResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.M2C_MoveToMapResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Fantasy.Network.Message.IM2C_MoveToMapResponse} message M2C_MoveToMapResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M2C_MoveToMapResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a M2C_MoveToMapResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.M2C_MoveToMapResponse} M2C_MoveToMapResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M2C_MoveToMapResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.M2C_MoveToMapResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a M2C_MoveToMapResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.M2C_MoveToMapResponse} M2C_MoveToMapResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M2C_MoveToMapResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a M2C_MoveToMapResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                M2C_MoveToMapResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a M2C_MoveToMapResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.M2C_MoveToMapResponse} M2C_MoveToMapResponse
                 */
                M2C_MoveToMapResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.M2C_MoveToMapResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.M2C_MoveToMapResponse();
                };

                /**
                 * Creates a plain object from a M2C_MoveToMapResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {Fantasy.Network.Message.M2C_MoveToMapResponse} message M2C_MoveToMapResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                M2C_MoveToMapResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this M2C_MoveToMapResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                M2C_MoveToMapResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for M2C_MoveToMapResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.M2C_MoveToMapResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                M2C_MoveToMapResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.M2C_MoveToMapResponse";
                };

                return M2C_MoveToMapResponse;
            })();

            Message.C2G_SendAddressableToMap = (function() {

                /**
                 * Properties of a C2G_SendAddressableToMap.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_SendAddressableToMap
                 * @property {string|null} [Tag] C2G_SendAddressableToMap Tag
                 */

                /**
                 * Constructs a new C2G_SendAddressableToMap.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 发送一个消息给Gate，让Gate发送一个Addressable消息给MAP
                 * @implements IC2G_SendAddressableToMap
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_SendAddressableToMap=} [properties] Properties to set
                 */
                function C2G_SendAddressableToMap(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2G_SendAddressableToMap Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @instance
                 */
                C2G_SendAddressableToMap.prototype.Tag = "";

                /**
                 * Creates a new C2G_SendAddressableToMap instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendAddressableToMap=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_SendAddressableToMap} C2G_SendAddressableToMap instance
                 */
                C2G_SendAddressableToMap.create = function create(properties) {
                    return new C2G_SendAddressableToMap(properties);
                };

                /**
                 * Encodes the specified C2G_SendAddressableToMap message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendAddressableToMap.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendAddressableToMap} message C2G_SendAddressableToMap message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SendAddressableToMap.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_SendAddressableToMap message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SendAddressableToMap.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendAddressableToMap} message C2G_SendAddressableToMap message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SendAddressableToMap.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_SendAddressableToMap message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_SendAddressableToMap} C2G_SendAddressableToMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SendAddressableToMap.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_SendAddressableToMap();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_SendAddressableToMap message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_SendAddressableToMap} C2G_SendAddressableToMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SendAddressableToMap.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_SendAddressableToMap message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_SendAddressableToMap.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_SendAddressableToMap message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_SendAddressableToMap} C2G_SendAddressableToMap
                 */
                C2G_SendAddressableToMap.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_SendAddressableToMap)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_SendAddressableToMap: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_SendAddressableToMap();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_SendAddressableToMap message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {Fantasy.Network.Message.C2G_SendAddressableToMap} message C2G_SendAddressableToMap
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_SendAddressableToMap.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_SendAddressableToMap to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_SendAddressableToMap.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_SendAddressableToMap
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_SendAddressableToMap
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_SendAddressableToMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_SendAddressableToMap";
                };

                return C2G_SendAddressableToMap;
            })();

            Message.C2Chat_TestRequestPushMessage = (function() {

                /**
                 * Properties of a C2Chat_TestRequestPushMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestRequestPushMessage
                 */

                /**
                 * Constructs a new C2Chat_TestRequestPushMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 发送一个消息给Chat，让Chat服务器主动推送一个RouteMessage消息给客户端
                 * @implements IC2Chat_TestRequestPushMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestRequestPushMessage=} [properties] Properties to set
                 */
                function C2Chat_TestRequestPushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2Chat_TestRequestPushMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRequestPushMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestRequestPushMessage} C2Chat_TestRequestPushMessage instance
                 */
                C2Chat_TestRequestPushMessage.create = function create(properties) {
                    return new C2Chat_TestRequestPushMessage(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRequestPushMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRequestPushMessage} message C2Chat_TestRequestPushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRequestPushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestRequestPushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRequestPushMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRequestPushMessage} message C2Chat_TestRequestPushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRequestPushMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestRequestPushMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestRequestPushMessage} C2Chat_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRequestPushMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestRequestPushMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestRequestPushMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestRequestPushMessage} C2Chat_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRequestPushMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestRequestPushMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestRequestPushMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestRequestPushMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestRequestPushMessage} C2Chat_TestRequestPushMessage
                 */
                C2Chat_TestRequestPushMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestRequestPushMessage)
                        return object;
                    return new $root.Fantasy.Network.Message.C2Chat_TestRequestPushMessage();
                };

                /**
                 * Creates a plain object from a C2Chat_TestRequestPushMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestRequestPushMessage} message C2Chat_TestRequestPushMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestRequestPushMessage.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2Chat_TestRequestPushMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestRequestPushMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestRequestPushMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestRequestPushMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestRequestPushMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestRequestPushMessage";
                };

                return C2Chat_TestRequestPushMessage;
            })();

            Message.Chat2C_PushMessage = (function() {

                /**
                 * Properties of a Chat2C_PushMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IChat2C_PushMessage
                 * @property {string|null} [Tag] Chat2C_PushMessage Tag
                 */

                /**
                 * Constructs a new Chat2C_PushMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Chat服务器主动推送一个消息给客户端
                 * @implements IChat2C_PushMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IChat2C_PushMessage=} [properties] Properties to set
                 */
                function Chat2C_PushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Chat2C_PushMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @instance
                 */
                Chat2C_PushMessage.prototype.Tag = "";

                /**
                 * Creates a new Chat2C_PushMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_PushMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.Chat2C_PushMessage} Chat2C_PushMessage instance
                 */
                Chat2C_PushMessage.create = function create(properties) {
                    return new Chat2C_PushMessage(properties);
                };

                /**
                 * Encodes the specified Chat2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_PushMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_PushMessage} message Chat2C_PushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_PushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified Chat2C_PushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_PushMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_PushMessage} message Chat2C_PushMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_PushMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Chat2C_PushMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.Chat2C_PushMessage} Chat2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_PushMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.Chat2C_PushMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a Chat2C_PushMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.Chat2C_PushMessage} Chat2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_PushMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chat2C_PushMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chat2C_PushMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a Chat2C_PushMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.Chat2C_PushMessage} Chat2C_PushMessage
                 */
                Chat2C_PushMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.Chat2C_PushMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.Chat2C_PushMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.Chat2C_PushMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a Chat2C_PushMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {Fantasy.Network.Message.Chat2C_PushMessage} message Chat2C_PushMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chat2C_PushMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this Chat2C_PushMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chat2C_PushMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Chat2C_PushMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.Chat2C_PushMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Chat2C_PushMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.Chat2C_PushMessage";
                };

                return Chat2C_PushMessage;
            })();

            Message.C2G_CreateSubSceneRequest = (function() {

                /**
                 * Properties of a C2G_CreateSubSceneRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_CreateSubSceneRequest
                 */

                /**
                 * Constructs a new C2G_CreateSubSceneRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端发送给Gate服务器通知map服务器创建一个SubScene
                 * @implements IC2G_CreateSubSceneRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneRequest=} [properties] Properties to set
                 */
                function C2G_CreateSubSceneRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_CreateSubSceneRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneRequest} C2G_CreateSubSceneRequest instance
                 */
                C2G_CreateSubSceneRequest.create = function create(properties) {
                    return new C2G_CreateSubSceneRequest(properties);
                };

                /**
                 * Encodes the specified C2G_CreateSubSceneRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneRequest} message C2G_CreateSubSceneRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateSubSceneRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_CreateSubSceneRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneRequest} message C2G_CreateSubSceneRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateSubSceneRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_CreateSubSceneRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneRequest} C2G_CreateSubSceneRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateSubSceneRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_CreateSubSceneRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_CreateSubSceneRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneRequest} C2G_CreateSubSceneRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateSubSceneRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_CreateSubSceneRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_CreateSubSceneRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_CreateSubSceneRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneRequest} C2G_CreateSubSceneRequest
                 */
                C2G_CreateSubSceneRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_CreateSubSceneRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_CreateSubSceneRequest();
                };

                /**
                 * Creates a plain object from a C2G_CreateSubSceneRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_CreateSubSceneRequest} message C2G_CreateSubSceneRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_CreateSubSceneRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_CreateSubSceneRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_CreateSubSceneRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_CreateSubSceneRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_CreateSubSceneRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_CreateSubSceneRequest";
                };

                return C2G_CreateSubSceneRequest;
            })();

            Message.G2C_CreateSubSceneResponse = (function() {

                /**
                 * Properties of a G2C_CreateSubSceneResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_CreateSubSceneResponse
                 */

                /**
                 * Constructs a new G2C_CreateSubSceneResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_CreateSubSceneResponse.
                 * @implements IG2C_CreateSubSceneResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneResponse=} [properties] Properties to set
                 */
                function G2C_CreateSubSceneResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_CreateSubSceneResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneResponse} G2C_CreateSubSceneResponse instance
                 */
                G2C_CreateSubSceneResponse.create = function create(properties) {
                    return new G2C_CreateSubSceneResponse(properties);
                };

                /**
                 * Encodes the specified G2C_CreateSubSceneResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneResponse} message G2C_CreateSubSceneResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateSubSceneResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_CreateSubSceneResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneResponse} message G2C_CreateSubSceneResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateSubSceneResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_CreateSubSceneResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneResponse} G2C_CreateSubSceneResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateSubSceneResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_CreateSubSceneResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_CreateSubSceneResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneResponse} G2C_CreateSubSceneResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateSubSceneResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_CreateSubSceneResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_CreateSubSceneResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_CreateSubSceneResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneResponse} G2C_CreateSubSceneResponse
                 */
                G2C_CreateSubSceneResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_CreateSubSceneResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_CreateSubSceneResponse();
                };

                /**
                 * Creates a plain object from a G2C_CreateSubSceneResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_CreateSubSceneResponse} message G2C_CreateSubSceneResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_CreateSubSceneResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_CreateSubSceneResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_CreateSubSceneResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_CreateSubSceneResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_CreateSubSceneResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_CreateSubSceneResponse";
                };

                return G2C_CreateSubSceneResponse;
            })();

            Message.C2G_SendToSubSceneMessage = (function() {

                /**
                 * Properties of a C2G_SendToSubSceneMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_SendToSubSceneMessage
                 */

                /**
                 * Constructs a new C2G_SendToSubSceneMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端通知Gate服务器给SubScene发送一个消息
                 * @implements IC2G_SendToSubSceneMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_SendToSubSceneMessage=} [properties] Properties to set
                 */
                function C2G_SendToSubSceneMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_SendToSubSceneMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendToSubSceneMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_SendToSubSceneMessage} C2G_SendToSubSceneMessage instance
                 */
                C2G_SendToSubSceneMessage.create = function create(properties) {
                    return new C2G_SendToSubSceneMessage(properties);
                };

                /**
                 * Encodes the specified C2G_SendToSubSceneMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendToSubSceneMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendToSubSceneMessage} message C2G_SendToSubSceneMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SendToSubSceneMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_SendToSubSceneMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SendToSubSceneMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SendToSubSceneMessage} message C2G_SendToSubSceneMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SendToSubSceneMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_SendToSubSceneMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_SendToSubSceneMessage} C2G_SendToSubSceneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SendToSubSceneMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_SendToSubSceneMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_SendToSubSceneMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_SendToSubSceneMessage} C2G_SendToSubSceneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SendToSubSceneMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_SendToSubSceneMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_SendToSubSceneMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_SendToSubSceneMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_SendToSubSceneMessage} C2G_SendToSubSceneMessage
                 */
                C2G_SendToSubSceneMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_SendToSubSceneMessage)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_SendToSubSceneMessage();
                };

                /**
                 * Creates a plain object from a C2G_SendToSubSceneMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_SendToSubSceneMessage} message C2G_SendToSubSceneMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_SendToSubSceneMessage.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_SendToSubSceneMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_SendToSubSceneMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_SendToSubSceneMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_SendToSubSceneMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_SendToSubSceneMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_SendToSubSceneMessage";
                };

                return C2G_SendToSubSceneMessage;
            })();

            Message.C2G_CreateSubSceneAddressableRequest = (function() {

                /**
                 * Properties of a C2G_CreateSubSceneAddressableRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_CreateSubSceneAddressableRequest
                 */

                /**
                 * Constructs a new C2G_CreateSubSceneAddressableRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端通知Gate服务器创建一个SubScene的Address消息
                 * @implements IC2G_CreateSubSceneAddressableRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest=} [properties] Properties to set
                 */
                function C2G_CreateSubSceneAddressableRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_CreateSubSceneAddressableRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest} C2G_CreateSubSceneAddressableRequest instance
                 */
                C2G_CreateSubSceneAddressableRequest.create = function create(properties) {
                    return new C2G_CreateSubSceneAddressableRequest(properties);
                };

                /**
                 * Encodes the specified C2G_CreateSubSceneAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest} message C2G_CreateSubSceneAddressableRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateSubSceneAddressableRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_CreateSubSceneAddressableRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest} message C2G_CreateSubSceneAddressableRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_CreateSubSceneAddressableRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_CreateSubSceneAddressableRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest} C2G_CreateSubSceneAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateSubSceneAddressableRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_CreateSubSceneAddressableRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest} C2G_CreateSubSceneAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_CreateSubSceneAddressableRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_CreateSubSceneAddressableRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_CreateSubSceneAddressableRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_CreateSubSceneAddressableRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest} C2G_CreateSubSceneAddressableRequest
                 */
                C2G_CreateSubSceneAddressableRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest();
                };

                /**
                 * Creates a plain object from a C2G_CreateSubSceneAddressableRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest} message C2G_CreateSubSceneAddressableRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_CreateSubSceneAddressableRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_CreateSubSceneAddressableRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_CreateSubSceneAddressableRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_CreateSubSceneAddressableRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_CreateSubSceneAddressableRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest";
                };

                return C2G_CreateSubSceneAddressableRequest;
            })();

            Message.G2C_CreateSubSceneAddressableResponse = (function() {

                /**
                 * Properties of a G2C_CreateSubSceneAddressableResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_CreateSubSceneAddressableResponse
                 */

                /**
                 * Constructs a new G2C_CreateSubSceneAddressableResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_CreateSubSceneAddressableResponse.
                 * @implements IG2C_CreateSubSceneAddressableResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse=} [properties] Properties to set
                 */
                function G2C_CreateSubSceneAddressableResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_CreateSubSceneAddressableResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse} G2C_CreateSubSceneAddressableResponse instance
                 */
                G2C_CreateSubSceneAddressableResponse.create = function create(properties) {
                    return new G2C_CreateSubSceneAddressableResponse(properties);
                };

                /**
                 * Encodes the specified G2C_CreateSubSceneAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse} message G2C_CreateSubSceneAddressableResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateSubSceneAddressableResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_CreateSubSceneAddressableResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse} message G2C_CreateSubSceneAddressableResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_CreateSubSceneAddressableResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_CreateSubSceneAddressableResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse} G2C_CreateSubSceneAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateSubSceneAddressableResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_CreateSubSceneAddressableResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse} G2C_CreateSubSceneAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_CreateSubSceneAddressableResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_CreateSubSceneAddressableResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_CreateSubSceneAddressableResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_CreateSubSceneAddressableResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse} G2C_CreateSubSceneAddressableResponse
                 */
                G2C_CreateSubSceneAddressableResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse();
                };

                /**
                 * Creates a plain object from a G2C_CreateSubSceneAddressableResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse} message G2C_CreateSubSceneAddressableResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_CreateSubSceneAddressableResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_CreateSubSceneAddressableResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_CreateSubSceneAddressableResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_CreateSubSceneAddressableResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_CreateSubSceneAddressableResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse";
                };

                return G2C_CreateSubSceneAddressableResponse;
            })();

            Message.C2SubScene_TestMessage = (function() {

                /**
                 * Properties of a C2SubScene_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2SubScene_TestMessage
                 * @property {string|null} [Tag] C2SubScene_TestMessage Tag
                 */

                /**
                 * Constructs a new C2SubScene_TestMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端向SubScene发送一个测试消息
                 * @implements IC2SubScene_TestMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2SubScene_TestMessage=} [properties] Properties to set
                 */
                function C2SubScene_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2SubScene_TestMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @instance
                 */
                C2SubScene_TestMessage.prototype.Tag = "";

                /**
                 * Creates a new C2SubScene_TestMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2SubScene_TestMessage} C2SubScene_TestMessage instance
                 */
                C2SubScene_TestMessage.create = function create(properties) {
                    return new C2SubScene_TestMessage(properties);
                };

                /**
                 * Encodes the specified C2SubScene_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestMessage} message C2SubScene_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SubScene_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2SubScene_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestMessage} message C2SubScene_TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SubScene_TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2SubScene_TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2SubScene_TestMessage} C2SubScene_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SubScene_TestMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2SubScene_TestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2SubScene_TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2SubScene_TestMessage} C2SubScene_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SubScene_TestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2SubScene_TestMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2SubScene_TestMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2SubScene_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2SubScene_TestMessage} C2SubScene_TestMessage
                 */
                C2SubScene_TestMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2SubScene_TestMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2SubScene_TestMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2SubScene_TestMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2SubScene_TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2SubScene_TestMessage} message C2SubScene_TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2SubScene_TestMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2SubScene_TestMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2SubScene_TestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2SubScene_TestMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2SubScene_TestMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2SubScene_TestMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2SubScene_TestMessage";
                };

                return C2SubScene_TestMessage;
            })();

            Message.C2SubScene_TestDisposeMessage = (function() {

                /**
                 * Properties of a C2SubScene_TestDisposeMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2SubScene_TestDisposeMessage
                 */

                /**
                 * Constructs a new C2SubScene_TestDisposeMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端向SubScene发送一个销毁测试消息
                 * @implements IC2SubScene_TestDisposeMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2SubScene_TestDisposeMessage=} [properties] Properties to set
                 */
                function C2SubScene_TestDisposeMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2SubScene_TestDisposeMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestDisposeMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2SubScene_TestDisposeMessage} C2SubScene_TestDisposeMessage instance
                 */
                C2SubScene_TestDisposeMessage.create = function create(properties) {
                    return new C2SubScene_TestDisposeMessage(properties);
                };

                /**
                 * Encodes the specified C2SubScene_TestDisposeMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestDisposeMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestDisposeMessage} message C2SubScene_TestDisposeMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SubScene_TestDisposeMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2SubScene_TestDisposeMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestDisposeMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2SubScene_TestDisposeMessage} message C2SubScene_TestDisposeMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2SubScene_TestDisposeMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2SubScene_TestDisposeMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2SubScene_TestDisposeMessage} C2SubScene_TestDisposeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SubScene_TestDisposeMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2SubScene_TestDisposeMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2SubScene_TestDisposeMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2SubScene_TestDisposeMessage} C2SubScene_TestDisposeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2SubScene_TestDisposeMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2SubScene_TestDisposeMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2SubScene_TestDisposeMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2SubScene_TestDisposeMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2SubScene_TestDisposeMessage} C2SubScene_TestDisposeMessage
                 */
                C2SubScene_TestDisposeMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2SubScene_TestDisposeMessage)
                        return object;
                    return new $root.Fantasy.Network.Message.C2SubScene_TestDisposeMessage();
                };

                /**
                 * Creates a plain object from a C2SubScene_TestDisposeMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2SubScene_TestDisposeMessage} message C2SubScene_TestDisposeMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2SubScene_TestDisposeMessage.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2SubScene_TestDisposeMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2SubScene_TestDisposeMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2SubScene_TestDisposeMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2SubScene_TestDisposeMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2SubScene_TestDisposeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2SubScene_TestDisposeMessage";
                };

                return C2SubScene_TestDisposeMessage;
            })();

            Message.C2G_ConnectRoamingRequest = (function() {

                /**
                 * Properties of a C2G_ConnectRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_ConnectRoamingRequest
                 */

                /**
                 * Constructs a new C2G_ConnectRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端向服务器发送连接消息（Roaming）
                 * @implements IC2G_ConnectRoamingRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_ConnectRoamingRequest=} [properties] Properties to set
                 */
                function C2G_ConnectRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_ConnectRoamingRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_ConnectRoamingRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_ConnectRoamingRequest} C2G_ConnectRoamingRequest instance
                 */
                C2G_ConnectRoamingRequest.create = function create(properties) {
                    return new C2G_ConnectRoamingRequest(properties);
                };

                /**
                 * Encodes the specified C2G_ConnectRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_ConnectRoamingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_ConnectRoamingRequest} message C2G_ConnectRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_ConnectRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_ConnectRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_ConnectRoamingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_ConnectRoamingRequest} message C2G_ConnectRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_ConnectRoamingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_ConnectRoamingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_ConnectRoamingRequest} C2G_ConnectRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_ConnectRoamingRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_ConnectRoamingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_ConnectRoamingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_ConnectRoamingRequest} C2G_ConnectRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_ConnectRoamingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_ConnectRoamingRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_ConnectRoamingRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_ConnectRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_ConnectRoamingRequest} C2G_ConnectRoamingRequest
                 */
                C2G_ConnectRoamingRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_ConnectRoamingRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_ConnectRoamingRequest();
                };

                /**
                 * Creates a plain object from a C2G_ConnectRoamingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_ConnectRoamingRequest} message C2G_ConnectRoamingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_ConnectRoamingRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_ConnectRoamingRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_ConnectRoamingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_ConnectRoamingRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_ConnectRoamingRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_ConnectRoamingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_ConnectRoamingRequest";
                };

                return C2G_ConnectRoamingRequest;
            })();

            Message.G2C_ConnectRoamingResponse = (function() {

                /**
                 * Properties of a G2C_ConnectRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_ConnectRoamingResponse
                 */

                /**
                 * Constructs a new G2C_ConnectRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_ConnectRoamingResponse.
                 * @implements IG2C_ConnectRoamingResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_ConnectRoamingResponse=} [properties] Properties to set
                 */
                function G2C_ConnectRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_ConnectRoamingResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_ConnectRoamingResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_ConnectRoamingResponse} G2C_ConnectRoamingResponse instance
                 */
                G2C_ConnectRoamingResponse.create = function create(properties) {
                    return new G2C_ConnectRoamingResponse(properties);
                };

                /**
                 * Encodes the specified G2C_ConnectRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_ConnectRoamingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_ConnectRoamingResponse} message G2C_ConnectRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_ConnectRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_ConnectRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_ConnectRoamingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_ConnectRoamingResponse} message G2C_ConnectRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_ConnectRoamingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_ConnectRoamingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_ConnectRoamingResponse} G2C_ConnectRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_ConnectRoamingResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_ConnectRoamingResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_ConnectRoamingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_ConnectRoamingResponse} G2C_ConnectRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_ConnectRoamingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_ConnectRoamingResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_ConnectRoamingResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_ConnectRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_ConnectRoamingResponse} G2C_ConnectRoamingResponse
                 */
                G2C_ConnectRoamingResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_ConnectRoamingResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_ConnectRoamingResponse();
                };

                /**
                 * Creates a plain object from a G2C_ConnectRoamingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_ConnectRoamingResponse} message G2C_ConnectRoamingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_ConnectRoamingResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_ConnectRoamingResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_ConnectRoamingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_ConnectRoamingResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_ConnectRoamingResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_ConnectRoamingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_ConnectRoamingResponse";
                };

                return G2C_ConnectRoamingResponse;
            })();

            Message.C2Chat_TestRoamingMessage = (function() {

                /**
                 * Properties of a C2Chat_TestRoamingMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestRoamingMessage
                 * @property {string|null} [Tag] C2Chat_TestRoamingMessage Tag
                 */

                /**
                 * Constructs a new C2Chat_TestRoamingMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试一个Chat漫游普通消息
                 * @implements IC2Chat_TestRoamingMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestRoamingMessage=} [properties] Properties to set
                 */
                function C2Chat_TestRoamingMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Chat_TestRoamingMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @instance
                 */
                C2Chat_TestRoamingMessage.prototype.Tag = "";

                /**
                 * Creates a new C2Chat_TestRoamingMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRoamingMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestRoamingMessage} C2Chat_TestRoamingMessage instance
                 */
                C2Chat_TestRoamingMessage.create = function create(properties) {
                    return new C2Chat_TestRoamingMessage(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRoamingMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRoamingMessage} message C2Chat_TestRoamingMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRoamingMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestRoamingMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRoamingMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRoamingMessage} message C2Chat_TestRoamingMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRoamingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestRoamingMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestRoamingMessage} C2Chat_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRoamingMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestRoamingMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestRoamingMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestRoamingMessage} C2Chat_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRoamingMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestRoamingMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestRoamingMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestRoamingMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestRoamingMessage} C2Chat_TestRoamingMessage
                 */
                C2Chat_TestRoamingMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestRoamingMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Chat_TestRoamingMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Chat_TestRoamingMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Chat_TestRoamingMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestRoamingMessage} message C2Chat_TestRoamingMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestRoamingMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Chat_TestRoamingMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestRoamingMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestRoamingMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestRoamingMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestRoamingMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestRoamingMessage";
                };

                return C2Chat_TestRoamingMessage;
            })();

            Message.C2Map_TestRoamingMessage = (function() {

                /**
                 * Properties of a C2Map_TestRoamingMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Map_TestRoamingMessage
                 * @property {string|null} [Tag] C2Map_TestRoamingMessage Tag
                 */

                /**
                 * Constructs a new C2Map_TestRoamingMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试一个Map漫游普通消息
                 * @implements IC2Map_TestRoamingMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Map_TestRoamingMessage=} [properties] Properties to set
                 */
                function C2Map_TestRoamingMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Map_TestRoamingMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @instance
                 */
                C2Map_TestRoamingMessage.prototype.Tag = "";

                /**
                 * Creates a new C2Map_TestRoamingMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestRoamingMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Map_TestRoamingMessage} C2Map_TestRoamingMessage instance
                 */
                C2Map_TestRoamingMessage.create = function create(properties) {
                    return new C2Map_TestRoamingMessage(properties);
                };

                /**
                 * Encodes the specified C2Map_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestRoamingMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestRoamingMessage} message C2Map_TestRoamingMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_TestRoamingMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Map_TestRoamingMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestRoamingMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestRoamingMessage} message C2Map_TestRoamingMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_TestRoamingMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Map_TestRoamingMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Map_TestRoamingMessage} C2Map_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_TestRoamingMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Map_TestRoamingMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Map_TestRoamingMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Map_TestRoamingMessage} C2Map_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_TestRoamingMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Map_TestRoamingMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Map_TestRoamingMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Map_TestRoamingMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Map_TestRoamingMessage} C2Map_TestRoamingMessage
                 */
                C2Map_TestRoamingMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Map_TestRoamingMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Map_TestRoamingMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Map_TestRoamingMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Map_TestRoamingMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2Map_TestRoamingMessage} message C2Map_TestRoamingMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Map_TestRoamingMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Map_TestRoamingMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Map_TestRoamingMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Map_TestRoamingMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Map_TestRoamingMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Map_TestRoamingMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Map_TestRoamingMessage";
                };

                return C2Map_TestRoamingMessage;
            })();

            Message.C2Chat_TestRPCRoamingRequest = (function() {

                /**
                 * Properties of a C2Chat_TestRPCRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestRPCRoamingRequest
                 * @property {string|null} [Tag] C2Chat_TestRPCRoamingRequest Tag
                 */

                /**
                 * Constructs a new C2Chat_TestRPCRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试一个Chat漫游RPC消息
                 * @implements IC2Chat_TestRPCRoamingRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest=} [properties] Properties to set
                 */
                function C2Chat_TestRPCRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Chat_TestRPCRoamingRequest Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @instance
                 */
                C2Chat_TestRPCRoamingRequest.prototype.Tag = "";

                /**
                 * Creates a new C2Chat_TestRPCRoamingRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest} C2Chat_TestRPCRoamingRequest instance
                 */
                C2Chat_TestRPCRoamingRequest.create = function create(properties) {
                    return new C2Chat_TestRPCRoamingRequest(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestRPCRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest} message C2Chat_TestRPCRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRPCRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestRPCRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest} message C2Chat_TestRPCRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestRPCRoamingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestRPCRoamingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest} C2Chat_TestRPCRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRPCRoamingRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestRPCRoamingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest} C2Chat_TestRPCRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestRPCRoamingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestRPCRoamingRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestRPCRoamingRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestRPCRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest} C2Chat_TestRPCRoamingRequest
                 */
                C2Chat_TestRPCRoamingRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Chat_TestRPCRoamingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest} message C2Chat_TestRPCRoamingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestRPCRoamingRequest.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Chat_TestRPCRoamingRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestRPCRoamingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestRPCRoamingRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestRPCRoamingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest";
                };

                return C2Chat_TestRPCRoamingRequest;
            })();

            Message.Chat2C_TestRPCRoamingResponse = (function() {

                /**
                 * Properties of a Chat2C_TestRPCRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IChat2C_TestRPCRoamingResponse
                 */

                /**
                 * Constructs a new Chat2C_TestRPCRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a Chat2C_TestRPCRoamingResponse.
                 * @implements IChat2C_TestRPCRoamingResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse=} [properties] Properties to set
                 */
                function Chat2C_TestRPCRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Chat2C_TestRPCRoamingResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse} Chat2C_TestRPCRoamingResponse instance
                 */
                Chat2C_TestRPCRoamingResponse.create = function create(properties) {
                    return new Chat2C_TestRPCRoamingResponse(properties);
                };

                /**
                 * Encodes the specified Chat2C_TestRPCRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse} message Chat2C_TestRPCRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_TestRPCRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified Chat2C_TestRPCRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse} message Chat2C_TestRPCRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chat2C_TestRPCRoamingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Chat2C_TestRPCRoamingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse} Chat2C_TestRPCRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_TestRPCRoamingResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a Chat2C_TestRPCRoamingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse} Chat2C_TestRPCRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chat2C_TestRPCRoamingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chat2C_TestRPCRoamingResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chat2C_TestRPCRoamingResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a Chat2C_TestRPCRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse} Chat2C_TestRPCRoamingResponse
                 */
                Chat2C_TestRPCRoamingResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse();
                };

                /**
                 * Creates a plain object from a Chat2C_TestRPCRoamingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse} message Chat2C_TestRPCRoamingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chat2C_TestRPCRoamingResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Chat2C_TestRPCRoamingResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chat2C_TestRPCRoamingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Chat2C_TestRPCRoamingResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Chat2C_TestRPCRoamingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse";
                };

                return Chat2C_TestRPCRoamingResponse;
            })();

            Message.C2Map_PushMessageToClient = (function() {

                /**
                 * Properties of a C2Map_PushMessageToClient.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Map_PushMessageToClient
                 * @property {string|null} [Tag] C2Map_PushMessageToClient Tag
                 */

                /**
                 * Constructs a new C2Map_PushMessageToClient.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端发送一个漫游消息给Map通知Map主动推送一个消息给客户端
                 * @implements IC2Map_PushMessageToClient
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Map_PushMessageToClient=} [properties] Properties to set
                 */
                function C2Map_PushMessageToClient(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Map_PushMessageToClient Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @instance
                 */
                C2Map_PushMessageToClient.prototype.Tag = "";

                /**
                 * Creates a new C2Map_PushMessageToClient instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_PushMessageToClient=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Map_PushMessageToClient} C2Map_PushMessageToClient instance
                 */
                C2Map_PushMessageToClient.create = function create(properties) {
                    return new C2Map_PushMessageToClient(properties);
                };

                /**
                 * Encodes the specified C2Map_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.C2Map_PushMessageToClient.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_PushMessageToClient} message C2Map_PushMessageToClient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_PushMessageToClient.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Map_PushMessageToClient message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_PushMessageToClient.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_PushMessageToClient} message C2Map_PushMessageToClient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_PushMessageToClient.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Map_PushMessageToClient message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Map_PushMessageToClient} C2Map_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_PushMessageToClient.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Map_PushMessageToClient();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Map_PushMessageToClient message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Map_PushMessageToClient} C2Map_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_PushMessageToClient.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Map_PushMessageToClient message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Map_PushMessageToClient.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Map_PushMessageToClient message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Map_PushMessageToClient} C2Map_PushMessageToClient
                 */
                C2Map_PushMessageToClient.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Map_PushMessageToClient)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Map_PushMessageToClient: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Map_PushMessageToClient();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Map_PushMessageToClient message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.C2Map_PushMessageToClient} message C2Map_PushMessageToClient
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Map_PushMessageToClient.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Map_PushMessageToClient to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Map_PushMessageToClient.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Map_PushMessageToClient
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Map_PushMessageToClient
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Map_PushMessageToClient.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Map_PushMessageToClient";
                };

                return C2Map_PushMessageToClient;
            })();

            Message.Map2C_PushMessageToClient = (function() {

                /**
                 * Properties of a Map2C_PushMessageToClient.
                 * @memberof Fantasy.Network.Message
                 * @interface IMap2C_PushMessageToClient
                 * @property {string|null} [Tag] Map2C_PushMessageToClient Tag
                 */

                /**
                 * Constructs a new Map2C_PushMessageToClient.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 漫游端发送一个消息给客户端
                 * @implements IMap2C_PushMessageToClient
                 * @constructor
                 * @param {Fantasy.Network.Message.IMap2C_PushMessageToClient=} [properties] Properties to set
                 */
                function Map2C_PushMessageToClient(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Map2C_PushMessageToClient Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @instance
                 */
                Map2C_PushMessageToClient.prototype.Tag = "";

                /**
                 * Creates a new Map2C_PushMessageToClient instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_PushMessageToClient=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.Map2C_PushMessageToClient} Map2C_PushMessageToClient instance
                 */
                Map2C_PushMessageToClient.create = function create(properties) {
                    return new Map2C_PushMessageToClient(properties);
                };

                /**
                 * Encodes the specified Map2C_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.Map2C_PushMessageToClient.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_PushMessageToClient} message Map2C_PushMessageToClient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Map2C_PushMessageToClient.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified Map2C_PushMessageToClient message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Map2C_PushMessageToClient.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_PushMessageToClient} message Map2C_PushMessageToClient message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Map2C_PushMessageToClient.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Map2C_PushMessageToClient message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.Map2C_PushMessageToClient} Map2C_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Map2C_PushMessageToClient.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.Map2C_PushMessageToClient();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a Map2C_PushMessageToClient message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.Map2C_PushMessageToClient} Map2C_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Map2C_PushMessageToClient.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Map2C_PushMessageToClient message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Map2C_PushMessageToClient.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a Map2C_PushMessageToClient message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.Map2C_PushMessageToClient} Map2C_PushMessageToClient
                 */
                Map2C_PushMessageToClient.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.Map2C_PushMessageToClient)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.Map2C_PushMessageToClient: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.Map2C_PushMessageToClient();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a Map2C_PushMessageToClient message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {Fantasy.Network.Message.Map2C_PushMessageToClient} message Map2C_PushMessageToClient
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Map2C_PushMessageToClient.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this Map2C_PushMessageToClient to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Map2C_PushMessageToClient.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Map2C_PushMessageToClient
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.Map2C_PushMessageToClient
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Map2C_PushMessageToClient.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.Map2C_PushMessageToClient";
                };

                return Map2C_PushMessageToClient;
            })();

            Message.C2Map_TestTransferRequest = (function() {

                /**
                 * Properties of a C2Map_TestTransferRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Map_TestTransferRequest
                 */

                /**
                 * Constructs a new C2Map_TestTransferRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试传送漫游的触发协议
                 * @implements IC2Map_TestTransferRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Map_TestTransferRequest=} [properties] Properties to set
                 */
                function C2Map_TestTransferRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2Map_TestTransferRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestTransferRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Map_TestTransferRequest} C2Map_TestTransferRequest instance
                 */
                C2Map_TestTransferRequest.create = function create(properties) {
                    return new C2Map_TestTransferRequest(properties);
                };

                /**
                 * Encodes the specified C2Map_TestTransferRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestTransferRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestTransferRequest} message C2Map_TestTransferRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_TestTransferRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2Map_TestTransferRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestTransferRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2Map_TestTransferRequest} message C2Map_TestTransferRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Map_TestTransferRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Map_TestTransferRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Map_TestTransferRequest} C2Map_TestTransferRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_TestTransferRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Map_TestTransferRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Map_TestTransferRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Map_TestTransferRequest} C2Map_TestTransferRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Map_TestTransferRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Map_TestTransferRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Map_TestTransferRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2Map_TestTransferRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Map_TestTransferRequest} C2Map_TestTransferRequest
                 */
                C2Map_TestTransferRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Map_TestTransferRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2Map_TestTransferRequest();
                };

                /**
                 * Creates a plain object from a C2Map_TestTransferRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2Map_TestTransferRequest} message C2Map_TestTransferRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Map_TestTransferRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2Map_TestTransferRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Map_TestTransferRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Map_TestTransferRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Map_TestTransferRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Map_TestTransferRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Map_TestTransferRequest";
                };

                return C2Map_TestTransferRequest;
            })();

            Message.Map2C_TestTransferResponse = (function() {

                /**
                 * Properties of a Map2C_TestTransferResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IMap2C_TestTransferResponse
                 */

                /**
                 * Constructs a new Map2C_TestTransferResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a Map2C_TestTransferResponse.
                 * @implements IMap2C_TestTransferResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IMap2C_TestTransferResponse=} [properties] Properties to set
                 */
                function Map2C_TestTransferResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Map2C_TestTransferResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_TestTransferResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.Map2C_TestTransferResponse} Map2C_TestTransferResponse instance
                 */
                Map2C_TestTransferResponse.create = function create(properties) {
                    return new Map2C_TestTransferResponse(properties);
                };

                /**
                 * Encodes the specified Map2C_TestTransferResponse message. Does not implicitly {@link Fantasy.Network.Message.Map2C_TestTransferResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_TestTransferResponse} message Map2C_TestTransferResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Map2C_TestTransferResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified Map2C_TestTransferResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Map2C_TestTransferResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Fantasy.Network.Message.IMap2C_TestTransferResponse} message Map2C_TestTransferResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Map2C_TestTransferResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Map2C_TestTransferResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.Map2C_TestTransferResponse} Map2C_TestTransferResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Map2C_TestTransferResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.Map2C_TestTransferResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a Map2C_TestTransferResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.Map2C_TestTransferResponse} Map2C_TestTransferResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Map2C_TestTransferResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Map2C_TestTransferResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Map2C_TestTransferResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a Map2C_TestTransferResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.Map2C_TestTransferResponse} Map2C_TestTransferResponse
                 */
                Map2C_TestTransferResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.Map2C_TestTransferResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.Map2C_TestTransferResponse();
                };

                /**
                 * Creates a plain object from a Map2C_TestTransferResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {Fantasy.Network.Message.Map2C_TestTransferResponse} message Map2C_TestTransferResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Map2C_TestTransferResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Map2C_TestTransferResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Map2C_TestTransferResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Map2C_TestTransferResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.Map2C_TestTransferResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Map2C_TestTransferResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.Map2C_TestTransferResponse";
                };

                return Map2C_TestTransferResponse;
            })();

            Message.C2Chat_TestSendMapMessage = (function() {

                /**
                 * Properties of a C2Chat_TestSendMapMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2Chat_TestSendMapMessage
                 * @property {string|null} [Tag] C2Chat_TestSendMapMessage Tag
                 */

                /**
                 * Constructs a new C2Chat_TestSendMapMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试一个Chat发送到Map之间漫游协议
                 * @implements IC2Chat_TestSendMapMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2Chat_TestSendMapMessage=} [properties] Properties to set
                 */
                function C2Chat_TestSendMapMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2Chat_TestSendMapMessage Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @instance
                 */
                C2Chat_TestSendMapMessage.prototype.Tag = "";

                /**
                 * Creates a new C2Chat_TestSendMapMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestSendMapMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2Chat_TestSendMapMessage} C2Chat_TestSendMapMessage instance
                 */
                C2Chat_TestSendMapMessage.create = function create(properties) {
                    return new C2Chat_TestSendMapMessage(properties);
                };

                /**
                 * Encodes the specified C2Chat_TestSendMapMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestSendMapMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestSendMapMessage} message C2Chat_TestSendMapMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestSendMapMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2Chat_TestSendMapMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestSendMapMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2Chat_TestSendMapMessage} message C2Chat_TestSendMapMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2Chat_TestSendMapMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2Chat_TestSendMapMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2Chat_TestSendMapMessage} C2Chat_TestSendMapMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestSendMapMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2Chat_TestSendMapMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2Chat_TestSendMapMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2Chat_TestSendMapMessage} C2Chat_TestSendMapMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2Chat_TestSendMapMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2Chat_TestSendMapMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2Chat_TestSendMapMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2Chat_TestSendMapMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2Chat_TestSendMapMessage} C2Chat_TestSendMapMessage
                 */
                C2Chat_TestSendMapMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2Chat_TestSendMapMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2Chat_TestSendMapMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2Chat_TestSendMapMessage();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2Chat_TestSendMapMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2Chat_TestSendMapMessage} message C2Chat_TestSendMapMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2Chat_TestSendMapMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2Chat_TestSendMapMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2Chat_TestSendMapMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2Chat_TestSendMapMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2Chat_TestSendMapMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2Chat_TestSendMapMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2Chat_TestSendMapMessage";
                };

                return C2Chat_TestSendMapMessage;
            })();

            Message.C2G_TestRouteToRoaming = (function() {

                /**
                 * Properties of a C2G_TestRouteToRoaming.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestRouteToRoaming
                 * @property {string|null} [Tag] C2G_TestRouteToRoaming Tag
                 */

                /**
                 * Constructs a new C2G_TestRouteToRoaming.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate服务器发送一个Route消息给Map的漫游终端
                 * @implements IC2G_TestRouteToRoaming
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestRouteToRoaming=} [properties] Properties to set
                 */
                function C2G_TestRouteToRoaming(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2G_TestRouteToRoaming Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @instance
                 */
                C2G_TestRouteToRoaming.prototype.Tag = "";

                /**
                 * Creates a new C2G_TestRouteToRoaming instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRouteToRoaming=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestRouteToRoaming} C2G_TestRouteToRoaming instance
                 */
                C2G_TestRouteToRoaming.create = function create(properties) {
                    return new C2G_TestRouteToRoaming(properties);
                };

                /**
                 * Encodes the specified C2G_TestRouteToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRouteToRoaming.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRouteToRoaming} message C2G_TestRouteToRoaming message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRouteToRoaming.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestRouteToRoaming message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRouteToRoaming.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRouteToRoaming} message C2G_TestRouteToRoaming message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRouteToRoaming.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestRouteToRoaming message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRouteToRoaming} C2G_TestRouteToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRouteToRoaming.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestRouteToRoaming();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestRouteToRoaming message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRouteToRoaming} C2G_TestRouteToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRouteToRoaming.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestRouteToRoaming message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestRouteToRoaming.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestRouteToRoaming message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestRouteToRoaming} C2G_TestRouteToRoaming
                 */
                C2G_TestRouteToRoaming.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestRouteToRoaming)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_TestRouteToRoaming: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_TestRouteToRoaming();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestRouteToRoaming message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRouteToRoaming} message C2G_TestRouteToRoaming
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestRouteToRoaming.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_TestRouteToRoaming to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestRouteToRoaming.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestRouteToRoaming
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestRouteToRoaming
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestRouteToRoaming.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestRouteToRoaming";
                };

                return C2G_TestRouteToRoaming;
            })();

            Message.C2G_TestRoamingToRoaming = (function() {

                /**
                 * Properties of a C2G_TestRoamingToRoaming.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestRoamingToRoaming
                 * @property {string|null} [Tag] C2G_TestRoamingToRoaming Tag
                 */

                /**
                 * Constructs a new C2G_TestRoamingToRoaming.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate服务器发送一个漫游消息给Map的漫游终端
                 * @implements IC2G_TestRoamingToRoaming
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestRoamingToRoaming=} [properties] Properties to set
                 */
                function C2G_TestRoamingToRoaming(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * C2G_TestRoamingToRoaming Tag.
                 * @member {string} Tag
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @instance
                 */
                C2G_TestRoamingToRoaming.prototype.Tag = "";

                /**
                 * Creates a new C2G_TestRoamingToRoaming instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRoamingToRoaming=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestRoamingToRoaming} C2G_TestRoamingToRoaming instance
                 */
                C2G_TestRoamingToRoaming.create = function create(properties) {
                    return new C2G_TestRoamingToRoaming(properties);
                };

                /**
                 * Encodes the specified C2G_TestRoamingToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRoamingToRoaming.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRoamingToRoaming} message C2G_TestRoamingToRoaming message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRoamingToRoaming.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestRoamingToRoaming message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRoamingToRoaming.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestRoamingToRoaming} message C2G_TestRoamingToRoaming message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestRoamingToRoaming.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestRoamingToRoaming message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestRoamingToRoaming} C2G_TestRoamingToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRoamingToRoaming.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestRoamingToRoaming();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Tag = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestRoamingToRoaming message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestRoamingToRoaming} C2G_TestRoamingToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestRoamingToRoaming.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestRoamingToRoaming message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestRoamingToRoaming.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        if (!$util.isString(message.Tag))
                            return "Tag: string expected";
                    return null;
                };

                /**
                 * Creates a C2G_TestRoamingToRoaming message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestRoamingToRoaming} C2G_TestRoamingToRoaming
                 */
                C2G_TestRoamingToRoaming.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestRoamingToRoaming)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_TestRoamingToRoaming: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_TestRoamingToRoaming();
                    if (object.Tag != null)
                        message.Tag = String(object.Tag);
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestRoamingToRoaming message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestRoamingToRoaming} message C2G_TestRoamingToRoaming
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestRoamingToRoaming.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Tag = "";
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        object.Tag = message.Tag;
                    return object;
                };

                /**
                 * Converts this C2G_TestRoamingToRoaming to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestRoamingToRoaming.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestRoamingToRoaming
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestRoamingToRoaming
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestRoamingToRoaming.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestRoamingToRoaming";
                };

                return C2G_TestRoamingToRoaming;
            })();

            Message.C2G_LoginRoamingRequest = (function() {

                /**
                 * Properties of a C2G_LoginRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_LoginRoamingRequest
                 */

                /**
                 * Constructs a new C2G_LoginRoamingRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 客户端向服务器发送登录连接消息（Roaming）
                 * @implements IC2G_LoginRoamingRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_LoginRoamingRequest=} [properties] Properties to set
                 */
                function C2G_LoginRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_LoginRoamingRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_LoginRoamingRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_LoginRoamingRequest} C2G_LoginRoamingRequest instance
                 */
                C2G_LoginRoamingRequest.create = function create(properties) {
                    return new C2G_LoginRoamingRequest(properties);
                };

                /**
                 * Encodes the specified C2G_LoginRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_LoginRoamingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_LoginRoamingRequest} message C2G_LoginRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_LoginRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_LoginRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_LoginRoamingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_LoginRoamingRequest} message C2G_LoginRoamingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_LoginRoamingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_LoginRoamingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_LoginRoamingRequest} C2G_LoginRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_LoginRoamingRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_LoginRoamingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_LoginRoamingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_LoginRoamingRequest} C2G_LoginRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_LoginRoamingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_LoginRoamingRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_LoginRoamingRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_LoginRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_LoginRoamingRequest} C2G_LoginRoamingRequest
                 */
                C2G_LoginRoamingRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_LoginRoamingRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_LoginRoamingRequest();
                };

                /**
                 * Creates a plain object from a C2G_LoginRoamingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_LoginRoamingRequest} message C2G_LoginRoamingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_LoginRoamingRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_LoginRoamingRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_LoginRoamingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_LoginRoamingRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_LoginRoamingRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_LoginRoamingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_LoginRoamingRequest";
                };

                return C2G_LoginRoamingRequest;
            })();

            Message.G2C_LoginRoamingResponse = (function() {

                /**
                 * Properties of a G2C_LoginRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_LoginRoamingResponse
                 */

                /**
                 * Constructs a new G2C_LoginRoamingResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_LoginRoamingResponse.
                 * @implements IG2C_LoginRoamingResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_LoginRoamingResponse=} [properties] Properties to set
                 */
                function G2C_LoginRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_LoginRoamingResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_LoginRoamingResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_LoginRoamingResponse} G2C_LoginRoamingResponse instance
                 */
                G2C_LoginRoamingResponse.create = function create(properties) {
                    return new G2C_LoginRoamingResponse(properties);
                };

                /**
                 * Encodes the specified G2C_LoginRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_LoginRoamingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_LoginRoamingResponse} message G2C_LoginRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_LoginRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_LoginRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_LoginRoamingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_LoginRoamingResponse} message G2C_LoginRoamingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_LoginRoamingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_LoginRoamingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_LoginRoamingResponse} G2C_LoginRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_LoginRoamingResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_LoginRoamingResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_LoginRoamingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_LoginRoamingResponse} G2C_LoginRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_LoginRoamingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_LoginRoamingResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_LoginRoamingResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_LoginRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_LoginRoamingResponse} G2C_LoginRoamingResponse
                 */
                G2C_LoginRoamingResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_LoginRoamingResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_LoginRoamingResponse();
                };

                /**
                 * Creates a plain object from a G2C_LoginRoamingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_LoginRoamingResponse} message G2C_LoginRoamingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_LoginRoamingResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_LoginRoamingResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_LoginRoamingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_LoginRoamingResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_LoginRoamingResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_LoginRoamingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_LoginRoamingResponse";
                };

                return G2C_LoginRoamingResponse;
            })();

            Message.C2G_SubscribeSphereEventRequest = (function() {

                /**
                 * Properties of a C2G_SubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_SubscribeSphereEventRequest
                 */

                /**
                 * Constructs a new C2G_SubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate服务器发送一个内网消息通知Map服务器向Gate服务器注册一个领域事件
                 * @implements IC2G_SubscribeSphereEventRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest=} [properties] Properties to set
                 */
                function C2G_SubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_SubscribeSphereEventRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_SubscribeSphereEventRequest} C2G_SubscribeSphereEventRequest instance
                 */
                C2G_SubscribeSphereEventRequest.create = function create(properties) {
                    return new C2G_SubscribeSphereEventRequest(properties);
                };

                /**
                 * Encodes the specified C2G_SubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_SubscribeSphereEventRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest} message C2G_SubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_SubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SubscribeSphereEventRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest} message C2G_SubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_SubscribeSphereEventRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_SubscribeSphereEventRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_SubscribeSphereEventRequest} C2G_SubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SubscribeSphereEventRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_SubscribeSphereEventRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_SubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_SubscribeSphereEventRequest} C2G_SubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_SubscribeSphereEventRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_SubscribeSphereEventRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_SubscribeSphereEventRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_SubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_SubscribeSphereEventRequest} C2G_SubscribeSphereEventRequest
                 */
                C2G_SubscribeSphereEventRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_SubscribeSphereEventRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_SubscribeSphereEventRequest();
                };

                /**
                 * Creates a plain object from a C2G_SubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_SubscribeSphereEventRequest} message C2G_SubscribeSphereEventRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_SubscribeSphereEventRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_SubscribeSphereEventRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_SubscribeSphereEventRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_SubscribeSphereEventRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_SubscribeSphereEventRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_SubscribeSphereEventRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_SubscribeSphereEventRequest";
                };

                return C2G_SubscribeSphereEventRequest;
            })();

            Message.G2C_SubscribeSphereEventResponse = (function() {

                /**
                 * Properties of a G2C_SubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_SubscribeSphereEventResponse
                 */

                /**
                 * Constructs a new G2C_SubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_SubscribeSphereEventResponse.
                 * @implements IG2C_SubscribeSphereEventResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse=} [properties] Properties to set
                 */
                function G2C_SubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_SubscribeSphereEventResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_SubscribeSphereEventResponse} G2C_SubscribeSphereEventResponse instance
                 */
                G2C_SubscribeSphereEventResponse.create = function create(properties) {
                    return new G2C_SubscribeSphereEventResponse(properties);
                };

                /**
                 * Encodes the specified G2C_SubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_SubscribeSphereEventResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse} message G2C_SubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_SubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_SubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_SubscribeSphereEventResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse} message G2C_SubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_SubscribeSphereEventResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_SubscribeSphereEventResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_SubscribeSphereEventResponse} G2C_SubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_SubscribeSphereEventResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_SubscribeSphereEventResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_SubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_SubscribeSphereEventResponse} G2C_SubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_SubscribeSphereEventResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_SubscribeSphereEventResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_SubscribeSphereEventResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_SubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_SubscribeSphereEventResponse} G2C_SubscribeSphereEventResponse
                 */
                G2C_SubscribeSphereEventResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_SubscribeSphereEventResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_SubscribeSphereEventResponse();
                };

                /**
                 * Creates a plain object from a G2C_SubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_SubscribeSphereEventResponse} message G2C_SubscribeSphereEventResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_SubscribeSphereEventResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_SubscribeSphereEventResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_SubscribeSphereEventResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_SubscribeSphereEventResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_SubscribeSphereEventResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_SubscribeSphereEventResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_SubscribeSphereEventResponse";
                };

                return G2C_SubscribeSphereEventResponse;
            })();

            Message.C2G_PublishSphereEventRequest = (function() {

                /**
                 * Properties of a C2G_PublishSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_PublishSphereEventRequest
                 */

                /**
                 * Constructs a new C2G_PublishSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate发送一个订阅领域事件
                 * @implements IC2G_PublishSphereEventRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_PublishSphereEventRequest=} [properties] Properties to set
                 */
                function C2G_PublishSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_PublishSphereEventRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_PublishSphereEventRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_PublishSphereEventRequest} C2G_PublishSphereEventRequest instance
                 */
                C2G_PublishSphereEventRequest.create = function create(properties) {
                    return new C2G_PublishSphereEventRequest(properties);
                };

                /**
                 * Encodes the specified C2G_PublishSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_PublishSphereEventRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_PublishSphereEventRequest} message C2G_PublishSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_PublishSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_PublishSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_PublishSphereEventRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_PublishSphereEventRequest} message C2G_PublishSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_PublishSphereEventRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_PublishSphereEventRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_PublishSphereEventRequest} C2G_PublishSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_PublishSphereEventRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_PublishSphereEventRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_PublishSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_PublishSphereEventRequest} C2G_PublishSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_PublishSphereEventRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_PublishSphereEventRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_PublishSphereEventRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_PublishSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_PublishSphereEventRequest} C2G_PublishSphereEventRequest
                 */
                C2G_PublishSphereEventRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_PublishSphereEventRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_PublishSphereEventRequest();
                };

                /**
                 * Creates a plain object from a C2G_PublishSphereEventRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_PublishSphereEventRequest} message C2G_PublishSphereEventRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_PublishSphereEventRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_PublishSphereEventRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_PublishSphereEventRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_PublishSphereEventRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_PublishSphereEventRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_PublishSphereEventRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_PublishSphereEventRequest";
                };

                return C2G_PublishSphereEventRequest;
            })();

            Message.G2C_PublishSphereEventResponse = (function() {

                /**
                 * Properties of a G2C_PublishSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_PublishSphereEventResponse
                 */

                /**
                 * Constructs a new G2C_PublishSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_PublishSphereEventResponse.
                 * @implements IG2C_PublishSphereEventResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_PublishSphereEventResponse=} [properties] Properties to set
                 */
                function G2C_PublishSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_PublishSphereEventResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PublishSphereEventResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_PublishSphereEventResponse} G2C_PublishSphereEventResponse instance
                 */
                G2C_PublishSphereEventResponse.create = function create(properties) {
                    return new G2C_PublishSphereEventResponse(properties);
                };

                /**
                 * Encodes the specified G2C_PublishSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_PublishSphereEventResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PublishSphereEventResponse} message G2C_PublishSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_PublishSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_PublishSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_PublishSphereEventResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_PublishSphereEventResponse} message G2C_PublishSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_PublishSphereEventResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_PublishSphereEventResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_PublishSphereEventResponse} G2C_PublishSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_PublishSphereEventResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_PublishSphereEventResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_PublishSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_PublishSphereEventResponse} G2C_PublishSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_PublishSphereEventResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_PublishSphereEventResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_PublishSphereEventResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_PublishSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_PublishSphereEventResponse} G2C_PublishSphereEventResponse
                 */
                G2C_PublishSphereEventResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_PublishSphereEventResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_PublishSphereEventResponse();
                };

                /**
                 * Creates a plain object from a G2C_PublishSphereEventResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_PublishSphereEventResponse} message G2C_PublishSphereEventResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_PublishSphereEventResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_PublishSphereEventResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_PublishSphereEventResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_PublishSphereEventResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_PublishSphereEventResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_PublishSphereEventResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_PublishSphereEventResponse";
                };

                return G2C_PublishSphereEventResponse;
            })();

            Message.C2G_UnsubscribeSphereEventRequest = (function() {

                /**
                 * Properties of a C2G_UnsubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_UnsubscribeSphereEventRequest
                 */

                /**
                 * Constructs a new C2G_UnsubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Gate取消一个订阅领域事件
                 * @implements IC2G_UnsubscribeSphereEventRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest=} [properties] Properties to set
                 */
                function C2G_UnsubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_UnsubscribeSphereEventRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest} C2G_UnsubscribeSphereEventRequest instance
                 */
                C2G_UnsubscribeSphereEventRequest.create = function create(properties) {
                    return new C2G_UnsubscribeSphereEventRequest(properties);
                };

                /**
                 * Encodes the specified C2G_UnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest} message C2G_UnsubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_UnsubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_UnsubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest} message C2G_UnsubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_UnsubscribeSphereEventRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_UnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest} C2G_UnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_UnsubscribeSphereEventRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_UnsubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest} C2G_UnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_UnsubscribeSphereEventRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_UnsubscribeSphereEventRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_UnsubscribeSphereEventRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_UnsubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest} C2G_UnsubscribeSphereEventRequest
                 */
                C2G_UnsubscribeSphereEventRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest();
                };

                /**
                 * Creates a plain object from a C2G_UnsubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest} message C2G_UnsubscribeSphereEventRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_UnsubscribeSphereEventRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_UnsubscribeSphereEventRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_UnsubscribeSphereEventRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_UnsubscribeSphereEventRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_UnsubscribeSphereEventRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest";
                };

                return C2G_UnsubscribeSphereEventRequest;
            })();

            Message.G2C_UnsubscribeSphereEventResponse = (function() {

                /**
                 * Properties of a G2C_UnsubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_UnsubscribeSphereEventResponse
                 */

                /**
                 * Constructs a new G2C_UnsubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_UnsubscribeSphereEventResponse.
                 * @implements IG2C_UnsubscribeSphereEventResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse=} [properties] Properties to set
                 */
                function G2C_UnsubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_UnsubscribeSphereEventResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse} G2C_UnsubscribeSphereEventResponse instance
                 */
                G2C_UnsubscribeSphereEventResponse.create = function create(properties) {
                    return new G2C_UnsubscribeSphereEventResponse(properties);
                };

                /**
                 * Encodes the specified G2C_UnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse} message G2C_UnsubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_UnsubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_UnsubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse} message G2C_UnsubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_UnsubscribeSphereEventResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_UnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse} G2C_UnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_UnsubscribeSphereEventResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_UnsubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse} G2C_UnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_UnsubscribeSphereEventResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_UnsubscribeSphereEventResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_UnsubscribeSphereEventResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_UnsubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse} G2C_UnsubscribeSphereEventResponse
                 */
                G2C_UnsubscribeSphereEventResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse();
                };

                /**
                 * Creates a plain object from a G2C_UnsubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse} message G2C_UnsubscribeSphereEventResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_UnsubscribeSphereEventResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_UnsubscribeSphereEventResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_UnsubscribeSphereEventResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_UnsubscribeSphereEventResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_UnsubscribeSphereEventResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse";
                };

                return G2C_UnsubscribeSphereEventResponse;
            })();

            Message.C2G_MapUnsubscribeSphereEventRequest = (function() {

                /**
                 * Properties of a C2G_MapUnsubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_MapUnsubscribeSphereEventRequest
                 */

                /**
                 * Constructs a new C2G_MapUnsubscribeSphereEventRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 通知Map取消一个订阅领域事件
                 * @implements IC2G_MapUnsubscribeSphereEventRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest=} [properties] Properties to set
                 */
                function C2G_MapUnsubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_MapUnsubscribeSphereEventRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest} C2G_MapUnsubscribeSphereEventRequest instance
                 */
                C2G_MapUnsubscribeSphereEventRequest.create = function create(properties) {
                    return new C2G_MapUnsubscribeSphereEventRequest(properties);
                };

                /**
                 * Encodes the specified C2G_MapUnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest} message C2G_MapUnsubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_MapUnsubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_MapUnsubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest} message C2G_MapUnsubscribeSphereEventRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_MapUnsubscribeSphereEventRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_MapUnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest} C2G_MapUnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_MapUnsubscribeSphereEventRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_MapUnsubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest} C2G_MapUnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_MapUnsubscribeSphereEventRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_MapUnsubscribeSphereEventRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_MapUnsubscribeSphereEventRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_MapUnsubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest} C2G_MapUnsubscribeSphereEventRequest
                 */
                C2G_MapUnsubscribeSphereEventRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest();
                };

                /**
                 * Creates a plain object from a C2G_MapUnsubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest} message C2G_MapUnsubscribeSphereEventRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_MapUnsubscribeSphereEventRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_MapUnsubscribeSphereEventRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_MapUnsubscribeSphereEventRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_MapUnsubscribeSphereEventRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_MapUnsubscribeSphereEventRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest";
                };

                return C2G_MapUnsubscribeSphereEventRequest;
            })();

            Message.G2C_MapUnsubscribeSphereEventResponse = (function() {

                /**
                 * Properties of a G2C_MapUnsubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_MapUnsubscribeSphereEventResponse
                 */

                /**
                 * Constructs a new G2C_MapUnsubscribeSphereEventResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_MapUnsubscribeSphereEventResponse.
                 * @implements IG2C_MapUnsubscribeSphereEventResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse=} [properties] Properties to set
                 */
                function G2C_MapUnsubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new G2C_MapUnsubscribeSphereEventResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse} G2C_MapUnsubscribeSphereEventResponse instance
                 */
                G2C_MapUnsubscribeSphereEventResponse.create = function create(properties) {
                    return new G2C_MapUnsubscribeSphereEventResponse(properties);
                };

                /**
                 * Encodes the specified G2C_MapUnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse} message G2C_MapUnsubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_MapUnsubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified G2C_MapUnsubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse} message G2C_MapUnsubscribeSphereEventResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_MapUnsubscribeSphereEventResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_MapUnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse} G2C_MapUnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_MapUnsubscribeSphereEventResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_MapUnsubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse} G2C_MapUnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_MapUnsubscribeSphereEventResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_MapUnsubscribeSphereEventResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_MapUnsubscribeSphereEventResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a G2C_MapUnsubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse} G2C_MapUnsubscribeSphereEventResponse
                 */
                G2C_MapUnsubscribeSphereEventResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse)
                        return object;
                    return new $root.Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse();
                };

                /**
                 * Creates a plain object from a G2C_MapUnsubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse} message G2C_MapUnsubscribeSphereEventResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_MapUnsubscribeSphereEventResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this G2C_MapUnsubscribeSphereEventResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_MapUnsubscribeSphereEventResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_MapUnsubscribeSphereEventResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_MapUnsubscribeSphereEventResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse";
                };

                return G2C_MapUnsubscribeSphereEventResponse;
            })();

            Message.ChatInfoData = (function() {

                /**
                 * Properties of a ChatInfoData.
                 * @memberof Fantasy.Network.Message
                 * @interface IChatInfoData
                 * @property {Uint8Array|null} [Data] ChatInfoData Data
                 */

                /**
                 * Constructs a new ChatInfoData.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a ChatInfoData.
                 * @implements IChatInfoData
                 * @constructor
                 * @param {Fantasy.Network.Message.IChatInfoData=} [properties] Properties to set
                 */
                function ChatInfoData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ChatInfoData Data.
                 * @member {Uint8Array} Data
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @instance
                 */
                ChatInfoData.prototype.Data = $util.newBuffer([]);

                /**
                 * Creates a new ChatInfoData instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Fantasy.Network.Message.IChatInfoData=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.ChatInfoData} ChatInfoData instance
                 */
                ChatInfoData.create = function create(properties) {
                    return new ChatInfoData(properties);
                };

                /**
                 * Encodes the specified ChatInfoData message. Does not implicitly {@link Fantasy.Network.Message.ChatInfoData.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Fantasy.Network.Message.IChatInfoData} message ChatInfoData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChatInfoData.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
                    return writer;
                };

                /**
                 * Encodes the specified ChatInfoData message, length delimited. Does not implicitly {@link Fantasy.Network.Message.ChatInfoData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Fantasy.Network.Message.IChatInfoData} message ChatInfoData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChatInfoData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a ChatInfoData message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.ChatInfoData} ChatInfoData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChatInfoData.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.ChatInfoData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Data = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a ChatInfoData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.ChatInfoData} ChatInfoData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChatInfoData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChatInfoData message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChatInfoData.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                            return "Data: buffer expected";
                    return null;
                };

                /**
                 * Creates a ChatInfoData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.ChatInfoData} ChatInfoData
                 */
                ChatInfoData.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.ChatInfoData)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.ChatInfoData: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.ChatInfoData();
                    if (object.Data != null)
                        if (typeof object.Data === "string")
                            $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                        else if (object.Data.length >= 0)
                            message.Data = object.Data;
                    return message;
                };

                /**
                 * Creates a plain object from a ChatInfoData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {Fantasy.Network.Message.ChatInfoData} message ChatInfoData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChatInfoData.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.Data = "";
                        else {
                            object.Data = [];
                            if (options.bytes !== Array)
                                object.Data = $util.newBuffer(object.Data);
                        }
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                    return object;
                };

                /**
                 * Converts this ChatInfoData to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChatInfoData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ChatInfoData
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.ChatInfoData
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ChatInfoData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.ChatInfoData";
                };

                return ChatInfoData;
            })();

            Message.TestMemoryPackInfo = (function() {

                /**
                 * Properties of a TestMemoryPackInfo.
                 * @memberof Fantasy.Network.Message
                 * @interface ITestMemoryPackInfo
                 * @property {string|null} [A] TestMemoryPackInfo A
                 */

                /**
                 * Constructs a new TestMemoryPackInfo.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a TestMemoryPackInfo.
                 * @implements ITestMemoryPackInfo
                 * @constructor
                 * @param {Fantasy.Network.Message.ITestMemoryPackInfo=} [properties] Properties to set
                 */
                function TestMemoryPackInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TestMemoryPackInfo A.
                 * @member {string} A
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @instance
                 */
                TestMemoryPackInfo.prototype.A = "";

                /**
                 * Creates a new TestMemoryPackInfo instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Fantasy.Network.Message.ITestMemoryPackInfo=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.TestMemoryPackInfo} TestMemoryPackInfo instance
                 */
                TestMemoryPackInfo.create = function create(properties) {
                    return new TestMemoryPackInfo(properties);
                };

                /**
                 * Encodes the specified TestMemoryPackInfo message. Does not implicitly {@link Fantasy.Network.Message.TestMemoryPackInfo.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Fantasy.Network.Message.ITestMemoryPackInfo} message TestMemoryPackInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestMemoryPackInfo.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.A);
                    return writer;
                };

                /**
                 * Encodes the specified TestMemoryPackInfo message, length delimited. Does not implicitly {@link Fantasy.Network.Message.TestMemoryPackInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Fantasy.Network.Message.ITestMemoryPackInfo} message TestMemoryPackInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestMemoryPackInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a TestMemoryPackInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.TestMemoryPackInfo} TestMemoryPackInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestMemoryPackInfo.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.TestMemoryPackInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.A = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a TestMemoryPackInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.TestMemoryPackInfo} TestMemoryPackInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestMemoryPackInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TestMemoryPackInfo message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TestMemoryPackInfo.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                        if (!$util.isString(message.A))
                            return "A: string expected";
                    return null;
                };

                /**
                 * Creates a TestMemoryPackInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.TestMemoryPackInfo} TestMemoryPackInfo
                 */
                TestMemoryPackInfo.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.TestMemoryPackInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.TestMemoryPackInfo: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.TestMemoryPackInfo();
                    if (object.A != null)
                        message.A = String(object.A);
                    return message;
                };

                /**
                 * Creates a plain object from a TestMemoryPackInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {Fantasy.Network.Message.TestMemoryPackInfo} message TestMemoryPackInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TestMemoryPackInfo.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.A = "";
                    if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                        object.A = message.A;
                    return object;
                };

                /**
                 * Converts this TestMemoryPackInfo to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TestMemoryPackInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for TestMemoryPackInfo
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.TestMemoryPackInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TestMemoryPackInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.TestMemoryPackInfo";
                };

                return TestMemoryPackInfo;
            })();

            Message.C2G_TestMemoryPackRequest = (function() {

                /**
                 * Properties of a C2G_TestMemoryPackRequest.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestMemoryPackRequest
                 */

                /**
                 * Constructs a new C2G_TestMemoryPackRequest.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a C2G_TestMemoryPackRequest.
                 * @implements IC2G_TestMemoryPackRequest
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestMemoryPackRequest=} [properties] Properties to set
                 */
                function C2G_TestMemoryPackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new C2G_TestMemoryPackRequest instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMemoryPackRequest=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestMemoryPackRequest} C2G_TestMemoryPackRequest instance
                 */
                C2G_TestMemoryPackRequest.create = function create(properties) {
                    return new C2G_TestMemoryPackRequest(properties);
                };

                /**
                 * Encodes the specified C2G_TestMemoryPackRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMemoryPackRequest.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMemoryPackRequest} message C2G_TestMemoryPackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMemoryPackRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestMemoryPackRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMemoryPackRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestMemoryPackRequest} message C2G_TestMemoryPackRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestMemoryPackRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestMemoryPackRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestMemoryPackRequest} C2G_TestMemoryPackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMemoryPackRequest.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestMemoryPackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestMemoryPackRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestMemoryPackRequest} C2G_TestMemoryPackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestMemoryPackRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestMemoryPackRequest message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestMemoryPackRequest.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    return null;
                };

                /**
                 * Creates a C2G_TestMemoryPackRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestMemoryPackRequest} C2G_TestMemoryPackRequest
                 */
                C2G_TestMemoryPackRequest.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestMemoryPackRequest)
                        return object;
                    return new $root.Fantasy.Network.Message.C2G_TestMemoryPackRequest();
                };

                /**
                 * Creates a plain object from a C2G_TestMemoryPackRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestMemoryPackRequest} message C2G_TestMemoryPackRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestMemoryPackRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this C2G_TestMemoryPackRequest to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestMemoryPackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestMemoryPackRequest
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestMemoryPackRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestMemoryPackRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestMemoryPackRequest";
                };

                return C2G_TestMemoryPackRequest;
            })();

            Message.G2C_TestMemoryPackResponse = (function() {

                /**
                 * Properties of a G2C_TestMemoryPackResponse.
                 * @memberof Fantasy.Network.Message
                 * @interface IG2C_TestMemoryPackResponse
                 * @property {Fantasy.Network.Message.ITestMemoryPackInfo|null} [Info] G2C_TestMemoryPackResponse Info
                 */

                /**
                 * Constructs a new G2C_TestMemoryPackResponse.
                 * @memberof Fantasy.Network.Message
                 * @classdesc Represents a G2C_TestMemoryPackResponse.
                 * @implements IG2C_TestMemoryPackResponse
                 * @constructor
                 * @param {Fantasy.Network.Message.IG2C_TestMemoryPackResponse=} [properties] Properties to set
                 */
                function G2C_TestMemoryPackResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * G2C_TestMemoryPackResponse Info.
                 * @member {Fantasy.Network.Message.ITestMemoryPackInfo|null|undefined} Info
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @instance
                 */
                G2C_TestMemoryPackResponse.prototype.Info = null;

                /**
                 * Creates a new G2C_TestMemoryPackResponse instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestMemoryPackResponse=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.G2C_TestMemoryPackResponse} G2C_TestMemoryPackResponse instance
                 */
                G2C_TestMemoryPackResponse.create = function create(properties) {
                    return new G2C_TestMemoryPackResponse(properties);
                };

                /**
                 * Encodes the specified G2C_TestMemoryPackResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestMemoryPackResponse.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestMemoryPackResponse} message G2C_TestMemoryPackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestMemoryPackResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                        $root.Fantasy.Network.Message.TestMemoryPackInfo.encode(message.Info, writer.uint32(/* id 1, wireType 2 =*/10).fork(), q + 1).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified G2C_TestMemoryPackResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestMemoryPackResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Fantasy.Network.Message.IG2C_TestMemoryPackResponse} message G2C_TestMemoryPackResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                G2C_TestMemoryPackResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a G2C_TestMemoryPackResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.G2C_TestMemoryPackResponse} G2C_TestMemoryPackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestMemoryPackResponse.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.G2C_TestMemoryPackResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Info = $root.Fantasy.Network.Message.TestMemoryPackInfo.decode(reader, reader.uint32(), undefined, long + 1);
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a G2C_TestMemoryPackResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.G2C_TestMemoryPackResponse} G2C_TestMemoryPackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                G2C_TestMemoryPackResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a G2C_TestMemoryPackResponse message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                G2C_TestMemoryPackResponse.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Info != null && Object.hasOwnProperty.call(message, "Info")) {
                        var error = $root.Fantasy.Network.Message.TestMemoryPackInfo.verify(message.Info, long + 1);
                        if (error)
                            return "Info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a G2C_TestMemoryPackResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.G2C_TestMemoryPackResponse} G2C_TestMemoryPackResponse
                 */
                G2C_TestMemoryPackResponse.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.G2C_TestMemoryPackResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.G2C_TestMemoryPackResponse: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.G2C_TestMemoryPackResponse();
                    if (object.Info != null) {
                        if (!$util.isObject(object.Info))
                            throw TypeError(".Fantasy.Network.Message.G2C_TestMemoryPackResponse.Info: object expected");
                        message.Info = $root.Fantasy.Network.Message.TestMemoryPackInfo.fromObject(object.Info, long + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a G2C_TestMemoryPackResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {Fantasy.Network.Message.G2C_TestMemoryPackResponse} message G2C_TestMemoryPackResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                G2C_TestMemoryPackResponse.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.Info = null;
                    if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                        object.Info = $root.Fantasy.Network.Message.TestMemoryPackInfo.toObject(message.Info, options, q + 1);
                    return object;
                };

                /**
                 * Converts this G2C_TestMemoryPackResponse to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                G2C_TestMemoryPackResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for G2C_TestMemoryPackResponse
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.G2C_TestMemoryPackResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                G2C_TestMemoryPackResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.G2C_TestMemoryPackResponse";
                };

                return G2C_TestMemoryPackResponse;
            })();

            /**
             * 错误码枚举
             * @name Fantasy.Network.Message.ErrorCodeEnum
             * @enum {number}
             * @property {number} Success=0 成功
             * @property {number} Failed=1 失败
             * @property {number} UnknownError=2 未知错误
             * @property {number} InvalidParameter=100 参数错误
             * @property {number} PermissionDenied=101 权限不足
             */
            Message.ErrorCodeEnum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Failed"] = 1;
                values[valuesById[2] = "UnknownError"] = 2;
                values[valuesById[100] = "InvalidParameter"] = 100;
                values[valuesById[101] = "PermissionDenied"] = 101;
                return values;
            })();

            /**
             * 玩家状态
             * @name Fantasy.Network.Message.PlayerState
             * @enum {number}
             * @property {number} Offline=0 Offline value
             * @property {number} Online=1 Online value
             * @property {number} Busy=2 Busy value
             * @property {number} Away=3 Away value
             */
            Message.PlayerState = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Offline"] = 0;
                values[valuesById[1] = "Online"] = 1;
                values[valuesById[2] = "Busy"] = 2;
                values[valuesById[3] = "Away"] = 3;
                return values;
            })();

            Message.C2G_TestEnumMessage = (function() {

                /**
                 * Properties of a C2G_TestEnumMessage.
                 * @memberof Fantasy.Network.Message
                 * @interface IC2G_TestEnumMessage
                 * @property {Fantasy.Network.Message.ErrorCodeEnum|null} [Code] 错误码
                 * @property {string|null} [Message] 消息内容
                 * @property {Fantasy.Network.Message.PlayerState|null} [State] 玩家状态
                 */

                /**
                 * Constructs a new C2G_TestEnumMessage.
                 * @memberof Fantasy.Network.Message
                 * @classdesc 测试使用ErrorCode枚举的消息
                 * @implements IC2G_TestEnumMessage
                 * @constructor
                 * @param {Fantasy.Network.Message.IC2G_TestEnumMessage=} [properties] Properties to set
                 */
                function C2G_TestEnumMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * 错误码
                 * @member {Fantasy.Network.Message.ErrorCodeEnum} Code
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @instance
                 */
                C2G_TestEnumMessage.prototype.Code = 0;

                /**
                 * 消息内容
                 * @member {string} Message
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @instance
                 */
                C2G_TestEnumMessage.prototype.Message = "";

                /**
                 * 玩家状态
                 * @member {Fantasy.Network.Message.PlayerState} State
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @instance
                 */
                C2G_TestEnumMessage.prototype.State = 0;

                /**
                 * Creates a new C2G_TestEnumMessage instance using the specified properties.
                 * @function create
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEnumMessage=} [properties] Properties to set
                 * @returns {Fantasy.Network.Message.C2G_TestEnumMessage} C2G_TestEnumMessage instance
                 */
                C2G_TestEnumMessage.create = function create(properties) {
                    return new C2G_TestEnumMessage(properties);
                };

                /**
                 * Encodes the specified C2G_TestEnumMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEnumMessage.verify|verify} messages.
                 * @function encode
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEnumMessage} message C2G_TestEnumMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestEnumMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
                    if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
                    if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
                    return writer;
                };

                /**
                 * Encodes the specified C2G_TestEnumMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEnumMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Fantasy.Network.Message.IC2G_TestEnumMessage} message C2G_TestEnumMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                C2G_TestEnumMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a C2G_TestEnumMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Fantasy.Network.Message.C2G_TestEnumMessage} C2G_TestEnumMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestEnumMessage.decode = function decode(reader, length, error, long) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (long === undefined)
                        long = 0;
                    if (long > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var end, message;
                    if (length === undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = new $root.Fantasy.Network.Message.C2G_TestEnumMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.Code = reader.int32();
                                break;
                            }
                        case 2: {
                                message.Message = reader.string();
                                break;
                            }
                        case 3: {
                                message.State = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7, long);
                            break;
                        }
                    }
                    if (length !== undefined) {
                        if (reader.pos !== end)
                            throw RangeError("index out of range");
                        reader.len = length;
                    }
                    return message;
                };

                /**
                 * Decodes a C2G_TestEnumMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Fantasy.Network.Message.C2G_TestEnumMessage} C2G_TestEnumMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                C2G_TestEnumMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a C2G_TestEnumMessage message.
                 * @function verify
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                C2G_TestEnumMessage.verify = function verify(message, long) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        return "maximum nesting depth exceeded";
                    if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                        switch (message.Code) {
                        default:
                            return "Code: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 100:
                        case 101:
                            break;
                        }
                    if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                        if (!$util.isString(message.Message))
                            return "Message: string expected";
                    if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                        switch (message.State) {
                        default:
                            return "State: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a C2G_TestEnumMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Fantasy.Network.Message.C2G_TestEnumMessage} C2G_TestEnumMessage
                 */
                C2G_TestEnumMessage.fromObject = function fromObject(object, long) {
                    if (object instanceof $root.Fantasy.Network.Message.C2G_TestEnumMessage)
                        return object;
                    if (!$util.isObject(object))
                        throw TypeError(".Fantasy.Network.Message.C2G_TestEnumMessage: object expected");
                    if (long === undefined)
                        long = 0;
                    if (long > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var message = new $root.Fantasy.Network.Message.C2G_TestEnumMessage();
                    switch (object.Code) {
                    default:
                        if (typeof object.Code === "number") {
                            message.Code = object.Code;
                            break;
                        }
                        break;
                    case "Success":
                    case 0:
                        message.Code = 0;
                        break;
                    case "Failed":
                    case 1:
                        message.Code = 1;
                        break;
                    case "UnknownError":
                    case 2:
                        message.Code = 2;
                        break;
                    case "InvalidParameter":
                    case 100:
                        message.Code = 100;
                        break;
                    case "PermissionDenied":
                    case 101:
                        message.Code = 101;
                        break;
                    }
                    if (object.Message != null)
                        message.Message = String(object.Message);
                    switch (object.State) {
                    default:
                        if (typeof object.State === "number") {
                            message.State = object.State;
                            break;
                        }
                        break;
                    case "Offline":
                    case 0:
                        message.State = 0;
                        break;
                    case "Online":
                    case 1:
                        message.State = 1;
                        break;
                    case "Busy":
                    case 2:
                        message.State = 2;
                        break;
                    case "Away":
                    case 3:
                        message.State = 3;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a C2G_TestEnumMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {Fantasy.Network.Message.C2G_TestEnumMessage} message C2G_TestEnumMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                C2G_TestEnumMessage.toObject = function toObject(message, options, q) {
                    if (!options)
                        options = {};
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.Code = options.enums === String ? "Success" : 0;
                        object.Message = "";
                        object.State = options.enums === String ? "Offline" : 0;
                    }
                    if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                        object.Code = options.enums === String ? $root.Fantasy.Network.Message.ErrorCodeEnum[message.Code] === undefined ? message.Code : $root.Fantasy.Network.Message.ErrorCodeEnum[message.Code] : message.Code;
                    if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                        object.Message = message.Message;
                    if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                        object.State = options.enums === String ? $root.Fantasy.Network.Message.PlayerState[message.State] === undefined ? message.State : $root.Fantasy.Network.Message.PlayerState[message.State] : message.State;
                    return object;
                };

                /**
                 * Converts this C2G_TestEnumMessage to JSON.
                 * @function toJSON
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                C2G_TestEnumMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for C2G_TestEnumMessage
                 * @function getTypeUrl
                 * @memberof Fantasy.Network.Message.C2G_TestEnumMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                C2G_TestEnumMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Fantasy.Network.Message.C2G_TestEnumMessage";
                };

                return C2G_TestEnumMessage;
            })();

            return Message;
        })();

        return Network;
    })();

    return Fantasy;
})();

module.exports = $root;
