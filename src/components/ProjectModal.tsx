import { useEffect } from "react";
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "../types/project";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (project) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    key="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                >
                    <div
                        onClick={onClose}
                        className="absolute inset-0"
                    />

                    <motion.div
                        key="modal-content"
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-3xl max-h-[88vh] overflow-hidden bg-[#f5f5f0] border border-black/10 rounded-3xl shadow-2xl z-10 flex flex-col"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="w-full h-full overflow-y-auto overflow-x-hidden p-6 md:p-10">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <span className="mono text-xs opacity-40 uppercase tracking-widest">
                                    {project.period}
                                </span>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <FiX className="w-5 h-5 opacity-70" />
                                </button>
                            </div>

                            <h3 className="serif italic text-3xl md:text-4xl tracking-tight mb-2">
                                {project.title}
                            </h3>
                            <p className="serif italic text-base md:text-lg opacity-70 mb-6 leading-relaxed">
                                {project.tagline}
                            </p>

                            {project.imageUrl && (
                                <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden border border-black/10 mb-6 bg-black/5 shadow-inner">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.imageAlt || project.title}
                                        className="w-full h-full object-cover object-center"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            )}

                            <div className="mb-6">
                                <p className="text-sm md:text-base leading-relaxed opacity-80">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="mono text-xs uppercase tracking-widest opacity-40 mb-3">Key Work & Features</h4>
                                <ul className="space-y-2.5">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm opacity-80 leading-relaxed">
                                            <FiCheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="mono text-xs uppercase tracking-widest opacity-40 mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="mono text-xs px-2.5 py-1 bg-white/70 border border-black/5 rounded-lg opacity-80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10">
                                <button
                                    onClick={onClose}
                                    className="mono text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity cursor-pointer px-3 py-2"
                                >
                                    Close
                                </button>

                                <div className="flex items-center gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/5 hover:bg-black hover:text-white rounded-full mono text-xs uppercase tracking-widest transition-all cursor-pointer"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            <span>Repository</span>
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full mono text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                                        >
                                            <span>Live Website</span>
                                            <FiExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
