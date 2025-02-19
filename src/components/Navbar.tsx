import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-zinc-900 text-white flex items-center justify-between px-4 mb-4">
      <div className="container mx-auto flex items-center gap-6 justify-between px-4">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-400">
              Brand
            </Link>
          </h1>
        </div>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/posts-client" className="hover:text-gray-400">
                Posts Client
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-400">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/ppr" className="hover:text-gray-400">
                PPR
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-gray-400">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
