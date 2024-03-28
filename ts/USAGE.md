<!-- Start SDK Example Usage [usage] -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

async function run() {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const result = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "<value>",
            },
            nickname: {},
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->