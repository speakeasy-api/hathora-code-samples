# GetPingServiceEndpointsResponse


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `discoveryResponse`                                                            | [components.DiscoveryResponse](../../models/components/discoveryresponse.md)[] | :heavy_minus_sign:                                                             | Ok                                                                             | [<br/>{<br/>"region": "Seattle",<br/>"host": "ping.hathora.dev",<br/>"port": 2000<br/>}<br/>] |