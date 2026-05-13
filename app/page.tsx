'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown('Nächster Drop: Sonntag um 12:00 Uhr');
    };
    updateCountdown();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-6xl font-bold mb-6">7Drop.de</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Der exklusivste Dropshipping-Marktplatz im Internet
        </p>
        <p className="text-xl text-gray-500 mb-12">
          Nur für registrierte Mitglieder | Jeden Sonntag um 12:00 Uhr
        </p>

        <div className="countdown-timer mb-12">
          {countdown || 'PLACEHOLDER: Countdown wird geladen...'}
        </div>

        <div className="flex gap-6 justify-center">
          <Link href="/auth/register">
            <button className="btn-primary text-lg">
              Jetzt Registrieren
            </button>
          </Link>
          <Link href="#features">
            <button className="btn-secondary text-lg">
              Mehr Erfahren
            </button>
          </Link>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="font-serif text-4xl font-bold mb-12 text-center">Warum 7Drop.de?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mb-4">
              <p className="text-5xl">🔒</p>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Exklusivität</h3>
            <p className="text-gray-600">
              Nur registrierte Mitglieder sehen die Premium-Produkte. Ein echtes Gemeinschaftsgefühl.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <p className="text-5xl">📅</p>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Wöchentlich Neu</h3>
            <p className="text-gray-600">
              Jeden Sonntag um 12:00 Uhr werden 7 neue, sorgfältig ausgewählte Produkte freigeschaltet.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <p className="text-5xl">👥</p>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Empfehlungs-Bonus</h3>
            <p className="text-gray-600">
              Lade Freunde ein und erhalte 5% Rabatt auf deine nächste Bestellung.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white max-w-7xl mx-auto rounded-lg my-24 px-12 py-16 text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">Bereit für exklusive Deals?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Werde Teil der 7Drop.de Community und verpasse keinen Drop mehr.
        </p>
        <Link href="/auth/register">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Jetzt Kostenlos Registrieren
          </button>
        </Link>
      </section>
    </div>
  );
}
