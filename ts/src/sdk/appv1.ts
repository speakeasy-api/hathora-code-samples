/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class AppV1 extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create a new [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async createApp(
        input: models.AppConfig,
        options?: RequestOptions
    ): Promise<models.CreateAppResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => models.AppConfig$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/apps/v1/create")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "CreateApp",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "422", "4XX", "500", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.CreateAppResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Application: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 422, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`. Your organization will lose access to this application.
     */
    async deleteApp(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.DeleteAppResponse> {
        const input$: models.DeleteAppRequest = {
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.DeleteAppRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/apps/v1/delete/{appId}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "DeleteApp",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "500", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, [401, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => models.DeleteAppResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Get details for an [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async getAppInfo(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.GetAppInfoResponse> {
        const input$: models.GetAppInfoRequest = {
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetAppInfoRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/apps/v1/info/{appId}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "GetAppInfo",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.GetAppInfoResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Application: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Returns an unsorted list of your organization’s [applications](https://hathora.dev/docs/concepts/hathora-entities#application). An application is uniquely identified by an `appId`.
     */
    async getApps(options?: RequestOptions): Promise<models.GetAppsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/apps/v1/list")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "GetApps",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.GetAppsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        classes: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update data for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.
     */
    async updateApp(
        appConfig: models.AppConfig,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<models.UpdateAppResponse> {
        const input$: models.UpdateAppRequest = {
            appConfig: appConfig,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.UpdateAppRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.AppConfig, { explode: true });

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/apps/v1/update/{appId}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "UpdateApp",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "422", "4XX", "500", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.UpdateAppResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Application: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404, 422, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
