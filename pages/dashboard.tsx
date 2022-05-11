import React, { useEffect,useCallback, useState } from 'react';
import withSession, { ServerSideProps } from '../lib/withSession';
import { useRouter } from 'next/router';
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

import GradientCard from '../component/GradientCard'

import aqua from '../public/gradients/aqua.png'
import sky from '../public/gradients/sky.png'
import Link from 'next/link';

type Props = {
  user?: {
    user_id: string;
  };
};

const Profile = (props: Props) => {
  const { user } = props;
  const router = useRouter();
  const [name, setName] = useState('')

  useEffect(()=>{
    const customConfig: Config = {
      dictionaries: [adjectives, colors, animals],
      separator: '-',
      length: 3,
    };
    setName(uniqueNamesGenerator(customConfig));
  },[])

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  });

  const signOut = async () => {
    const resp = await fetch('/api/logout', { method: 'POST' });
    if (resp.status === 200) {
      router.push('/');
    }
  };

  return (
    <>
      {!user ? (
        <div />
      ) : (
        <div className='container mt-5 pt-5'>
          <div className='mb-5 pb-5'>
            <div className='float-start'>
            <h5>{`Hi, ${name}`}</h5>
            <p className={'subtitle text-small text-grey'}>🚀 Customise your strategy with us</p>
            </div>
            <div className='float-end'>
            <Link href={'/editor'}><button className='btn btn-primary'>Create Designs</button></Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
            <GradientCard text={'Schedule a free call to consult your marketing strategy.'} link={'https://calendly.com/grammable/30min'} first={'gradient-card-first'}/>
            </div>
            <div className='col-md-6'>
            <GradientCard text={'Talk to our expert to build fine-tune AI model for your specific industry [Experimental]'} link={'https://calendly.com/grammable/30min'} first={'gradient-card-second'}/>
              </div>
          </div>
          <button onClick={signOut}>
            Sign out
          </button>
        </div>
      )}
    </>
  );
};

const getServerSidePropsHandler: ServerSideProps = async ({ req }) => {
  // Get the user's session based on the request
  const user = req.session.get('user') ?? null;
  const props: Props = { user };
  return { props };
};

export const getServerSideProps = withSession(getServerSidePropsHandler);

export default Profile;
