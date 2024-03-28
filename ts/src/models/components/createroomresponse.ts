/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ExposedPort, ExposedPort$ } from "./exposedport";
import * as z from "zod";

/**
 * `exposedPort` will only be available when the `status` of a room is "active".
 */
export enum CreateRoomResponseStatus {
    Starting = "starting",
    Active = "active",
}

/**
 * Connection information for the default and additional ports.
 */
export type CreateRoomResponse = {
    additionalExposedPorts: Array<ExposedPort>;
    /**
     * Connection details for an active process.
     */
    exposedPort?: ExposedPort | undefined;
    /**
     * `exposedPort` will only be available when the `status` of a room is "active".
     */
    status: CreateRoomResponseStatus;
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
};

/** @internal */
export const CreateRoomResponseStatus$ = z.nativeEnum(CreateRoomResponseStatus);

/** @internal */
export namespace CreateRoomResponse$ {
    export type Inbound = {
        additionalExposedPorts: Array<ExposedPort$.Inbound>;
        exposedPort?: ExposedPort$.Inbound | undefined;
        status: CreateRoomResponseStatus;
        roomId: string;
        processId: string;
    };

    export const inboundSchema: z.ZodType<CreateRoomResponse, z.ZodTypeDef, Inbound> = z
        .object({
            additionalExposedPorts: z.array(ExposedPort$.inboundSchema),
            exposedPort: ExposedPort$.inboundSchema.optional(),
            status: CreateRoomResponseStatus$,
            roomId: z.string(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                additionalExposedPorts: v.additionalExposedPorts,
                ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
                status: v.status,
                roomId: v.roomId,
                processId: v.processId,
            };
        });

    export type Outbound = {
        additionalExposedPorts: Array<ExposedPort$.Outbound>;
        exposedPort?: ExposedPort$.Outbound | undefined;
        status: CreateRoomResponseStatus;
        roomId: string;
        processId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomResponse> = z
        .object({
            additionalExposedPorts: z.array(ExposedPort$.outboundSchema),
            exposedPort: ExposedPort$.outboundSchema.optional(),
            status: CreateRoomResponseStatus$,
            roomId: z.string(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                additionalExposedPorts: v.additionalExposedPorts,
                ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
                status: v.status,
                roomId: v.roomId,
                processId: v.processId,
            };
        });
}