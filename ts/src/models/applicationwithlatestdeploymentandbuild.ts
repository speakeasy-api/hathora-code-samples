/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthConfiguration, AuthConfiguration$ } from "./authconfiguration";
import { Build, Build$ } from "./build";
import { ContainerPort, ContainerPort$ } from "./containerport";
import { PlanName, PlanName$ } from "./planname";
import * as z from "zod";

export type ApplicationWithLatestDeploymentAndBuildEnv = {
    name: string;
    value: string;
};

/**
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export enum ApplicationWithLatestDeploymentAndBuildTransportType {
    Tcp = "tcp",
    Udp = "udp",
    Tls = "tls",
}

/**
 * Deployment is a versioned configuration for a build that describes runtime behavior.
 */
export type ApplicationWithLatestDeploymentAndBuildDeployment = {
    /**
     * Additional ports your server listens on.
     */
    additionalContainerPorts: Array<ContainerPort>;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * A build represents a game server artifact and its associated metadata.
     */
    build: Build;
    /**
     * System generated id for a build. Increments by 1.
     */
    buildId: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    containerPort: number;
    /**
     * When the deployment was created.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the deployment.
     */
    createdBy: string;
    /**
     * A container port object represents the transport configruations for how your server will listen.
     */
    defaultContainerPort: ContainerPort;
    /**
     * System generated id for a deployment. Increments by 1.
     */
    deploymentId: number;
    /**
     * The environment variable that our process will have access to at runtime.
     */
    env: Array<ApplicationWithLatestDeploymentAndBuildEnv>;
    /**
     * Option to shut down processes that have had no new connections or rooms
     *
     * @remarks
     * for five minutes.
     */
    idleTimeoutEnabled?: boolean | undefined;
    /**
     * A plan defines how much CPU and memory is required to run an instance of your game server.
     *
     * @remarks
     *
     * `tiny`: shared core, 1gb memory
     *
     * `small`: 1 core, 2gb memory
     *
     * `medium`: 2 core, 4gb memory
     *
     * `large`: 4 core, 8gb memory
     */
    planName: PlanName;
    /**
     * The number of cores allocated to your process.
     */
    requestedCPU: number;
    /**
     * The amount of memory allocated to your process.
     */
    requestedMemoryMB: number;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    transportType: ApplicationWithLatestDeploymentAndBuildTransportType;
};

/**
 * An application object is the top level namespace for the game server.
 */
export type ApplicationWithLatestDeploymentAndBuild = {
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * Readable name for an application. Must be unique within an organization.
     */
    appName: string;
    /**
     * Secret that is used for identity and access management.
     */
    appSecret: string;
    /**
     * Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).
     */
    authConfiguration: AuthConfiguration;
    /**
     * When the application was created.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the application.
     */
    createdBy: string;
    /**
     * When the application was deleted.
     */
    deletedAt: Date | null;
    /**
     * UserId or email address for the user that deleted the application.
     */
    deletedBy: string | null;
    deployment?: ApplicationWithLatestDeploymentAndBuildDeployment | undefined;
    /**
     * System generated unique identifier for an organization. Not guaranteed to have a specific format.
     */
    orgId: string;
};

/** @internal */
export namespace ApplicationWithLatestDeploymentAndBuildEnv$ {
    export type Inbound = {
        name: string;
        value: string;
    };

    export const inboundSchema: z.ZodType<
        ApplicationWithLatestDeploymentAndBuildEnv,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            name: z.string(),
            value: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
                value: v.value,
            };
        });

    export type Outbound = {
        name: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ApplicationWithLatestDeploymentAndBuildEnv
    > = z
        .object({
            name: z.string(),
            value: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
                value: v.value,
            };
        });
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildTransportType$ = z.nativeEnum(
    ApplicationWithLatestDeploymentAndBuildTransportType
);

/** @internal */
export namespace ApplicationWithLatestDeploymentAndBuildDeployment$ {
    export type Inbound = {
        additionalContainerPorts: Array<ContainerPort$.Inbound>;
        appId: string;
        build: Build$.Inbound;
        buildId: number;
        containerPort: number;
        createdAt: string;
        createdBy: string;
        defaultContainerPort: ContainerPort$.Inbound;
        deploymentId: number;
        env: Array<ApplicationWithLatestDeploymentAndBuildEnv$.Inbound>;
        idleTimeoutEnabled?: boolean | undefined;
        planName: PlanName;
        requestedCPU: number;
        requestedMemoryMB: number;
        roomsPerProcess: number;
        transportType: ApplicationWithLatestDeploymentAndBuildTransportType;
    };

    export const inboundSchema: z.ZodType<
        ApplicationWithLatestDeploymentAndBuildDeployment,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            additionalContainerPorts: z.array(ContainerPort$.inboundSchema),
            appId: z.string(),
            build: Build$.inboundSchema,
            buildId: z.number().int(),
            containerPort: z.number(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            defaultContainerPort: ContainerPort$.inboundSchema,
            deploymentId: z.number().int(),
            env: z.array(z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$.inboundSchema)),
            idleTimeoutEnabled: z.boolean().default(true),
            planName: PlanName$,
            requestedCPU: z.number(),
            requestedMemoryMB: z.number().int(),
            roomsPerProcess: z.number().int(),
            transportType: ApplicationWithLatestDeploymentAndBuildTransportType$,
        })
        .transform((v) => {
            return {
                additionalContainerPorts: v.additionalContainerPorts,
                appId: v.appId,
                build: v.build,
                buildId: v.buildId,
                containerPort: v.containerPort,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                defaultContainerPort: v.defaultContainerPort,
                deploymentId: v.deploymentId,
                env: v.env,
                idleTimeoutEnabled: v.idleTimeoutEnabled,
                planName: v.planName,
                requestedCPU: v.requestedCPU,
                requestedMemoryMB: v.requestedMemoryMB,
                roomsPerProcess: v.roomsPerProcess,
                transportType: v.transportType,
            };
        });

    export type Outbound = {
        additionalContainerPorts: Array<ContainerPort$.Outbound>;
        appId: string;
        build: Build$.Outbound;
        buildId: number;
        containerPort: number;
        createdAt: string;
        createdBy: string;
        defaultContainerPort: ContainerPort$.Outbound;
        deploymentId: number;
        env: Array<ApplicationWithLatestDeploymentAndBuildEnv$.Outbound>;
        idleTimeoutEnabled: boolean;
        planName: PlanName;
        requestedCPU: number;
        requestedMemoryMB: number;
        roomsPerProcess: number;
        transportType: ApplicationWithLatestDeploymentAndBuildTransportType;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ApplicationWithLatestDeploymentAndBuildDeployment
    > = z
        .object({
            additionalContainerPorts: z.array(ContainerPort$.outboundSchema),
            appId: z.string(),
            build: Build$.outboundSchema,
            buildId: z.number().int(),
            containerPort: z.number(),
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            defaultContainerPort: ContainerPort$.outboundSchema,
            deploymentId: z.number().int(),
            env: z.array(z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$.outboundSchema)),
            idleTimeoutEnabled: z.boolean().default(true),
            planName: PlanName$,
            requestedCPU: z.number(),
            requestedMemoryMB: z.number().int(),
            roomsPerProcess: z.number().int(),
            transportType: ApplicationWithLatestDeploymentAndBuildTransportType$,
        })
        .transform((v) => {
            return {
                additionalContainerPorts: v.additionalContainerPorts,
                appId: v.appId,
                build: v.build,
                buildId: v.buildId,
                containerPort: v.containerPort,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                defaultContainerPort: v.defaultContainerPort,
                deploymentId: v.deploymentId,
                env: v.env,
                idleTimeoutEnabled: v.idleTimeoutEnabled,
                planName: v.planName,
                requestedCPU: v.requestedCPU,
                requestedMemoryMB: v.requestedMemoryMB,
                roomsPerProcess: v.roomsPerProcess,
                transportType: v.transportType,
            };
        });
}

/** @internal */
export namespace ApplicationWithLatestDeploymentAndBuild$ {
    export type Inbound = {
        appId: string;
        appName: string;
        appSecret: string;
        authConfiguration: AuthConfiguration$.Inbound;
        createdAt: string;
        createdBy: string;
        deletedAt: string | null;
        deletedBy: string | null;
        deployment?: ApplicationWithLatestDeploymentAndBuildDeployment$.Inbound | undefined;
        orgId: string;
    };

    export const inboundSchema: z.ZodType<
        ApplicationWithLatestDeploymentAndBuild,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appId: z.string(),
            appName: z.string(),
            appSecret: z.string(),
            authConfiguration: AuthConfiguration$.inboundSchema,
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdBy: z.string(),
            deletedAt: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            deletedBy: z.nullable(z.string()),
            deployment: z
                .lazy(() => ApplicationWithLatestDeploymentAndBuildDeployment$.inboundSchema)
                .optional(),
            orgId: z.string(),
        })
        .transform((v) => {
            return {
                appId: v.appId,
                appName: v.appName,
                appSecret: v.appSecret,
                authConfiguration: v.authConfiguration,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                deletedAt: v.deletedAt,
                deletedBy: v.deletedBy,
                ...(v.deployment === undefined ? null : { deployment: v.deployment }),
                orgId: v.orgId,
            };
        });

    export type Outbound = {
        appId: string;
        appName: string;
        appSecret: string;
        authConfiguration: AuthConfiguration$.Outbound;
        createdAt: string;
        createdBy: string;
        deletedAt: string | null;
        deletedBy: string | null;
        deployment?: ApplicationWithLatestDeploymentAndBuildDeployment$.Outbound | undefined;
        orgId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ApplicationWithLatestDeploymentAndBuild
    > = z
        .object({
            appId: z.string(),
            appName: z.string(),
            appSecret: z.string(),
            authConfiguration: AuthConfiguration$.outboundSchema,
            createdAt: z.date().transform((v) => v.toISOString()),
            createdBy: z.string(),
            deletedAt: z.nullable(z.date().transform((v) => v.toISOString())),
            deletedBy: z.nullable(z.string()),
            deployment: z
                .lazy(() => ApplicationWithLatestDeploymentAndBuildDeployment$.outboundSchema)
                .optional(),
            orgId: z.string(),
        })
        .transform((v) => {
            return {
                appId: v.appId,
                appName: v.appName,
                appSecret: v.appSecret,
                authConfiguration: v.authConfiguration,
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                deletedAt: v.deletedAt,
                deletedBy: v.deletedBy,
                ...(v.deployment === undefined ? null : { deployment: v.deployment }),
                orgId: v.orgId,
            };
        });
}