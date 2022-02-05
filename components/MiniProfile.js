import React from 'react';
import { signOut, useSession } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="mt-14 ml-10 flex items-center justify-between border bg-white">
      <div className="flex items-center p-3">
        <img
          className="h-14 w-14 rounded-full border p-[2px]"
          src={session.user?.image}
          alt=""
        />

        <div className="mx-4 flex-1">
          <h2 className="font-bold">{session?.user?.username}</h2>
          <h3 className="text-sm text-gray-400">Welcome to Cryptogram</h3>
        </div>

        <button
          onClick={signOut}
          className="text-sm font-semibold text-blue-400"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default MiniProfile;
