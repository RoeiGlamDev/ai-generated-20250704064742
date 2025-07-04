import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between">
      <Link href="/">
        <a className="text-lg font-bold">GoldTube</a>
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <a className="text-lg">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/upload">
            <a className="text-lg">Upload</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a className="text-lg">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className="text-lg">Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}