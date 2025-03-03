"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Temporary validation
    if (!email || !password || !username) {
      setError('Please fill all fields');
      return;
    }
    
    console.log('Signup:', { email, username, password, profilePic });
    router.push('/login');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
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
          Join Cronix
        </h2>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-red-800 font-medium mb-2">Profile Picture</label>
            <div className="flex items-center justify-center mb-4">
              <label className="cursor-pointer">
                <input 
                  type="file" 
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <div className="w-20 h-20 rounded-full border-2 border-red-200 hover:border-red-500 transition-all overflow-hidden">
                  {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-400">+</span>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-red-800 font-medium mb-2">Username</label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-red-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
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
            transition={{ delay: 0.5 }}
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
            transition={{ delay: 0.6 }}
          >
            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all 
                        transform hover:scale-[1.01] shadow-md hover:shadow-lg"
              type="submit"
            >
              Create Account
            </button>
          </motion.div>
        </form>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-red-600">Already have an account? </span>
          <Link
            href="/login"
            className="text-red-600 font-semibold hover:text-red-800 underline underline-offset-4"
          >
            Login here
          </Link>
        </motion.div>

        {/* Animated decoration */}
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 w-2 bg-red-300 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}