'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('waitlist')
      .insert({ email });

    if (error) {
      alert('Error adding email. Try again!');
    } else {
      alert('Thanks! You are added to the waitlist.');
      setEmail('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-gray-900">
      <nav className="absolute top-0 w-full p-4 flex justify-center">
        <h1 className="text-xl font-bold">AIStockMate 🚀</h1>
      </nav>

      <section className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Invest Smarter. Trade Easier.
        </h2>
        <p className="mb-6 text-lg">
          AIStockMate is your personal AI-powered trading assistant that watches the market, alerts you at the right moment, and helps you make better trading decisions.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Join Waitlist
          </button>
        </form>
      </section>

      <section className="mt-10 text-center max-w-2xl">
        <h3 className="text-xl font-semibold mb-3">Why AIStockMate?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>📈 AI-powered trade signals</li>
          <li>⏰ Real-time market monitoring</li>
          <li>🎯 Personalized recommendations based on your trading style</li>
          <li>💡 Save time, avoid stress, trade better</li>
        </ul>
      </section>

      <footer className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500">
        © 2025 AIStockMate | All rights reserved.
      </footer>
    </main>
  );
}
