/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.hathora.cloud_api.models.errors.SDKError;
import dev.hathora.cloud_api.models.operations.SDKMethodInterfaces.*;
import dev.hathora.cloud_api.utils.HTTPClient;
import dev.hathora.cloud_api.utils.HTTPRequest;
import dev.hathora.cloud_api.utils.JSON;
import dev.hathora.cloud_api.utils.SerializedBody;
import dev.hathora.cloud_api.utils.Utils;
import java.io.InputStream;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import org.apache.http.NameValuePair;
import org.openapitools.jackson.nullable.JsonNullable;

/**
 * Deprecated. Use [RoomV2](https://hathora.dev/api#tag/RoomV2).
 */
public class RoomV1 implements
            MethodCallCreateRoomDeprecated,
            MethodCallDestroyRoomDeprecated,
            MethodCallGetActiveRoomsForProcessDeprecated,
            MethodCallGetConnectionInfoDeprecated,
            MethodCallGetInactiveRoomsForProcessDeprecated,
            MethodCallGetRoomInfoDeprecated,
            MethodCallSuspendRoomDeprecated {

    private final SDKConfiguration sdkConfiguration;

    RoomV1(SDKConfiguration sdkConfiguration) {
        this.sdkConfiguration = sdkConfiguration;
    }

    public dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequestBuilder createRoomDeprecated() {
        return new dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequestBuilder(this);
    }

    /**
     * @param createRoomParams
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedResponse createRoomDeprecated(
            dev.hathora.cloud_api.models.shared.CreateRoomParams createRoomParams,
            Optional<? extends String> appId,
            Optional<? extends String> roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequest
                .builder()
                .createRoomParams(createRoomParams)
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/create",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        Object _convertedRequest = Utils.convertToShape(request, Utils.JsonShape.DEFAULT,
            new TypeReference<java.lang.Object>() {});
        SerializedBody serializedRequestBody = dev.hathora.cloud_api.utils.Utils.serializeRequestBody(
                _convertedRequest, "createRoomParams", "json", false);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        java.util.List<NameValuePair> queryParams = dev.hathora.cloud_api.utils.Utils.getQueryParams(
                dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedRequest.class, request, this.sdkConfiguration.globals);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.CreateRoomDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 201) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                String out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<String>() {});
                res.withRoomId(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        } else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 401 || httpRes.statusCode() == 402 || httpRes.statusCode() == 403 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedRequestBuilder destroyRoomDeprecated() {
        return new dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedResponse destroyRoomDeprecated(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/destroy/{roomId}",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.DestroyRoomDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 204) {
        } else if (httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedRequestBuilder getActiveRoomsForProcessDeprecated() {
        return new dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param processId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedResponse getActiveRoomsForProcessDeprecated(
            Optional<? extends String> appId,
            String processId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedRequest
                .builder()
                .appId(appId)
                .processId(processId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/list/{processId}/active",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 200) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                java.util.List<dev.hathora.cloud_api.models.shared.RoomWithoutAllocations> out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<java.util.List<dev.hathora.cloud_api.models.shared.RoomWithoutAllocations>>() {});
                res.withClasses(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        } else if (httpRes.statusCode() == 401 || httpRes.statusCode() == 404) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedRequestBuilder getConnectionInfoDeprecated() {
        return new dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedResponse getConnectionInfoDeprecated(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/connectioninfo/{roomId}",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = this.sdkConfiguration.defaultClient;

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetConnectionInfoDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 200) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ConnectionInfo out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ConnectionInfo>() {});
                res.withConnectionInfo(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        } else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 402 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedRequestBuilder getInactiveRoomsForProcessDeprecated() {
        return new dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param processId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedResponse getInactiveRoomsForProcessDeprecated(
            Optional<? extends String> appId,
            String processId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedRequest
                .builder()
                .appId(appId)
                .processId(processId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/list/{processId}/inactive",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 200) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                java.util.List<dev.hathora.cloud_api.models.shared.RoomWithoutAllocations> out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<java.util.List<dev.hathora.cloud_api.models.shared.RoomWithoutAllocations>>() {});
                res.withClasses(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        } else if (httpRes.statusCode() == 401 || httpRes.statusCode() == 404) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedRequestBuilder getRoomInfoDeprecated() {
        return new dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedResponse getRoomInfoDeprecated(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/info/{roomId}",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetRoomInfoDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 200) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.Room out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.Room>() {});
                res.withRoom(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        } else if (httpRes.statusCode() == 401 || httpRes.statusCode() == 404) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }


    public dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedRequestBuilder suspendRoomDeprecated() {
        return new dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedRequestBuilder(this);
    }

    /**
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @Deprecated
    public dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedResponse suspendRoomDeprecated(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedRequest request =
            dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedRequest.class,
                baseUrl,
                "/rooms/v1/{appId}/suspend/{roomId}",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.SuspendRoomDeprecatedResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 204) {
        } else if (httpRes.statusCode() == 401 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ApiError out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ApiError>() {});
                res.withApiError(java.util.Optional.ofNullable(out));
            } else {
                throw new SDKError(httpRes, httpRes.statusCode(), "Unknown content-type received: " + contentType, Utils.toByteArrayAndClose(httpRes.body()));
            }
        }

        return res;
    }

}