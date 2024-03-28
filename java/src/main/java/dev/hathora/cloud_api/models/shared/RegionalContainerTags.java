/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package dev.hathora.cloud_api.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.type.TypeReference;
import dev.hathora.cloud_api.utils.Utils;
import java.io.InputStream;
import java.lang.Deprecated;
import java.math.BigDecimal;
import java.math.BigInteger;


public class RegionalContainerTags {

    @JsonProperty("containerTag")
    private String containerTag;

    @JsonProperty("region")
    private Region region;

    public RegionalContainerTags(
            @JsonProperty("containerTag") String containerTag,
            @JsonProperty("region") Region region) {
        Utils.checkNotNull(containerTag, "containerTag");
        Utils.checkNotNull(region, "region");
        this.containerTag = containerTag;
        this.region = region;
    }

    public String containerTag() {
        return containerTag;
    }

    public Region region() {
        return region;
    }

    public final static Builder builder() {
        return new Builder();
    }

    public RegionalContainerTags withContainerTag(String containerTag) {
        Utils.checkNotNull(containerTag, "containerTag");
        this.containerTag = containerTag;
        return this;
    }

    public RegionalContainerTags withRegion(Region region) {
        Utils.checkNotNull(region, "region");
        this.region = region;
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
        RegionalContainerTags other = (RegionalContainerTags) o;
        return 
            java.util.Objects.deepEquals(this.containerTag, other.containerTag) &&
            java.util.Objects.deepEquals(this.region, other.region);
    }
    
    @Override
    public int hashCode() {
        return java.util.Objects.hash(
            containerTag,
            region);
    }
    
    @Override
    public String toString() {
        return Utils.toString(RegionalContainerTags.class,
                "containerTag", containerTag,
                "region", region);
    }
    
    public final static class Builder {
 
        private String containerTag;
 
        private Region region;  
        
        private Builder() {
          // force use of static builder() method
        }

        public Builder containerTag(String containerTag) {
            Utils.checkNotNull(containerTag, "containerTag");
            this.containerTag = containerTag;
            return this;
        }

        public Builder region(Region region) {
            Utils.checkNotNull(region, "region");
            this.region = region;
            return this;
        }
        
        public RegionalContainerTags build() {
            return new RegionalContainerTags(
                containerTag,
                region);
        }
    }
}

