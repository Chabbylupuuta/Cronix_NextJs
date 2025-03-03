import React from 'react';
import { Home, Newspaper, Users, Image, BookOpen, PenTool, Calendar } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-royal-blue p-4 text-white shadow-lg">
      <div className="text-2xl font-bold">MyApp</div>
      <ul className="flex space-x-6">
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <Home size={20} />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <Newspaper size={20} />
          <span>News</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <Users size={20} />
          <span>Student Life</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <Image size={20} />
          <span>Gallery</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <BookOpen size={20} />
          <span>Books</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <PenTool size={20} />
          <span>Blog</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <Calendar size={20} />
          <span>Events</span>
        </li>
      </ul>
      <div className="flex items-center space-x-3">
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span>User</span>
      </div>
    </nav>
  );
}
