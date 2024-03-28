/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LobbyInitialConfig, LobbyInitialConfig$ } from "./lobbyinitialconfig";
import { LobbyVisibility, LobbyVisibility$ } from "./lobbyvisibility";
import { Region, Region$ } from "./region";
import * as z from "zod";

/**
 * JSON blob to store metadata for a room. Must be smaller than 1MB.
 */
export type State = {};

/**
 * A lobby object allows you to store and manage metadata for your rooms.
 */
export type Lobby = {
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * When the lobby was created.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the lobby.
     */
    createdBy: string;
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    initialConfig: LobbyInitialConfig;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    local: boolean;
    region: Region;
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
    shortCode: string | null;
    /**
     * JSON blob to store metadata for a room. Must be smaller than 1MB.
     */
    state?: State | null | undefined;
    /**
     * Types of lobbies a player can create.
     *
     * @remarks
     *
     * `private`: the player who created the room must share the roomId with their friends
     *
     * `public`: visible in the public lobby list, anyone can join
     *
     * `local`: for testing with a server running locally
     */
    visibility: LobbyVisibility;
};

/** @internal */
export namespace State$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<State, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, State> = z.object({});
}

/** @internal */
export namespace Lobby$ {
    export type Inbound = {
        appId: string;
        createdAt: string;
        createdBy: string;
        initialConfig: LobbyInitialConfig$.Inbound;
        local: boolean;
        region: Region;
        roomId: string;
        shortCode: string | null;
        state?: State$.Inbound | null | undefined;
        visibility: LobbyVisibility;
    };

    export const inboundSchema: z.ZodType<Lobby, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            initialConfig: LobbyInitialConfig$.inboundSchema,
            local: z.boolean(),
            region: Region$,
            roomId: z.string(),
            shortCode: z.nullable(z.string()),
            state: z.nullable(z.lazy(() => State$.inboundSchema)).optional(),
            visibility: LobbyVisibility$,
        })
        .transform((v) => {
            return {
                appId: v.appId,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                initialConfig: v.initialConfig,
                local: v.local,
                region: v.region,
                roomId: v.roomId,
                shortCode: v.shortCode,
                ...(v.state === undefined ? null : { state: v.state }),
                visibility: v.visibility,
            };
        });

    export type Outbound = {
        appId: string;
        createdAt: string;
        createdBy: string;
        initialConfig: LobbyInitialConfig$.Outbound;
        local: boolean;
        region: Region;
        roomId: string;
        shortCode: string | null;
        state?: State$.Outbound | null | undefined;
        visibility: LobbyVisibility;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Lobby> = z
        .object({
            appId: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            initialConfig: LobbyInitialConfig$.outboundSchema,
            local: z.boolean(),
            region: Region$,
            roomId: z.string(),
            shortCode: z.nullable(z.string()),
            state: z.nullable(z.lazy(() => State$.outboundSchema)).optional(),
            visibility: LobbyVisibility$,
        })
        .transform((v) => {
            return {
                appId: v.appId,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                initialConfig: v.initialConfig,
                local: v.local,
                region: v.region,
                roomId: v.roomId,
                shortCode: v.shortCode,
                ...(v.state === undefined ? null : { state: v.state }),
                visibility: v.visibility,
            };
        });
}
