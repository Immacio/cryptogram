import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 scrollbar-hide">
      <Head>
        <title>CryptoGram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
