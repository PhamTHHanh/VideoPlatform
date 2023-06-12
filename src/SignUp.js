//1.
import React from 'react';
import { Amplify } from 'aws-amplify';
//2.
import awsExports from './aws-exports';
//3.
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

//4.
Amplify.configure(awsExports)

function SignUp () {
 return(
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
 )
}

//6.
export default SignUp
