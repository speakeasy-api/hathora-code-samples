/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthConfiguration, AuthConfiguration$ } from "./authconfiguration";
import * as z from "zod";

export type AppConfig = {
    /**
     * Readable name for an application. Must be unique within an organization.
     */
    appName: string;
    /**
     * Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).
     */
    authConfiguration: AuthConfiguration;
};

/** @internal */
export namespace AppConfig$ {
    export type Inbound = {
        appName: string;
        authConfiguration: AuthConfiguration$.Inbound;
    };

    export const inboundSchema: z.ZodType<AppConfig, z.ZodTypeDef, Inbound> = z
        .object({
            appName: z.string(),
            authConfiguration: AuthConfiguration$.inboundSchema,
        })
        .transform((v) => {
            return {
                appName: v.appName,
                authConfiguration: v.authConfiguration,
            };
        });

    export type Outbound = {
        appName: string;
        authConfiguration: AuthConfiguration$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppConfig> = z
        .object({
            appName: z.string(),
            authConfiguration: AuthConfiguration$.outboundSchema,
        })
        .transform((v) => {
            return {
                appName: v.appName,
                authConfiguration: v.authConfiguration,
            };
        });
}
