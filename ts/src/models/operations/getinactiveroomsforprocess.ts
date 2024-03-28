/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetInactiveRoomsForProcessRequest = {
    processId: string;
    appId?: string | undefined;
};

export type GetInactiveRoomsForProcessResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    roomWithoutAllocations?: Array<components.RoomWithoutAllocations> | undefined;
};

/** @internal */
export namespace GetInactiveRoomsForProcessRequest$ {
    export type Inbound = {
        processId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetInactiveRoomsForProcessRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            processId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        processId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInactiveRoomsForProcessRequest
    > = z
        .object({
            processId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace GetInactiveRoomsForProcessResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        RoomWithoutAllocations?: Array<components.RoomWithoutAllocations$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetInactiveRoomsForProcessResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            RoomWithoutAllocations: z
                .array(components.RoomWithoutAllocations$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.RoomWithoutAllocations === undefined
                    ? null
                    : { roomWithoutAllocations: v.RoomWithoutAllocations }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        RoomWithoutAllocations?: Array<components.RoomWithoutAllocations$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInactiveRoomsForProcessResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            roomWithoutAllocations: z
                .array(components.RoomWithoutAllocations$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.roomWithoutAllocations === undefined
                    ? null
                    : { RoomWithoutAllocations: v.roomWithoutAllocations }),
            };
        });
}
