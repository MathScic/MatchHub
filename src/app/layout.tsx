import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MatchHub",
  description: "Connectez vos stat de jeux et trouvez des partenaires de jeu",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="p-6 max-w-5xl mx-auto flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
