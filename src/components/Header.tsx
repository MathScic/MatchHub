import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 gap-20 flex items-center justify-center">
          <Link href="/" className="text-lg font-bold">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              href={"/dashboard"}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href={"/matches"}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Matches
            </Link>
            <Link
              href={"/profile"}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Profile
            </Link>
            <Link
              href={"/login"}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
