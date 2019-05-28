import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import aws_config from './aws-exports';

export default new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_config.aws_appsync_apiKey
  }
});