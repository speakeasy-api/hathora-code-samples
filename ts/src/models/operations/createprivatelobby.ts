/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreatePrivateLobbySecurity = {
    playerAuth: string;
};

export type CreatePrivateLobbyRequestBody = {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    initialConfig: components.LobbyInitialConfig;
    region: components.Region;
};

export type CreatePrivateLobbyRequest = {
    requestBody: CreatePrivateLobbyRequestBody;
    appId?: string | undefined;
    roomId?: string | undefined;
};

export type CreatePrivateLobbyResponse = {
    httpMeta: components.HTTPMetadata;
    lobby?: components.Lobby | undefined;
};

/** @internal */
export namespace CreatePrivateLobbySecurity$ {
    export type Inbound = {
        playerAuth: string;
    };

    export const inboundSchema: z.ZodType<CreatePrivateLobbySecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePrivateLobbySecurity> = z
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
export namespace CreatePrivateLobbyRequestBody$ {
    export type Inbound = {
        initialConfig: components.LobbyInitialConfig$.Inbound;
        region: components.Region;
    };

    export const inboundSchema: z.ZodType<CreatePrivateLobbyRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            initialConfig: components.LobbyInitialConfig$.inboundSchema,
            region: components.Region$,
        })
        .transform((v) => {
            return {
                initialConfig: v.initialConfig,
                region: v.region,
            };
        });

    export type Outbound = {
        initialConfig: components.LobbyInitialConfig$.Outbound;
        region: components.Region;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePrivateLobbyRequestBody> =
        z
            .object({
                initialConfig: components.LobbyInitialConfig$.outboundSchema,
                region: components.Region$,
            })
            .transform((v) => {
                return {
                    initialConfig: v.initialConfig,
                    region: v.region,
                };
            });
}

/** @internal */
export namespace CreatePrivateLobbyRequest$ {
    export type Inbound = {
        RequestBody: CreatePrivateLobbyRequestBody$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePrivateLobbyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => CreatePrivateLobbyRequestBody$.inboundSchema),
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
        RequestBody: CreatePrivateLobbyRequestBody$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePrivateLobbyRequest> = z
        .object({
            requestBody: z.lazy(() => CreatePrivateLobbyRequestBody$.outboundSchema),
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
export namespace CreatePrivateLobbyResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Lobby?: components.Lobby$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreatePrivateLobbyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Lobby: components.Lobby$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Lobby === undefined ? null : { lobby: v.Lobby }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Lobby?: components.Lobby$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatePrivateLobbyResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            lobby: components.Lobby$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.lobby === undefined ? null : { Lobby: v.lobby }),
            };
        });
}
