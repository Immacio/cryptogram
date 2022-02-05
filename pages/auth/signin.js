import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import React from 'react';
import { MdSettingsEthernet } from 'react-icons/md';
import Header from '../../components/Header';

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-14 text-center">
        <div className="rounded-md border bg-white p-10">
          <h3 className="text-4xl font-bold text-black">Welcome to</h3>
          <div className="flex items-center justify-center space-x-2">
            <MdSettingsEthernet size="7rem" />
            <h3 className="text-6xl font-bold">CryptoGram</h3>
          </div>

          <p className="font-sm w-15 justify-center pt-10 text-center">
            Feel free to sign in with Google to gain access to the <br />
            uploading, commenting and liking features. <br />
            <br />
            Note: CryptoGram is secured using OAuth, your Google account
            <br />
            details are encrypted and cannot be accessed by CryptoGram.
          </p>
          <div className="mt-20">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="rounded-lg bg-gray-600 p-3 font-semibold text-white"
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
