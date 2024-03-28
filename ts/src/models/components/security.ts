/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    hathoraDevToken?: string | undefined;
};

/** @internal */
export namespace Security$ {
    export type Inbound = {
        hathoraDevToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, Inbound> = z
        .object({
            hathoraDevToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hathoraDevToken === undefined
                    ? null
                    : { hathoraDevToken: v.hathoraDevToken }),
            };
        });

    export type Outbound = {
        hathoraDevToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            hathoraDevToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hathoraDevToken === undefined
                    ? null
                    : { hathoraDevToken: v.hathoraDevToken }),
            };
        });
}