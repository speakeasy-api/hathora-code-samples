/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api.models.operations;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.type.TypeReference;
import dev.hathora.cloud_api.utils.Utils;
import java.io.InputStream;
import java.lang.Deprecated;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.http.HttpResponse;
import java.util.Optional;


public class GetInvoicesResponse implements dev.hathora.cloud_api.utils.Response {

    private Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError;

    /**
     * HTTP response content type for this operation
     */
    private String contentType;

    /**
     * HTTP response status code for this operation
     */
    private int statusCode;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    private HttpResponse<InputStream> rawResponse;

    /**
     * Ok
     */
    private Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes;

    public GetInvoicesResponse(
            Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError,
            String contentType,
            int statusCode,
            HttpResponse<InputStream> rawResponse,
            Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes) {
        Utils.checkNotNull(apiError, "apiError");
        Utils.checkNotNull(contentType, "contentType");
        Utils.checkNotNull(statusCode, "statusCode");
        Utils.checkNotNull(rawResponse, "rawResponse");
        Utils.checkNotNull(classes, "classes");
        this.apiError = apiError;
        this.contentType = contentType;
        this.statusCode = statusCode;
        this.rawResponse = rawResponse;
        this.classes = classes;
    }

    public Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError() {
        return apiError;
    }

    /**
     * HTTP response content type for this operation
     */
    public String contentType() {
        return contentType;
    }

    /**
     * HTTP response status code for this operation
     */
    public int statusCode() {
        return statusCode;
    }

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    public HttpResponse<InputStream> rawResponse() {
        return rawResponse;
    }

    /**
     * Ok
     */
    public Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes() {
        return classes;
    }

    public final static Builder builder() {
        return new Builder();
    }

    public GetInvoicesResponse withApiError(dev.hathora.cloud_api.models.shared.ApiError apiError) {
        Utils.checkNotNull(apiError, "apiError");
        this.apiError = Optional.ofNullable(apiError);
        return this;
    }

    public GetInvoicesResponse withApiError(Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError) {
        Utils.checkNotNull(apiError, "apiError");
        this.apiError = apiError;
        return this;
    }

    /**
     * HTTP response content type for this operation
     */
    public GetInvoicesResponse withContentType(String contentType) {
        Utils.checkNotNull(contentType, "contentType");
        this.contentType = contentType;
        return this;
    }

    /**
     * HTTP response status code for this operation
     */
    public GetInvoicesResponse withStatusCode(int statusCode) {
        Utils.checkNotNull(statusCode, "statusCode");
        this.statusCode = statusCode;
        return this;
    }

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    public GetInvoicesResponse withRawResponse(HttpResponse<InputStream> rawResponse) {
        Utils.checkNotNull(rawResponse, "rawResponse");
        this.rawResponse = rawResponse;
        return this;
    }

    /**
     * Ok
     */
    public GetInvoicesResponse withClasses(java.util.List<dev.hathora.cloud_api.models.shared.Invoice> classes) {
        Utils.checkNotNull(classes, "classes");
        this.classes = Optional.ofNullable(classes);
        return this;
    }

    /**
     * Ok
     */
    public GetInvoicesResponse withClasses(Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes) {
        Utils.checkNotNull(classes, "classes");
        this.classes = classes;
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
        GetInvoicesResponse other = (GetInvoicesResponse) o;
        return 
            java.util.Objects.deepEquals(this.apiError, other.apiError) &&
            java.util.Objects.deepEquals(this.contentType, other.contentType) &&
            java.util.Objects.deepEquals(this.statusCode, other.statusCode) &&
            java.util.Objects.deepEquals(this.rawResponse, other.rawResponse) &&
            java.util.Objects.deepEquals(this.classes, other.classes);
    }
    
    @Override
    public int hashCode() {
        return java.util.Objects.hash(
            apiError,
            contentType,
            statusCode,
            rawResponse,
            classes);
    }
    
    @Override
    public String toString() {
        return Utils.toString(GetInvoicesResponse.class,
                "apiError", apiError,
                "contentType", contentType,
                "statusCode", statusCode,
                "rawResponse", rawResponse,
                "classes", classes);
    }
    
    public final static class Builder {
 
        private Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError = Optional.empty();
 
        private String contentType;
 
        private Integer statusCode;
 
        private HttpResponse<InputStream> rawResponse;
 
        private Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes = Optional.empty();  
        
        private Builder() {
          // force use of static builder() method
        }

        public Builder apiError(dev.hathora.cloud_api.models.shared.ApiError apiError) {
            Utils.checkNotNull(apiError, "apiError");
            this.apiError = Optional.ofNullable(apiError);
            return this;
        }

        public Builder apiError(Optional<? extends dev.hathora.cloud_api.models.shared.ApiError> apiError) {
            Utils.checkNotNull(apiError, "apiError");
            this.apiError = apiError;
            return this;
        }

        /**
         * HTTP response content type for this operation
         */
        public Builder contentType(String contentType) {
            Utils.checkNotNull(contentType, "contentType");
            this.contentType = contentType;
            return this;
        }

        /**
         * HTTP response status code for this operation
         */
        public Builder statusCode(int statusCode) {
            Utils.checkNotNull(statusCode, "statusCode");
            this.statusCode = statusCode;
            return this;
        }

        /**
         * Raw HTTP response; suitable for custom response parsing
         */
        public Builder rawResponse(HttpResponse<InputStream> rawResponse) {
            Utils.checkNotNull(rawResponse, "rawResponse");
            this.rawResponse = rawResponse;
            return this;
        }

        /**
         * Ok
         */
        public Builder classes(java.util.List<dev.hathora.cloud_api.models.shared.Invoice> classes) {
            Utils.checkNotNull(classes, "classes");
            this.classes = Optional.ofNullable(classes);
            return this;
        }

        /**
         * Ok
         */
        public Builder classes(Optional<? extends java.util.List<dev.hathora.cloud_api.models.shared.Invoice>> classes) {
            Utils.checkNotNull(classes, "classes");
            this.classes = classes;
            return this;
        }
        
        public GetInvoicesResponse build() {
            return new GetInvoicesResponse(
                apiError,
                contentType,
                statusCode,
                rawResponse,
                classes);
        }
    }
}

