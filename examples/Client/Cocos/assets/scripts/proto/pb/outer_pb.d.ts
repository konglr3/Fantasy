import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a C2G_LoginGameRequest. */
export interface IC2G_LoginGameRequest {

    /** C2G_LoginGameRequest AccountName */
    AccountName?: (string|null);
}

/** 客户端登陆到Gate服务器 */
export class C2G_LoginGameRequest implements IC2G_LoginGameRequest {

    /**
     * Constructs a new C2G_LoginGameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2G_LoginGameRequest);

    /** C2G_LoginGameRequest AccountName. */
    public AccountName: string;

    /**
     * Creates a new C2G_LoginGameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2G_LoginGameRequest instance
     */
    public static create(properties?: IC2G_LoginGameRequest): C2G_LoginGameRequest;

    /**
     * Encodes the specified C2G_LoginGameRequest message. Does not implicitly {@link C2G_LoginGameRequest.verify|verify} messages.
     * @param message C2G_LoginGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2G_LoginGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2G_LoginGameRequest message, length delimited. Does not implicitly {@link C2G_LoginGameRequest.verify|verify} messages.
     * @param message C2G_LoginGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2G_LoginGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2G_LoginGameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2G_LoginGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2G_LoginGameRequest;

    /**
     * Decodes a C2G_LoginGameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2G_LoginGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2G_LoginGameRequest;

    /**
     * Verifies a C2G_LoginGameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2G_LoginGameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2G_LoginGameRequest
     */
    public static fromObject(object: { [k: string]: any }): C2G_LoginGameRequest;

    /**
     * Creates a plain object from a C2G_LoginGameRequest message. Also converts values to other types if specified.
     * @param message C2G_LoginGameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2G_LoginGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2G_LoginGameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2G_LoginGameRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a G2C_LoginGameResponse. */
export interface IG2C_LoginGameResponse {
}

/** Represents a G2C_LoginGameResponse. */
export class G2C_LoginGameResponse implements IG2C_LoginGameResponse {

    /**
     * Constructs a new G2C_LoginGameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IG2C_LoginGameResponse);

    /**
     * Creates a new G2C_LoginGameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns G2C_LoginGameResponse instance
     */
    public static create(properties?: IG2C_LoginGameResponse): G2C_LoginGameResponse;

    /**
     * Encodes the specified G2C_LoginGameResponse message. Does not implicitly {@link G2C_LoginGameResponse.verify|verify} messages.
     * @param message G2C_LoginGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IG2C_LoginGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified G2C_LoginGameResponse message, length delimited. Does not implicitly {@link G2C_LoginGameResponse.verify|verify} messages.
     * @param message G2C_LoginGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IG2C_LoginGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a G2C_LoginGameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns G2C_LoginGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): G2C_LoginGameResponse;

    /**
     * Decodes a G2C_LoginGameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns G2C_LoginGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): G2C_LoginGameResponse;

    /**
     * Verifies a G2C_LoginGameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a G2C_LoginGameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns G2C_LoginGameResponse
     */
    public static fromObject(object: { [k: string]: any }): G2C_LoginGameResponse;

    /**
     * Creates a plain object from a G2C_LoginGameResponse message. Also converts values to other types if specified.
     * @param message G2C_LoginGameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: G2C_LoginGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this G2C_LoginGameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for G2C_LoginGameResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2M_InitComplete. */
export interface IC2M_InitComplete {
}

/** 客户端通知服务器可以接收服务器推送的消息 */
export class C2M_InitComplete implements IC2M_InitComplete {

    /**
     * Constructs a new C2M_InitComplete.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2M_InitComplete);

    /**
     * Creates a new C2M_InitComplete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2M_InitComplete instance
     */
    public static create(properties?: IC2M_InitComplete): C2M_InitComplete;

    /**
     * Encodes the specified C2M_InitComplete message. Does not implicitly {@link C2M_InitComplete.verify|verify} messages.
     * @param message C2M_InitComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2M_InitComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2M_InitComplete message, length delimited. Does not implicitly {@link C2M_InitComplete.verify|verify} messages.
     * @param message C2M_InitComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2M_InitComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2M_InitComplete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2M_InitComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2M_InitComplete;

    /**
     * Decodes a C2M_InitComplete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2M_InitComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2M_InitComplete;

    /**
     * Verifies a C2M_InitComplete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2M_InitComplete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2M_InitComplete
     */
    public static fromObject(object: { [k: string]: any }): C2M_InitComplete;

    /**
     * Creates a plain object from a C2M_InitComplete message. Also converts values to other types if specified.
     * @param message C2M_InitComplete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2M_InitComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2M_InitComplete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2M_InitComplete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a M2C_UnitCreate. */
export interface IM2C_UnitCreate {

    /** M2C_UnitCreate Unit */
    Unit?: (IUnitInfo|null);

    /** M2C_UnitCreate IsSelf */
    IsSelf?: (boolean|null);
}

/** Map服务器通知客户端创建新的Unit */
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
     * Creates a new M2C_UnitCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns M2C_UnitCreate instance
     */
    public static create(properties?: IM2C_UnitCreate): M2C_UnitCreate;

    /**
     * Encodes the specified M2C_UnitCreate message. Does not implicitly {@link M2C_UnitCreate.verify|verify} messages.
     * @param message M2C_UnitCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified M2C_UnitCreate message, length delimited. Does not implicitly {@link M2C_UnitCreate.verify|verify} messages.
     * @param message M2C_UnitCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IM2C_UnitCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitCreate;

    /**
     * Decodes a M2C_UnitCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns M2C_UnitCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): M2C_UnitCreate;

    /**
     * Verifies a M2C_UnitCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a M2C_UnitCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns M2C_UnitCreate
     */
    public static fromObject(object: { [k: string]: any }): M2C_UnitCreate;

    /**
     * Creates a plain object from a M2C_UnitCreate message. Also converts values to other types if specified.
     * @param message M2C_UnitCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: M2C_UnitCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this M2C_UnitCreate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for M2C_UnitCreate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a M2C_UnitLeave. */
export interface IM2C_UnitLeave {

    /** M2C_UnitLeave UnitId */
    UnitId?: (number|Long|null);
}

/** Map通知客户端有Unit离开 */
export class M2C_UnitLeave implements IM2C_UnitLeave {

    /**
     * Constructs a new M2C_UnitLeave.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_UnitLeave);

    /** M2C_UnitLeave UnitId. */
    public UnitId: (number|Long);

    /**
     * Creates a new M2C_UnitLeave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns M2C_UnitLeave instance
     */
    public static create(properties?: IM2C_UnitLeave): M2C_UnitLeave;

    /**
     * Encodes the specified M2C_UnitLeave message. Does not implicitly {@link M2C_UnitLeave.verify|verify} messages.
     * @param message M2C_UnitLeave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitLeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified M2C_UnitLeave message, length delimited. Does not implicitly {@link M2C_UnitLeave.verify|verify} messages.
     * @param message M2C_UnitLeave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IM2C_UnitLeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitLeave message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitLeave;

    /**
     * Decodes a M2C_UnitLeave message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns M2C_UnitLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): M2C_UnitLeave;

    /**
     * Verifies a M2C_UnitLeave message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a M2C_UnitLeave message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns M2C_UnitLeave
     */
    public static fromObject(object: { [k: string]: any }): M2C_UnitLeave;

    /**
     * Creates a plain object from a M2C_UnitLeave message. Also converts values to other types if specified.
     * @param message M2C_UnitLeave
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: M2C_UnitLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this M2C_UnitLeave to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for M2C_UnitLeave
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
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

/** Unit信息 */
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
     * Creates a new UnitInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnitInfo instance
     */
    public static create(properties?: IUnitInfo): UnitInfo;

    /**
     * Encodes the specified UnitInfo message. Does not implicitly {@link UnitInfo.verify|verify} messages.
     * @param message UnitInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnitInfo message, length delimited. Does not implicitly {@link UnitInfo.verify|verify} messages.
     * @param message UnitInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnitInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnitInfo;

    /**
     * Decodes an UnitInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnitInfo;

    /**
     * Verifies an UnitInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UnitInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnitInfo
     */
    public static fromObject(object: { [k: string]: any }): UnitInfo;

    /**
     * Creates a plain object from an UnitInfo message. Also converts values to other types if specified.
     * @param message UnitInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnitInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UnitInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2M_MoveRequest. */
export interface IC2M_MoveRequest {

    /** C2M_MoveRequest TargetPos */
    TargetPos?: (IPosition|null);
}

/** 客户端发送请求移动 */
export class C2M_MoveRequest implements IC2M_MoveRequest {

    /**
     * Constructs a new C2M_MoveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2M_MoveRequest);

    /** C2M_MoveRequest TargetPos. */
    public TargetPos?: (IPosition|null);

    /**
     * Creates a new C2M_MoveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2M_MoveRequest instance
     */
    public static create(properties?: IC2M_MoveRequest): C2M_MoveRequest;

    /**
     * Encodes the specified C2M_MoveRequest message. Does not implicitly {@link C2M_MoveRequest.verify|verify} messages.
     * @param message C2M_MoveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2M_MoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2M_MoveRequest message, length delimited. Does not implicitly {@link C2M_MoveRequest.verify|verify} messages.
     * @param message C2M_MoveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2M_MoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2M_MoveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2M_MoveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2M_MoveRequest;

    /**
     * Decodes a C2M_MoveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2M_MoveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2M_MoveRequest;

    /**
     * Verifies a C2M_MoveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2M_MoveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2M_MoveRequest
     */
    public static fromObject(object: { [k: string]: any }): C2M_MoveRequest;

    /**
     * Creates a plain object from a C2M_MoveRequest message. Also converts values to other types if specified.
     * @param message C2M_MoveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2M_MoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2M_MoveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2M_MoveRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a M2C_MoveResponse. */
export interface IM2C_MoveResponse {

    /** M2C_MoveResponse Data */
    Data?: (IPosition[]|null);
}

/** Represents a M2C_MoveResponse. */
export class M2C_MoveResponse implements IM2C_MoveResponse {

    /**
     * Constructs a new M2C_MoveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IM2C_MoveResponse);

    /** M2C_MoveResponse Data. */
    public Data: IPosition[];

    /**
     * Creates a new M2C_MoveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns M2C_MoveResponse instance
     */
    public static create(properties?: IM2C_MoveResponse): M2C_MoveResponse;

    /**
     * Encodes the specified M2C_MoveResponse message. Does not implicitly {@link M2C_MoveResponse.verify|verify} messages.
     * @param message M2C_MoveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_MoveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified M2C_MoveResponse message, length delimited. Does not implicitly {@link M2C_MoveResponse.verify|verify} messages.
     * @param message M2C_MoveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IM2C_MoveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_MoveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_MoveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_MoveResponse;

    /**
     * Decodes a M2C_MoveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns M2C_MoveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): M2C_MoveResponse;

    /**
     * Verifies a M2C_MoveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a M2C_MoveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns M2C_MoveResponse
     */
    public static fromObject(object: { [k: string]: any }): M2C_MoveResponse;

    /**
     * Creates a plain object from a M2C_MoveResponse message. Also converts values to other types if specified.
     * @param message M2C_MoveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: M2C_MoveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this M2C_MoveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for M2C_MoveResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
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

/** 坐标信息 */
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
     * Creates a new Position instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Position instance
     */
    public static create(properties?: IPosition): Position;

    /**
     * Encodes the specified Position message. Does not implicitly {@link Position.verify|verify} messages.
     * @param message Position message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Position message, length delimited. Does not implicitly {@link Position.verify|verify} messages.
     * @param message Position message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Position message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Position;

    /**
     * Decodes a Position message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Position
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Position;

    /**
     * Verifies a Position message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Position message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Position
     */
    public static fromObject(object: { [k: string]: any }): Position;

    /**
     * Creates a plain object from a Position message. Also converts values to other types if specified.
     * @param message Position
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Position to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Position
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
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

/** 通知客户端Unit移动状态改变 */
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
     * Creates a new M2C_UnitMoveState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns M2C_UnitMoveState instance
     */
    public static create(properties?: IM2C_UnitMoveState): M2C_UnitMoveState;

    /**
     * Encodes the specified M2C_UnitMoveState message. Does not implicitly {@link M2C_UnitMoveState.verify|verify} messages.
     * @param message M2C_UnitMoveState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IM2C_UnitMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified M2C_UnitMoveState message, length delimited. Does not implicitly {@link M2C_UnitMoveState.verify|verify} messages.
     * @param message M2C_UnitMoveState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IM2C_UnitMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a M2C_UnitMoveState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns M2C_UnitMoveState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): M2C_UnitMoveState;

    /**
     * Decodes a M2C_UnitMoveState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns M2C_UnitMoveState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): M2C_UnitMoveState;

    /**
     * Verifies a M2C_UnitMoveState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a M2C_UnitMoveState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns M2C_UnitMoveState
     */
    public static fromObject(object: { [k: string]: any }): M2C_UnitMoveState;

    /**
     * Creates a plain object from a M2C_UnitMoveState message. Also converts values to other types if specified.
     * @param message M2C_UnitMoveState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: M2C_UnitMoveState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this M2C_UnitMoveState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for M2C_UnitMoveState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace Fantasy. */
export namespace Fantasy {

    /** Namespace Network. */
    namespace Network {

        /** Namespace Message. */
        namespace Message {

            /** Properties of a C2G_TestEmptyMessage. */
            interface IC2G_TestEmptyMessage {
            }

            /** Represents a C2G_TestEmptyMessage. */
            class C2G_TestEmptyMessage implements IC2G_TestEmptyMessage {

                /**
                 * Constructs a new C2G_TestEmptyMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestEmptyMessage);

                /**
                 * Creates a new C2G_TestEmptyMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestEmptyMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestEmptyMessage): Fantasy.Network.Message.C2G_TestEmptyMessage;

                /**
                 * Encodes the specified C2G_TestEmptyMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEmptyMessage.verify|verify} messages.
                 * @param message C2G_TestEmptyMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestEmptyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestEmptyMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEmptyMessage.verify|verify} messages.
                 * @param message C2G_TestEmptyMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestEmptyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestEmptyMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestEmptyMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestEmptyMessage;

                /**
                 * Decodes a C2G_TestEmptyMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestEmptyMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestEmptyMessage;

                /**
                 * Verifies a C2G_TestEmptyMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestEmptyMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestEmptyMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestEmptyMessage;

                /**
                 * Creates a plain object from a C2G_TestEmptyMessage message. Also converts values to other types if specified.
                 * @param message C2G_TestEmptyMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestEmptyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestEmptyMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestEmptyMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestMessage. */
            interface IC2G_TestMessage {

                /** C2G_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2G_TestMessage. */
            class C2G_TestMessage implements IC2G_TestMessage {

                /**
                 * Constructs a new C2G_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestMessage);

                /** C2G_TestMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2G_TestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestMessage): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Encodes the specified C2G_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @param message C2G_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMessage.verify|verify} messages.
                 * @param message C2G_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Decodes a C2G_TestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Verifies a C2G_TestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestMessage;

                /**
                 * Creates a plain object from a C2G_TestMessage message. Also converts values to other types if specified.
                 * @param message C2G_TestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestRequest. */
            interface IC2G_TestRequest {

                /** C2G_TestRequest Tag */
                Tag?: (string|null);

                /** C2G_TestRequest Data */
                Data?: (Uint8Array|null);
            }

            /** Represents a C2G_TestRequest. */
            class C2G_TestRequest implements IC2G_TestRequest {

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
                 * Creates a new C2G_TestRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestRequest): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Encodes the specified C2G_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @param message C2G_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequest.verify|verify} messages.
                 * @param message C2G_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Decodes a C2G_TestRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Verifies a C2G_TestRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestRequest;

                /**
                 * Creates a plain object from a C2G_TestRequest message. Also converts values to other types if specified.
                 * @param message C2G_TestRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_TestResponse. */
            interface IG2C_TestResponse {

                /** G2C_TestResponse Tag */
                Tag?: (string|null);

                /** G2C_TestResponse Data */
                Data?: (Uint8Array|null);

                /** G2C_TestResponse Lists */
                Lists?: (number[]|null);
            }

            /** Represents a G2C_TestResponse. */
            class G2C_TestResponse implements IG2C_TestResponse {

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
                 * Creates a new G2C_TestResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_TestResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_TestResponse): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Encodes the specified G2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @param message G2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestResponse.verify|verify} messages.
                 * @param message G2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Decodes a G2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Verifies a G2C_TestResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_TestResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_TestResponse;

                /**
                 * Creates a plain object from a G2C_TestResponse message. Also converts values to other types if specified.
                 * @param message G2C_TestResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_TestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_TestResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_TestResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestRequestPushMessage. */
            interface IC2G_TestRequestPushMessage {
            }

            /** Represents a C2G_TestRequestPushMessage. */
            class C2G_TestRequestPushMessage implements IC2G_TestRequestPushMessage {

                /**
                 * Constructs a new C2G_TestRequestPushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRequestPushMessage);

                /**
                 * Creates a new C2G_TestRequestPushMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestRequestPushMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestRequestPushMessage): Fantasy.Network.Message.C2G_TestRequestPushMessage;

                /**
                 * Encodes the specified C2G_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2G_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestRequestPushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2G_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRequestPushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRequestPushMessage;

                /**
                 * Decodes a C2G_TestRequestPushMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestRequestPushMessage;

                /**
                 * Verifies a C2G_TestRequestPushMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestRequestPushMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestRequestPushMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestRequestPushMessage;

                /**
                 * Creates a plain object from a C2G_TestRequestPushMessage message. Also converts values to other types if specified.
                 * @param message C2G_TestRequestPushMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestRequestPushMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestRequestPushMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestRequestPushMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_PushMessage. */
            interface IG2C_PushMessage {

                /** 标记 */
                Tag?: (string|null);
            }

            /** Gate服务器推送一个消息给客户端 */
            class G2C_PushMessage implements IG2C_PushMessage {

                /**
                 * Constructs a new G2C_PushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_PushMessage);

                /** 标记 */
                public Tag: string;

                /**
                 * Creates a new G2C_PushMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_PushMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_PushMessage): Fantasy.Network.Message.G2C_PushMessage;

                /**
                 * Encodes the specified G2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.G2C_PushMessage.verify|verify} messages.
                 * @param message G2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_PushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_PushMessage.verify|verify} messages.
                 * @param message G2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_PushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_PushMessage;

                /**
                 * Decodes a G2C_PushMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_PushMessage;

                /**
                 * Verifies a G2C_PushMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_PushMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_PushMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_PushMessage;

                /**
                 * Creates a plain object from a G2C_PushMessage message. Also converts values to other types if specified.
                 * @param message G2C_PushMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_PushMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_PushMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_PushMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_CreateAddressableRequest. */
            interface IC2G_CreateAddressableRequest {
            }

            /** Represents a C2G_CreateAddressableRequest. */
            class C2G_CreateAddressableRequest implements IC2G_CreateAddressableRequest {

                /**
                 * Constructs a new C2G_CreateAddressableRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateAddressableRequest);

                /**
                 * Creates a new C2G_CreateAddressableRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_CreateAddressableRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_CreateAddressableRequest): Fantasy.Network.Message.C2G_CreateAddressableRequest;

                /**
                 * Encodes the specified C2G_CreateAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_CreateAddressableRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_CreateAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateAddressableRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateAddressableRequest;

                /**
                 * Decodes a C2G_CreateAddressableRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_CreateAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_CreateAddressableRequest;

                /**
                 * Verifies a C2G_CreateAddressableRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_CreateAddressableRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_CreateAddressableRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_CreateAddressableRequest;

                /**
                 * Creates a plain object from a C2G_CreateAddressableRequest message. Also converts values to other types if specified.
                 * @param message C2G_CreateAddressableRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_CreateAddressableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_CreateAddressableRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_CreateAddressableRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_CreateAddressableResponse. */
            interface IG2C_CreateAddressableResponse {
            }

            /** Represents a G2C_CreateAddressableResponse. */
            class G2C_CreateAddressableResponse implements IG2C_CreateAddressableResponse {

                /**
                 * Constructs a new G2C_CreateAddressableResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateAddressableResponse);

                /**
                 * Creates a new G2C_CreateAddressableResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_CreateAddressableResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_CreateAddressableResponse): Fantasy.Network.Message.G2C_CreateAddressableResponse;

                /**
                 * Encodes the specified G2C_CreateAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_CreateAddressableResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_CreateAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateAddressableResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateAddressableResponse;

                /**
                 * Decodes a G2C_CreateAddressableResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_CreateAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_CreateAddressableResponse;

                /**
                 * Verifies a G2C_CreateAddressableResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_CreateAddressableResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_CreateAddressableResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_CreateAddressableResponse;

                /**
                 * Creates a plain object from a G2C_CreateAddressableResponse message. Also converts values to other types if specified.
                 * @param message G2C_CreateAddressableResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_CreateAddressableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_CreateAddressableResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_CreateAddressableResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2M_TestMessage. */
            interface IC2M_TestMessage {

                /** C2M_TestMessage Tag */
                Tag?: (string|null);
            }

            /** Represents a C2M_TestMessage. */
            class C2M_TestMessage implements IC2M_TestMessage {

                /**
                 * Constructs a new C2M_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_TestMessage);

                /** C2M_TestMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2M_TestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2M_TestMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2M_TestMessage): Fantasy.Network.Message.C2M_TestMessage;

                /**
                 * Encodes the specified C2M_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestMessage.verify|verify} messages.
                 * @param message C2M_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2M_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_TestMessage.verify|verify} messages.
                 * @param message C2M_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2M_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_TestMessage;

                /**
                 * Decodes a C2M_TestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2M_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2M_TestMessage;

                /**
                 * Verifies a C2M_TestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2M_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2M_TestMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2M_TestMessage;

                /**
                 * Creates a plain object from a C2M_TestMessage message. Also converts values to other types if specified.
                 * @param message C2M_TestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2M_TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2M_TestMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2M_TestMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2M_TestRequest. */
            interface IC2M_TestRequest {

                /** C2M_TestRequest Tag */
                Tag?: (string|null);
            }

            /** Represents a C2M_TestRequest. */
            class C2M_TestRequest implements IC2M_TestRequest {

                /**
                 * Constructs a new C2M_TestRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_TestRequest);

                /** C2M_TestRequest Tag. */
                public Tag: string;

                /**
                 * Creates a new C2M_TestRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2M_TestRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2M_TestRequest): Fantasy.Network.Message.C2M_TestRequest;

                /**
                 * Encodes the specified C2M_TestRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_TestRequest.verify|verify} messages.
                 * @param message C2M_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2M_TestRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_TestRequest.verify|verify} messages.
                 * @param message C2M_TestRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2M_TestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_TestRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_TestRequest;

                /**
                 * Decodes a C2M_TestRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2M_TestRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2M_TestRequest;

                /**
                 * Verifies a C2M_TestRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2M_TestRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2M_TestRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2M_TestRequest;

                /**
                 * Creates a plain object from a C2M_TestRequest message. Also converts values to other types if specified.
                 * @param message C2M_TestRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2M_TestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2M_TestRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2M_TestRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a M2C_TestResponse. */
            interface IM2C_TestResponse {

                /** M2C_TestResponse Tag */
                Tag?: (string|null);
            }

            /** Represents a M2C_TestResponse. */
            class M2C_TestResponse implements IM2C_TestResponse {

                /**
                 * Constructs a new M2C_TestResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IM2C_TestResponse);

                /** M2C_TestResponse Tag. */
                public Tag: string;

                /**
                 * Creates a new M2C_TestResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns M2C_TestResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IM2C_TestResponse): Fantasy.Network.Message.M2C_TestResponse;

                /**
                 * Encodes the specified M2C_TestResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_TestResponse.verify|verify} messages.
                 * @param message M2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IM2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified M2C_TestResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.M2C_TestResponse.verify|verify} messages.
                 * @param message M2C_TestResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IM2C_TestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a M2C_TestResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns M2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.M2C_TestResponse;

                /**
                 * Decodes a M2C_TestResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns M2C_TestResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.M2C_TestResponse;

                /**
                 * Verifies a M2C_TestResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a M2C_TestResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns M2C_TestResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.M2C_TestResponse;

                /**
                 * Creates a plain object from a M2C_TestResponse message. Also converts values to other types if specified.
                 * @param message M2C_TestResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.M2C_TestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this M2C_TestResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for M2C_TestResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_CreateChatRouteRequest. */
            interface IC2G_CreateChatRouteRequest {
            }

            /** 通知Gate服务器创建一个Chat的Route连接 */
            class C2G_CreateChatRouteRequest implements IC2G_CreateChatRouteRequest {

                /**
                 * Constructs a new C2G_CreateChatRouteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateChatRouteRequest);

                /**
                 * Creates a new C2G_CreateChatRouteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_CreateChatRouteRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_CreateChatRouteRequest): Fantasy.Network.Message.C2G_CreateChatRouteRequest;

                /**
                 * Encodes the specified C2G_CreateChatRouteRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateChatRouteRequest.verify|verify} messages.
                 * @param message C2G_CreateChatRouteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateChatRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_CreateChatRouteRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateChatRouteRequest.verify|verify} messages.
                 * @param message C2G_CreateChatRouteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_CreateChatRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateChatRouteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateChatRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateChatRouteRequest;

                /**
                 * Decodes a C2G_CreateChatRouteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_CreateChatRouteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_CreateChatRouteRequest;

                /**
                 * Verifies a C2G_CreateChatRouteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_CreateChatRouteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_CreateChatRouteRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_CreateChatRouteRequest;

                /**
                 * Creates a plain object from a C2G_CreateChatRouteRequest message. Also converts values to other types if specified.
                 * @param message C2G_CreateChatRouteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_CreateChatRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_CreateChatRouteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_CreateChatRouteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_CreateChatRouteResponse. */
            interface IG2C_CreateChatRouteResponse {
            }

            /** Represents a G2C_CreateChatRouteResponse. */
            class G2C_CreateChatRouteResponse implements IG2C_CreateChatRouteResponse {

                /**
                 * Constructs a new G2C_CreateChatRouteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateChatRouteResponse);

                /**
                 * Creates a new G2C_CreateChatRouteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_CreateChatRouteResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_CreateChatRouteResponse): Fantasy.Network.Message.G2C_CreateChatRouteResponse;

                /**
                 * Encodes the specified G2C_CreateChatRouteResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateChatRouteResponse.verify|verify} messages.
                 * @param message G2C_CreateChatRouteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateChatRouteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_CreateChatRouteResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateChatRouteResponse.verify|verify} messages.
                 * @param message G2C_CreateChatRouteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_CreateChatRouteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateChatRouteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateChatRouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateChatRouteResponse;

                /**
                 * Decodes a G2C_CreateChatRouteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_CreateChatRouteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_CreateChatRouteResponse;

                /**
                 * Verifies a G2C_CreateChatRouteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_CreateChatRouteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_CreateChatRouteResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_CreateChatRouteResponse;

                /**
                 * Creates a plain object from a G2C_CreateChatRouteResponse message. Also converts values to other types if specified.
                 * @param message G2C_CreateChatRouteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_CreateChatRouteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_CreateChatRouteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_CreateChatRouteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestMessage. */
            interface IC2Chat_TestMessage {

                /** C2Chat_TestMessage Tag */
                Tag?: (string|null);
            }

            /** 发送一个Route消息给Chat */
            class C2Chat_TestMessage implements IC2Chat_TestMessage {

                /**
                 * Constructs a new C2Chat_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestMessage);

                /** C2Chat_TestMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Chat_TestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestMessage): Fantasy.Network.Message.C2Chat_TestMessage;

                /**
                 * Encodes the specified C2Chat_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessage.verify|verify} messages.
                 * @param message C2Chat_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessage.verify|verify} messages.
                 * @param message C2Chat_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestMessage;

                /**
                 * Decodes a C2Chat_TestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestMessage;

                /**
                 * Verifies a C2Chat_TestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestMessage;

                /**
                 * Creates a plain object from a C2Chat_TestMessage message. Also converts values to other types if specified.
                 * @param message C2Chat_TestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestMessageRequest. */
            interface IC2Chat_TestMessageRequest {

                /** C2Chat_TestMessageRequest Tag */
                Tag?: (string|null);
            }

            /** 发送一个RPCRoute消息给Chat */
            class C2Chat_TestMessageRequest implements IC2Chat_TestMessageRequest {

                /**
                 * Constructs a new C2Chat_TestMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestMessageRequest);

                /** C2Chat_TestMessageRequest Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Chat_TestMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestMessageRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestMessageRequest): Fantasy.Network.Message.C2Chat_TestMessageRequest;

                /**
                 * Encodes the specified C2Chat_TestMessageRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessageRequest.verify|verify} messages.
                 * @param message C2Chat_TestMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestMessageRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestMessageRequest.verify|verify} messages.
                 * @param message C2Chat_TestMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestMessageRequest;

                /**
                 * Decodes a C2Chat_TestMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestMessageRequest;

                /**
                 * Verifies a C2Chat_TestMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestMessageRequest;

                /**
                 * Creates a plain object from a C2Chat_TestMessageRequest message. Also converts values to other types if specified.
                 * @param message C2Chat_TestMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Chat2C_TestMessageResponse. */
            interface IChat2C_TestMessageResponse {

                /** Chat2C_TestMessageResponse Tag */
                Tag?: (string|null);
            }

            /** Represents a Chat2C_TestMessageResponse. */
            class Chat2C_TestMessageResponse implements IChat2C_TestMessageResponse {

                /**
                 * Constructs a new Chat2C_TestMessageResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_TestMessageResponse);

                /** Chat2C_TestMessageResponse Tag. */
                public Tag: string;

                /**
                 * Creates a new Chat2C_TestMessageResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chat2C_TestMessageResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IChat2C_TestMessageResponse): Fantasy.Network.Message.Chat2C_TestMessageResponse;

                /**
                 * Encodes the specified Chat2C_TestMessageResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestMessageResponse.verify|verify} messages.
                 * @param message Chat2C_TestMessageResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_TestMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chat2C_TestMessageResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestMessageResponse.verify|verify} messages.
                 * @param message Chat2C_TestMessageResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IChat2C_TestMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_TestMessageResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_TestMessageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_TestMessageResponse;

                /**
                 * Decodes a Chat2C_TestMessageResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chat2C_TestMessageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.Chat2C_TestMessageResponse;

                /**
                 * Verifies a Chat2C_TestMessageResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chat2C_TestMessageResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chat2C_TestMessageResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.Chat2C_TestMessageResponse;

                /**
                 * Creates a plain object from a Chat2C_TestMessageResponse message. Also converts values to other types if specified.
                 * @param message Chat2C_TestMessageResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.Chat2C_TestMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chat2C_TestMessageResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Chat2C_TestMessageResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2M_MoveToMapRequest. */
            interface IC2M_MoveToMapRequest {
            }

            /** 发送一个RPC消息给Map，让Map里的Entity转移到另外一个Map上 */
            class C2M_MoveToMapRequest implements IC2M_MoveToMapRequest {

                /**
                 * Constructs a new C2M_MoveToMapRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2M_MoveToMapRequest);

                /**
                 * Creates a new C2M_MoveToMapRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2M_MoveToMapRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2M_MoveToMapRequest): Fantasy.Network.Message.C2M_MoveToMapRequest;

                /**
                 * Encodes the specified C2M_MoveToMapRequest message. Does not implicitly {@link Fantasy.Network.Message.C2M_MoveToMapRequest.verify|verify} messages.
                 * @param message C2M_MoveToMapRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2M_MoveToMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2M_MoveToMapRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2M_MoveToMapRequest.verify|verify} messages.
                 * @param message C2M_MoveToMapRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2M_MoveToMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2M_MoveToMapRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2M_MoveToMapRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2M_MoveToMapRequest;

                /**
                 * Decodes a C2M_MoveToMapRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2M_MoveToMapRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2M_MoveToMapRequest;

                /**
                 * Verifies a C2M_MoveToMapRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2M_MoveToMapRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2M_MoveToMapRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2M_MoveToMapRequest;

                /**
                 * Creates a plain object from a C2M_MoveToMapRequest message. Also converts values to other types if specified.
                 * @param message C2M_MoveToMapRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2M_MoveToMapRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2M_MoveToMapRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2M_MoveToMapRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a M2C_MoveToMapResponse. */
            interface IM2C_MoveToMapResponse {
            }

            /** Represents a M2C_MoveToMapResponse. */
            class M2C_MoveToMapResponse implements IM2C_MoveToMapResponse {

                /**
                 * Constructs a new M2C_MoveToMapResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IM2C_MoveToMapResponse);

                /**
                 * Creates a new M2C_MoveToMapResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns M2C_MoveToMapResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IM2C_MoveToMapResponse): Fantasy.Network.Message.M2C_MoveToMapResponse;

                /**
                 * Encodes the specified M2C_MoveToMapResponse message. Does not implicitly {@link Fantasy.Network.Message.M2C_MoveToMapResponse.verify|verify} messages.
                 * @param message M2C_MoveToMapResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IM2C_MoveToMapResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified M2C_MoveToMapResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.M2C_MoveToMapResponse.verify|verify} messages.
                 * @param message M2C_MoveToMapResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IM2C_MoveToMapResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a M2C_MoveToMapResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns M2C_MoveToMapResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.M2C_MoveToMapResponse;

                /**
                 * Decodes a M2C_MoveToMapResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns M2C_MoveToMapResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.M2C_MoveToMapResponse;

                /**
                 * Verifies a M2C_MoveToMapResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a M2C_MoveToMapResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns M2C_MoveToMapResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.M2C_MoveToMapResponse;

                /**
                 * Creates a plain object from a M2C_MoveToMapResponse message. Also converts values to other types if specified.
                 * @param message M2C_MoveToMapResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.M2C_MoveToMapResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this M2C_MoveToMapResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for M2C_MoveToMapResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_SendAddressableToMap. */
            interface IC2G_SendAddressableToMap {

                /** C2G_SendAddressableToMap Tag */
                Tag?: (string|null);
            }

            /** 发送一个消息给Gate，让Gate发送一个Addressable消息给MAP */
            class C2G_SendAddressableToMap implements IC2G_SendAddressableToMap {

                /**
                 * Constructs a new C2G_SendAddressableToMap.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SendAddressableToMap);

                /** C2G_SendAddressableToMap Tag. */
                public Tag: string;

                /**
                 * Creates a new C2G_SendAddressableToMap instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_SendAddressableToMap instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_SendAddressableToMap): Fantasy.Network.Message.C2G_SendAddressableToMap;

                /**
                 * Encodes the specified C2G_SendAddressableToMap message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendAddressableToMap.verify|verify} messages.
                 * @param message C2G_SendAddressableToMap message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SendAddressableToMap, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_SendAddressableToMap message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SendAddressableToMap.verify|verify} messages.
                 * @param message C2G_SendAddressableToMap message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_SendAddressableToMap, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SendAddressableToMap message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SendAddressableToMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SendAddressableToMap;

                /**
                 * Decodes a C2G_SendAddressableToMap message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_SendAddressableToMap
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_SendAddressableToMap;

                /**
                 * Verifies a C2G_SendAddressableToMap message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_SendAddressableToMap message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_SendAddressableToMap
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_SendAddressableToMap;

                /**
                 * Creates a plain object from a C2G_SendAddressableToMap message. Also converts values to other types if specified.
                 * @param message C2G_SendAddressableToMap
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_SendAddressableToMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_SendAddressableToMap to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_SendAddressableToMap
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestRequestPushMessage. */
            interface IC2Chat_TestRequestPushMessage {
            }

            /** 发送一个消息给Chat，让Chat服务器主动推送一个RouteMessage消息给客户端 */
            class C2Chat_TestRequestPushMessage implements IC2Chat_TestRequestPushMessage {

                /**
                 * Constructs a new C2Chat_TestRequestPushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage);

                /**
                 * Creates a new C2Chat_TestRequestPushMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestRequestPushMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage): Fantasy.Network.Message.C2Chat_TestRequestPushMessage;

                /**
                 * Encodes the specified C2Chat_TestRequestPushMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2Chat_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestRequestPushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRequestPushMessage.verify|verify} messages.
                 * @param message C2Chat_TestRequestPushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestRequestPushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRequestPushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRequestPushMessage;

                /**
                 * Decodes a C2Chat_TestRequestPushMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestRequestPushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestRequestPushMessage;

                /**
                 * Verifies a C2Chat_TestRequestPushMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestRequestPushMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestRequestPushMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestRequestPushMessage;

                /**
                 * Creates a plain object from a C2Chat_TestRequestPushMessage message. Also converts values to other types if specified.
                 * @param message C2Chat_TestRequestPushMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestRequestPushMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestRequestPushMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestRequestPushMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Chat2C_PushMessage. */
            interface IChat2C_PushMessage {

                /** Chat2C_PushMessage Tag */
                Tag?: (string|null);
            }

            /** Chat服务器主动推送一个消息给客户端 */
            class Chat2C_PushMessage implements IChat2C_PushMessage {

                /**
                 * Constructs a new Chat2C_PushMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_PushMessage);

                /** Chat2C_PushMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new Chat2C_PushMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chat2C_PushMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IChat2C_PushMessage): Fantasy.Network.Message.Chat2C_PushMessage;

                /**
                 * Encodes the specified Chat2C_PushMessage message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_PushMessage.verify|verify} messages.
                 * @param message Chat2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chat2C_PushMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_PushMessage.verify|verify} messages.
                 * @param message Chat2C_PushMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IChat2C_PushMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_PushMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_PushMessage;

                /**
                 * Decodes a Chat2C_PushMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chat2C_PushMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.Chat2C_PushMessage;

                /**
                 * Verifies a Chat2C_PushMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chat2C_PushMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chat2C_PushMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.Chat2C_PushMessage;

                /**
                 * Creates a plain object from a Chat2C_PushMessage message. Also converts values to other types if specified.
                 * @param message Chat2C_PushMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.Chat2C_PushMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chat2C_PushMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Chat2C_PushMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_CreateSubSceneRequest. */
            interface IC2G_CreateSubSceneRequest {
            }

            /** 客户端发送给Gate服务器通知map服务器创建一个SubScene */
            class C2G_CreateSubSceneRequest implements IC2G_CreateSubSceneRequest {

                /**
                 * Constructs a new C2G_CreateSubSceneRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneRequest);

                /**
                 * Creates a new C2G_CreateSubSceneRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_CreateSubSceneRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneRequest): Fantasy.Network.Message.C2G_CreateSubSceneRequest;

                /**
                 * Encodes the specified C2G_CreateSubSceneRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateSubSceneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_CreateSubSceneRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_CreateSubSceneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateSubSceneRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateSubSceneRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateSubSceneRequest;

                /**
                 * Decodes a C2G_CreateSubSceneRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_CreateSubSceneRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_CreateSubSceneRequest;

                /**
                 * Verifies a C2G_CreateSubSceneRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_CreateSubSceneRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_CreateSubSceneRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_CreateSubSceneRequest;

                /**
                 * Creates a plain object from a C2G_CreateSubSceneRequest message. Also converts values to other types if specified.
                 * @param message C2G_CreateSubSceneRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_CreateSubSceneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_CreateSubSceneRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_CreateSubSceneRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_CreateSubSceneResponse. */
            interface IG2C_CreateSubSceneResponse {
            }

            /** Represents a G2C_CreateSubSceneResponse. */
            class G2C_CreateSubSceneResponse implements IG2C_CreateSubSceneResponse {

                /**
                 * Constructs a new G2C_CreateSubSceneResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneResponse);

                /**
                 * Creates a new G2C_CreateSubSceneResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_CreateSubSceneResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneResponse): Fantasy.Network.Message.G2C_CreateSubSceneResponse;

                /**
                 * Encodes the specified G2C_CreateSubSceneResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateSubSceneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_CreateSubSceneResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_CreateSubSceneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateSubSceneResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateSubSceneResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateSubSceneResponse;

                /**
                 * Decodes a G2C_CreateSubSceneResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_CreateSubSceneResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_CreateSubSceneResponse;

                /**
                 * Verifies a G2C_CreateSubSceneResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_CreateSubSceneResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_CreateSubSceneResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_CreateSubSceneResponse;

                /**
                 * Creates a plain object from a G2C_CreateSubSceneResponse message. Also converts values to other types if specified.
                 * @param message G2C_CreateSubSceneResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_CreateSubSceneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_CreateSubSceneResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_CreateSubSceneResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_SendToSubSceneMessage. */
            interface IC2G_SendToSubSceneMessage {
            }

            /** 客户端通知Gate服务器给SubScene发送一个消息 */
            class C2G_SendToSubSceneMessage implements IC2G_SendToSubSceneMessage {

                /**
                 * Constructs a new C2G_SendToSubSceneMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SendToSubSceneMessage);

                /**
                 * Creates a new C2G_SendToSubSceneMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_SendToSubSceneMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_SendToSubSceneMessage): Fantasy.Network.Message.C2G_SendToSubSceneMessage;

                /**
                 * Encodes the specified C2G_SendToSubSceneMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_SendToSubSceneMessage.verify|verify} messages.
                 * @param message C2G_SendToSubSceneMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SendToSubSceneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_SendToSubSceneMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SendToSubSceneMessage.verify|verify} messages.
                 * @param message C2G_SendToSubSceneMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_SendToSubSceneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SendToSubSceneMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SendToSubSceneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SendToSubSceneMessage;

                /**
                 * Decodes a C2G_SendToSubSceneMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_SendToSubSceneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_SendToSubSceneMessage;

                /**
                 * Verifies a C2G_SendToSubSceneMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_SendToSubSceneMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_SendToSubSceneMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_SendToSubSceneMessage;

                /**
                 * Creates a plain object from a C2G_SendToSubSceneMessage message. Also converts values to other types if specified.
                 * @param message C2G_SendToSubSceneMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_SendToSubSceneMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_SendToSubSceneMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_SendToSubSceneMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_CreateSubSceneAddressableRequest. */
            interface IC2G_CreateSubSceneAddressableRequest {
            }

            /** 客户端通知Gate服务器创建一个SubScene的Address消息 */
            class C2G_CreateSubSceneAddressableRequest implements IC2G_CreateSubSceneAddressableRequest {

                /**
                 * Constructs a new C2G_CreateSubSceneAddressableRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest);

                /**
                 * Creates a new C2G_CreateSubSceneAddressableRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_CreateSubSceneAddressableRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest): Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest;

                /**
                 * Encodes the specified C2G_CreateSubSceneAddressableRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_CreateSubSceneAddressableRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest.verify|verify} messages.
                 * @param message C2G_CreateSubSceneAddressableRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_CreateSubSceneAddressableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_CreateSubSceneAddressableRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_CreateSubSceneAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest;

                /**
                 * Decodes a C2G_CreateSubSceneAddressableRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_CreateSubSceneAddressableRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest;

                /**
                 * Verifies a C2G_CreateSubSceneAddressableRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_CreateSubSceneAddressableRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_CreateSubSceneAddressableRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest;

                /**
                 * Creates a plain object from a C2G_CreateSubSceneAddressableRequest message. Also converts values to other types if specified.
                 * @param message C2G_CreateSubSceneAddressableRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_CreateSubSceneAddressableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_CreateSubSceneAddressableRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_CreateSubSceneAddressableRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_CreateSubSceneAddressableResponse. */
            interface IG2C_CreateSubSceneAddressableResponse {
            }

            /** Represents a G2C_CreateSubSceneAddressableResponse. */
            class G2C_CreateSubSceneAddressableResponse implements IG2C_CreateSubSceneAddressableResponse {

                /**
                 * Constructs a new G2C_CreateSubSceneAddressableResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse);

                /**
                 * Creates a new G2C_CreateSubSceneAddressableResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_CreateSubSceneAddressableResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse): Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse;

                /**
                 * Encodes the specified G2C_CreateSubSceneAddressableResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_CreateSubSceneAddressableResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse.verify|verify} messages.
                 * @param message G2C_CreateSubSceneAddressableResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_CreateSubSceneAddressableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_CreateSubSceneAddressableResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_CreateSubSceneAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse;

                /**
                 * Decodes a G2C_CreateSubSceneAddressableResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_CreateSubSceneAddressableResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse;

                /**
                 * Verifies a G2C_CreateSubSceneAddressableResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_CreateSubSceneAddressableResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_CreateSubSceneAddressableResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse;

                /**
                 * Creates a plain object from a G2C_CreateSubSceneAddressableResponse message. Also converts values to other types if specified.
                 * @param message G2C_CreateSubSceneAddressableResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_CreateSubSceneAddressableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_CreateSubSceneAddressableResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_CreateSubSceneAddressableResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2SubScene_TestMessage. */
            interface IC2SubScene_TestMessage {

                /** C2SubScene_TestMessage Tag */
                Tag?: (string|null);
            }

            /** 客户端向SubScene发送一个测试消息 */
            class C2SubScene_TestMessage implements IC2SubScene_TestMessage {

                /**
                 * Constructs a new C2SubScene_TestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2SubScene_TestMessage);

                /** C2SubScene_TestMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2SubScene_TestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2SubScene_TestMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2SubScene_TestMessage): Fantasy.Network.Message.C2SubScene_TestMessage;

                /**
                 * Encodes the specified C2SubScene_TestMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestMessage.verify|verify} messages.
                 * @param message C2SubScene_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2SubScene_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2SubScene_TestMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestMessage.verify|verify} messages.
                 * @param message C2SubScene_TestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2SubScene_TestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2SubScene_TestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2SubScene_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2SubScene_TestMessage;

                /**
                 * Decodes a C2SubScene_TestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2SubScene_TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2SubScene_TestMessage;

                /**
                 * Verifies a C2SubScene_TestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2SubScene_TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2SubScene_TestMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2SubScene_TestMessage;

                /**
                 * Creates a plain object from a C2SubScene_TestMessage message. Also converts values to other types if specified.
                 * @param message C2SubScene_TestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2SubScene_TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2SubScene_TestMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2SubScene_TestMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2SubScene_TestDisposeMessage. */
            interface IC2SubScene_TestDisposeMessage {
            }

            /** 客户端向SubScene发送一个销毁测试消息 */
            class C2SubScene_TestDisposeMessage implements IC2SubScene_TestDisposeMessage {

                /**
                 * Constructs a new C2SubScene_TestDisposeMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage);

                /**
                 * Creates a new C2SubScene_TestDisposeMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2SubScene_TestDisposeMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage): Fantasy.Network.Message.C2SubScene_TestDisposeMessage;

                /**
                 * Encodes the specified C2SubScene_TestDisposeMessage message. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestDisposeMessage.verify|verify} messages.
                 * @param message C2SubScene_TestDisposeMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2SubScene_TestDisposeMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2SubScene_TestDisposeMessage.verify|verify} messages.
                 * @param message C2SubScene_TestDisposeMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2SubScene_TestDisposeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2SubScene_TestDisposeMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2SubScene_TestDisposeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2SubScene_TestDisposeMessage;

                /**
                 * Decodes a C2SubScene_TestDisposeMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2SubScene_TestDisposeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2SubScene_TestDisposeMessage;

                /**
                 * Verifies a C2SubScene_TestDisposeMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2SubScene_TestDisposeMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2SubScene_TestDisposeMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2SubScene_TestDisposeMessage;

                /**
                 * Creates a plain object from a C2SubScene_TestDisposeMessage message. Also converts values to other types if specified.
                 * @param message C2SubScene_TestDisposeMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2SubScene_TestDisposeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2SubScene_TestDisposeMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2SubScene_TestDisposeMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_ConnectRoamingRequest. */
            interface IC2G_ConnectRoamingRequest {
            }

            /** 客户端向服务器发送连接消息（Roaming） */
            class C2G_ConnectRoamingRequest implements IC2G_ConnectRoamingRequest {

                /**
                 * Constructs a new C2G_ConnectRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_ConnectRoamingRequest);

                /**
                 * Creates a new C2G_ConnectRoamingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_ConnectRoamingRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_ConnectRoamingRequest): Fantasy.Network.Message.C2G_ConnectRoamingRequest;

                /**
                 * Encodes the specified C2G_ConnectRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_ConnectRoamingRequest.verify|verify} messages.
                 * @param message C2G_ConnectRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_ConnectRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_ConnectRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_ConnectRoamingRequest.verify|verify} messages.
                 * @param message C2G_ConnectRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_ConnectRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_ConnectRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_ConnectRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_ConnectRoamingRequest;

                /**
                 * Decodes a C2G_ConnectRoamingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_ConnectRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_ConnectRoamingRequest;

                /**
                 * Verifies a C2G_ConnectRoamingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_ConnectRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_ConnectRoamingRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_ConnectRoamingRequest;

                /**
                 * Creates a plain object from a C2G_ConnectRoamingRequest message. Also converts values to other types if specified.
                 * @param message C2G_ConnectRoamingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_ConnectRoamingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_ConnectRoamingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_ConnectRoamingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_ConnectRoamingResponse. */
            interface IG2C_ConnectRoamingResponse {
            }

            /** Represents a G2C_ConnectRoamingResponse. */
            class G2C_ConnectRoamingResponse implements IG2C_ConnectRoamingResponse {

                /**
                 * Constructs a new G2C_ConnectRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_ConnectRoamingResponse);

                /**
                 * Creates a new G2C_ConnectRoamingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_ConnectRoamingResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_ConnectRoamingResponse): Fantasy.Network.Message.G2C_ConnectRoamingResponse;

                /**
                 * Encodes the specified G2C_ConnectRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_ConnectRoamingResponse.verify|verify} messages.
                 * @param message G2C_ConnectRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_ConnectRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_ConnectRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_ConnectRoamingResponse.verify|verify} messages.
                 * @param message G2C_ConnectRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_ConnectRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_ConnectRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_ConnectRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_ConnectRoamingResponse;

                /**
                 * Decodes a G2C_ConnectRoamingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_ConnectRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_ConnectRoamingResponse;

                /**
                 * Verifies a G2C_ConnectRoamingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_ConnectRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_ConnectRoamingResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_ConnectRoamingResponse;

                /**
                 * Creates a plain object from a G2C_ConnectRoamingResponse message. Also converts values to other types if specified.
                 * @param message G2C_ConnectRoamingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_ConnectRoamingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_ConnectRoamingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_ConnectRoamingResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestRoamingMessage. */
            interface IC2Chat_TestRoamingMessage {

                /** C2Chat_TestRoamingMessage Tag */
                Tag?: (string|null);
            }

            /** 测试一个Chat漫游普通消息 */
            class C2Chat_TestRoamingMessage implements IC2Chat_TestRoamingMessage {

                /**
                 * Constructs a new C2Chat_TestRoamingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRoamingMessage);

                /** C2Chat_TestRoamingMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Chat_TestRoamingMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestRoamingMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestRoamingMessage): Fantasy.Network.Message.C2Chat_TestRoamingMessage;

                /**
                 * Encodes the specified C2Chat_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Chat_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestRoamingMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Chat_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRoamingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRoamingMessage;

                /**
                 * Decodes a C2Chat_TestRoamingMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestRoamingMessage;

                /**
                 * Verifies a C2Chat_TestRoamingMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestRoamingMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestRoamingMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestRoamingMessage;

                /**
                 * Creates a plain object from a C2Chat_TestRoamingMessage message. Also converts values to other types if specified.
                 * @param message C2Chat_TestRoamingMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestRoamingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestRoamingMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestRoamingMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Map_TestRoamingMessage. */
            interface IC2Map_TestRoamingMessage {

                /** C2Map_TestRoamingMessage Tag */
                Tag?: (string|null);
            }

            /** 测试一个Map漫游普通消息 */
            class C2Map_TestRoamingMessage implements IC2Map_TestRoamingMessage {

                /**
                 * Constructs a new C2Map_TestRoamingMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_TestRoamingMessage);

                /** C2Map_TestRoamingMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Map_TestRoamingMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Map_TestRoamingMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Map_TestRoamingMessage): Fantasy.Network.Message.C2Map_TestRoamingMessage;

                /**
                 * Encodes the specified C2Map_TestRoamingMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Map_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Map_TestRoamingMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestRoamingMessage.verify|verify} messages.
                 * @param message C2Map_TestRoamingMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Map_TestRoamingMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_TestRoamingMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_TestRoamingMessage;

                /**
                 * Decodes a C2Map_TestRoamingMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Map_TestRoamingMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Map_TestRoamingMessage;

                /**
                 * Verifies a C2Map_TestRoamingMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Map_TestRoamingMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Map_TestRoamingMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Map_TestRoamingMessage;

                /**
                 * Creates a plain object from a C2Map_TestRoamingMessage message. Also converts values to other types if specified.
                 * @param message C2Map_TestRoamingMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Map_TestRoamingMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Map_TestRoamingMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Map_TestRoamingMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestRPCRoamingRequest. */
            interface IC2Chat_TestRPCRoamingRequest {

                /** C2Chat_TestRPCRoamingRequest Tag */
                Tag?: (string|null);
            }

            /** 测试一个Chat漫游RPC消息 */
            class C2Chat_TestRPCRoamingRequest implements IC2Chat_TestRPCRoamingRequest {

                /**
                 * Constructs a new C2Chat_TestRPCRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest);

                /** C2Chat_TestRPCRoamingRequest Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Chat_TestRPCRoamingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestRPCRoamingRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest): Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest;

                /**
                 * Encodes the specified C2Chat_TestRPCRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest.verify|verify} messages.
                 * @param message C2Chat_TestRPCRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestRPCRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest.verify|verify} messages.
                 * @param message C2Chat_TestRPCRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestRPCRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestRPCRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestRPCRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest;

                /**
                 * Decodes a C2Chat_TestRPCRoamingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestRPCRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest;

                /**
                 * Verifies a C2Chat_TestRPCRoamingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestRPCRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestRPCRoamingRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest;

                /**
                 * Creates a plain object from a C2Chat_TestRPCRoamingRequest message. Also converts values to other types if specified.
                 * @param message C2Chat_TestRPCRoamingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestRPCRoamingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestRPCRoamingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestRPCRoamingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Chat2C_TestRPCRoamingResponse. */
            interface IChat2C_TestRPCRoamingResponse {
            }

            /** Represents a Chat2C_TestRPCRoamingResponse. */
            class Chat2C_TestRPCRoamingResponse implements IChat2C_TestRPCRoamingResponse {

                /**
                 * Constructs a new Chat2C_TestRPCRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse);

                /**
                 * Creates a new Chat2C_TestRPCRoamingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chat2C_TestRPCRoamingResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse): Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse;

                /**
                 * Encodes the specified Chat2C_TestRPCRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse.verify|verify} messages.
                 * @param message Chat2C_TestRPCRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chat2C_TestRPCRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse.verify|verify} messages.
                 * @param message Chat2C_TestRPCRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IChat2C_TestRPCRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chat2C_TestRPCRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chat2C_TestRPCRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse;

                /**
                 * Decodes a Chat2C_TestRPCRoamingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chat2C_TestRPCRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse;

                /**
                 * Verifies a Chat2C_TestRPCRoamingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chat2C_TestRPCRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chat2C_TestRPCRoamingResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse;

                /**
                 * Creates a plain object from a Chat2C_TestRPCRoamingResponse message. Also converts values to other types if specified.
                 * @param message Chat2C_TestRPCRoamingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.Chat2C_TestRPCRoamingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chat2C_TestRPCRoamingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Chat2C_TestRPCRoamingResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Map_PushMessageToClient. */
            interface IC2Map_PushMessageToClient {

                /** C2Map_PushMessageToClient Tag */
                Tag?: (string|null);
            }

            /** 客户端发送一个漫游消息给Map通知Map主动推送一个消息给客户端 */
            class C2Map_PushMessageToClient implements IC2Map_PushMessageToClient {

                /**
                 * Constructs a new C2Map_PushMessageToClient.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_PushMessageToClient);

                /** C2Map_PushMessageToClient Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Map_PushMessageToClient instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Map_PushMessageToClient instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Map_PushMessageToClient): Fantasy.Network.Message.C2Map_PushMessageToClient;

                /**
                 * Encodes the specified C2Map_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.C2Map_PushMessageToClient.verify|verify} messages.
                 * @param message C2Map_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Map_PushMessageToClient message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_PushMessageToClient.verify|verify} messages.
                 * @param message C2Map_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Map_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_PushMessageToClient message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_PushMessageToClient;

                /**
                 * Decodes a C2Map_PushMessageToClient message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Map_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Map_PushMessageToClient;

                /**
                 * Verifies a C2Map_PushMessageToClient message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Map_PushMessageToClient message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Map_PushMessageToClient
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Map_PushMessageToClient;

                /**
                 * Creates a plain object from a C2Map_PushMessageToClient message. Also converts values to other types if specified.
                 * @param message C2Map_PushMessageToClient
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Map_PushMessageToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Map_PushMessageToClient to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Map_PushMessageToClient
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Map2C_PushMessageToClient. */
            interface IMap2C_PushMessageToClient {

                /** Map2C_PushMessageToClient Tag */
                Tag?: (string|null);
            }

            /** 漫游端发送一个消息给客户端 */
            class Map2C_PushMessageToClient implements IMap2C_PushMessageToClient {

                /**
                 * Constructs a new Map2C_PushMessageToClient.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IMap2C_PushMessageToClient);

                /** Map2C_PushMessageToClient Tag. */
                public Tag: string;

                /**
                 * Creates a new Map2C_PushMessageToClient instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Map2C_PushMessageToClient instance
                 */
                public static create(properties?: Fantasy.Network.Message.IMap2C_PushMessageToClient): Fantasy.Network.Message.Map2C_PushMessageToClient;

                /**
                 * Encodes the specified Map2C_PushMessageToClient message. Does not implicitly {@link Fantasy.Network.Message.Map2C_PushMessageToClient.verify|verify} messages.
                 * @param message Map2C_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IMap2C_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Map2C_PushMessageToClient message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Map2C_PushMessageToClient.verify|verify} messages.
                 * @param message Map2C_PushMessageToClient message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IMap2C_PushMessageToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Map2C_PushMessageToClient message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Map2C_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Map2C_PushMessageToClient;

                /**
                 * Decodes a Map2C_PushMessageToClient message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Map2C_PushMessageToClient
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.Map2C_PushMessageToClient;

                /**
                 * Verifies a Map2C_PushMessageToClient message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Map2C_PushMessageToClient message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Map2C_PushMessageToClient
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.Map2C_PushMessageToClient;

                /**
                 * Creates a plain object from a Map2C_PushMessageToClient message. Also converts values to other types if specified.
                 * @param message Map2C_PushMessageToClient
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.Map2C_PushMessageToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Map2C_PushMessageToClient to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Map2C_PushMessageToClient
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Map_TestTransferRequest. */
            interface IC2Map_TestTransferRequest {
            }

            /** 测试传送漫游的触发协议 */
            class C2Map_TestTransferRequest implements IC2Map_TestTransferRequest {

                /**
                 * Constructs a new C2Map_TestTransferRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Map_TestTransferRequest);

                /**
                 * Creates a new C2Map_TestTransferRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Map_TestTransferRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Map_TestTransferRequest): Fantasy.Network.Message.C2Map_TestTransferRequest;

                /**
                 * Encodes the specified C2Map_TestTransferRequest message. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestTransferRequest.verify|verify} messages.
                 * @param message C2Map_TestTransferRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Map_TestTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Map_TestTransferRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Map_TestTransferRequest.verify|verify} messages.
                 * @param message C2Map_TestTransferRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Map_TestTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Map_TestTransferRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Map_TestTransferRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Map_TestTransferRequest;

                /**
                 * Decodes a C2Map_TestTransferRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Map_TestTransferRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Map_TestTransferRequest;

                /**
                 * Verifies a C2Map_TestTransferRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Map_TestTransferRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Map_TestTransferRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Map_TestTransferRequest;

                /**
                 * Creates a plain object from a C2Map_TestTransferRequest message. Also converts values to other types if specified.
                 * @param message C2Map_TestTransferRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Map_TestTransferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Map_TestTransferRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Map_TestTransferRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Map2C_TestTransferResponse. */
            interface IMap2C_TestTransferResponse {
            }

            /** Represents a Map2C_TestTransferResponse. */
            class Map2C_TestTransferResponse implements IMap2C_TestTransferResponse {

                /**
                 * Constructs a new Map2C_TestTransferResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IMap2C_TestTransferResponse);

                /**
                 * Creates a new Map2C_TestTransferResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Map2C_TestTransferResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IMap2C_TestTransferResponse): Fantasy.Network.Message.Map2C_TestTransferResponse;

                /**
                 * Encodes the specified Map2C_TestTransferResponse message. Does not implicitly {@link Fantasy.Network.Message.Map2C_TestTransferResponse.verify|verify} messages.
                 * @param message Map2C_TestTransferResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IMap2C_TestTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Map2C_TestTransferResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.Map2C_TestTransferResponse.verify|verify} messages.
                 * @param message Map2C_TestTransferResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IMap2C_TestTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Map2C_TestTransferResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Map2C_TestTransferResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.Map2C_TestTransferResponse;

                /**
                 * Decodes a Map2C_TestTransferResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Map2C_TestTransferResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.Map2C_TestTransferResponse;

                /**
                 * Verifies a Map2C_TestTransferResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Map2C_TestTransferResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Map2C_TestTransferResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.Map2C_TestTransferResponse;

                /**
                 * Creates a plain object from a Map2C_TestTransferResponse message. Also converts values to other types if specified.
                 * @param message Map2C_TestTransferResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.Map2C_TestTransferResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Map2C_TestTransferResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Map2C_TestTransferResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2Chat_TestSendMapMessage. */
            interface IC2Chat_TestSendMapMessage {

                /** C2Chat_TestSendMapMessage Tag */
                Tag?: (string|null);
            }

            /** 测试一个Chat发送到Map之间漫游协议 */
            class C2Chat_TestSendMapMessage implements IC2Chat_TestSendMapMessage {

                /**
                 * Constructs a new C2Chat_TestSendMapMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2Chat_TestSendMapMessage);

                /** C2Chat_TestSendMapMessage Tag. */
                public Tag: string;

                /**
                 * Creates a new C2Chat_TestSendMapMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2Chat_TestSendMapMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2Chat_TestSendMapMessage): Fantasy.Network.Message.C2Chat_TestSendMapMessage;

                /**
                 * Encodes the specified C2Chat_TestSendMapMessage message. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestSendMapMessage.verify|verify} messages.
                 * @param message C2Chat_TestSendMapMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2Chat_TestSendMapMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2Chat_TestSendMapMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2Chat_TestSendMapMessage.verify|verify} messages.
                 * @param message C2Chat_TestSendMapMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2Chat_TestSendMapMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2Chat_TestSendMapMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2Chat_TestSendMapMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2Chat_TestSendMapMessage;

                /**
                 * Decodes a C2Chat_TestSendMapMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2Chat_TestSendMapMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2Chat_TestSendMapMessage;

                /**
                 * Verifies a C2Chat_TestSendMapMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2Chat_TestSendMapMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2Chat_TestSendMapMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2Chat_TestSendMapMessage;

                /**
                 * Creates a plain object from a C2Chat_TestSendMapMessage message. Also converts values to other types if specified.
                 * @param message C2Chat_TestSendMapMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2Chat_TestSendMapMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2Chat_TestSendMapMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2Chat_TestSendMapMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestRouteToRoaming. */
            interface IC2G_TestRouteToRoaming {

                /** C2G_TestRouteToRoaming Tag */
                Tag?: (string|null);
            }

            /** 通知Gate服务器发送一个Route消息给Map的漫游终端 */
            class C2G_TestRouteToRoaming implements IC2G_TestRouteToRoaming {

                /**
                 * Constructs a new C2G_TestRouteToRoaming.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRouteToRoaming);

                /** C2G_TestRouteToRoaming Tag. */
                public Tag: string;

                /**
                 * Creates a new C2G_TestRouteToRoaming instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestRouteToRoaming instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestRouteToRoaming): Fantasy.Network.Message.C2G_TestRouteToRoaming;

                /**
                 * Encodes the specified C2G_TestRouteToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRouteToRoaming.verify|verify} messages.
                 * @param message C2G_TestRouteToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRouteToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestRouteToRoaming message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRouteToRoaming.verify|verify} messages.
                 * @param message C2G_TestRouteToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestRouteToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRouteToRoaming message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRouteToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRouteToRoaming;

                /**
                 * Decodes a C2G_TestRouteToRoaming message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestRouteToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestRouteToRoaming;

                /**
                 * Verifies a C2G_TestRouteToRoaming message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestRouteToRoaming message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestRouteToRoaming
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestRouteToRoaming;

                /**
                 * Creates a plain object from a C2G_TestRouteToRoaming message. Also converts values to other types if specified.
                 * @param message C2G_TestRouteToRoaming
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestRouteToRoaming, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestRouteToRoaming to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestRouteToRoaming
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestRoamingToRoaming. */
            interface IC2G_TestRoamingToRoaming {

                /** C2G_TestRoamingToRoaming Tag */
                Tag?: (string|null);
            }

            /** 通知Gate服务器发送一个漫游消息给Map的漫游终端 */
            class C2G_TestRoamingToRoaming implements IC2G_TestRoamingToRoaming {

                /**
                 * Constructs a new C2G_TestRoamingToRoaming.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestRoamingToRoaming);

                /** C2G_TestRoamingToRoaming Tag. */
                public Tag: string;

                /**
                 * Creates a new C2G_TestRoamingToRoaming instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestRoamingToRoaming instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestRoamingToRoaming): Fantasy.Network.Message.C2G_TestRoamingToRoaming;

                /**
                 * Encodes the specified C2G_TestRoamingToRoaming message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRoamingToRoaming.verify|verify} messages.
                 * @param message C2G_TestRoamingToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestRoamingToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestRoamingToRoaming message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestRoamingToRoaming.verify|verify} messages.
                 * @param message C2G_TestRoamingToRoaming message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestRoamingToRoaming, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestRoamingToRoaming message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestRoamingToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestRoamingToRoaming;

                /**
                 * Decodes a C2G_TestRoamingToRoaming message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestRoamingToRoaming
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestRoamingToRoaming;

                /**
                 * Verifies a C2G_TestRoamingToRoaming message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestRoamingToRoaming message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestRoamingToRoaming
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestRoamingToRoaming;

                /**
                 * Creates a plain object from a C2G_TestRoamingToRoaming message. Also converts values to other types if specified.
                 * @param message C2G_TestRoamingToRoaming
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestRoamingToRoaming, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestRoamingToRoaming to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestRoamingToRoaming
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_LoginRoamingRequest. */
            interface IC2G_LoginRoamingRequest {
            }

            /** 客户端向服务器发送登录连接消息（Roaming） */
            class C2G_LoginRoamingRequest implements IC2G_LoginRoamingRequest {

                /**
                 * Constructs a new C2G_LoginRoamingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_LoginRoamingRequest);

                /**
                 * Creates a new C2G_LoginRoamingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_LoginRoamingRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_LoginRoamingRequest): Fantasy.Network.Message.C2G_LoginRoamingRequest;

                /**
                 * Encodes the specified C2G_LoginRoamingRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_LoginRoamingRequest.verify|verify} messages.
                 * @param message C2G_LoginRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_LoginRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_LoginRoamingRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_LoginRoamingRequest.verify|verify} messages.
                 * @param message C2G_LoginRoamingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_LoginRoamingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_LoginRoamingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_LoginRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_LoginRoamingRequest;

                /**
                 * Decodes a C2G_LoginRoamingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_LoginRoamingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_LoginRoamingRequest;

                /**
                 * Verifies a C2G_LoginRoamingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_LoginRoamingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_LoginRoamingRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_LoginRoamingRequest;

                /**
                 * Creates a plain object from a C2G_LoginRoamingRequest message. Also converts values to other types if specified.
                 * @param message C2G_LoginRoamingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_LoginRoamingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_LoginRoamingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_LoginRoamingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_LoginRoamingResponse. */
            interface IG2C_LoginRoamingResponse {
            }

            /** Represents a G2C_LoginRoamingResponse. */
            class G2C_LoginRoamingResponse implements IG2C_LoginRoamingResponse {

                /**
                 * Constructs a new G2C_LoginRoamingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_LoginRoamingResponse);

                /**
                 * Creates a new G2C_LoginRoamingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_LoginRoamingResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_LoginRoamingResponse): Fantasy.Network.Message.G2C_LoginRoamingResponse;

                /**
                 * Encodes the specified G2C_LoginRoamingResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_LoginRoamingResponse.verify|verify} messages.
                 * @param message G2C_LoginRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_LoginRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_LoginRoamingResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_LoginRoamingResponse.verify|verify} messages.
                 * @param message G2C_LoginRoamingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_LoginRoamingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_LoginRoamingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_LoginRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_LoginRoamingResponse;

                /**
                 * Decodes a G2C_LoginRoamingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_LoginRoamingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_LoginRoamingResponse;

                /**
                 * Verifies a G2C_LoginRoamingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_LoginRoamingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_LoginRoamingResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_LoginRoamingResponse;

                /**
                 * Creates a plain object from a G2C_LoginRoamingResponse message. Also converts values to other types if specified.
                 * @param message G2C_LoginRoamingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_LoginRoamingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_LoginRoamingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_LoginRoamingResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_SubscribeSphereEventRequest. */
            interface IC2G_SubscribeSphereEventRequest {
            }

            /** 通知Gate服务器发送一个内网消息通知Map服务器向Gate服务器注册一个领域事件 */
            class C2G_SubscribeSphereEventRequest implements IC2G_SubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_SubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest);

                /**
                 * Creates a new C2G_SubscribeSphereEventRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_SubscribeSphereEventRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest): Fantasy.Network.Message.C2G_SubscribeSphereEventRequest;

                /**
                 * Encodes the specified C2G_SubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_SubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_SubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_SubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_SubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_SubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_SubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_SubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_SubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_SubscribeSphereEventRequest;

                /**
                 * Decodes a C2G_SubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_SubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_SubscribeSphereEventRequest;

                /**
                 * Verifies a C2G_SubscribeSphereEventRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_SubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_SubscribeSphereEventRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_SubscribeSphereEventRequest;

                /**
                 * Creates a plain object from a C2G_SubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @param message C2G_SubscribeSphereEventRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_SubscribeSphereEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_SubscribeSphereEventRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_SubscribeSphereEventRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_SubscribeSphereEventResponse. */
            interface IG2C_SubscribeSphereEventResponse {
            }

            /** Represents a G2C_SubscribeSphereEventResponse. */
            class G2C_SubscribeSphereEventResponse implements IG2C_SubscribeSphereEventResponse {

                /**
                 * Constructs a new G2C_SubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse);

                /**
                 * Creates a new G2C_SubscribeSphereEventResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_SubscribeSphereEventResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse): Fantasy.Network.Message.G2C_SubscribeSphereEventResponse;

                /**
                 * Encodes the specified G2C_SubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_SubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_SubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_SubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_SubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_SubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_SubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_SubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_SubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_SubscribeSphereEventResponse;

                /**
                 * Decodes a G2C_SubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_SubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_SubscribeSphereEventResponse;

                /**
                 * Verifies a G2C_SubscribeSphereEventResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_SubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_SubscribeSphereEventResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_SubscribeSphereEventResponse;

                /**
                 * Creates a plain object from a G2C_SubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @param message G2C_SubscribeSphereEventResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_SubscribeSphereEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_SubscribeSphereEventResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_SubscribeSphereEventResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_PublishSphereEventRequest. */
            interface IC2G_PublishSphereEventRequest {
            }

            /** 通知Gate发送一个订阅领域事件 */
            class C2G_PublishSphereEventRequest implements IC2G_PublishSphereEventRequest {

                /**
                 * Constructs a new C2G_PublishSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_PublishSphereEventRequest);

                /**
                 * Creates a new C2G_PublishSphereEventRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_PublishSphereEventRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_PublishSphereEventRequest): Fantasy.Network.Message.C2G_PublishSphereEventRequest;

                /**
                 * Encodes the specified C2G_PublishSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_PublishSphereEventRequest.verify|verify} messages.
                 * @param message C2G_PublishSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_PublishSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_PublishSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_PublishSphereEventRequest.verify|verify} messages.
                 * @param message C2G_PublishSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_PublishSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_PublishSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_PublishSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_PublishSphereEventRequest;

                /**
                 * Decodes a C2G_PublishSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_PublishSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_PublishSphereEventRequest;

                /**
                 * Verifies a C2G_PublishSphereEventRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_PublishSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_PublishSphereEventRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_PublishSphereEventRequest;

                /**
                 * Creates a plain object from a C2G_PublishSphereEventRequest message. Also converts values to other types if specified.
                 * @param message C2G_PublishSphereEventRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_PublishSphereEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_PublishSphereEventRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_PublishSphereEventRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_PublishSphereEventResponse. */
            interface IG2C_PublishSphereEventResponse {
            }

            /** Represents a G2C_PublishSphereEventResponse. */
            class G2C_PublishSphereEventResponse implements IG2C_PublishSphereEventResponse {

                /**
                 * Constructs a new G2C_PublishSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_PublishSphereEventResponse);

                /**
                 * Creates a new G2C_PublishSphereEventResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_PublishSphereEventResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_PublishSphereEventResponse): Fantasy.Network.Message.G2C_PublishSphereEventResponse;

                /**
                 * Encodes the specified G2C_PublishSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_PublishSphereEventResponse.verify|verify} messages.
                 * @param message G2C_PublishSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_PublishSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_PublishSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_PublishSphereEventResponse.verify|verify} messages.
                 * @param message G2C_PublishSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_PublishSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_PublishSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_PublishSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_PublishSphereEventResponse;

                /**
                 * Decodes a G2C_PublishSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_PublishSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_PublishSphereEventResponse;

                /**
                 * Verifies a G2C_PublishSphereEventResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_PublishSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_PublishSphereEventResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_PublishSphereEventResponse;

                /**
                 * Creates a plain object from a G2C_PublishSphereEventResponse message. Also converts values to other types if specified.
                 * @param message G2C_PublishSphereEventResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_PublishSphereEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_PublishSphereEventResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_PublishSphereEventResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_UnsubscribeSphereEventRequest. */
            interface IC2G_UnsubscribeSphereEventRequest {
            }

            /** 通知Gate取消一个订阅领域事件 */
            class C2G_UnsubscribeSphereEventRequest implements IC2G_UnsubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_UnsubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest);

                /**
                 * Creates a new C2G_UnsubscribeSphereEventRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_UnsubscribeSphereEventRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest): Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest;

                /**
                 * Encodes the specified C2G_UnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_UnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_UnsubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_UnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_UnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_UnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_UnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest;

                /**
                 * Decodes a C2G_UnsubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_UnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest;

                /**
                 * Verifies a C2G_UnsubscribeSphereEventRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_UnsubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_UnsubscribeSphereEventRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest;

                /**
                 * Creates a plain object from a C2G_UnsubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @param message C2G_UnsubscribeSphereEventRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_UnsubscribeSphereEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_UnsubscribeSphereEventRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_UnsubscribeSphereEventRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_UnsubscribeSphereEventResponse. */
            interface IG2C_UnsubscribeSphereEventResponse {
            }

            /** Represents a G2C_UnsubscribeSphereEventResponse. */
            class G2C_UnsubscribeSphereEventResponse implements IG2C_UnsubscribeSphereEventResponse {

                /**
                 * Constructs a new G2C_UnsubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse);

                /**
                 * Creates a new G2C_UnsubscribeSphereEventResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_UnsubscribeSphereEventResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse): Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse;

                /**
                 * Encodes the specified G2C_UnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_UnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_UnsubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_UnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_UnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_UnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_UnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse;

                /**
                 * Decodes a G2C_UnsubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_UnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse;

                /**
                 * Verifies a G2C_UnsubscribeSphereEventResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_UnsubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_UnsubscribeSphereEventResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse;

                /**
                 * Creates a plain object from a G2C_UnsubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @param message G2C_UnsubscribeSphereEventResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_UnsubscribeSphereEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_UnsubscribeSphereEventResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_UnsubscribeSphereEventResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_MapUnsubscribeSphereEventRequest. */
            interface IC2G_MapUnsubscribeSphereEventRequest {
            }

            /** 通知Map取消一个订阅领域事件 */
            class C2G_MapUnsubscribeSphereEventRequest implements IC2G_MapUnsubscribeSphereEventRequest {

                /**
                 * Constructs a new C2G_MapUnsubscribeSphereEventRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest);

                /**
                 * Creates a new C2G_MapUnsubscribeSphereEventRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_MapUnsubscribeSphereEventRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest): Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest;

                /**
                 * Encodes the specified C2G_MapUnsubscribeSphereEventRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_MapUnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_MapUnsubscribeSphereEventRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest.verify|verify} messages.
                 * @param message C2G_MapUnsubscribeSphereEventRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_MapUnsubscribeSphereEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_MapUnsubscribeSphereEventRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_MapUnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest;

                /**
                 * Decodes a C2G_MapUnsubscribeSphereEventRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_MapUnsubscribeSphereEventRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest;

                /**
                 * Verifies a C2G_MapUnsubscribeSphereEventRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_MapUnsubscribeSphereEventRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_MapUnsubscribeSphereEventRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest;

                /**
                 * Creates a plain object from a C2G_MapUnsubscribeSphereEventRequest message. Also converts values to other types if specified.
                 * @param message C2G_MapUnsubscribeSphereEventRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_MapUnsubscribeSphereEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_MapUnsubscribeSphereEventRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_MapUnsubscribeSphereEventRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_MapUnsubscribeSphereEventResponse. */
            interface IG2C_MapUnsubscribeSphereEventResponse {
            }

            /** Represents a G2C_MapUnsubscribeSphereEventResponse. */
            class G2C_MapUnsubscribeSphereEventResponse implements IG2C_MapUnsubscribeSphereEventResponse {

                /**
                 * Constructs a new G2C_MapUnsubscribeSphereEventResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse);

                /**
                 * Creates a new G2C_MapUnsubscribeSphereEventResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_MapUnsubscribeSphereEventResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse): Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse;

                /**
                 * Encodes the specified G2C_MapUnsubscribeSphereEventResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_MapUnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_MapUnsubscribeSphereEventResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse.verify|verify} messages.
                 * @param message G2C_MapUnsubscribeSphereEventResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_MapUnsubscribeSphereEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_MapUnsubscribeSphereEventResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_MapUnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse;

                /**
                 * Decodes a G2C_MapUnsubscribeSphereEventResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_MapUnsubscribeSphereEventResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse;

                /**
                 * Verifies a G2C_MapUnsubscribeSphereEventResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_MapUnsubscribeSphereEventResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_MapUnsubscribeSphereEventResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse;

                /**
                 * Creates a plain object from a G2C_MapUnsubscribeSphereEventResponse message. Also converts values to other types if specified.
                 * @param message G2C_MapUnsubscribeSphereEventResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_MapUnsubscribeSphereEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_MapUnsubscribeSphereEventResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_MapUnsubscribeSphereEventResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ChatInfoData. */
            interface IChatInfoData {

                /** ChatInfoData Data */
                Data?: (Uint8Array|null);
            }

            /** Represents a ChatInfoData. */
            class ChatInfoData implements IChatInfoData {

                /**
                 * Constructs a new ChatInfoData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IChatInfoData);

                /** ChatInfoData Data. */
                public Data: Uint8Array;

                /**
                 * Creates a new ChatInfoData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChatInfoData instance
                 */
                public static create(properties?: Fantasy.Network.Message.IChatInfoData): Fantasy.Network.Message.ChatInfoData;

                /**
                 * Encodes the specified ChatInfoData message. Does not implicitly {@link Fantasy.Network.Message.ChatInfoData.verify|verify} messages.
                 * @param message ChatInfoData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IChatInfoData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChatInfoData message, length delimited. Does not implicitly {@link Fantasy.Network.Message.ChatInfoData.verify|verify} messages.
                 * @param message ChatInfoData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IChatInfoData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChatInfoData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChatInfoData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.ChatInfoData;

                /**
                 * Decodes a ChatInfoData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChatInfoData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.ChatInfoData;

                /**
                 * Verifies a ChatInfoData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChatInfoData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChatInfoData
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.ChatInfoData;

                /**
                 * Creates a plain object from a ChatInfoData message. Also converts values to other types if specified.
                 * @param message ChatInfoData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.ChatInfoData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChatInfoData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChatInfoData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestMemoryPackInfo. */
            interface ITestMemoryPackInfo {

                /** TestMemoryPackInfo A */
                A?: (string|null);
            }

            /** Represents a TestMemoryPackInfo. */
            class TestMemoryPackInfo implements ITestMemoryPackInfo {

                /**
                 * Constructs a new TestMemoryPackInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.ITestMemoryPackInfo);

                /** TestMemoryPackInfo A. */
                public A: string;

                /**
                 * Creates a new TestMemoryPackInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestMemoryPackInfo instance
                 */
                public static create(properties?: Fantasy.Network.Message.ITestMemoryPackInfo): Fantasy.Network.Message.TestMemoryPackInfo;

                /**
                 * Encodes the specified TestMemoryPackInfo message. Does not implicitly {@link Fantasy.Network.Message.TestMemoryPackInfo.verify|verify} messages.
                 * @param message TestMemoryPackInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.ITestMemoryPackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestMemoryPackInfo message, length delimited. Does not implicitly {@link Fantasy.Network.Message.TestMemoryPackInfo.verify|verify} messages.
                 * @param message TestMemoryPackInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.ITestMemoryPackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestMemoryPackInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestMemoryPackInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.TestMemoryPackInfo;

                /**
                 * Decodes a TestMemoryPackInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestMemoryPackInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.TestMemoryPackInfo;

                /**
                 * Verifies a TestMemoryPackInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestMemoryPackInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestMemoryPackInfo
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.TestMemoryPackInfo;

                /**
                 * Creates a plain object from a TestMemoryPackInfo message. Also converts values to other types if specified.
                 * @param message TestMemoryPackInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.TestMemoryPackInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestMemoryPackInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestMemoryPackInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a C2G_TestMemoryPackRequest. */
            interface IC2G_TestMemoryPackRequest {
            }

            /** Represents a C2G_TestMemoryPackRequest. */
            class C2G_TestMemoryPackRequest implements IC2G_TestMemoryPackRequest {

                /**
                 * Constructs a new C2G_TestMemoryPackRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestMemoryPackRequest);

                /**
                 * Creates a new C2G_TestMemoryPackRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestMemoryPackRequest instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestMemoryPackRequest): Fantasy.Network.Message.C2G_TestMemoryPackRequest;

                /**
                 * Encodes the specified C2G_TestMemoryPackRequest message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMemoryPackRequest.verify|verify} messages.
                 * @param message C2G_TestMemoryPackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestMemoryPackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestMemoryPackRequest message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestMemoryPackRequest.verify|verify} messages.
                 * @param message C2G_TestMemoryPackRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestMemoryPackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestMemoryPackRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestMemoryPackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestMemoryPackRequest;

                /**
                 * Decodes a C2G_TestMemoryPackRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestMemoryPackRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestMemoryPackRequest;

                /**
                 * Verifies a C2G_TestMemoryPackRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestMemoryPackRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestMemoryPackRequest
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestMemoryPackRequest;

                /**
                 * Creates a plain object from a C2G_TestMemoryPackRequest message. Also converts values to other types if specified.
                 * @param message C2G_TestMemoryPackRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestMemoryPackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestMemoryPackRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestMemoryPackRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a G2C_TestMemoryPackResponse. */
            interface IG2C_TestMemoryPackResponse {

                /** G2C_TestMemoryPackResponse Info */
                Info?: (Fantasy.Network.Message.ITestMemoryPackInfo|null);
            }

            /** Represents a G2C_TestMemoryPackResponse. */
            class G2C_TestMemoryPackResponse implements IG2C_TestMemoryPackResponse {

                /**
                 * Constructs a new G2C_TestMemoryPackResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IG2C_TestMemoryPackResponse);

                /** G2C_TestMemoryPackResponse Info. */
                public Info?: (Fantasy.Network.Message.ITestMemoryPackInfo|null);

                /**
                 * Creates a new G2C_TestMemoryPackResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2C_TestMemoryPackResponse instance
                 */
                public static create(properties?: Fantasy.Network.Message.IG2C_TestMemoryPackResponse): Fantasy.Network.Message.G2C_TestMemoryPackResponse;

                /**
                 * Encodes the specified G2C_TestMemoryPackResponse message. Does not implicitly {@link Fantasy.Network.Message.G2C_TestMemoryPackResponse.verify|verify} messages.
                 * @param message G2C_TestMemoryPackResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IG2C_TestMemoryPackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified G2C_TestMemoryPackResponse message, length delimited. Does not implicitly {@link Fantasy.Network.Message.G2C_TestMemoryPackResponse.verify|verify} messages.
                 * @param message G2C_TestMemoryPackResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IG2C_TestMemoryPackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a G2C_TestMemoryPackResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2C_TestMemoryPackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.G2C_TestMemoryPackResponse;

                /**
                 * Decodes a G2C_TestMemoryPackResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2C_TestMemoryPackResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.G2C_TestMemoryPackResponse;

                /**
                 * Verifies a G2C_TestMemoryPackResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2C_TestMemoryPackResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2C_TestMemoryPackResponse
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.G2C_TestMemoryPackResponse;

                /**
                 * Creates a plain object from a G2C_TestMemoryPackResponse message. Also converts values to other types if specified.
                 * @param message G2C_TestMemoryPackResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.G2C_TestMemoryPackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2C_TestMemoryPackResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for G2C_TestMemoryPackResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** 错误码枚举 */
            enum ErrorCodeEnum {
                Success = 0,
                Failed = 1,
                UnknownError = 2,
                InvalidParameter = 100,
                PermissionDenied = 101
            }

            /** 玩家状态 */
            enum PlayerState {
                Offline = 0,
                Online = 1,
                Busy = 2,
                Away = 3
            }

            /** Properties of a C2G_TestEnumMessage. */
            interface IC2G_TestEnumMessage {

                /** 错误码 */
                Code?: (Fantasy.Network.Message.ErrorCodeEnum|null);

                /** 消息内容 */
                Message?: (string|null);

                /** 玩家状态 */
                State?: (Fantasy.Network.Message.PlayerState|null);
            }

            /** 测试使用ErrorCode枚举的消息 */
            class C2G_TestEnumMessage implements IC2G_TestEnumMessage {

                /**
                 * Constructs a new C2G_TestEnumMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Fantasy.Network.Message.IC2G_TestEnumMessage);

                /** 错误码 */
                public Code: Fantasy.Network.Message.ErrorCodeEnum;

                /** 消息内容 */
                public Message: string;

                /** 玩家状态 */
                public State: Fantasy.Network.Message.PlayerState;

                /**
                 * Creates a new C2G_TestEnumMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns C2G_TestEnumMessage instance
                 */
                public static create(properties?: Fantasy.Network.Message.IC2G_TestEnumMessage): Fantasy.Network.Message.C2G_TestEnumMessage;

                /**
                 * Encodes the specified C2G_TestEnumMessage message. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEnumMessage.verify|verify} messages.
                 * @param message C2G_TestEnumMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Fantasy.Network.Message.IC2G_TestEnumMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified C2G_TestEnumMessage message, length delimited. Does not implicitly {@link Fantasy.Network.Message.C2G_TestEnumMessage.verify|verify} messages.
                 * @param message C2G_TestEnumMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Fantasy.Network.Message.IC2G_TestEnumMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a C2G_TestEnumMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns C2G_TestEnumMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Fantasy.Network.Message.C2G_TestEnumMessage;

                /**
                 * Decodes a C2G_TestEnumMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns C2G_TestEnumMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Fantasy.Network.Message.C2G_TestEnumMessage;

                /**
                 * Verifies a C2G_TestEnumMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a C2G_TestEnumMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns C2G_TestEnumMessage
                 */
                public static fromObject(object: { [k: string]: any }): Fantasy.Network.Message.C2G_TestEnumMessage;

                /**
                 * Creates a plain object from a C2G_TestEnumMessage message. Also converts values to other types if specified.
                 * @param message C2G_TestEnumMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Fantasy.Network.Message.C2G_TestEnumMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this C2G_TestEnumMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for C2G_TestEnumMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
