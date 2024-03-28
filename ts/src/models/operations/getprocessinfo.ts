/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetProcessInfoRequest = {
    processId: string;
    appId?: string | undefined;
};

export type GetProcessInfoResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    processV2?: components.ProcessV2 | undefined;
};

/** @internal */
export namespace GetProcessInfoRequest$ {
    export type Inbound = {
        processId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessInfoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            processId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        processId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessInfoRequest> = z
        .object({
            processId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace GetProcessInfoResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        ProcessV2?: components.ProcessV2$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ProcessV2: components.ProcessV2$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ProcessV2 === undefined ? null : { processV2: v.ProcessV2 }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ProcessV2?: components.ProcessV2$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessInfoResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            processV2: components.ProcessV2$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.processV2 === undefined ? null : { ProcessV2: v.processV2 }),
            };
        });
}
