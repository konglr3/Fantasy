import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a C2G_LoginGameRequest. */
export interface IC2G_LoginGameRequest {

    /** C2G_LoginGameRequest AccountName */
    AccountName?: (string|null);
}

/** Represents a C2G_LoginGameRequest. */
export class C2G_LoginGameRequest implements IC2G_LoginGameRequest {

    /**
     * Constructs a new C2G_LoginGameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2G_LoginGameRequest);

    /** C2G_LoginGameRequest AccountName. */
    public AccountName: string;

    /**
     * Encodes the specified C2G_LoginGameRequest message. Does not implicitly {@link C2G_LoginGameRequest.verify|verify} messages.
     * @param message C2G_LoginGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2G_LoginGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2G_LoginGameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2G_LoginGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2G_LoginGameRequest;
}

/** Properties of a G2C_LoginGameResponse. */
export interface IG2C_LoginGameResponse {
    /** Fantasy IResponse 框架错误码 */
    errorCode?: (number|null);
}

/** Represents a G2C_LoginGameResponse. */
export class G2C_LoginGameResponse implements IG2C_LoginGameResponse {
    /** Fantasy IResponse 框架错误码 */
    public errorCode: number;


    /**
     * Constructs a new G2C_LoginGameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IG2C_LoginGameResponse);

    /**
     * Encodes the specified G2C_LoginGameResponse message. Does not implicitly {@link G2C_LoginGameResponse.verify|verify} messages.
     * @param message G2C_LoginGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IG2C_LoginGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a G2C_LoginGameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns G2C_LoginGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): G2C_LoginGameResponse;
}

/** Properties of a C2M_InitComplete. */
export interface IC2M_InitComplete {
}

/** Represents a C2M_InitComplete. */
export class C2M_InitComplete implements IC2M_InitComplete {

    /**
     * Constructs a new C2M_InitComplete.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2M_InitComplete);

    /**
     * Encodes the specified C2M_InitComplete message. Does not implicitly {@link C2M_InitComplete.verify|verify} messages.
     * @param message C2M_InitComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2M_InitComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2M_InitComplete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2M_InitComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2M_InitComplete;
}

/** Properties of a M2C_UnitCreate. */
export interface IM2C_UnitCreate {

    /** M2C_UnitCreate Unit */
    Unit?: (IUnitInfo|null);

    /** M2C_UnitCreate IsSelf */
    IsSelf?: (boolean|null);
}

/** Represents a M2C_UnitCreate. */
export class M2C_UnitCreate implements IM2C_UnitCreate {

    /**
     * Constructs a new M2C_UnitCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_UnitCreate);

    /** M2C_UnitCreate Unit. */
    public Unit?: (IUnitInfo|null);

    /** M2C_UnitCreate IsSelf. */
    public IsSelf: boolean;

    /**
     * Encodes the specified M2C_UnitCreate message. Does not implicitly {@link M2C_UnitCreate.verify|verify} messages.
     * @param message M2C_UnitCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitCreate;
}

/** Properties of a M2C_UnitLeave. */
export interface IM2C_UnitLeave {

    /** M2C_UnitLeave UnitId */
    UnitId?: (number|Long|null);
}

/** Represents a M2C_UnitLeave. */
export class M2C_UnitLeave implements IM2C_UnitLeave {

    /**
     * Constructs a new M2C_UnitLeave.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_UnitLeave);

    /** M2C_UnitLeave UnitId. */
    public UnitId: (number|Long);

    /**
     * Encodes the specified M2C_UnitLeave message. Does not implicitly {@link M2C_UnitLeave.verify|verify} messages.
     * @param message M2C_UnitLeave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitLeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitLeave message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitLeave;
}

/** Properties of an UnitInfo. */
export interface IUnitInfo {

    /** UnitInfo UnitId */
    UnitId?: (number|Long|null);

    /** UnitInfo Name */
    Name?: (string|null);

    /** UnitInfo Pos */
    Pos?: (IPosition|null);

    /** UnitInfo UnitType */
    UnitType?: (number|null);
}

/** Represents an UnitInfo. */
export class UnitInfo implements IUnitInfo {

    /**
     * Constructs a new UnitInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnitInfo);

    /** UnitInfo UnitId. */
    public UnitId: (number|Long);

    /** UnitInfo Name. */
    public Name: string;

    /** UnitInfo Pos. */
    public Pos?: (IPosition|null);

    /** UnitInfo UnitType. */
    public UnitType: number;

    /**
     * Encodes the specified UnitInfo message. Does not implicitly {@link UnitInfo.verify|verify} messages.
     * @param message UnitInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnitInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnitInfo;
}

/** Properties of a C2M_MoveRequest. */
export interface IC2M_MoveRequest {

    /** C2M_MoveRequest TargetPos */
    TargetPos?: (IPosition|null);
}

/** Represents a C2M_MoveRequest. */
export class C2M_MoveRequest implements IC2M_MoveRequest {

    /**
     * Constructs a new C2M_MoveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2M_MoveRequest);

    /** C2M_MoveRequest TargetPos. */
    public TargetPos?: (IPosition|null);

    /**
     * Encodes the specified C2M_MoveRequest message. Does not implicitly {@link C2M_MoveRequest.verify|verify} messages.
     * @param message C2M_MoveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2M_MoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2M_MoveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2M_MoveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2M_MoveRequest;
}

/** Properties of a M2C_MoveResponse. */
export interface IM2C_MoveResponse {
    /** Fantasy IResponse 框架错误码 */
    errorCode?: (number|null);

    /** M2C_MoveResponse Data */
    Data?: (IPosition[]|null);
}

/** Represents a M2C_MoveResponse. */
export class M2C_MoveResponse implements IM2C_MoveResponse {
    /** Fantasy IResponse 框架错误码 */
    public errorCode: number;


    /**
     * Constructs a new M2C_MoveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_MoveResponse);

    /** M2C_MoveResponse Data. */
    public Data: IPosition[];

    /**
     * Encodes the specified M2C_MoveResponse message. Does not implicitly {@link M2C_MoveResponse.verify|verify} messages.
     * @param message M2C_MoveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_MoveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_MoveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_MoveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_MoveResponse;
}

/** Properties of a Position. */
export interface IPosition {

    /** Position X */
    X?: (number|null);

    /** Position Y */
    Y?: (number|null);

    /** Position Z */
    Z?: (number|null);
}

/** Represents a Position. */
export class Position implements IPosition {

    /**
     * Constructs a new Position.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPosition);

    /** Position X. */
    public X: number;

    /** Position Y. */
    public Y: number;

    /** Position Z. */
    public Z: number;

    /**
     * Encodes the specified Position message. Does not implicitly {@link Position.verify|verify} messages.
     * @param message Position message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Position message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Position;
}

/** Properties of a M2C_UnitMoveState. */
export interface IM2C_UnitMoveState {

    /** M2C_UnitMoveState State */
    State?: (number|null);

    /** M2C_UnitMoveState UnitId */
    UnitId?: (number|Long|null);

    /** M2C_UnitMoveState Pos */
    Pos?: (IPosition|null);
}

/** Represents a M2C_UnitMoveState. */
export class M2C_UnitMoveState implements IM2C_UnitMoveState {

    /**
     * Constructs a new M2C_UnitMoveState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_UnitMoveState);

    /** M2C_UnitMoveState State. */
    public State: number;

    /** M2C_UnitMoveState UnitId. */
    public UnitId: (number|Long);

    /** M2C_UnitMoveState Pos. */
    public Pos?: (IPosition|null);

    /**
     * Encodes the specified M2C_UnitMoveState message. Does not implicitly {@link M2C_UnitMoveState.verify|verify} messages.
     * @param message M2C_UnitMoveState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitMoveState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitMoveState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitMoveState;
}

/** Namespace Fantasy. */
export namespace Fantasy {

    /** Namespace Network. */
    export namespace Network {

        /** Namespace Message. */
        export namespace Message {

            /** Properties of a C2G_TestEmptyMessage. */
            export interface IC2G_TestEmptyMessage {
            }

            /** Represents a C2G_TestEmptyMessage. */
            export class C2G_TestEmptyMessage implements IC2G_TestEmptyMessage {

                /**
                 * Constructs a new C2G_TestEmptyMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestEmptyMessage);

                /**
                 * Encodes the specified C2G_TestEmptyMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEmptyMessage.verify|verify} messages.
                 * @param message C2G_TestEmptyMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestEmptyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestEmptyMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestEmptyMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestEmptyMessage;
            }

            /** Properties of a C2G_TestMessage. */
            export interface IC2G_TestMessage {

                /** C2G_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2G_TestMessage. */
            export class C2G_TestMessage implements IC2G_TestMessage {

                /**
                 * Constructs a new C2G_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestMessage);

                /** C2G_TestMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2G_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @param message C2G_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestMessage;
            }

            /** Properties of a C2G_TestRequest. */
            export interface IC2G_TestRequest {

                /** C2G_TestRequest Tag */
                Tag?: (string|null);

                /** C2G_TestRequest Data */
                Data?: (Uint8Array|null);
            }

            /** Represents a C2G_TestRequest. */
            export class C2G_TestRequest implements IC2G_TestRequest {

                /**
                 * Constructs a new C2G_TestRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRequest);

                /** C2G_TestRequest Tag. */
                public Tag: string;

                /** C2G_TestRequest Data. */
                public Data: Uint8Array;

                /**
                 * Encodes the specified C2G_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @param message C2G_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRequest;
            }

            /** Properties of a G2C_TestResponse. */
            export interface IG2C_TestResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);

                /** G2C_TestResponse Tag */
                Tag?: (string|null);

                /** G2C_TestResponse Data */
                Data?: (Uint8Array|null);

                /** G2C_TestResponse Lists */
                Lists?: (number[]|null);
            }

            /** Represents a G2C_TestResponse. */
            export class G2C_TestResponse implements IG2C_TestResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_TestResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_TestResponse);

                /** G2C_TestResponse Tag. */
                public Tag: string;

                /** G2C_TestResponse Data. */
                public Data: Uint8Array;

                /** G2C_TestResponse Lists. */
                public Lists: number[];

                /**
                 * Encodes the specified G2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @param message G2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_TestResponse;
            }

            /** Properties of a C2G_TestRequestPushMessage. */
            export interface IC2G_TestRequestPushMessage {
            }

            /** Represents a C2G_TestRequestPushMessage. */
            export class C2G_TestRequestPushMessage implements IC2G_TestRequestPushMessage {

                /**
                 * Constructs a new C2G_TestRequestPushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRequestPushMessage);

                /**
                 * Encodes the specified C2G_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2G_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRequestPushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRequestPushMessage;
            }

            /** Properties of a G2C_PushMessage. */
            export interface IG2C_PushMessage {

                /** G2C_PushMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a G2C_PushMessage. */
            export class G2C_PushMessage implements IG2C_PushMessage {

                /**
                 * Constructs a new G2C_PushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_PushMessage);

                /** G2C_PushMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified G2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.G2C_PushMessage.verify|verify} messages.
                 * @param message G2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_PushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_PushMessage;
            }

            /** Properties of a C2G_CreateAddressableRequest. */
            export interface IC2G_CreateAddressableRequest {
            }

            /** Represents a C2G_CreateAddressableRequest. */
            export class C2G_CreateAddressableRequest implements IC2G_CreateAddressableRequest {

                /**
                 * Constructs a new C2G_CreateAddressableRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateAddressableRequest);

                /**
                 * Encodes the specified C2G_CreateAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateAddressableRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateAddressableRequest;
            }

            /** Properties of a G2C_CreateAddressableResponse. */
            export interface IG2C_CreateAddressableResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_CreateAddressableResponse. */
            export class G2C_CreateAddressableResponse implements IG2C_CreateAddressableResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_CreateAddressableResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateAddressableResponse);

                /**
                 * Encodes the specified G2C_CreateAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateAddressableResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateAddressableResponse;
            }

            /** Properties of a C2M_TestMessage. */
            export interface IC2M_TestMessage {

                /** C2M_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2M_TestMessage. */
            export class C2M_TestMessage implements IC2M_TestMessage {

                /**
                 * Constructs a new C2M_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_TestMessage);

                /** C2M_TestMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2M_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestMessage.verify|verify} messages.
                 * @param message C2M_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_TestMessage;
            }

            /** Properties of a C2M_TestRequest. */
            export interface IC2M_TestRequest {

                /** C2M_TestRequest Tag */
                Tag?: (string|null);
            }

            /** Represents a C2M_TestRequest. */
            export class C2M_TestRequest implements IC2M_TestRequest {

                /**
                 * Constructs a new C2M_TestRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_TestRequest);

                /** C2M_TestRequest Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2M_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestRequest.verify|verify} messages.
                 * @param message C2M_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_TestRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_TestRequest;
            }

            /** Properties of a M2C_TestResponse. */
            export interface IM2C_TestResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);

                /** M2C_TestResponse Tag */
                Tag?: (string|null);
            }

            /** Represents a M2C_TestResponse. */
            export class M2C_TestResponse implements IM2C_TestResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new M2C_TestResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IM2C_TestResponse);

                /** M2C_TestResponse Tag. */
                public Tag: string;

                /**
                 * Encodes the specified M2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_TestResponse.verify|verify} messages.
                 * @param message M2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IM2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a M2C_TestResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns M2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.M2C_TestResponse;
            }

            /** Properties of a C2G_CreateChatRouteRequest. */
            export interface IC2G_CreateChatRouteRequest {
            }

            /** Represents a C2G_CreateChatRouteRequest. */
            export class C2G_CreateChatRouteRequest implements IC2G_CreateChatRouteRequest {

                /**
                 * Constructs a new C2G_CreateChatRouteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateChatRouteRequest);

                /**
                 * Encodes the specified C2G_CreateChatRouteRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateChatRouteRequest.verify|verify} messages.
                 * @param message C2G_CreateChatRouteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateChatRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateChatRouteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateChatRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateChatRouteRequest;
            }

            /** Properties of a G2C_CreateChatRouteResponse. */
            export interface IG2C_CreateChatRouteResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_CreateChatRouteResponse. */
            export class G2C_CreateChatRouteResponse implements IG2C_CreateChatRouteResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_CreateChatRouteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateChatRouteResponse);

                /**
                 * Encodes the specified G2C_CreateChatRouteResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateChatRouteResponse.verify|verify} messages.
                 * @param message G2C_CreateChatRouteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateChatRouteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateChatRouteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateChatRouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateChatRouteResponse;
            }

            /** Properties of a C2Chat_TestMessage. */
            export interface IC2Chat_TestMessage {

                /** C2Chat_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Chat_TestMessage. */
            export class C2Chat_TestMessage implements IC2Chat_TestMessage {

                /**
                 * Constructs a new C2Chat_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestMessage);

                /** C2Chat_TestMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Chat_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessage.verify|verify} messages.
                 * @param message C2Chat_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestMessage;
            }

            /** Properties of a C2Chat_TestMessageRequest. */
            export interface IC2Chat_TestMessageRequest {

                /** C2Chat_TestMessageRequest Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Chat_TestMessageRequest. */
            export class C2Chat_TestMessageRequest implements IC2Chat_TestMessageRequest {

                /**
                 * Constructs a new C2Chat_TestMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestMessageRequest);

                /** C2Chat_TestMessageRequest Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Chat_TestMessageRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessageRequest.verify|verify} messages.
                 * @param message C2Chat_TestMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestMessageRequest;
            }

            /** Properties of a Chat2C_TestMessageResponse. */
            export interface IChat2C_TestMessageResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);

                /** Chat2C_TestMessageResponse Tag */
                Tag?: (string|null);
            }

            /** Represents a Chat2C_TestMessageResponse. */
            export class Chat2C_TestMessageResponse implements IChat2C_TestMessageResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new Chat2C_TestMessageResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_TestMessageResponse);

                /** Chat2C_TestMessageResponse Tag. */
                public Tag: string;

                /**
                 * Encodes the specified Chat2C_TestMessageResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestMessageResponse.verify|verify} messages.
                 * @param message Chat2C_TestMessageResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_TestMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_TestMessageResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_TestMessageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_TestMessageResponse;
            }

            /** Properties of a C2M_MoveToMapRequest. */
            export interface IC2M_MoveToMapRequest {
            }

            /** Represents a C2M_MoveToMapRequest. */
            export class C2M_MoveToMapRequest implements IC2M_MoveToMapRequest {

                /**
                 * Constructs a new C2M_MoveToMapRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_MoveToMapRequest);

                /**
                 * Encodes the specified C2M_MoveToMapRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_MoveToMapRequest.verify|verify} messages.
                 * @param message C2M_MoveToMapRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_MoveToMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_MoveToMapRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_MoveToMapRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_MoveToMapRequest;
            }

            /** Properties of a M2C_MoveToMapResponse. */
            export interface IM2C_MoveToMapResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a M2C_MoveToMapResponse. */
            export class M2C_MoveToMapResponse implements IM2C_MoveToMapResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new M2C_MoveToMapResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IM2C_MoveToMapResponse);

                /**
                 * Encodes the specified M2C_MoveToMapResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_MoveToMapResponse.verify|verify} messages.
                 * @param message M2C_MoveToMapResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IM2C_MoveToMapResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a M2C_MoveToMapResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns M2C_MoveToMapResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.M2C_MoveToMapResponse;
            }

            /** Properties of a C2G_SendAddressableToMap. */
            export interface IC2G_SendAddressableToMap {

                /** C2G_SendAddressableToMap Tag */
                Tag?: (string|null);
            }

            /** Represents a C2G_SendAddressableToMap. */
            export class C2G_SendAddressableToMap implements IC2G_SendAddressableToMap {

                /**
                 * Constructs a new C2G_SendAddressableToMap.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SendAddressableToMap);

                /** C2G_SendAddressableToMap Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2G_SendAddressableToMap message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendAddressableToMap.verify|verify} messages.
                 * @param message C2G_SendAddressableToMap message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SendAddressableToMap, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SendAddressableToMap message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SendAddressableToMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SendAddressableToMap;
            }

            /** Properties of a C2Chat_TestRequestPushMessage. */
            export interface IC2Chat_TestRequestPushMessage {
            }

            /** Represents a C2Chat_TestRequestPushMessage. */
            export class C2Chat_TestRequestPushMessage implements IC2Chat_TestRequestPushMessage {

                /**
                 * Constructs a new C2Chat_TestRequestPushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage);

                /**
                 * Encodes the specified C2Chat_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2Chat_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRequestPushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRequestPushMessage;
            }

            /** Properties of a Chat2C_PushMessage. */
            export interface IChat2C_PushMessage {

                /** Chat2C_PushMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a Chat2C_PushMessage. */
            export class Chat2C_PushMessage implements IChat2C_PushMessage {

                /**
                 * Constructs a new Chat2C_PushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_PushMessage);

                /** Chat2C_PushMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified Chat2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_PushMessage.verify|verify} messages.
                 * @param message Chat2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_PushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_PushMessage;
            }

            /** Properties of a C2G_CreateSubSceneRequest. */
            export interface IC2G_CreateSubSceneRequest {
            }

            /** Represents a C2G_CreateSubSceneRequest. */
            export class C2G_CreateSubSceneRequest implements IC2G_CreateSubSceneRequest {

                /**
                 * Constructs a new C2G_CreateSubSceneRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneRequest);

                /**
                 * Encodes the specified C2G_CreateSubSceneRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateSubSceneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateSubSceneRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateSubSceneRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateSubSceneRequest;
            }

            /** Properties of a G2C_CreateSubSceneResponse. */
            export interface IG2C_CreateSubSceneResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_CreateSubSceneResponse. */
            export class G2C_CreateSubSceneResponse implements IG2C_CreateSubSceneResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_CreateSubSceneResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneResponse);

                /**
                 * Encodes the specified G2C_CreateSubSceneResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateSubSceneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateSubSceneResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateSubSceneResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateSubSceneResponse;
            }

            /** Properties of a C2G_SendToSubSceneMessage. */
            export interface IC2G_SendToSubSceneMessage {
            }

            /** Represents a C2G_SendToSubSceneMessage. */
            export class C2G_SendToSubSceneMessage implements IC2G_SendToSubSceneMessage {

                /**
                 * Constructs a new C2G_SendToSubSceneMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SendToSubSceneMessage);

                /**
                 * Encodes the specified C2G_SendToSubSceneMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendToSubSceneMessage.verify|verify} messages.
                 * @param message C2G_SendToSubSceneMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SendToSubSceneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SendToSubSceneMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SendToSubSceneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SendToSubSceneMessage;
            }

            /** Properties of a C2G_CreateSubSceneAddressableRequest. */
            export interface IC2G_CreateSubSceneAddressableRequest {
            }

            /** Represents a C2G_CreateSubSceneAddressableRequest. */
            export class C2G_CreateSubSceneAddressableRequest implements IC2G_CreateSubSceneAddressableRequest {

                /**
                 * Constructs a new C2G_CreateSubSceneAddressableRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest);

                /**
                 * Encodes the specified C2G_CreateSubSceneAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateSubSceneAddressableRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateSubSceneAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest;
            }

            /** Properties of a G2C_CreateSubSceneAddressableResponse. */
            export interface IG2C_CreateSubSceneAddressableResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_CreateSubSceneAddressableResponse. */
            export class G2C_CreateSubSceneAddressableResponse implements IG2C_CreateSubSceneAddressableResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_CreateSubSceneAddressableResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse);

                /**
                 * Encodes the specified G2C_CreateSubSceneAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateSubSceneAddressableResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateSubSceneAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse;
            }

            /** Properties of a C2SubScene_TestMessage. */
            export interface IC2SubScene_TestMessage {

                /** C2SubScene_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2SubScene_TestMessage. */
            export class C2SubScene_TestMessage implements IC2SubScene_TestMessage {

                /**
                 * Constructs a new C2SubScene_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2SubScene_TestMessage);

                /** C2SubScene_TestMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2SubScene_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestMessage.verify|verify} messages.
                 * @param message C2SubScene_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2SubScene_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2SubScene_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2SubScene_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2SubScene_TestMessage;
            }

            /** Properties of a C2SubScene_TestDisposeMessage. */
            export interface IC2SubScene_TestDisposeMessage {
            }

            /** Represents a C2SubScene_TestDisposeMessage. */
            export class C2SubScene_TestDisposeMessage implements IC2SubScene_TestDisposeMessage {

                /**
                 * Constructs a new C2SubScene_TestDisposeMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage);

                /**
                 * Encodes the specified C2SubScene_TestDisposeMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestDisposeMessage.verify|verify} messages.
                 * @param message C2SubScene_TestDisposeMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2SubScene_TestDisposeMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2SubScene_TestDisposeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2SubScene_TestDisposeMessage;
            }

            /** Properties of a C2G_ConnectRoamingRequest. */
            export interface IC2G_ConnectRoamingRequest {
            }

            /** Represents a C2G_ConnectRoamingRequest. */
            export class C2G_ConnectRoamingRequest implements IC2G_ConnectRoamingRequest {

                /**
                 * Constructs a new C2G_ConnectRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_ConnectRoamingRequest);

                /**
                 * Encodes the specified C2G_ConnectRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_ConnectRoamingRequest.verify|verify} messages.
                 * @param message C2G_ConnectRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_ConnectRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_ConnectRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_ConnectRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_ConnectRoamingRequest;
            }

            /** Properties of a G2C_ConnectRoamingResponse. */
            export interface IG2C_ConnectRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_ConnectRoamingResponse. */
            export class G2C_ConnectRoamingResponse implements IG2C_ConnectRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_ConnectRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_ConnectRoamingResponse);

                /**
                 * Encodes the specified G2C_ConnectRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_ConnectRoamingResponse.verify|verify} messages.
                 * @param message G2C_ConnectRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_ConnectRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_ConnectRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_ConnectRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_ConnectRoamingResponse;
            }

            /** Properties of a C2Chat_TestRoamingMessage. */
            export interface IC2Chat_TestRoamingMessage {

                /** C2Chat_TestRoamingMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Chat_TestRoamingMessage. */
            export class C2Chat_TestRoamingMessage implements IC2Chat_TestRoamingMessage {

                /**
                 * Constructs a new C2Chat_TestRoamingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRoamingMessage);

                /** C2Chat_TestRoamingMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Chat_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Chat_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRoamingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRoamingMessage;
            }

            /** Properties of a C2Map_TestRoamingMessage. */
            export interface IC2Map_TestRoamingMessage {

                /** C2Map_TestRoamingMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Map_TestRoamingMessage. */
            export class C2Map_TestRoamingMessage implements IC2Map_TestRoamingMessage {

                /**
                 * Constructs a new C2Map_TestRoamingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_TestRoamingMessage);

                /** C2Map_TestRoamingMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Map_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Map_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_TestRoamingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_TestRoamingMessage;
            }

            /** Properties of a C2Chat_TestRPCRoamingRequest. */
            export interface IC2Chat_TestRPCRoamingRequest {

                /** C2Chat_TestRPCRoamingRequest Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Chat_TestRPCRoamingRequest. */
            export class C2Chat_TestRPCRoamingRequest implements IC2Chat_TestRPCRoamingRequest {

                /**
                 * Constructs a new C2Chat_TestRPCRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest);

                /** C2Chat_TestRPCRoamingRequest Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Chat_TestRPCRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest.verify|verify} messages.
                 * @param message C2Chat_TestRPCRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRPCRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRPCRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest;
            }

            /** Properties of a Chat2C_TestRPCRoamingResponse. */
            export interface IChat2C_TestRPCRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a Chat2C_TestRPCRoamingResponse. */
            export class Chat2C_TestRPCRoamingResponse implements IChat2C_TestRPCRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new Chat2C_TestRPCRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse);

                /**
                 * Encodes the specified Chat2C_TestRPCRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse.verify|verify} messages.
                 * @param message Chat2C_TestRPCRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_TestRPCRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_TestRPCRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse;
            }

            /** Properties of a C2Map_PushMessageToClient. */
            export interface IC2Map_PushMessageToClient {

                /** C2Map_PushMessageToClient Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Map_PushMessageToClient. */
            export class C2Map_PushMessageToClient implements IC2Map_PushMessageToClient {

                /**
                 * Constructs a new C2Map_PushMessageToClient.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_PushMessageToClient);

                /** C2Map_PushMessageToClient Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Map_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.C2Map_PushMessageToClient.verify|verify} messages.
                 * @param message C2Map_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_PushMessageToClient message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_PushMessageToClient;
            }

            /** Properties of a Map2C_PushMessageToClient. */
            export interface IMap2C_PushMessageToClient {

                /** Map2C_PushMessageToClient Tag */
                Tag?: (string|null);
            }

            /** Represents a Map2C_PushMessageToClient. */
            export class Map2C_PushMessageToClient implements IMap2C_PushMessageToClient {

                /**
                 * Constructs a new Map2C_PushMessageToClient.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IMap2C_PushMessageToClient);

                /** Map2C_PushMessageToClient Tag. */
                public Tag: string;

                /**
                 * Encodes the specified Map2C_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.Map2C_PushMessageToClient.verify|verify} messages.
                 * @param message Map2C_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IMap2C_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Map2C_PushMessageToClient message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Map2C_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Map2C_PushMessageToClient;
            }

            /** Properties of a C2Map_TestTransferRequest. */
            export interface IC2Map_TestTransferRequest {
            }

            /** Represents a C2Map_TestTransferRequest. */
            export class C2Map_TestTransferRequest implements IC2Map_TestTransferRequest {

                /**
                 * Constructs a new C2Map_TestTransferRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_TestTransferRequest);

                /**
                 * Encodes the specified C2Map_TestTransferRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestTransferRequest.verify|verify} messages.
                 * @param message C2Map_TestTransferRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_TestTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_TestTransferRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_TestTransferRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_TestTransferRequest;
            }

            /** Properties of a Map2C_TestTransferResponse. */
            export interface IMap2C_TestTransferResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a Map2C_TestTransferResponse. */
            export class Map2C_TestTransferResponse implements IMap2C_TestTransferResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new Map2C_TestTransferResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IMap2C_TestTransferResponse);

                /**
                 * Encodes the specified Map2C_TestTransferResponse message. Does not implicitly {@link Fantasy.Network.Message.Map2C_TestTransferResponse.verify|verify} messages.
                 * @param message Map2C_TestTransferResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IMap2C_TestTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Map2C_TestTransferResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Map2C_TestTransferResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Map2C_TestTransferResponse;
            }

            /** Properties of a C2Chat_TestSendMapMessage. */
            export interface IC2Chat_TestSendMapMessage {

                /** C2Chat_TestSendMapMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2Chat_TestSendMapMessage. */
            export class C2Chat_TestSendMapMessage implements IC2Chat_TestSendMapMessage {

                /**
                 * Constructs a new C2Chat_TestSendMapMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestSendMapMessage);

                /** C2Chat_TestSendMapMessage Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2Chat_TestSendMapMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestSendMapMessage.verify|verify} messages.
                 * @param message C2Chat_TestSendMapMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestSendMapMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestSendMapMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestSendMapMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestSendMapMessage;
            }

            /** Properties of a C2G_TestRouteToRoaming. */
            export interface IC2G_TestRouteToRoaming {

                /** C2G_TestRouteToRoaming Tag */
                Tag?: (string|null);
            }

            /** Represents a C2G_TestRouteToRoaming. */
            export class C2G_TestRouteToRoaming implements IC2G_TestRouteToRoaming {

                /**
                 * Constructs a new C2G_TestRouteToRoaming.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRouteToRoaming);

                /** C2G_TestRouteToRoaming Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2G_TestRouteToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRouteToRoaming.verify|verify} messages.
                 * @param message C2G_TestRouteToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRouteToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRouteToRoaming message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRouteToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRouteToRoaming;
            }

            /** Properties of a C2G_TestRoamingToRoaming. */
            export interface IC2G_TestRoamingToRoaming {

                /** C2G_TestRoamingToRoaming Tag */
                Tag?: (string|null);
            }

            /** Represents a C2G_TestRoamingToRoaming. */
            export class C2G_TestRoamingToRoaming implements IC2G_TestRoamingToRoaming {

                /**
                 * Constructs a new C2G_TestRoamingToRoaming.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRoamingToRoaming);

                /** C2G_TestRoamingToRoaming Tag. */
                public Tag: string;

                /**
                 * Encodes the specified C2G_TestRoamingToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRoamingToRoaming.verify|verify} messages.
                 * @param message C2G_TestRoamingToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRoamingToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRoamingToRoaming message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRoamingToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRoamingToRoaming;
            }

            /** Properties of a C2G_LoginRoamingRequest. */
            export interface IC2G_LoginRoamingRequest {
            }

            /** Represents a C2G_LoginRoamingRequest. */
            export class C2G_LoginRoamingRequest implements IC2G_LoginRoamingRequest {

                /**
                 * Constructs a new C2G_LoginRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_LoginRoamingRequest);

                /**
                 * Encodes the specified C2G_LoginRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_LoginRoamingRequest.verify|verify} messages.
                 * @param message C2G_LoginRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_LoginRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_LoginRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_LoginRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_LoginRoamingRequest;
            }

            /** Properties of a G2C_LoginRoamingResponse. */
            export interface IG2C_LoginRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_LoginRoamingResponse. */
            export class G2C_LoginRoamingResponse implements IG2C_LoginRoamingResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_LoginRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_LoginRoamingResponse);

                /**
                 * Encodes the specified G2C_LoginRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_LoginRoamingResponse.verify|verify} messages.
                 * @param message G2C_LoginRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_LoginRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_LoginRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_LoginRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_LoginRoamingResponse;
            }

            /** Properties of a C2G_SubscribeSphereEventRequest. */
            export interface IC2G_SubscribeSphereEventRequest {
            }

            /** Represents a C2G_SubscribeSphereEventRequest. */
            export class C2G_SubscribeSphereEventRequest implements IC2G_SubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_SubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest);

                /**
                 * Encodes the specified C2G_SubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_SubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_SubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SubscribeSphereEventRequest;
            }

            /** Properties of a G2C_SubscribeSphereEventResponse. */
            export interface IG2C_SubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_SubscribeSphereEventResponse. */
            export class G2C_SubscribeSphereEventResponse implements IG2C_SubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_SubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse);

                /**
                 * Encodes the specified G2C_SubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_SubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_SubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_SubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_SubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_SubscribeSphereEventResponse;
            }

            /** Properties of a C2G_PublishSphereEventRequest. */
            export interface IC2G_PublishSphereEventRequest {
            }

            /** Represents a C2G_PublishSphereEventRequest. */
            export class C2G_PublishSphereEventRequest implements IC2G_PublishSphereEventRequest {

                /**
                 * Constructs a new C2G_PublishSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_PublishSphereEventRequest);

                /**
                 * Encodes the specified C2G_PublishSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_PublishSphereEventRequest.verify|verify} messages.
                 * @param message C2G_PublishSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_PublishSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_PublishSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_PublishSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_PublishSphereEventRequest;
            }

            /** Properties of a G2C_PublishSphereEventResponse. */
            export interface IG2C_PublishSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_PublishSphereEventResponse. */
            export class G2C_PublishSphereEventResponse implements IG2C_PublishSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_PublishSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_PublishSphereEventResponse);

                /**
                 * Encodes the specified G2C_PublishSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_PublishSphereEventResponse.verify|verify} messages.
                 * @param message G2C_PublishSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_PublishSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_PublishSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_PublishSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_PublishSphereEventResponse;
            }

            /** Properties of a C2G_UnsubscribeSphereEventRequest. */
            export interface IC2G_UnsubscribeSphereEventRequest {
            }

            /** Represents a C2G_UnsubscribeSphereEventRequest. */
            export class C2G_UnsubscribeSphereEventRequest implements IC2G_UnsubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_UnsubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest);

                /**
                 * Encodes the specified C2G_UnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_UnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_UnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_UnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest;
            }

            /** Properties of a G2C_UnsubscribeSphereEventResponse. */
            export interface IG2C_UnsubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_UnsubscribeSphereEventResponse. */
            export class G2C_UnsubscribeSphereEventResponse implements IG2C_UnsubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_UnsubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse);

                /**
                 * Encodes the specified G2C_UnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_UnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_UnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_UnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse;
            }

            /** Properties of a C2G_MapUnsubscribeSphereEventRequest. */
            export interface IC2G_MapUnsubscribeSphereEventRequest {
            }

            /** Represents a C2G_MapUnsubscribeSphereEventRequest. */
            export class C2G_MapUnsubscribeSphereEventRequest implements IC2G_MapUnsubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_MapUnsubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest);

                /**
                 * Encodes the specified C2G_MapUnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_MapUnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_MapUnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_MapUnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest;
            }

            /** Properties of a G2C_MapUnsubscribeSphereEventResponse. */
            export interface IG2C_MapUnsubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                errorCode?: (number|null);
            }

            /** Represents a G2C_MapUnsubscribeSphereEventResponse. */
            export class G2C_MapUnsubscribeSphereEventResponse implements IG2C_MapUnsubscribeSphereEventResponse {
                /** Fantasy IResponse 框架错误码 */
                public errorCode: number;


                /**
                 * Constructs a new G2C_MapUnsubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse);

                /**
                 * Encodes the specified G2C_MapUnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_MapUnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_MapUnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_MapUnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse;
            }

            /** ErrorCodeEnum enum. */
            export enum ErrorCodeEnum {
                Success = 0,
                Failed = 1,
                UnknownError = 2,
                InvalidParameter = 100,
                PermissionDenied = 101
            }

            /** PlayerState enum. */
            export enum PlayerState {
                Offline = 0,
                Online = 1,
                Busy = 2,
                Away = 3
            }

            /** Properties of a C2G_TestEnumMessage. */
            export interface IC2G_TestEnumMessage {

                /** C2G_TestEnumMessage Code */
                Code?: (Fantasy.Network.Message.ErrorCodeEnum|null);

                /** C2G_TestEnumMessage Message */
                Message?: (string|null);

                /** C2G_TestEnumMessage State */
                State?: (Fantasy.Network.Message.PlayerState|null);
            }

            /** Represents a C2G_TestEnumMessage. */
            export class C2G_TestEnumMessage implements IC2G_TestEnumMessage {

                /**
                 * Constructs a new C2G_TestEnumMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestEnumMessage);

                /** C2G_TestEnumMessage Code. */
                public Code: Fantasy.Network.Message.ErrorCodeEnum;

                /** C2G_TestEnumMessage Message. */
                public Message: string;

                /** C2G_TestEnumMessage State. */
                public State: Fantasy.Network.Message.PlayerState;

                /**
                 * Encodes the specified C2G_TestEnumMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEnumMessage.verify|verify} messages.
                 * @param message C2G_TestEnumMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestEnumMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestEnumMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestEnumMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestEnumMessage;
            }
        }
    }
}
