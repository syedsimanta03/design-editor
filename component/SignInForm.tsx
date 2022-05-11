import Link from "next/link";
import { useState } from "react"
import { sendOTP } from '../lib/otpUtils'; 


type Props = {
  email: string;
  setMethodId: (methodId: string) => void;
  setOTPSent: (submitted: boolean) => void;
  setEmail: (email: string) => void;
  signup: boolean;
};

const SignInForm = (props: Props): JSX.Element => {
  const { email, setMethodId, setOTPSent, setEmail } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  
  const onSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    const methodId = await sendOTP(email);
    setMethodId(methodId);
    setOTPSent(true);
  }
  return (
    <div className='card-sign-in'>
    <img src='/logo.png' width={'60px'} />
    <p className="mt-3 font-bold">We are changing the way we ship designs.</p>
    <p className="d-block d-sm-none">We are not optimized for mobile phone. Please open with your desktop view.</p>
    <form onSubmit={onSubmit} className='form-group d-none d-sm-block'>
        <input className="form-control mt-5" type="email" placeholder="Email address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        {props.signup ? <button className="btn btn-primary mt-4" type="submit">Create Account</button> :
        <button className="btn btn-primary mt-4" type="submit">Log In</button>
        } 
        <div className="separator">Other Provider</div>
        <button className="btn btn-secondary mt-4" disabled>Sign in with Google (Coming Soon)</button>
        <p className="text-small font-light text-grey mt-3">By clicking the button above, you agree to our Terms of Service
and Privacy Policy.</p>
{props.signup ? <p className="text-small font-light text-grey mt-3">Already have an account? <Link href="/">Log in</Link></p> :
        <p className="text-small font-light text-grey mt-3">Are you new to Grammable? <Link href="/signup">Sign up</Link></p>
        } 
    </form>

    </div>
  )
}

export default SignInForm