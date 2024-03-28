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

/**
 * MetricName - Available metrics to query over time.
 */
public enum MetricName {
    CPU("cpu"),
    MEMORY("memory"),
    RATE_EGRESS("rate_egress"),
    TOTAL_EGRESS("total_egress"),
    ACTIVE_CONNECTIONS("active_connections");

    @JsonValue
    private final String value;

    private MetricName(String value) {
        this.value = value;
    }
    
    public String value() {
        return value;
    }
}
