import Head from 'next/head';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Manage your uploaded videos here.</p>
    </div>
  );
}