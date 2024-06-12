// import { AuthService } from "./AuthService";

// async function testAuth(){
//     const service = new AuthService();
//     const loginResult = await service.login(
//         'barosanu',
//         'Barosanu1!)'
//     )
//     console.log(loginResult);
// }

// testAuth();

import { fetchAuthSession } from '@aws-amplify/auth';
import { AuthService } from './AuthService';
 
async function testAuth() {
  const service = new AuthService();
  await service.login('barosanu', 'Barosanu1!');
 
  const { idToken } = (await fetchAuthSession()).tokens ?? {};
 
  console.log(idToken?.toString());
 
  return idToken;
}
 
testAuth();