import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
