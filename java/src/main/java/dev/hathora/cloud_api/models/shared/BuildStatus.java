/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.type.TypeReference;
import dev.hathora.cloud_api.utils.Utils;
import java.io.InputStream;
import java.lang.Deprecated;
import java.math.BigDecimal;
import java.math.BigInteger;

public enum BuildStatus {
    CREATED("created"),
    RUNNING("running"),
    SUCCEEDED("succeeded"),
    FAILED("failed");

    @JsonValue
    private final String value;

    private BuildStatus(String value) {
        this.value = value;
    }
    
    public String value() {
        return value;
    }
}
