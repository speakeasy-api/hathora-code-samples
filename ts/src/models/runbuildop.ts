/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../lib/base64";
import { blobLikeSchema } from "../types";
import * as z from "zod";

export type FileT = {
    content: Uint8Array | string;
    fileName: string;
};

export type RunBuildRequestBody = {
    file: FileT | Blob;
};

export type RunBuildRequest = {
    requestBody: RunBuildRequestBody;
    buildId: number;
    appId?: string | undefined;
};

export type RunBuildResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Ok
     */
    res?: string | undefined;
};

/** @internal */
export namespace FileT$ {
    export type Inbound = {
        content: Uint8Array | string;
        fileName: string;
    };

    export const inboundSchema: z.ZodType<FileT, z.ZodTypeDef, Inbound> = z
        .object({
            content: b64$.zodInbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });

    export type Outbound = {
        content: Uint8Array;
        fileName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileT> = z
        .object({
            content: b64$.zodOutbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });
}

/** @internal */
export namespace RunBuildRequestBody$ {
    export type Inbound = {
        file: FileT$.Inbound;
    };

    export const inboundSchema: z.ZodType<RunBuildRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            file: z.lazy(() => FileT$.inboundSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });

    export type Outbound = {
        file: FileT$.Outbound | Blob;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildRequestBody> = z
        .object({
            file: z.lazy(() => FileT$.outboundSchema).or(blobLikeSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });
}

/** @internal */
export namespace RunBuildRequest$ {
    export type Inbound = {
        RequestBody: RunBuildRequestBody$.Inbound;
        buildId: number;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RunBuildRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => RunBuildRequestBody$.inboundSchema),
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                buildId: v.buildId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        RequestBody: RunBuildRequestBody$.Outbound;
        buildId: number;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildRequest> = z
        .object({
            requestBody: z.lazy(() => RunBuildRequestBody$.outboundSchema),
            buildId: z.number().int(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                buildId: v.buildId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace RunBuildResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        res?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RunBuildResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            res: z.string().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.res === undefined ? null : { res: v.res }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        res?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            res: z.string().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.res === undefined ? null : { res: v.res }),
            };
        });
}