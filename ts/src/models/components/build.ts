/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BuildStatus, BuildStatus$ } from "./buildstatus";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type RegionalContainerTags = {
    containerTag: string;
    region: Region;
};

/**
 * A build represents a game server artifact and its associated metadata.
 */
export type Build = {
    buildTag?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    regionalContainerTags: Array<RegionalContainerTags>;
    /**
     * The size (in bytes) of the Docker image built by Hathora.
     */
    imageSize: number;
    status: BuildStatus;
    /**
     * When the build was deleted.
     */
    deletedAt: Date | null;
    /**
     * When [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) finished executing.
     */
    finishedAt: Date | null;
    /**
     * When [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) is called.
     */
    startedAt: Date | null;
    /**
     * When [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild) is called.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the build.
     */
    createdBy: string;
    /**
     * System generated id for a build. Increments by 1.
     */
    buildId: number;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
};

/** @internal */
export namespace RegionalContainerTags$ {
    export type Inbound = {
        containerTag: string;
        region: Region;
    };

    export const inboundSchema: z.ZodType<RegionalContainerTags, z.ZodTypeDef, Inbound> = z
        .object({
            containerTag: z.string(),
            region: Region$,
        })
        .transform((v) => {
            return {
                containerTag: v.containerTag,
                region: v.region,
            };
        });

    export type Outbound = {
        containerTag: string;
        region: Region;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RegionalContainerTags> = z
        .object({
            containerTag: z.string(),
            region: Region$,
        })
        .transform((v) => {
            return {
                containerTag: v.containerTag,
                region: v.region,
            };
        });
}

/** @internal */
export namespace Build$ {
    export type Inbound = {
        buildTag?: string | null | undefined;
        regionalContainerTags: Array<RegionalContainerTags$.Inbound>;
        imageSize: number;
        status: BuildStatus;
        deletedAt: string | null;
        finishedAt: string | null;
        startedAt: string | null;
        createdAt: string;
        createdBy: string;
        buildId: number;
        appId: string;
    };

    export const inboundSchema: z.ZodType<Build, z.ZodTypeDef, Inbound> = z
        .object({
            buildTag: z.nullable(z.string()).optional(),
            regionalContainerTags: z.array(z.lazy(() => RegionalContainerTags$.inboundSchema)),
            imageSize: z.number().int(),
            status: BuildStatus$,
            deletedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            finishedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            startedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            buildId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.buildTag === undefined ? null : { buildTag: v.buildTag }),
                regionalContainerTags: v.regionalContainerTags,
                imageSize: v.imageSize,
                status: v.status,
                deletedAt: v.deletedAt,
                finishedAt: v.finishedAt,
                startedAt: v.startedAt,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                buildId: v.buildId,
                appId: v.appId,
            };
        });

    export type Outbound = {
        buildTag?: string | null | undefined;
        regionalContainerTags: Array<RegionalContainerTags$.Outbound>;
        imageSize: number;
        status: BuildStatus;
        deletedAt: string | null;
        finishedAt: string | null;
        startedAt: string | null;
        createdAt: string;
        createdBy: string;
        buildId: number;
        appId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Build> = z
        .object({
            buildTag: z.nullable(z.string()).optional(),
            regionalContainerTags: z.array(z.lazy(() => RegionalContainerTags$.outboundSchema)),
            imageSize: z.number().int(),
            status: BuildStatus$,
            deletedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            finishedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            startedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            buildId: z.number().int(),
            appId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.buildTag === undefined ? null : { buildTag: v.buildTag }),
                regionalContainerTags: v.regionalContainerTags,
                imageSize: v.imageSize,
                status: v.status,
                deletedAt: v.deletedAt,
                finishedAt: v.finishedAt,
                startedAt: v.startedAt,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                buildId: v.buildId,
                appId: v.appId,
            };
        });
}
