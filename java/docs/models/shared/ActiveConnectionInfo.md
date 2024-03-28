# ActiveConnectionInfo


## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`                                                                                                                                                                            | *String*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `port`                                                                                                                                                                            | *double*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `roomId`                                                                                                                                                                          | *String*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.<br/>Note: error will be returned if `roomId` is not globally unique. | 2swovpy1fnunu                                                                                                                                                                     |
| `status`                                                                                                                                                                          | [dev.hathora.cloud_api.models.shared.Status](../../models/shared/Status.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `transportType`                                                                                                                                                                   | [dev.hathora.cloud_api.models.shared.TransportType](../../models/shared/TransportType.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                | Transport type specifies the underlying communication protocol to the exposed port.                                                                                               |                                                                                                                                                                                   |