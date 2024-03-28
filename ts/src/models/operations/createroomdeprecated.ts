/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateRoomDeprecatedRequest = {
    createRoomParams: components.CreateRoomParams;
    appId?: string | undefined;
    roomId?: string | undefined;
};

export type CreateRoomDeprecatedResponse = {
    httpMeta: components.HTTPMetadata;
    roomId?: string | undefined;
};

/** @internal */
export namespace CreateRoomDeprecatedRequest$ {
    export type Inbound = {
        CreateRoomParams: components.CreateRoomParams$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRoomDeprecatedRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CreateRoomParams: components.CreateRoomParams$.inboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                createRoomParams: v.CreateRoomParams,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });

    export type Outbound = {
        CreateRoomParams: components.CreateRoomParams$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomDeprecatedRequest> = z
        .object({
            createRoomParams: components.CreateRoomParams$.outboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                CreateRoomParams: v.createRoomParams,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });
}

/** @internal */
export namespace CreateRoomDeprecatedResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        RoomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRoomDeprecatedResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            RoomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.RoomId === undefined ? null : { roomId: v.RoomId }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        RoomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomDeprecatedResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.roomId === undefined ? null : { RoomId: v.roomId }),
            };
        });
}