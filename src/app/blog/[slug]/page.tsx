"use client";
import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([
    { id: 1, text: 'Great article!', author: 'User1' },
    { id: 2, text: 'Interesting perspective.', author: 'User2' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        text: newComment,
        author: 'Anonymous', // Replace with actual user info later
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  // Replace with actual data fetching based on slug
  const post = { title: `Article ${slug}`, content: `Content of ${slug}` };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>

      {/* Reacts */}
      <div className="flex items-center mt-4">
        <button className="flex items-center mr-4" onClick={handleLike}>
          <FaThumbsUp className="mr-1" /> {likes}
        </button>
        <button className="flex items-center" onClick={handleDislike}>
          <FaThumbsDown className="mr-1" /> {dislikes}
        </button>
      </div>

      {/* Comments */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-2 p-2 border rounded">
            <p className="font-semibold">{comment.author}:</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Post Comment
        </button>
      </form>
    </div>
  );
}