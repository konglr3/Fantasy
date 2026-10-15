/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["FantasyOuter"] || ($protobuf.roots["FantasyOuter"] = {});

$root.C2G_LoginGameRequest = (function() {

    function C2G_LoginGameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    C2G_LoginGameRequest.prototype.AccountName = "";

    C2G_LoginGameRequest.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.AccountName != null && Object.hasOwnProperty.call(message, "AccountName"))
            writer.uint32(10).string(message.AccountName);
        return writer;
    };

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

    return C2G_LoginGameRequest;
})();

$root.G2C_LoginGameResponse = (function() {

    function G2C_LoginGameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    G2C_LoginGameResponse.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        return writer;
    };

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

    return G2C_LoginGameResponse;
})();

$root.C2M_InitComplete = (function() {

    function C2M_InitComplete(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    C2M_InitComplete.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        return writer;
    };

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

    return C2M_InitComplete;
})();

$root.M2C_UnitCreate = (function() {

    function M2C_UnitCreate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    M2C_UnitCreate.prototype.Unit = null;
    M2C_UnitCreate.prototype.IsSelf = false;

    M2C_UnitCreate.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.Unit != null && Object.hasOwnProperty.call(message, "Unit"))
            $root.UnitInfo.encode(message.Unit, writer.uint32(10).fork(), q + 1).ldelim();
        if (message.IsSelf != null && Object.hasOwnProperty.call(message, "IsSelf"))
            writer.uint32(16).bool(message.IsSelf);
        return writer;
    };

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

    return M2C_UnitCreate;
})();

$root.M2C_UnitLeave = (function() {

    function M2C_UnitLeave(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    M2C_UnitLeave.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    M2C_UnitLeave.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(8).int64(message.UnitId);
        return writer;
    };

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

    return M2C_UnitLeave;
})();

$root.UnitInfo = (function() {

    function UnitInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    UnitInfo.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    UnitInfo.prototype.Name = "";
    UnitInfo.prototype.Pos = null;
    UnitInfo.prototype.UnitType = 0;

    UnitInfo.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(8).int64(message.UnitId);
        if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
            writer.uint32(18).string(message.Name);
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            $root.Position.encode(message.Pos, writer.uint32(26).fork(), q + 1).ldelim();
        if (message.UnitType != null && Object.hasOwnProperty.call(message, "UnitType"))
            writer.uint32(32).int32(message.UnitType);
        return writer;
    };

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

    return UnitInfo;
})();

$root.C2M_MoveRequest = (function() {

    function C2M_MoveRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    C2M_MoveRequest.prototype.TargetPos = null;

    C2M_MoveRequest.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.TargetPos != null && Object.hasOwnProperty.call(message, "TargetPos"))
            $root.Position.encode(message.TargetPos, writer.uint32(10).fork(), q + 1).ldelim();
        return writer;
    };

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

    return C2M_MoveRequest;
})();

$root.M2C_MoveResponse = (function() {

    function M2C_MoveResponse(properties) {
        this.Data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    M2C_MoveResponse.prototype.Data = $util.emptyArray;

    M2C_MoveResponse.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.Data != null && message.Data.length)
            for (var i = 0; i < message.Data.length; ++i)
                $root.Position.encode(message.Data[i], writer.uint32(10).fork(), q + 1).ldelim();
        return writer;
    };

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

    return M2C_MoveResponse;
})();

$root.Position = (function() {

    function Position(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    Position.prototype.X = 0;
    Position.prototype.Y = 0;
    Position.prototype.Z = 0;

    Position.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.X != null && Object.hasOwnProperty.call(message, "X"))
            writer.uint32(13).float(message.X);
        if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
            writer.uint32(21).float(message.Y);
        if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
            writer.uint32(29).float(message.Z);
        return writer;
    };

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

    return Position;
})();

$root.M2C_UnitMoveState = (function() {

    function M2C_UnitMoveState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    }

    M2C_UnitMoveState.prototype.State = 0;
    M2C_UnitMoveState.prototype.UnitId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    M2C_UnitMoveState.prototype.Pos = null;

    M2C_UnitMoveState.encode = function encode(message, writer, q) {
        if (!writer)
            writer = $Writer.create();
        if (q === undefined)
            q = 0;
        if (q > $util.recursionLimit)
            throw Error("max depth exceeded");
        if (message.State != null && Object.hasOwnProperty.call(message, "State"))
            writer.uint32(8).int32(message.State);
        if (message.UnitId != null && Object.hasOwnProperty.call(message, "UnitId"))
            writer.uint32(16).int64(message.UnitId);
        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
            $root.Position.encode(message.Pos, writer.uint32(26).fork(), q + 1).ldelim();
        return writer;
    };

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

    return M2C_UnitMoveState;
})();

$root.Fantasy = (function() {

    var Fantasy = {};

    Fantasy.Network = (function() {

        var Network = {};

        Network.Message = (function() {

            var Message = {};

            Message.C2G_TestEmptyMessage = (function() {

                function C2G_TestEmptyMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestEmptyMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_TestEmptyMessage;
            })();

            Message.C2G_TestMessage = (function() {

                function C2G_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestMessage.prototype.Tag = "";

                C2G_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2G_TestMessage;
            })();

            Message.C2G_TestRequest = (function() {

                function C2G_TestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestRequest.prototype.Tag = "";
                C2G_TestRequest.prototype.Data = $util.newBuffer([]);

                C2G_TestRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(18).bytes(message.Data);
                    return writer;
                };

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

                return C2G_TestRequest;
            })();

            Message.G2C_TestResponse = (function() {

                function G2C_TestResponse(properties) {
                    this.Lists = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_TestResponse.prototype.Tag = "";
                G2C_TestResponse.prototype.Data = $util.newBuffer([]);
                G2C_TestResponse.prototype.Lists = $util.emptyArray;

                G2C_TestResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(18).bytes(message.Data);
                    if (message.Lists != null && message.Lists.length) {
                        writer.uint32(26).fork();
                        for (var i = 0; i < message.Lists.length; ++i)
                            writer.int32(message.Lists[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

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

                return G2C_TestResponse;
            })();

            Message.C2G_TestRequestPushMessage = (function() {

                function C2G_TestRequestPushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestRequestPushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_TestRequestPushMessage;
            })();

            Message.G2C_PushMessage = (function() {

                function G2C_PushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_PushMessage.prototype.Tag = "";

                G2C_PushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return G2C_PushMessage;
            })();

            Message.C2G_CreateAddressableRequest = (function() {

                function C2G_CreateAddressableRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_CreateAddressableRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_CreateAddressableRequest;
            })();

            Message.G2C_CreateAddressableResponse = (function() {

                function G2C_CreateAddressableResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_CreateAddressableResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_CreateAddressableResponse;
            })();

            Message.C2M_TestMessage = (function() {

                function C2M_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2M_TestMessage.prototype.Tag = "";

                C2M_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2M_TestMessage;
            })();

            Message.C2M_TestRequest = (function() {

                function C2M_TestRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2M_TestRequest.prototype.Tag = "";

                C2M_TestRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2M_TestRequest;
            })();

            Message.M2C_TestResponse = (function() {

                function M2C_TestResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                M2C_TestResponse.prototype.Tag = "";

                M2C_TestResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return M2C_TestResponse;
            })();

            Message.C2G_CreateChatRouteRequest = (function() {

                function C2G_CreateChatRouteRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_CreateChatRouteRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_CreateChatRouteRequest;
            })();

            Message.G2C_CreateChatRouteResponse = (function() {

                function G2C_CreateChatRouteResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_CreateChatRouteResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_CreateChatRouteResponse;
            })();

            Message.C2Chat_TestMessage = (function() {

                function C2Chat_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestMessage.prototype.Tag = "";

                C2Chat_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Chat_TestMessage;
            })();

            Message.C2Chat_TestMessageRequest = (function() {

                function C2Chat_TestMessageRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestMessageRequest.prototype.Tag = "";

                C2Chat_TestMessageRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Chat_TestMessageRequest;
            })();

            Message.Chat2C_TestMessageResponse = (function() {

                function Chat2C_TestMessageResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                Chat2C_TestMessageResponse.prototype.Tag = "";

                Chat2C_TestMessageResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return Chat2C_TestMessageResponse;
            })();

            Message.C2M_MoveToMapRequest = (function() {

                function C2M_MoveToMapRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2M_MoveToMapRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2M_MoveToMapRequest;
            })();

            Message.M2C_MoveToMapResponse = (function() {

                function M2C_MoveToMapResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                M2C_MoveToMapResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return M2C_MoveToMapResponse;
            })();

            Message.C2G_SendAddressableToMap = (function() {

                function C2G_SendAddressableToMap(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_SendAddressableToMap.prototype.Tag = "";

                C2G_SendAddressableToMap.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2G_SendAddressableToMap;
            })();

            Message.C2Chat_TestRequestPushMessage = (function() {

                function C2Chat_TestRequestPushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestRequestPushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2Chat_TestRequestPushMessage;
            })();

            Message.Chat2C_PushMessage = (function() {

                function Chat2C_PushMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                Chat2C_PushMessage.prototype.Tag = "";

                Chat2C_PushMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return Chat2C_PushMessage;
            })();

            Message.C2G_CreateSubSceneRequest = (function() {

                function C2G_CreateSubSceneRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_CreateSubSceneRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_CreateSubSceneRequest;
            })();

            Message.G2C_CreateSubSceneResponse = (function() {

                function G2C_CreateSubSceneResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_CreateSubSceneResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_CreateSubSceneResponse;
            })();

            Message.C2G_SendToSubSceneMessage = (function() {

                function C2G_SendToSubSceneMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_SendToSubSceneMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_SendToSubSceneMessage;
            })();

            Message.C2G_CreateSubSceneAddressableRequest = (function() {

                function C2G_CreateSubSceneAddressableRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_CreateSubSceneAddressableRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_CreateSubSceneAddressableRequest;
            })();

            Message.G2C_CreateSubSceneAddressableResponse = (function() {

                function G2C_CreateSubSceneAddressableResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_CreateSubSceneAddressableResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_CreateSubSceneAddressableResponse;
            })();

            Message.C2SubScene_TestMessage = (function() {

                function C2SubScene_TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2SubScene_TestMessage.prototype.Tag = "";

                C2SubScene_TestMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2SubScene_TestMessage;
            })();

            Message.C2SubScene_TestDisposeMessage = (function() {

                function C2SubScene_TestDisposeMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2SubScene_TestDisposeMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2SubScene_TestDisposeMessage;
            })();

            Message.C2G_ConnectRoamingRequest = (function() {

                function C2G_ConnectRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_ConnectRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_ConnectRoamingRequest;
            })();

            Message.G2C_ConnectRoamingResponse = (function() {

                function G2C_ConnectRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_ConnectRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_ConnectRoamingResponse;
            })();

            Message.C2Chat_TestRoamingMessage = (function() {

                function C2Chat_TestRoamingMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestRoamingMessage.prototype.Tag = "";

                C2Chat_TestRoamingMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Chat_TestRoamingMessage;
            })();

            Message.C2Map_TestRoamingMessage = (function() {

                function C2Map_TestRoamingMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Map_TestRoamingMessage.prototype.Tag = "";

                C2Map_TestRoamingMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Map_TestRoamingMessage;
            })();

            Message.C2Chat_TestRPCRoamingRequest = (function() {

                function C2Chat_TestRPCRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestRPCRoamingRequest.prototype.Tag = "";

                C2Chat_TestRPCRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Chat_TestRPCRoamingRequest;
            })();

            Message.Chat2C_TestRPCRoamingResponse = (function() {

                function Chat2C_TestRPCRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                Chat2C_TestRPCRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return Chat2C_TestRPCRoamingResponse;
            })();

            Message.C2Map_PushMessageToClient = (function() {

                function C2Map_PushMessageToClient(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Map_PushMessageToClient.prototype.Tag = "";

                C2Map_PushMessageToClient.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Map_PushMessageToClient;
            })();

            Message.Map2C_PushMessageToClient = (function() {

                function Map2C_PushMessageToClient(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                Map2C_PushMessageToClient.prototype.Tag = "";

                Map2C_PushMessageToClient.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return Map2C_PushMessageToClient;
            })();

            Message.C2Map_TestTransferRequest = (function() {

                function C2Map_TestTransferRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Map_TestTransferRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2Map_TestTransferRequest;
            })();

            Message.Map2C_TestTransferResponse = (function() {

                function Map2C_TestTransferResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                Map2C_TestTransferResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return Map2C_TestTransferResponse;
            })();

            Message.C2Chat_TestSendMapMessage = (function() {

                function C2Chat_TestSendMapMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2Chat_TestSendMapMessage.prototype.Tag = "";

                C2Chat_TestSendMapMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2Chat_TestSendMapMessage;
            })();

            Message.C2G_TestRouteToRoaming = (function() {

                function C2G_TestRouteToRoaming(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestRouteToRoaming.prototype.Tag = "";

                C2G_TestRouteToRoaming.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2G_TestRouteToRoaming;
            })();

            Message.C2G_TestRoamingToRoaming = (function() {

                function C2G_TestRoamingToRoaming(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestRoamingToRoaming.prototype.Tag = "";

                C2G_TestRoamingToRoaming.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                        writer.uint32(10).string(message.Tag);
                    return writer;
                };

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

                return C2G_TestRoamingToRoaming;
            })();

            Message.C2G_LoginRoamingRequest = (function() {

                function C2G_LoginRoamingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_LoginRoamingRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_LoginRoamingRequest;
            })();

            Message.G2C_LoginRoamingResponse = (function() {

                function G2C_LoginRoamingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_LoginRoamingResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_LoginRoamingResponse;
            })();

            Message.C2G_SubscribeSphereEventRequest = (function() {

                function C2G_SubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_SubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_SubscribeSphereEventRequest;
            })();

            Message.G2C_SubscribeSphereEventResponse = (function() {

                function G2C_SubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_SubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_SubscribeSphereEventResponse;
            })();

            Message.C2G_PublishSphereEventRequest = (function() {

                function C2G_PublishSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_PublishSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_PublishSphereEventRequest;
            })();

            Message.G2C_PublishSphereEventResponse = (function() {

                function G2C_PublishSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_PublishSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_PublishSphereEventResponse;
            })();

            Message.C2G_UnsubscribeSphereEventRequest = (function() {

                function C2G_UnsubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_UnsubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_UnsubscribeSphereEventRequest;
            })();

            Message.G2C_UnsubscribeSphereEventResponse = (function() {

                function G2C_UnsubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_UnsubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_UnsubscribeSphereEventResponse;
            })();

            Message.C2G_MapUnsubscribeSphereEventRequest = (function() {

                function C2G_MapUnsubscribeSphereEventRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_MapUnsubscribeSphereEventRequest.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return C2G_MapUnsubscribeSphereEventRequest;
            })();

            Message.G2C_MapUnsubscribeSphereEventResponse = (function() {

                function G2C_MapUnsubscribeSphereEventResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                G2C_MapUnsubscribeSphereEventResponse.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    return writer;
                };

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

                return G2C_MapUnsubscribeSphereEventResponse;
            })();

            Message.ErrorCodeEnum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Success"] = 0;
                values[valuesById[1] = "Failed"] = 1;
                values[valuesById[2] = "UnknownError"] = 2;
                values[valuesById[100] = "InvalidParameter"] = 100;
                values[valuesById[101] = "PermissionDenied"] = 101;
                return values;
            })();

            Message.PlayerState = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Offline"] = 0;
                values[valuesById[1] = "Online"] = 1;
                values[valuesById[2] = "Busy"] = 2;
                values[valuesById[3] = "Away"] = 3;
                return values;
            })();

            Message.C2G_TestEnumMessage = (function() {

                function C2G_TestEnumMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                C2G_TestEnumMessage.prototype.Code = 0;
                C2G_TestEnumMessage.prototype.Message = "";
                C2G_TestEnumMessage.prototype.State = 0;

                C2G_TestEnumMessage.encode = function encode(message, writer, q) {
                    if (!writer)
                        writer = $Writer.create();
                    if (q === undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                        writer.uint32(8).int32(message.Code);
                    if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                        writer.uint32(18).string(message.Message);
                    if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                        writer.uint32(24).int32(message.State);
                    return writer;
                };

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

                return C2G_TestEnumMessage;
            })();

            return Message;
        })();

        return Network;
    })();

    return Fantasy;
})();

module.exports = $root;
