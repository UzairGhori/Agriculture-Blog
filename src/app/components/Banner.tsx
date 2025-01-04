import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <div className="relative w-full h-[500px] bg-green-700 text-white flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image 
                src="/images/banner2.jpeg" 
                alt="Agriculture Banner" 
                layout="fill" 
                objectFit="cover" 
                quality={100} 
                className="absolute z-0"
            />

            {/* Dark Overlay for Better Contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

            {/* Banner Content */}
            <div className="relative z-20 text-center px-6">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                    Welcome to the AgriBlog
                </h1>
                <p className="text-lg mb-6 max-w-xl mx-auto">
                    Explore the latest insights and innovations in sustainable agriculture practices.
                </p>
                <a href="#blogs">
                    <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
                        Explore Blogs
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Banner;
