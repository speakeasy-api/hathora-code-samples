/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Process, Process$ } from "./process";
import * as z from "zod";

export type GetProcessInfoDeprecatedRequest = {
    processId: string;
    appId?: string | undefined;
};

export type GetProcessInfoDeprecatedResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Ok
     */
    process?: Process | undefined;
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
export namespace GetProcessInfoDeprecatedRequest$ {
    export type Inbound = {
        processId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessInfoDeprecatedRequest, z.ZodTypeDef, Inbound> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetProcessInfoDeprecatedRequest
    > = z
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
export namespace GetProcessInfoDeprecatedResponse$ {
    export type Inbound = {
        ContentType: string;
        Process?: Process$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetProcessInfoDeprecatedResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                Process: Process$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.Process === undefined ? null : { process: v.Process }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        Process?: Process$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetProcessInfoDeprecatedResponse
    > = z
        .object({
            contentType: z.string(),
            process: Process$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.process === undefined ? null : { Process: v.process }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}