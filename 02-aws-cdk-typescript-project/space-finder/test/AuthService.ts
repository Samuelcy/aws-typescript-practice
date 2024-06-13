import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers'

const awsRegion = 'us-west-1'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'us-west-1_1ScBVnE4K',
        userPoolWebClientId: '17qqf57tb3iqv5n00pjg2jtdgs',
        identityPoolId: 'us-west-1:9f943453-ef9e-4d87-b782-9dcbb5d731a1',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});

export class AuthService {
  public async login(userName: string, password: string) {
      const result = await Auth.signIn(userName, password) as CognitoUser;
      return result;
  }

  public async generateTemporaryCredentials(user: CognitoUser){
      const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
      const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/us-west-1_1ScBVnE4K`;
      const cognitoIdentity = new CognitoIdentityClient({
          credentials: fromCognitoIdentityPool({
              identityPoolId: 'us-west-1:9f943453-ef9e-4d87-b782-9dcbb5d731a1',
              logins: {
                  [cognitoIdentityPool]: jwtToken
              }
          })
      });
      
      const credentials = await cognitoIdentity.config.credentials();
      return credentials;
  }
}