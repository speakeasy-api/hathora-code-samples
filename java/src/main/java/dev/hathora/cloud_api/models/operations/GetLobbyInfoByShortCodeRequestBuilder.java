/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api.models.operations;

import com.fasterxml.jackson.core.type.TypeReference;
import dev.hathora.cloud_api.models.errors.SDKError;
import dev.hathora.cloud_api.utils.LazySingletonValue;
import dev.hathora.cloud_api.utils.Utils;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.stream.Stream;
import org.openapitools.jackson.nullable.JsonNullable;


public class GetLobbyInfoByShortCodeRequestBuilder {

    private Optional<? extends String> appId = Optional.empty();
    private String shortCode;
    private final SDKMethodInterfaces.MethodCallGetLobbyInfoByShortCode sdk;

    public GetLobbyInfoByShortCodeRequestBuilder(SDKMethodInterfaces.MethodCallGetLobbyInfoByShortCode sdk) {
        this.sdk = sdk;
    }
                
    public GetLobbyInfoByShortCodeRequestBuilder appId(String appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = Optional.of(appId);
        return this;
    }

    public GetLobbyInfoByShortCodeRequestBuilder appId(Optional<? extends String> appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = appId;
        return this;
    }

    public GetLobbyInfoByShortCodeRequestBuilder shortCode(String shortCode) {
        Utils.checkNotNull(shortCode, "shortCode");
        this.shortCode = shortCode;
        return this;
    }

    public GetLobbyInfoByShortCodeResponse call() throws Exception {

        return sdk.getLobbyInfoByShortCode(
            appId,
            shortCode);
    }
}