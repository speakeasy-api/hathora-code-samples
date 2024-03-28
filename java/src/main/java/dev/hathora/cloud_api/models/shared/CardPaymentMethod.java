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


public class CardPaymentMethod {

    @JsonProperty("brand")
    private CardBrand brand;

    @JsonProperty("last4")
    private String last4;

    public CardPaymentMethod(
            @JsonProperty("brand") CardBrand brand,
            @JsonProperty("last4") String last4) {
        Utils.checkNotNull(brand, "brand");
        Utils.checkNotNull(last4, "last4");
        this.brand = brand;
        this.last4 = last4;
    }

    public CardBrand brand() {
        return brand;
    }

    public String last4() {
        return last4;
    }

    public final static Builder builder() {
        return new Builder();
    }

    public CardPaymentMethod withBrand(CardBrand brand) {
        Utils.checkNotNull(brand, "brand");
        this.brand = brand;
        return this;
    }

    public CardPaymentMethod withLast4(String last4) {
        Utils.checkNotNull(last4, "last4");
        this.last4 = last4;
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
        CardPaymentMethod other = (CardPaymentMethod) o;
        return 
            java.util.Objects.deepEquals(this.brand, other.brand) &&
            java.util.Objects.deepEquals(this.last4, other.last4);
    }
    
    @Override
    public int hashCode() {
        return java.util.Objects.hash(
            brand,
            last4);
    }
    
    @Override
    public String toString() {
        return Utils.toString(CardPaymentMethod.class,
                "brand", brand,
                "last4", last4);
    }
    
    public final static class Builder {
 
        private CardBrand brand;
 
        private String last4;  
        
        private Builder() {
          // force use of static builder() method
        }

        public Builder brand(CardBrand brand) {
            Utils.checkNotNull(brand, "brand");
            this.brand = brand;
            return this;
        }

        public Builder last4(String last4) {
            Utils.checkNotNull(last4, "last4");
            this.last4 = last4;
            return this;
        }
        
        public CardPaymentMethod build() {
            return new CardPaymentMethod(
                brand,
                last4);
        }
    }
}

