import Link from 'next/link';
import { BlogPost } from '@/data/blogData';
import Image from 'next/image';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-10 cursor-pointer">
            <Image 
                src={post.image} 
                alt={post.title} 
                width={300} 
                height={300} 
                className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2 group-hover:text-blue-600">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
            <Link href={`/blog/${post.id}`}>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-yellow-500 transition duration-300">
                    Read More
                </button>
            </Link>
<br /><br />
            {/* Author Section */}
            <div className="flex items-center mt-4">
                <Image
                    src={post.authorImage || '/default-author-image.jpg'}
                    alt={post.authorName || 'Default Author'}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <p className="text-gray-500 font-semibold">{post.authorName}</p>
            </div>
        </div>
    );
};

export default BlogCard;
