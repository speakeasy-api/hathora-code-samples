/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LobbyV3, LobbyV3$ } from "./lobbyv3";
import * as z from "zod";

export type GetLobbyInfoByShortCodeRequest = {
    shortCode: string;
    appId?: string | undefined;
};

export type GetLobbyInfoByShortCodeResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Ok
     */
    lobbyV3?: LobbyV3 | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetLobbyInfoByShortCodeRequest$ {
    export type Inbound = {
        shortCode: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoByShortCodeRequest, z.ZodTypeDef, Inbound> = z
        .object({
            shortCode: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                shortCode: v.shortCode,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        shortCode: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLobbyInfoByShortCodeRequest> =
        z
            .object({
                shortCode: z.string(),
                appId: z.string().optional(),
            })
            .transform((v) => {
                return {
                    shortCode: v.shortCode,
                    ...(v.appId === undefined ? null : { appId: v.appId }),
                };
            });
}

/** @internal */
export namespace GetLobbyInfoByShortCodeResponse$ {
    export type Inbound = {
        ContentType: string;
        LobbyV3?: LobbyV3$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetLobbyInfoByShortCodeResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                LobbyV3: LobbyV3$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.LobbyV3 === undefined ? null : { lobbyV3: v.LobbyV3 }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        LobbyV3?: LobbyV3$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetLobbyInfoByShortCodeResponse
    > = z
        .object({
            contentType: z.string(),
            lobbyV3: LobbyV3$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.lobbyV3 === undefined ? null : { LobbyV3: v.lobbyV3 }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
