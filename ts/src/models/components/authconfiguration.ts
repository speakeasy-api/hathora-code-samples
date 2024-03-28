/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RecordStringNever, RecordStringNever$ } from "./recordstringnever";
import * as z from "zod";

/**
 * Enable google auth for your application.
 */
export type Google = {
    /**
     * A Google generated token representing the developer's credentials for [Google's API Console](https://console.cloud.google.com/apis/dashboard?pli=1&project=discourse-login-388921). Learn how to get a `clientId` [here](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid).
     */
    clientId: string;
};

/**
 * Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).
 */
export type AuthConfiguration = {
    /**
     * Enable google auth for your application.
     */
    google?: Google | undefined;
    /**
     * Construct a type with a set of properties K of type T
     */
    nickname?: RecordStringNever | undefined;
    /**
     * Construct a type with a set of properties K of type T
     */
    anonymous?: RecordStringNever | undefined;
};

/** @internal */
export namespace Google$ {
    export type Inbound = {
        clientId: string;
    };

    export const inboundSchema: z.ZodType<Google, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
            };
        });

    export type Outbound = {
        clientId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Google> = z
        .object({
            clientId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
            };
        });
}

/** @internal */
export namespace AuthConfiguration$ {
    export type Inbound = {
        google?: Google$.Inbound | undefined;
        nickname?: RecordStringNever$.Inbound | undefined;
        anonymous?: RecordStringNever$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AuthConfiguration, z.ZodTypeDef, Inbound> = z
        .object({
            google: z.lazy(() => Google$.inboundSchema).optional(),
            nickname: RecordStringNever$.inboundSchema.optional(),
            anonymous: RecordStringNever$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.google === undefined ? null : { google: v.google }),
                ...(v.nickname === undefined ? null : { nickname: v.nickname }),
                ...(v.anonymous === undefined ? null : { anonymous: v.anonymous }),
            };
        });

    export type Outbound = {
        google?: Google$.Outbound | undefined;
        nickname?: RecordStringNever$.Outbound | undefined;
        anonymous?: RecordStringNever$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthConfiguration> = z
        .object({
            google: z.lazy(() => Google$.outboundSchema).optional(),
            nickname: RecordStringNever$.outboundSchema.optional(),
            anonymous: RecordStringNever$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.google === undefined ? null : { google: v.google }),
                ...(v.nickname === undefined ? null : { nickname: v.nickname }),
                ...(v.anonymous === undefined ? null : { anonymous: v.anonymous }),
            };
        });
}
