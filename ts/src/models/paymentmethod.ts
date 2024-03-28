/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AchPaymentMethod, AchPaymentMethod$ } from "./achpaymentmethod";
import { CardPaymentMethod, CardPaymentMethod$ } from "./cardpaymentmethod";
import { LinkPaymentMethod, LinkPaymentMethod$ } from "./linkpaymentmethod";
import * as z from "zod";

/**
 * Make all properties in T optional
 */
export type PaymentMethod = {
    ach?: AchPaymentMethod | undefined;
    card?: CardPaymentMethod | undefined;
    link?: LinkPaymentMethod | undefined;
};

/** @internal */
export namespace PaymentMethod$ {
    export type Inbound = {
        ach?: AchPaymentMethod$.Inbound | undefined;
        card?: CardPaymentMethod$.Inbound | undefined;
        link?: LinkPaymentMethod$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentMethod, z.ZodTypeDef, Inbound> = z
        .object({
            ach: AchPaymentMethod$.inboundSchema.optional(),
            card: CardPaymentMethod$.inboundSchema.optional(),
            link: LinkPaymentMethod$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.ach === undefined ? null : { ach: v.ach }),
                ...(v.card === undefined ? null : { card: v.card }),
                ...(v.link === undefined ? null : { link: v.link }),
            };
        });

    export type Outbound = {
        ach?: AchPaymentMethod$.Outbound | undefined;
        card?: CardPaymentMethod$.Outbound | undefined;
        link?: LinkPaymentMethod$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethod> = z
        .object({
            ach: AchPaymentMethod$.outboundSchema.optional(),
            card: CardPaymentMethod$.outboundSchema.optional(),
            link: LinkPaymentMethod$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.ach === undefined ? null : { ach: v.ach }),
                ...(v.card === undefined ? null : { card: v.card }),
                ...(v.link === undefined ? null : { link: v.link }),
            };
        });
}