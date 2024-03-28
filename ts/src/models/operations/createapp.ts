/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateAppResponse = {
    httpMeta: components.HTTPMetadata;
    application?: components.Application | undefined;
};

/** @internal */
export namespace CreateAppResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Application?: components.Application$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateAppResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Application: components.Application$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Application === undefined ? null : { application: v.Application }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Application?: components.Application$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAppResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            application: components.Application$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.application === undefined ? null : { Application: v.application }),
            };
        });
}
