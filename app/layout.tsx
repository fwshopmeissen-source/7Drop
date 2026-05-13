import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '7Drop.de - Exklusiver Dropshipping Marktplatz',
  description: 'Jeden Sonntag um 12:00 Uhr - 7 exklusive Produkte für registrierte Mitglieder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-white text-black font-sans">
        <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="font-serif text-3xl font-bold">7Drop.de</h1>
            <nav className="flex gap-6">
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-600">
            <p>&copy; 2026 7Drop.de - Alle Rechte vorbehalten</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
