/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetOrgTokensRequest = {
    orgId: string;
};

export type GetOrgTokensResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    listOrgTokens?: components.ListOrgTokens | undefined;
};

/** @internal */
export namespace GetOrgTokensRequest$ {
    export type Inbound = {
        orgId: string;
    };

    export const inboundSchema: z.ZodType<GetOrgTokensRequest, z.ZodTypeDef, Inbound> = z
        .object({
            orgId: z.string(),
        })
        .transform((v) => {
            return {
                orgId: v.orgId,
            };
        });

    export type Outbound = {
        orgId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrgTokensRequest> = z
        .object({
            orgId: z.string(),
        })
        .transform((v) => {
            return {
                orgId: v.orgId,
            };
        });
}

/** @internal */
export namespace GetOrgTokensResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        ListOrgTokens?: components.ListOrgTokens$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOrgTokensResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ListOrgTokens: components.ListOrgTokens$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ListOrgTokens === undefined ? null : { listOrgTokens: v.ListOrgTokens }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ListOrgTokens?: components.ListOrgTokens$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrgTokensResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            listOrgTokens: components.ListOrgTokens$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.listOrgTokens === undefined ? null : { ListOrgTokens: v.listOrgTokens }),
            };
        });
}