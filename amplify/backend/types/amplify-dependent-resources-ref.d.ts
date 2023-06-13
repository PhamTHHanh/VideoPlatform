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
    "Course": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "StreamArn": "string"
    },
    "CourseCategory": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "StreamArn": "string"
    },
    "Lectures": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "SortKeyName": "string",
      "SortKeyType": "string",
      "StreamArn": "string"
    },
    "fcjvideoplatform": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}