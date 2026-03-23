import { ArrowDownRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-44 xl:pr-64 relative overflow-hidden">
            <div className="w-full">
                <p className="mono text-xs uppercase tracking-[0.4em] mb-10 opacity-40">Software Engineer / Full Stack Developer</p>
                <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] font-bold tracking-tighter mb-16">
                    WARYAB<br />
                    <span className="serif italic font-normal opacity-30">JANJUA</span>
                </h1>
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between">
                    <div className="max-w-xl">
                        <p className="text-2xl md:text-4xl leading-[1.4] opacity-70 serif italic tracking-tight">
                            Building digital experiences that blend technical precision with creative intuition. Based in Bruges, Belgium.
                        </p>
                    </div>
                    <a
                        href="#experience"
                        className="group flex items-center gap-6 px-6 py-4 md:px-12 md:py-6 bg-black text-white rounded-full transition-all self-start lg:self-auto hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    >
                        <span className="mono text-xs uppercase tracking-[0.2em]">View Work</span>
                        <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                    </a>
                </div>
            </div>
            <div className="absolute top-1/4 -right-20 text-[19vw] font-bold opacity-[0.02] select-none pointer-events-none hidden xl:block leading-none tracking-tighter">
                PORTFOLIO
            </div>
        </section>
    );
}