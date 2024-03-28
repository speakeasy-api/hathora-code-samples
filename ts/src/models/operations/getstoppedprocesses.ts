/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetStoppedProcessesRequest = {
    appId?: string | undefined;
    region?: components.Region | undefined;
};

export type GetStoppedProcessesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    processes?: Array<components.Process> | undefined;
};

/** @internal */
export namespace GetStoppedProcessesRequest$ {
    export type Inbound = {
        appId?: string | undefined;
        region?: components.Region | undefined;
    };

    export const inboundSchema: z.ZodType<GetStoppedProcessesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        region?: components.Region | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesRequest> = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.optional(),
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
        HttpMeta: components.HTTPMetadata$.Inbound;
        Processes?: Array<components.Process$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetStoppedProcessesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Processes: z.array(components.Process$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Processes === undefined ? null : { processes: v.Processes }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Processes?: Array<components.Process$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            processes: z.array(components.Process$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.processes === undefined ? null : { Processes: v.processes }),
            };
        });
}
