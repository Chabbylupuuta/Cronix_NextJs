"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'example@123' && password === '123') {
      setTimeout(() => {
        router.push('home/page'); 
      }, 500);
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-red-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600 animate-pulse">
          Cronix Login
        </h2>

        {error && (
          <motion.div
            initial={{ x: -10 }}
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 0.2 }}
            className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        <form 
          onSubmit={(e) => {
            handleSubmit(e);
            if (email === 'example@123' && password === '123') {
              setTimeout(() => {
                router.push('/home/page');
              }, 500);
            }
          }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-red-800 font-medium mb-2">Email</label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
              type="email"
              placeholder="example@123"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-red-800 font-medium mb-2">Password</label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
              type="password"
              placeholder="123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all 
                        transform hover:scale-[1.01] shadow-md hover:shadow-lg"
              type="submit"
            >
              Sign In
            </button>
          </motion.div>
        </form>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-red-600">New here? </span>
          <Link
            href="/signup"
            className="text-red-600 font-semibold hover:text-red-800 underline underline-offset-4"
          >
            Create Account
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}
