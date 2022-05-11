import React, { useState } from 'react';
import SignInForm from './SignInForm';
import VerifyOTPForm from './VerifyOTPForm';

type Props = {
  signup: boolean;
};

const LogInnWithEmailPasscode = (props: Props): JSX.Element => {
    const [otpSent, setOTPSent] = useState(false);
    const [email, setEmail] = useState('');
    const [methodId, setMethodId] = useState('');
    
  return (
      <>
      {!otpSent ? (
        <SignInForm
          email={email}
          setMethodId={setMethodId}
          setOTPSent={setOTPSent}
          setEmail={setEmail}
          signup={props.signup}
        />
      ) : (
        <VerifyOTPForm methodId={methodId} email={email} />
      )}
      </>
  );
};

export default LogInnWithEmailPasscode;
