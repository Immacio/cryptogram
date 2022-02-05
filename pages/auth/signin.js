import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import React from 'react';
import Header from '../../components/Header';

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs">This is the signin page. not a real app.</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-stone-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
