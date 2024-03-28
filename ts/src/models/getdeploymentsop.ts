/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Deployment, Deployment$ } from "./deployment";
import * as z from "zod";

export type GetDeploymentsRequest = {
    appId?: string | undefined;
};

export type GetDeploymentsResponse = {
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
    classes?: Array<Deployment> | undefined;
};

/** @internal */
export namespace GetDeploymentsRequest$ {
    export type Inbound = {
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetDeploymentsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentsRequest> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace GetDeploymentsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<Deployment$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetDeploymentsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(Deployment$.inboundSchema).optional(),
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
        classes?: Array<Deployment$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(Deployment$.outboundSchema).optional(),
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
