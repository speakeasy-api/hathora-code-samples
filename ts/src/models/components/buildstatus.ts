/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum BuildStatus {
    Created = "created",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
}

/** @internal */
export const BuildStatus$ = z.nativeEnum(BuildStatus);
