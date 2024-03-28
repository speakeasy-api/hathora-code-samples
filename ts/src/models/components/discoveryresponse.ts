/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Region, Region$ } from "./region";
import * as z from "zod";

export type DiscoveryResponse = {
    port: number;
    host: string;
    region: Region;
};

/** @internal */
export namespace DiscoveryResponse$ {
    export type Inbound = {
        port: number;
        host: string;
        region: Region;
    };

    export const inboundSchema: z.ZodType<DiscoveryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            port: z.number(),
            host: z.string(),
            region: Region$,
        })
        .transform((v) => {
            return {
                port: v.port,
                host: v.host,
                region: v.region,
            };
        });

    export type Outbound = {
        port: number;
        host: string;
        region: Region;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DiscoveryResponse> = z
        .object({
            port: z.number(),
            host: z.string(),
            region: Region$,
        })
        .transform((v) => {
            return {
                port: v.port,
                host: v.host,
                region: v.region,
            };
        });
}
