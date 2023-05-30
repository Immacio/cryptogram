import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { MdSettingsEthernet } from 'react-icons/md';

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-md">
      <div className="mx-5 flex max-w-5xl justify-between lg:mx-auto lg:max-w-6xl">
        {/* Left */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden cursor-pointer items-center space-x-1 md:inline-flex"
        >
          <MdSettingsEthernet size="2.5rem" />
          <h3 className="text-lg font-bold">CryptoGram</h3>
        </div>

        <div
          onClick={() => router.push('/')}
          className="relative flex w-10 flex-shrink-0 cursor-pointer items-center md:hidden"
        >
          <MdSettingsEthernet size="2.5rem" />
        </div>
        {/* Middle - search input */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="focus: block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navButton" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navButton relative">
                <PaperAirplaneIcon className="navButton" />
                <div className="absolute -top-1 -right-1 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navButton"
              />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-8 w-8 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button className="text-sm" onClick={signIn}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
