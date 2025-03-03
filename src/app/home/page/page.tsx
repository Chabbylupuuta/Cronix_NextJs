'use client';

import { useState, useEffect } from "react";
import { 
  Home, 
  Newspaper, 
  BookOpen, 
  Camera, 
  Calendar, 
  Users, 
  PenSquare,
  Heart, 
  MessageCircle,
  Bell,
  Search,
  UserCircle,
  Menu,
  Flame
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [newsFeed, setNewsFeed] = useState([
    { 
      id: 1,
      author: "Sports Department",
      category: "Sports",
      title: "🏆 University Wins National Championship",
      content: "Our basketball team made history by winning the national championship for the first time in 20 years! Celebration event this Friday at the main quad.",
      likes: 142,
      comments: 28,
      trending: true,
      hashtags: ["#CUBasketball", "#Champions2024"]
    },
    { 
      id: 2,
      author: "Student Council",
      category: "Events",
      title: "🎉 Spring Festival Lineup Released",
      content: "Check out the amazing artists and activities planned for this year's Spring Festival! Food trucks, live music, and cultural performances across 3 stages.",
      likes: 234,
      comments: 45,
      hashtags: ["#SpringFest", "#CampusLife"]
    },
    { 
      id: 3,
      author: "Academic Office",
      category: "Academics",
      title: "🚀 New Research Grants Available",
      content: "Apply now for the 2024 Innovation Grants. Up to $50,000 available for interdisciplinary research projects. Deadline: March 30th.",
      likes: 89,
      comments: 12,
      hashtags: ["#ResearchOpportunities", "#Funding"]
    },
  ]);

  // Animated entrance variants
  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleLike = (id: number) => {
    setNewsFeed(prevFeed =>
      prevFeed.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-red-600">
                <Flame size={28} />
                <span className="text-xl font-bold">CRONIX</span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <a href="/home" className="nav-link">
                  <Home size={20} className="mr-2" />
                  Home
                </a>
                <a href="/news" className="nav-link">
                  <Newspaper size={20} className="mr-2" />
                  News
                </a>
                <a href="/events" className="nav-link">
                  <Calendar size={20} className="mr-2" />
                  Events
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="icon-button">
                <Search size={22} />
              </button>
              <button className="icon-button">
                <Bell size={22} />
              </button>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                  <UserCircle size={20} className="text-red-600" />
                </div>
                <span className="hidden lg:inline text-gray-600 group-hover:text-red-600 transition">
                  JohnDoe24
                </span>
              </div>
              <button className="md:hidden icon-button">
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feed */}
          <main className="lg:col-span-8 space-y-8">
            {/* Create Post Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                  <PenSquare size={20} className="text-red-600" />
                </div>
                <input 
                  type="text" 
                  placeholder="What's happening on campus?" 
                  className="flex-1 bg-gray-50 rounded-full px-6 py-2 hover:bg-gray-100 transition"
                />
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="post-action-button">
                  <Camera size={18} className="mr-2" />
                  Photo
                </button>
                <button className="post-action-button">
                  <Calendar size={18} className="mr-2" />
                  Event
                </button>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                  Post
                </button>
              </div>
            </div>

            {/* News Feed */}
            {newsFeed.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                animate="visible"
                variants={postVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                {post.trending && (
                  <div className="bg-red-100 text-red-600 px-4 py-2 rounded-t-xl flex items-center">
                    <Flame size={16} className="mr-2" />
                    Trending on Cronix
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                      <UserCircle size={20} className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <span className="text-sm text-gray-500">{post.category}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.content}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.hashtags.map((tag) => (
                      <span key={tag} className="text-red-600 text-sm hover:bg-red-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="flex items-center hover:text-red-600 transition"
                      >
                        <Heart size={18} className="mr-1.5" />
                        {post.likes}
                      </button>
                      <button className="flex items-center hover:text-blue-600 transition">
                        <MessageCircle size={18} className="mr-1.5" />
                        {post.comments}
                      </button>
                    </div>
                    <span className="text-sm">3h ago</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Trending Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Flame size={20} className="mr-2 text-red-600" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {['#ExamPrepTips', '#CampusArtShow', '#NewCafeteriaMenu', '#SportsTryouts'].map((topic) => (
                  <div key={topic} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded">
                    <span className="text-red-600 font-medium">{topic}</span>
                    <span className="text-sm text-gray-500">1.2k posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar size={20} className="mr-2 text-red-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {['Career Fair - March 15', 'Alumni Meetup - March 20', 'Tech Symposium - April 2'].map((event) => (
                  <div key={event} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-red-600" />
                    </div>
                    <span className="font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HomePage;