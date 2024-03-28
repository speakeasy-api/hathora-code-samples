/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetBalanceResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    number?: number | undefined;
};

/** @internal */
export namespace GetBalanceResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        number?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetBalanceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });
}
