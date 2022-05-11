import { useState, useEffect } from 'react'
import Head from 'next/head'
import withSession, { ServerSideProps } from '../lib/withSession';
import LoginWithEmailPasscode from '../component/LogInWithEmailPasscode'
import { useRouter } from 'next/router';

type Props = {
  publicToken: string;
  user: {
    user_id: string;
  };
};

const Home = (props: Props) => {
  const { user, publicToken } = props;
  const router = useRouter();

   useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  });
  return (
    <>
     <Head>
        <title>Grammable</title>
        <meta name="description" content="New way of designing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <main className="row auth-screen">
    <div className="col-lg-5 sign-in-form pt-8">
         <LoginWithEmailPasscode signup={false}/>
    </div>
    <div className="col-lg-7 highlights align-self-center px-5 mt-3 d-none d-lg-block">
      <h2>Personalised assistant for your designs.</h2>
      <p className='subtitle font-light'>Start creating any type of contents, from ads for mobile, to slides for presentation.</p>
    </div>
  </main>
     </>
  )
}

const getServerSidePropsHandler: ServerSideProps = async ({ req }) => {
  // Get the user's session based on the request
  const user = req.session.get('user') ?? null;
  const props: Props = {
    publicToken: process.env.STYTCH_PUBLIC_TOKEN || '',
    user,
  };
  return { props };
};

export const getServerSideProps = withSession(getServerSidePropsHandler);
export default Home