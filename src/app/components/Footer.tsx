const Footer: React.FC = () => {
    return (
        <footer className="bg-green-600 w-full text-white p-4 text-center">
            <p className="text-2xl font-serif">&copy; {new Date().getFullYear()} AgriBlog. All rights Reserved.</p>
            <p className="text-2xl text-black font-[Poppins]">
                Built By <b><i> Abdul Uzair </i></b>.
            </p>
        </footer>
    );
};

export default Footer;
