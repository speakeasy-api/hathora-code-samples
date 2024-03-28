/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Build, Build$ } from "./build";
import * as z from "zod";

export type GetBuildInfoRequest = {
    buildId: number;
    appId?: string | undefined;
};

export type GetBuildInfoResponse = {
    /**
     * Ok
     */
    build?: Build | undefined;
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
};

/** @internal */
export namespace GetBuildInfoRequest$ {
    export type Inbound = {
        buildId: number;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetBuildInfoRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBuildInfoRequest> = z
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
export namespace GetBuildInfoResponse$ {
    export type Inbound = {
        Build?: Build$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetBuildInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            Build: Build$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Build === undefined ? null : { build: v.Build }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Build?: Build$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBuildInfoResponse> = z
        .object({
            build: Build$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.build === undefined ? null : { Build: v.build }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
