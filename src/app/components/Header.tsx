"use client";
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold font-serif ">🌾 Agriculture Blog</h1>
            <nav>
                <ul className="flex text-xl font-serif  space-x-6">
                    <li>
                        <Link href="/" className="hover:text-yellow-400 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-yellow-400 transition">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-yellow-400 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
