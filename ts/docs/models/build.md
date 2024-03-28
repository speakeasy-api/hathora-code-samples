# Build

A build represents a game server artifact and its associated metadata.


## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                 | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | System generated unique identifier for an application.                                                                  | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                |
| `buildId`                                                                                                               | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | System generated id for a build. Increments by 1.                                                                       | 1                                                                                                                       |
| `buildTag`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 0.1.14-14c793                                                                                                           |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | When [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild) is called.                            |                                                                                                                         |
| `createdBy`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | UserId or email address for the user that created the build.                                                            | google-oauth2\|107030234048588177467                                                                                    |
| `deletedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | When the build was deleted.                                                                                             |                                                                                                                         |
| `finishedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) finished executing.                         |                                                                                                                         |
| `imageSize`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The size (in bytes) of the Docker image built by Hathora.                                                               |                                                                                                                         |
| ~~`regionalContainerTags`~~                                                                                             | [models.RegionalContainerTags](../models/regionalcontainertags.md)[]                                                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | When [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) is called.                                  |                                                                                                                         |
| `status`                                                                                                                | [models.BuildStatus](../models/buildstatus.md)                                                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |