/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListActivePublicLobbiesDeprecatedV1Request = {
    appId?: string | undefined;
    local?: boolean | undefined;
    region?: components.Region | undefined;
};

export type ListActivePublicLobbiesDeprecatedV1Response = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    lobbies?: Array<components.Lobby> | undefined;
};

/** @internal */
export namespace ListActivePublicLobbiesDeprecatedV1Request$ {
    export type Inbound = {
        appId?: string | undefined;
        local?: boolean | undefined;
        region?: components.Region | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListActivePublicLobbiesDeprecatedV1Request,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().default(false),
            region: components.Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                local: v.local,
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        local: boolean;
        region?: components.Region | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListActivePublicLobbiesDeprecatedV1Request
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().default(false),
            region: components.Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                local: v.local,
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });
}

/** @internal */
export namespace ListActivePublicLobbiesDeprecatedV1Response$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Lobbies?: Array<components.Lobby$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListActivePublicLobbiesDeprecatedV1Response,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Lobbies: z.array(components.Lobby$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Lobbies === undefined ? null : { lobbies: v.Lobbies }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Lobbies?: Array<components.Lobby$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListActivePublicLobbiesDeprecatedV1Response
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            lobbies: z.array(components.Lobby$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.lobbies === undefined ? null : { Lobbies: v.lobbies }),
            };
        });
}