/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api.models.operations;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.type.TypeReference;
import dev.hathora.cloud_api.utils.SpeakeasyMetadata;
import dev.hathora.cloud_api.utils.Utils;
import java.io.InputStream;
import java.lang.Deprecated;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Optional;


public class CreatePrivateLobbyRequest {

    @SpeakeasyMetadata("request:mediaType=application/json")
    private CreatePrivateLobbyRequestBody requestBody;

    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    private Optional<? extends String> appId;

    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roomId")
    private Optional<? extends String> roomId;

    public CreatePrivateLobbyRequest(
            CreatePrivateLobbyRequestBody requestBody,
            Optional<? extends String> appId,
            Optional<? extends String> roomId) {
        Utils.checkNotNull(requestBody, "requestBody");
        Utils.checkNotNull(appId, "appId");
        Utils.checkNotNull(roomId, "roomId");
        this.requestBody = requestBody;
        this.appId = appId;
        this.roomId = roomId;
    }

    public CreatePrivateLobbyRequestBody requestBody() {
        return requestBody;
    }

    public Optional<? extends String> appId() {
        return appId;
    }

    public Optional<? extends String> roomId() {
        return roomId;
    }

    public final static Builder builder() {
        return new Builder();
    }

    public CreatePrivateLobbyRequest withRequestBody(CreatePrivateLobbyRequestBody requestBody) {
        Utils.checkNotNull(requestBody, "requestBody");
        this.requestBody = requestBody;
        return this;
    }

    public CreatePrivateLobbyRequest withAppId(String appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = Optional.ofNullable(appId);
        return this;
    }

    public CreatePrivateLobbyRequest withAppId(Optional<? extends String> appId) {
        Utils.checkNotNull(appId, "appId");
        this.appId = appId;
        return this;
    }

    public CreatePrivateLobbyRequest withRoomId(String roomId) {
        Utils.checkNotNull(roomId, "roomId");
        this.roomId = Optional.ofNullable(roomId);
        return this;
    }

    public CreatePrivateLobbyRequest withRoomId(Optional<? extends String> roomId) {
        Utils.checkNotNull(roomId, "roomId");
        this.roomId = roomId;
        return this;
    }
    
    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreatePrivateLobbyRequest other = (CreatePrivateLobbyRequest) o;
        return 
            java.util.Objects.deepEquals(this.requestBody, other.requestBody) &&
            java.util.Objects.deepEquals(this.appId, other.appId) &&
            java.util.Objects.deepEquals(this.roomId, other.roomId);
    }
    
    @Override
    public int hashCode() {
        return java.util.Objects.hash(
            requestBody,
            appId,
            roomId);
    }
    
    @Override
    public String toString() {
        return Utils.toString(CreatePrivateLobbyRequest.class,
                "requestBody", requestBody,
                "appId", appId,
                "roomId", roomId);
    }
    
    public final static class Builder {
 
        private CreatePrivateLobbyRequestBody requestBody;
 
        private Optional<? extends String> appId = Optional.empty();
 
        private Optional<? extends String> roomId = Optional.empty();  
        
        private Builder() {
          // force use of static builder() method
        }

        public Builder requestBody(CreatePrivateLobbyRequestBody requestBody) {
            Utils.checkNotNull(requestBody, "requestBody");
            this.requestBody = requestBody;
            return this;
        }

        public Builder appId(String appId) {
            Utils.checkNotNull(appId, "appId");
            this.appId = Optional.ofNullable(appId);
            return this;
        }

        public Builder appId(Optional<? extends String> appId) {
            Utils.checkNotNull(appId, "appId");
            this.appId = appId;
            return this;
        }

        public Builder roomId(String roomId) {
            Utils.checkNotNull(roomId, "roomId");
            this.roomId = Optional.ofNullable(roomId);
            return this;
        }

        public Builder roomId(Optional<? extends String> roomId) {
            Utils.checkNotNull(roomId, "roomId");
            this.roomId = roomId;
            return this;
        }
        
        public CreatePrivateLobbyRequest build() {
            return new CreatePrivateLobbyRequest(
                requestBody,
                appId,
                roomId);
        }
    }
}

