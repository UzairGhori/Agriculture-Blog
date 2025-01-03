"use client";
import { useParams } from 'next/navigation';
import blogData from '@/data/blogData';
import CommentSection from '@/components/CommentSection';
import Image from 'next/image';

const BlogDetail = () => {
    const params = useParams();
    const post = blogData.find((p) => p.id === params.id);

    if (!post) {
        return <p>Blog not found.</p>;
    }

    return (
        <main className="p-10">
            <Image src={post.image} alt={post.title} width={300} height={300} className="w-full h-96 object-cover rounded-lg" />
            <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
            <p className="text-lg mt-4">{post.content}</p>
            <CommentSection />
        </main>
    );
};

export default BlogDetail;
