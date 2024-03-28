/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetConnectionInfoDeprecatedRequest = {
    roomId: string;
    appId?: string | undefined;
};

export type GetConnectionInfoDeprecatedResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    connectionInfo?: components.ConnectionInfo | undefined;
};

/** @internal */
export namespace GetConnectionInfoDeprecatedRequest$ {
    export type Inbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetConnectionInfoDeprecatedRequest,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConnectionInfoDeprecatedRequest
    > = z
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
export namespace GetConnectionInfoDeprecatedResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        ConnectionInfo?: components.ConnectionInfo$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetConnectionInfoDeprecatedResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ConnectionInfo: components.ConnectionInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ConnectionInfo === undefined ? null : { connectionInfo: v.ConnectionInfo }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ConnectionInfo?: components.ConnectionInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConnectionInfoDeprecatedResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            connectionInfo: components.ConnectionInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.connectionInfo === undefined ? null : { ConnectionInfo: v.connectionInfo }),
            };
        });
}
