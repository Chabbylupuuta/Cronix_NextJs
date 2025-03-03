import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-red-50 to-white">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-6xl font-bold text-red-600 mb-2 animate-fade-in">
          Welcome to Cronix
        </h1>
        
        <p className="text-xl text-red-800 mb-8 font-medium">
          Copperbelt University's Premier Digital Chronicle
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Join Now
          </Link>
          
          <Link
            href="/login"
            className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Sign In
          </Link>
        </div>

        {/* Optional decorative elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="h-2 w-8 bg-red-300 rounded-full animate-bounce"></div>
          <div className="h-2 w-8 bg-red-400 rounded-full animate-bounce delay-100"></div>
          <div className="h-2 w-8 bg-red-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}