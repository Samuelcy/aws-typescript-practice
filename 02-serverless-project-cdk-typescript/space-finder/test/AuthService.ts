// import { type CognitoUser } from '@aws-amplify/auth';
// import { Amplify, Auth } from 'aws-amplify';

// const awsRegion = 'eu-west-1'

// Amplify.configure({
//     Auth: {
//         region: awsRegion,
//         userPoolId: 'eu-west-1_azOXLiuLi',
//         userPoolWebClientId: 'nu59r0nf8djfh9uordchjmjm4',
//         authenticationFlowType: 'USER_PASSWORD_AUTH'
//     }
// });



// export class AuthService {


//     public async login(userName: string, password: string) {
//         const result = await Auth.signIn(userName, password) as CognitoUser;
//         return result;
//     }
// }

import { SignInOutput, signIn } from '@aws-amplify/auth';
import { Amplify } from 'aws-amplify';
 
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-west-1_1ScBVnE4K',
      userPoolClientId: '17qqf57tb3iqv5n00pjg2jtdgs',
    },
  },
});
 
export class AuthService {
  public async login(username: string, password: string) {
    const result = (await signIn({
      username,
      password,
      options: {
        authFlowType: 'USER_PASSWORD_AUTH',
      },
    })) as SignInOutput;
    return result;
  }
}