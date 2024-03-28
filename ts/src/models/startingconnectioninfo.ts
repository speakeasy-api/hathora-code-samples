/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum StartingConnectionInfoStatus {
    Starting = "starting",
}

export type StartingConnectionInfo = {
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
    status: StartingConnectionInfoStatus;
};

/** @internal */
export const StartingConnectionInfoStatus$ = z.nativeEnum(StartingConnectionInfoStatus);

/** @internal */
export namespace StartingConnectionInfo$ {
    export type Inbound = {
        roomId: string;
        status: StartingConnectionInfoStatus;
    };

    export const inboundSchema: z.ZodType<StartingConnectionInfo, z.ZodTypeDef, Inbound> = z
        .object({
            roomId: z.string(),
            status: StartingConnectionInfoStatus$,
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                status: v.status,
            };
        });

    export type Outbound = {
        roomId: string;
        status: StartingConnectionInfoStatus;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartingConnectionInfo> = z
        .object({
            roomId: z.string(),
            status: StartingConnectionInfoStatus$,
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                status: v.status,
            };
        });
}
