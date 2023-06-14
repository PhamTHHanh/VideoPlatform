import React from 'react';
import './Animation.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { View, Heading, Text, useTheme, Image, Button } from '@aws-amplify/ui-react';
import awsconfig from '../../aws-exports';


Amplify.configure(awsconfig);

const Header = () => {
  const { tokens } = useTheme();
  return (
    <View className="AuthStateApp__Header" textAlign="center" padding={tokens.space.large}>
      {/* <Image
        alt="Amplify logo"
        src="https://docs.amplify.aws/assets/logo-dark.svg"
      /> */}
    </View>
  );
};

const SignInHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__SignInHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Sign in to your account
    </Heading>
  );
};

const SignInFooter = () => {
  const { toResetPassword } = useAuthenticator();
  return (
    <View className="AuthStateApp__SignInFooter" textAlign="center">
      <Button className="AuthStateApp__SignInFooterButton" fontWeight="normal" onClick={toResetPassword} size="small" variation="link">
        Reset Password
      </Button>
    </View>
  );
};

const SignUpHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__SignUpHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Create a new account
    </Heading>
  );
};

const SignUpFooter = () => {
  const { toSignIn } = useAuthenticator();
  return (
    <View className="AuthStateApp__SignUpFooter" textAlign="center">
      <Button className="AuthStateApp__SignUpFooterButton" fontWeight="normal" onClick={toSignIn} size="small" variation="link">
        Back to Sign In
      </Button>
    </View>
  );
};

const ConfirmSignUpHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__ConfirmSignUpHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Enter Information:
    </Heading>
  );
};

const ConfirmSignUpFooter = () => {
  return <Text className="AuthStateApp__ConfirmSignUpFooter">Footer Information</Text>;
};

const SetupTOTPHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__SetupTOTPHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Enter Information:
    </Heading>
  );
};

const SetupTOTPFooter = () => {
  return <Text className="AuthStateApp__SetupTOTPFooter">Footer Information</Text>;
};

const ConfirmSignInHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__ConfirmSignInHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Enter Information:
    </Heading>
  );
};

const ConfirmSignInFooter = () => {
  return <Text className="AuthStateApp__ConfirmSignInFooter">Footer Information</Text>;
};

const ResetPasswordHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__ResetPasswordHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Enter Information:
    </Heading>
  );
};

const ResetPasswordFooter = () => {
  return <Text className="AuthStateApp__ResetPasswordFooter">Footer Information</Text>;
};

const ConfirmResetPasswordHeader = () => {
  const { tokens } = useTheme();
  return (
    <Heading className="AuthStateApp__ConfirmResetPasswordHeader" padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
      Enter Information:
    </Heading>
  );
};

const ConfirmResetPasswordFooter = () => {
  return <Text className="AuthStateApp__ConfirmResetPasswordFooter">Footer Information</Text>;
};


const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter,
  },
  SignUp: {
    Header: SignUpHeader,
    Footer: SignUpFooter,
  },
  ConfirmSignUp: {
    Header: ConfirmSignUpHeader,
    Footer: ConfirmSignUpFooter,
  },
  SetupTOTP: {
    Header: SetupTOTPHeader,
    Footer: SetupTOTPFooter,
  },
  ConfirmSignIn: {
    Header: ConfirmSignInHeader,
    Footer: ConfirmSignInFooter,
  },
  ResetPassword: {
    Header: ResetPasswordHeader,
    Footer: ResetPasswordFooter,
  },
  ConfirmResetPassword: {
    Header: ConfirmResetPasswordHeader,
    Footer: ConfirmResetPasswordFooter,
  },
};


const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default function AuthStateApp() {
  return (
    <Authenticator
      formFields={formFields}
      components={components}
      socialProviders={['amazon', 'facebook', 'google']}
    >
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}
