/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Status {
    Success = "success",
}

export type VerificationEmailResponse = {
    status: Status;
};

/** @internal */
export const Status$ = z.nativeEnum(Status);

/** @internal */
export namespace VerificationEmailResponse$ {
    export type Inbound = {
        status: Status;
    };

    export const inboundSchema: z.ZodType<VerificationEmailResponse, z.ZodTypeDef, Inbound> = z
        .object({
            status: Status$,
        })
        .transform((v) => {
            return {
                status: v.status,
            };
        });

    export type Outbound = {
        status: Status;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VerificationEmailResponse> = z
        .object({
            status: Status$,
        })
        .transform((v) => {
            return {
                status: v.status,
            };
        });
}