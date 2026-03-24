export const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="bg-black text-white">
            <div className="ml-12 md:ml-20 xl:mx-20 h-px bg-white/5"></div>
            <footer className="py-12 px-8 md:px-24 xl:px-64 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="mono text-[10px] opacity-50">© 2026 WARYAB JANJUA. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <button
                        onClick={scrollToTop}
                        className="mono text-[10px] uppercase tracking-widest opacity-50 hover:opacity-100 cursor-pointer"
                    >
                        Back to top
                    </button>
                </div>
            </footer>
        </div>
    );
};