/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Lobby, Lobby$ } from "./lobby";
import { LobbyInitialConfig, LobbyInitialConfig$ } from "./lobbyinitialconfig";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type CreateLocalLobbySecurity = {
    playerAuth: string;
};

export type CreateLocalLobbyRequestBody = {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    initialConfig: LobbyInitialConfig;
    region: Region;
};

export type CreateLocalLobbyRequest = {
    requestBody: CreateLocalLobbyRequestBody;
    appId?: string | undefined;
    roomId?: string | undefined;
};

export type CreateLocalLobbyResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    lobby?: Lobby | undefined;
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
export namespace CreateLocalLobbySecurity$ {
    export type Inbound = {
        playerAuth: string;
    };

    export const inboundSchema: z.ZodType<CreateLocalLobbySecurity, z.ZodTypeDef, Inbound> = z
        .object({
            playerAuth: z.string(),
        })
        .transform((v) => {
            return {
                playerAuth: v.playerAuth,
            };
        });

    export type Outbound = {
        playerAuth: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateLocalLobbySecurity> = z
        .object({
            playerAuth: z.string(),
        })
        .transform((v) => {
            return {
                playerAuth: v.playerAuth,
            };
        });
}

/** @internal */
export namespace CreateLocalLobbyRequestBody$ {
    export type Inbound = {
        initialConfig: LobbyInitialConfig$.Inbound;
        region: Region;
    };

    export const inboundSchema: z.ZodType<CreateLocalLobbyRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            initialConfig: LobbyInitialConfig$.inboundSchema,
            region: Region$,
        })
        .transform((v) => {
            return {
                initialConfig: v.initialConfig,
                region: v.region,
            };
        });

    export type Outbound = {
        initialConfig: LobbyInitialConfig$.Outbound;
        region: Region;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateLocalLobbyRequestBody> = z
        .object({
            initialConfig: LobbyInitialConfig$.outboundSchema,
            region: Region$,
        })
        .transform((v) => {
            return {
                initialConfig: v.initialConfig,
                region: v.region,
            };
        });
}

/** @internal */
export namespace CreateLocalLobbyRequest$ {
    export type Inbound = {
        RequestBody: CreateLocalLobbyRequestBody$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateLocalLobbyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => CreateLocalLobbyRequestBody$.inboundSchema),
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });

    export type Outbound = {
        RequestBody: CreateLocalLobbyRequestBody$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateLocalLobbyRequest> = z
        .object({
            requestBody: z.lazy(() => CreateLocalLobbyRequestBody$.outboundSchema),
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });
}

/** @internal */
export namespace CreateLocalLobbyResponse$ {
    export type Inbound = {
        ContentType: string;
        Lobby?: Lobby$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateLocalLobbyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Lobby: Lobby$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Lobby === undefined ? null : { lobby: v.Lobby }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Lobby?: Lobby$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateLocalLobbyResponse> = z
        .object({
            contentType: z.string(),
            lobby: Lobby$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.lobby === undefined ? null : { Lobby: v.lobby }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
