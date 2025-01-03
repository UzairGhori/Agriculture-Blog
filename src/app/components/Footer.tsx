const Footer: React.FC = () => {
    return (
        <footer className="bg-green-600 text-white p-4 text-center">
            <p className="text-xl font-serif">&copy; {new Date().getFullYear()} Agriculture Blog. All rights reserved.</p>
            <p className="text-xl font-[Poppins]">
                Built By <i> Abdul Uzair </i>.
            </p>
        </footer>
    );
};

export default Footer;
