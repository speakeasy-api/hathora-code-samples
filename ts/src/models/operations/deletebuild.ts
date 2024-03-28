/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteBuildRequest = {
    buildId: number;
    appId?: string | undefined;
};

export type DeleteBuildResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteBuildRequest$ {
    export type Inbound = {
        buildId: number;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteBuildRequest, z.ZodTypeDef, Inbound> = z
        .object({
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                buildId: v.buildId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        buildId: number;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteBuildRequest> = z
        .object({
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                buildId: v.buildId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace DeleteBuildResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
    };

    export const inboundSchema: z.ZodType<DeleteBuildResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteBuildResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
