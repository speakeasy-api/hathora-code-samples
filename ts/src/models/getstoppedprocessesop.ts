/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Process, Process$ } from "./process";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type GetStoppedProcessesRequest = {
    appId?: string | undefined;
    region?: Region | undefined;
};

export type GetStoppedProcessesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Ok
     */
    classes?: Array<Process> | undefined;
};

/** @internal */
export namespace GetStoppedProcessesRequest$ {
    export type Inbound = {
        appId?: string | undefined;
        region?: Region | undefined;
    };

    export const inboundSchema: z.ZodType<GetStoppedProcessesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
            region: Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        region?: Region | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesRequest> = z
        .object({
            appId: z.string().optional(),
            region: Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });
}

/** @internal */
export namespace GetStoppedProcessesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<Process$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetStoppedProcessesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(Process$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<Process$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(Process$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
