/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum OrgTokenStatus {
    Active = "active",
    Revoked = "revoked",
}

/** @internal */
export const OrgTokenStatus$ = z.nativeEnum(OrgTokenStatus);