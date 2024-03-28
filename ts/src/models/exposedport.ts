/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransportType, TransportType$ } from "./transporttype";
import * as z from "zod";

/**
 * Connection details for an active process.
 */
export type ExposedPort = {
    host: string;
    name: string;
    port: number;
    /**
     * Transport type specifies the underlying communication protocol to the exposed port.
     */
    transportType: TransportType;
};

/** @internal */
export namespace ExposedPort$ {
    export type Inbound = {
        host: string;
        name: string;
        port: number;
        transportType: TransportType;
    };

    export const inboundSchema: z.ZodType<ExposedPort, z.ZodTypeDef, Inbound> = z
        .object({
            host: z.string(),
            name: z.string(),
            port: z.number().int(),
            transportType: TransportType$,
        })
        .transform((v) => {
            return {
                host: v.host,
                name: v.name,
                port: v.port,
                transportType: v.transportType,
            };
        });

    export type Outbound = {
        host: string;
        name: string;
        port: number;
        transportType: TransportType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExposedPort> = z
        .object({
            host: z.string(),
            name: z.string(),
            port: z.number().int(),
            transportType: TransportType$,
        })
        .transform((v) => {
            return {
                host: v.host,
                name: v.name,
                port: v.port,
                transportType: v.transportType,
            };
        });
}