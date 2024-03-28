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


public class ListActivePublicLobbiesRequestBuilder {

    private Optional<? extends String> appId = Optional.empty();
    private Optional<? extends dev.hathora.cloud_api.models.shared.Region> region = Optional.empty();
    private final SDKMethodInterfaces.MethodCallListActivePublicLobbies sdk;

    public ListActivePublicLobbiesRequestBuilder(SDKMethodInterfaces.MethodCallListActivePublicLobbies sdk) {
        this.sdk = sdk;
    }
                
    public ListActivePublicLobbiesRequestBuilder appId(String appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = Optional.of(appId);
        return this;
    }

    public ListActivePublicLobbiesRequestBuilder appId(Optional<? extends String> appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = appId;
        return this;
    }
                
    public ListActivePublicLobbiesRequestBuilder region(dev.hathora.cloud_api.models.shared.Region region) {
        Utils.checkNotNull(region, "region");
        this.region = Optional.of(region);
        return this;
    }

    public ListActivePublicLobbiesRequestBuilder region(Optional<? extends dev.hathora.cloud_api.models.shared.Region> region) {
        Utils.checkNotNull(region, "region");
        this.region = region;
        return this;
    }

    public ListActivePublicLobbiesResponse call() throws Exception {

        return sdk.listActivePublicLobbies(
            appId,
            region);
    }
}