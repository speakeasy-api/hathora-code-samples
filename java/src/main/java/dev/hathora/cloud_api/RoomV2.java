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
 * Operations to create, manage, and connect to [rooms](https://hathora.dev/docs/concepts/hathora-entities#room).
 */
public class RoomV2 implements
            MethodCallCreateRoom,
            MethodCallDestroyRoom,
            MethodCallGetActiveRoomsForProcess,
            MethodCallGetConnectionInfo,
            MethodCallGetInactiveRoomsForProcess,
            MethodCallGetRoomInfo,
            MethodCallSuspendRoom,
            MethodCallUpdateRoomConfig {

    private final SDKConfiguration sdkConfiguration;

    RoomV2(SDKConfiguration sdkConfiguration) {
        this.sdkConfiguration = sdkConfiguration;
    }

    public dev.hathora.cloud_api.models.operations.CreateRoomRequestBuilder createRoom() {
        return new dev.hathora.cloud_api.models.operations.CreateRoomRequestBuilder(this);
    }

    /**
     * Create a new [room](https://hathora.dev/docs/concepts/hathora-entities#room) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application). Poll the [`GetConnectionInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetConnectionInfo) endpoint to get connection details for an active room.
     * @param createRoomParams
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.CreateRoomResponse createRoom(
            dev.hathora.cloud_api.models.shared.CreateRoomParams createRoomParams,
            Optional<? extends String> appId,
            Optional<? extends String> roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.CreateRoomRequest request =
            dev.hathora.cloud_api.models.operations.CreateRoomRequest
                .builder()
                .createRoomParams(createRoomParams)
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.CreateRoomRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/create",
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
                dev.hathora.cloud_api.models.operations.CreateRoomRequest.class, request, this.sdkConfiguration.globals);
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
        dev.hathora.cloud_api.models.operations.CreateRoomResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.CreateRoomResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.CreateRoomResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 201) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.CreateRoomResponse out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.CreateRoomResponse>() {});
                res.withCreateRoomResponse(java.util.Optional.ofNullable(out));
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


    public dev.hathora.cloud_api.models.operations.DestroyRoomRequestBuilder destroyRoom() {
        return new dev.hathora.cloud_api.models.operations.DestroyRoomRequestBuilder(this);
    }

    /**
     * Destroy a [room](https://hathora.dev/docs/concepts/hathora-entities#room). All associated metadata is deleted.
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.DestroyRoomResponse destroyRoom(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.DestroyRoomRequest request =
            dev.hathora.cloud_api.models.operations.DestroyRoomRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.DestroyRoomRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/destroy/{roomId}",
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
        dev.hathora.cloud_api.models.operations.DestroyRoomResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.DestroyRoomResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.DestroyRoomResponse res = resBuilder.build();

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


    public dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessRequestBuilder getActiveRoomsForProcess() {
        return new dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessRequestBuilder(this);
    }

    /**
     * Get all active [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
     * @param appId
     * @param processId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessResponse getActiveRoomsForProcess(
            Optional<? extends String> appId,
            String processId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessRequest request =
            dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessRequest
                .builder()
                .appId(appId)
                .processId(processId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/list/{processId}/active",
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
        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetActiveRoomsForProcessResponse res = resBuilder.build();

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


    public dev.hathora.cloud_api.models.operations.GetConnectionInfoRequestBuilder getConnectionInfo() {
        return new dev.hathora.cloud_api.models.operations.GetConnectionInfoRequestBuilder(this);
    }

    /**
     * Poll this endpoint to get connection details to a [room](https://hathora.dev/docs/concepts/hathora-entities#room). Clients can call this endpoint without authentication.
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.GetConnectionInfoResponse getConnectionInfo(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetConnectionInfoRequest request =
            dev.hathora.cloud_api.models.operations.GetConnectionInfoRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetConnectionInfoRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/connectioninfo/{roomId}",
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
        dev.hathora.cloud_api.models.operations.GetConnectionInfoResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetConnectionInfoResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetConnectionInfoResponse res = resBuilder.build();

        res.withRawResponse(httpRes);

        if (httpRes.statusCode() == 200) {
            if (dev.hathora.cloud_api.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                dev.hathora.cloud_api.models.shared.ConnectionInfoV2 out = mapper.readValue(
                    Utils.toUtf8AndClose(httpRes.body()),
                    new TypeReference<dev.hathora.cloud_api.models.shared.ConnectionInfoV2>() {});
                res.withConnectionInfoV2(java.util.Optional.ofNullable(out));
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


    public dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessRequestBuilder getInactiveRoomsForProcess() {
        return new dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessRequestBuilder(this);
    }

    /**
     * Get all inactive [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) for a given [process](https://hathora.dev/docs/concepts/hathora-entities#process).
     * @param appId
     * @param processId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessResponse getInactiveRoomsForProcess(
            Optional<? extends String> appId,
            String processId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessRequest request =
            dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessRequest
                .builder()
                .appId(appId)
                .processId(processId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/list/{processId}/inactive",
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
        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetInactiveRoomsForProcessResponse res = resBuilder.build();

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


    public dev.hathora.cloud_api.models.operations.GetRoomInfoRequestBuilder getRoomInfo() {
        return new dev.hathora.cloud_api.models.operations.GetRoomInfoRequestBuilder(this);
    }

    /**
     * Retreive current and historical allocation data for a [room](https://hathora.dev/docs/concepts/hathora-entities#room).
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.GetRoomInfoResponse getRoomInfo(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.GetRoomInfoRequest request =
            dev.hathora.cloud_api.models.operations.GetRoomInfoRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.GetRoomInfoRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/info/{roomId}",
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
        dev.hathora.cloud_api.models.operations.GetRoomInfoResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.GetRoomInfoResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.GetRoomInfoResponse res = resBuilder.build();

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


    public dev.hathora.cloud_api.models.operations.SuspendRoomRequestBuilder suspendRoom() {
        return new dev.hathora.cloud_api.models.operations.SuspendRoomRequestBuilder(this);
    }

    /**
     * Suspend a [room](https://hathora.dev/docs/concepts/hathora-entities#room). The room is unallocated from the process but can be rescheduled later using the same `roomId`.
     * @param appId
     * @param roomId
     * @return The response from the API call.
     * @throws Exception if the API call fails.
     */
    public dev.hathora.cloud_api.models.operations.SuspendRoomResponse suspendRoom(
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.SuspendRoomRequest request =
            dev.hathora.cloud_api.models.operations.SuspendRoomRequest
                .builder()
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.SuspendRoomRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/suspend/{roomId}",
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
        dev.hathora.cloud_api.models.operations.SuspendRoomResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.SuspendRoomResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.SuspendRoomResponse res = resBuilder.build();

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


    public dev.hathora.cloud_api.models.operations.UpdateRoomConfigRequestBuilder updateRoomConfig() {
        return new dev.hathora.cloud_api.models.operations.UpdateRoomConfigRequestBuilder(this);
    }

    public dev.hathora.cloud_api.models.operations.UpdateRoomConfigResponse updateRoomConfig(
            dev.hathora.cloud_api.models.shared.UpdateRoomConfigParams updateRoomConfigParams,
            Optional<? extends String> appId,
            String roomId) throws Exception {
        dev.hathora.cloud_api.models.operations.UpdateRoomConfigRequest request =
            dev.hathora.cloud_api.models.operations.UpdateRoomConfigRequest
                .builder()
                .updateRoomConfigParams(updateRoomConfigParams)
                .appId(appId)
                .roomId(roomId)
                .build();
        

        String baseUrl = this.sdkConfiguration.serverUrl;

        String url = dev.hathora.cloud_api.utils.Utils.generateURL(
                dev.hathora.cloud_api.models.operations.UpdateRoomConfigRequest.class,
                baseUrl,
                "/rooms/v2/{appId}/update/{roomId}",
                request, this.sdkConfiguration.globals);

        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        Object _convertedRequest = Utils.convertToShape(request, Utils.JsonShape.DEFAULT,
            new TypeReference<java.lang.Object>() {});
        SerializedBody serializedRequestBody = dev.hathora.cloud_api.utils.Utils.serializeRequestBody(
                _convertedRequest, "updateRoomConfigParams", "json", false);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);

        req.addHeader("Accept", "application/json");
        req.addHeader("user-agent", this.sdkConfiguration.userAgent);

        HTTPClient client = dev.hathora.cloud_api.utils.Utils.configureSecurityClient(
                this.sdkConfiguration.defaultClient, this.sdkConfiguration.securitySource.getSecurity());

        HttpResponse<InputStream> httpRes = client.send(req);

        String contentType = httpRes
            .headers()
            .firstValue("Content-Type")
            .orElse("application/octet-stream");
        dev.hathora.cloud_api.models.operations.UpdateRoomConfigResponse.Builder resBuilder = 
            dev.hathora.cloud_api.models.operations.UpdateRoomConfigResponse
                .builder()
                .contentType(contentType)
                .statusCode(httpRes.statusCode())
                .rawResponse(httpRes);

        dev.hathora.cloud_api.models.operations.UpdateRoomConfigResponse res = resBuilder.build();

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
