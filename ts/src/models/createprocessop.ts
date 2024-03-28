/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ProcessV2, ProcessV2$ } from "./processv2";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type CreateProcessRequest = {
    region: Region;
    appId?: string | undefined;
};

export type CreateProcessResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    processV2?: ProcessV2 | undefined;
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
export namespace CreateProcessRequest$ {
    export type Inbound = {
        region: Region;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateProcessRequest, z.ZodTypeDef, Inbound> = z
        .object({
            region: Region$,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                region: v.region,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        region: Region;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateProcessRequest> = z
        .object({
            region: Region$,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                region: v.region,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace CreateProcessResponse$ {
    export type Inbound = {
        ContentType: string;
        ProcessV2?: ProcessV2$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateProcessResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ProcessV2: ProcessV2$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ProcessV2 === undefined ? null : { processV2: v.ProcessV2 }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ProcessV2?: ProcessV2$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateProcessResponse> = z
        .object({
            contentType: z.string(),
            processV2: ProcessV2$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.processV2 === undefined ? null : { ProcessV2: v.processV2 }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
