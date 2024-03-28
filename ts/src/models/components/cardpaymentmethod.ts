/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CardBrand, CardBrand$ } from "./cardbrand";
import * as z from "zod";

export type CardPaymentMethod = {
    last4: string;
    brand: CardBrand;
};

/** @internal */
export namespace CardPaymentMethod$ {
    export type Inbound = {
        last4: string;
        brand: CardBrand;
    };

    export const inboundSchema: z.ZodType<CardPaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            last4: z.string(),
            brand: CardBrand$,
        })
        .transform((v) => {
            return {
                last4: v.last4,
                brand: v.brand,
            };
        });

    export type Outbound = {
        last4: string;
        brand: CardBrand;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CardPaymentMethod> = z
        .object({
            last4: z.string(),
            brand: CardBrand$,
        })
        .transform((v) => {
            return {
                last4: v.last4,
                brand: v.brand,
            };
        });
}
