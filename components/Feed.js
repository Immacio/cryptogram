import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`mx-auto grid grid-cols-1 md:max-w-2xl md:grid-cols-2 xl:max-w-4xl xl:grid-cols-3 ${
        !session && '!max-w-2xl !grid-cols-1'
      }`}
    >
      {/* Stories + Posts section set to 2 column width */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className="hidden md:col-span-1 xl:inline-block">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
