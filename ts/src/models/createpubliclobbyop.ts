/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Lobby, Lobby$ } from "./lobby";
import { LobbyInitialConfig, LobbyInitialConfig$ } from "./lobbyinitialconfig";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type CreatePublicLobbySecurity = {
    playerAuth: string;
};

export type CreatePublicLobbyRequestBody = {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    initialConfig: LobbyInitialConfig;
    region: Region;
};

export type CreatePublicLobbyRequest = {
    requestBody: CreatePublicLobbyRequestBody;
    appId?: string | undefined;
    roomId?: string | undefined;
};

export type CreatePublicLobbyResponse = {
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
export namespace CreatePublicLobbySecurity$ {
    export type Inbound = {
        playerAuth: string;
    };

    export const inboundSchema: z.ZodType<CreatePublicLobbySecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePublicLobbySecurity> = z
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
export namespace CreatePublicLobbyRequestBody$ {
    export type Inbound = {
        initialConfig: LobbyInitialConfig$.Inbound;
        region: Region;
    };

    export const inboundSchema: z.ZodType<CreatePublicLobbyRequestBody, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePublicLobbyRequestBody> = z
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
export namespace CreatePublicLobbyRequest$ {
    export type Inbound = {
        RequestBody: CreatePublicLobbyRequestBody$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePublicLobbyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => CreatePublicLobbyRequestBody$.inboundSchema),
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
        RequestBody: CreatePublicLobbyRequestBody$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePublicLobbyRequest> = z
        .object({
            requestBody: z.lazy(() => CreatePublicLobbyRequestBody$.outboundSchema),
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
export namespace CreatePublicLobbyResponse$ {
    export type Inbound = {
        ContentType: string;
        Lobby?: Lobby$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreatePublicLobbyResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePublicLobbyResponse> = z
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
