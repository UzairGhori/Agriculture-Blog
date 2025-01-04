import { useState, useEffect } from 'react';

interface Comment {
  name: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  // Load comments from local storage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentSubmit = () => {
    if (name && comment) {
      const newComment: Comment = { name, text: comment };
      const updatedComments = [newComment, ...comments]; // Add new comment at the top of the list
      setComments(updatedComments);
      setName('');
      setComment('');
      
      // Save updated comments to local storage
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  return (
    <div className="p-6 border-t-2 border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 text-black rounded-md w-full mb-2"
        />
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 text-black rounded-md w-full mb-4"
        />
        <button
          onClick={handleCommentSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit Comment
        </button>
      </div>

      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b py-4">
              <h3 className="font-bold">{comment.name}</h3>
              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
