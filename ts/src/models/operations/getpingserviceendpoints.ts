/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetPingServiceEndpointsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    discoveryResponse?: Array<components.DiscoveryResponse> | undefined;
};

/** @internal */
export namespace GetPingServiceEndpointsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        DiscoveryResponse?: Array<components.DiscoveryResponse$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetPingServiceEndpointsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                DiscoveryResponse: z.array(components.DiscoveryResponse$.inboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.DiscoveryResponse === undefined
                        ? null
                        : { discoveryResponse: v.DiscoveryResponse }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        DiscoveryResponse?: Array<components.DiscoveryResponse$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPingServiceEndpointsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            discoveryResponse: z.array(components.DiscoveryResponse$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.discoveryResponse === undefined
                    ? null
                    : { DiscoveryResponse: v.discoveryResponse }),
            };
        });
}