import { Github, Linkedin } from "lucide-react";

export const Navigation = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = ['experience', 'education', 'skills', 'contact']

    return (
        <nav className="fixed left-0 top-0 h-full w-12 md:w-20 border-r border-white/10 z-50 mix-blend-difference select-none">
            <div className="flex flex-col items-center justify-between h-full w-full py-12 text-white">
                <button
                    onClick={scrollToTop}
                    className="mono text-xs font-bold tracking-tighter transition-all cursor-pointer hover:scale-110"
                >
                    WJ
                </button>

                <div className="flex flex-col gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link}`}
                            className="[writing-mode:vertical-rl] rotate-180 mono text-xs uppercase tracking-widest transition-opacity opacity-60 hover:opacity-100"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <a
                        href="https://linkedin.com/in/waryab"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform hover:scale-110"
                    >
                        <Linkedin className="w-4 h-4 transition-opacity opacity-60 hover:opacity-100" />
                    </a>
                    <a
                        href="https://github.com/waryab"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform hover:scale-110"
                    >
                        <Github className="w-4 h-4 transition-opacity opacity-60 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </nav>
    );
};