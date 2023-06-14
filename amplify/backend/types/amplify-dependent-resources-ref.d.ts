export type AmplifyDependentResourcesAttributes = {
  "api": {
    "fcjvideoplatformapi": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "fcjvideoplatform3cf04494": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "crudCourse": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },

  "storage": {
    "fcjvideoplatform": {
      "BucketName": "string",
      "Region": "string"
    },
    "Course": {
      "Name": "string",
      "Arn": "string",
      "StreamArn": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string"
    },
    "Lectures": {
      "Name": "string",
      "Arn": "string",
      "StreamArn": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "SortKeyName": "string",
      "SortKeyType": "string",
      "Region": "string"
    },
    "Section": {
      "Name": "string",
      "Arn": "string",
      "StreamArn": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "SortKeyName": "string",
      "SortKeyType": "string",
      "Region": "string"
    }
  }
}