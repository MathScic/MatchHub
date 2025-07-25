import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MatchHub. Tous droits réservés.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="/mentions-legales"
            className="text-sm hover:text-blue-400 transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="text-sm hover:text-blue-400 transition-colors"
          >
            Confidentialité
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
