/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type LoginNicknameRequest = {
    loginNicknameRequest: components.LoginNicknameRequest;
    appId?: string | undefined;
};

export type LoginNicknameResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Ok
     */
    loginResponse?: components.LoginResponse | undefined;
};

/** @internal */
export namespace LoginNicknameRequest$ {
    export type Inbound = {
        LoginNicknameRequest: components.LoginNicknameRequest$.Inbound;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LoginNicknameRequest, z.ZodTypeDef, Inbound> = z
        .object({
            LoginNicknameRequest: components.LoginNicknameRequest$.inboundSchema,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                loginNicknameRequest: v.LoginNicknameRequest,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        LoginNicknameRequest: components.LoginNicknameRequest$.Outbound;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginNicknameRequest> = z
        .object({
            loginNicknameRequest: components.LoginNicknameRequest$.outboundSchema,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                LoginNicknameRequest: v.loginNicknameRequest,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace LoginNicknameResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        LoginResponse?: components.LoginResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<LoginNicknameResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            LoginResponse: components.LoginResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.LoginResponse === undefined ? null : { loginResponse: v.LoginResponse }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        LoginResponse?: components.LoginResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginNicknameResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            loginResponse: components.LoginResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.loginResponse === undefined ? null : { LoginResponse: v.loginResponse }),
            };
        });
}