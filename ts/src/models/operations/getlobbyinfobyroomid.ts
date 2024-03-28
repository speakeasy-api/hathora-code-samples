/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetLobbyInfoByRoomIdRequest = {
    roomId: string;
    appId?: string | undefined;
};

export type GetLobbyInfoByRoomIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    lobbyV3?: components.LobbyV3 | undefined;
};

/** @internal */
export namespace GetLobbyInfoByRoomIdRequest$ {
    export type Inbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoByRoomIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLobbyInfoByRoomIdRequest> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace GetLobbyInfoByRoomIdResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        LobbyV3?: components.LobbyV3$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoByRoomIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            LobbyV3: components.LobbyV3$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.LobbyV3 === undefined ? null : { lobbyV3: v.LobbyV3 }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        LobbyV3?: components.LobbyV3$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLobbyInfoByRoomIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            lobbyV3: components.LobbyV3$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.lobbyV3 === undefined ? null : { LobbyV3: v.lobbyV3 }),
            };
        });
}
