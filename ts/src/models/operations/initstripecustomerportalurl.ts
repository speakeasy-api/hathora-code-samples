/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type InitStripeCustomerPortalUrlResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    string?: string | undefined;
};

/** @internal */
export namespace InitStripeCustomerPortalUrlResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        string?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        InitStripeCustomerPortalUrlResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            string: z.string().optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.string === undefined ? null : { string: v.string }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        string?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InitStripeCustomerPortalUrlResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            string: z.string().optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.string === undefined ? null : { string: v.string }),
            };
        });
}