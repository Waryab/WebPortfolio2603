import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SpotlightBox } from "./SpotlightBox";
import { ProjectModal } from "./ProjectModal";
import { projectsData } from "../data/projects";
import type { Project } from "../types/project";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp } from "../lib/motionPresets";
import { FiArrowUpRight, FiGithub, FiMaximize2, FiExternalLink } from "react-icons/fi";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const primaryProject = projectsData[0];
    const secondaryProjects = projectsData.slice(1);

    return (
        <motion.section
            id="projects"
            className="pb-32 pt-8 md:pt-32 px-8 md:px-24 relative"
            {...fadeInUp}
        >
            <div className="w-full">
                <SectionHeader number="03" title="Selected Projects" />

                {primaryProject && (
                    <div className="mb-6 md:mb-10">
                        <SpotlightBox
                            color="rgba(0, 0, 0, 0.04)"
                            className="bg-white/50 backdrop-blur-sm border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-black/20 group"
                        >
                            <div>
                                {primaryProject.imageUrl && (
                                    <div
                                        onClick={() => setSelectedProject(primaryProject)}
                                        className="relative w-full h-44 md:h-80 rounded-2xl overflow-hidden border border-black/5 md:border-black/10 mb-5 md:mb-6 bg-black/5 cursor-pointer shadow-sm"
                                    >
                                        <img
                                            src={primaryProject.imageUrl}
                                            alt={primaryProject.imageAlt || primaryProject.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 md:group-hover:scale-[1.03] transition-transform duration-500"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 md:from-black/60 via-transparent md:via-black/10 to-transparent opacity-60 md:opacity-100 group-hover:opacity-80 md:group-hover:opacity-100 transition-opacity" />
                                        <div className="hidden md:flex absolute bottom-4 left-4 right-4 items-center justify-between text-white">
                                            <span className="mono text-[10px] uppercase tracking-widest px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                                                {primaryProject.period}
                                            </span>
                                            <div className="flex items-center gap-2 mono text-xs uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                                                <span>View Details</span>
                                                <FiMaximize2 className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between gap-4 mb-3">
                                    <span className="mono text-xs opacity-40 uppercase tracking-widest">
                                        {primaryProject.period}
                                    </span>
                                </div>

                                <h3 className="serif italic text-2xl md:text-4xl tracking-tight mb-2 text-black group-hover:opacity-90 transition-opacity">
                                    {primaryProject.title}
                                </h3>

                                <p className="serif italic text-sm md:text-lg opacity-60 md:opacity-70 mb-4 leading-relaxed">
                                    {primaryProject.tagline}
                                </p>

                                <p className="text-xs md:text-base leading-relaxed opacity-70 md:opacity-75 mb-6">
                                    {primaryProject.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
                                    {primaryProject.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="mono text-[11px] md:text-xs px-2.5 md:px-3 py-1 bg-black/5 rounded-lg md:rounded-full border border-black/5 opacity-70 md:opacity-80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-black/5 md:border-black/10">
                                <button
                                    onClick={() => setSelectedProject(primaryProject)}
                                    className="flex md:hidden items-center gap-2 mono text-xs uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                    <span>View Details</span>
                                    <FiArrowUpRight className="w-3.5 h-3.5" />
                                </button>

                                <button
                                    onClick={() => setSelectedProject(primaryProject)}
                                    className="hidden md:flex group/btn items-center gap-2.5 px-5 py-2.5 bg-black text-white rounded-full mono text-xs uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                                >
                                    <span>View Details</span>
                                    <FiMaximize2 className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                                </button>

                                <div className="flex md:hidden items-center gap-2">
                                    {primaryProject.githubUrl && (
                                        <a
                                            href={primaryProject.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-full hover:bg-black/5 transition-colors"
                                            aria-label={`${primaryProject.title} GitHub`}
                                        >
                                            <FiGithub className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
                                        </a>
                                    )}
                                    {primaryProject.liveUrl && (
                                        <a
                                            href={primaryProject.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-full hover:bg-black/5 transition-colors"
                                            aria-label={`${primaryProject.title} Live Website`}
                                        >
                                            <FiExternalLink className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
                                        </a>
                                    )}
                                </div>

                                <div className="hidden md:flex items-center gap-3">
                                    {primaryProject.githubUrl && (
                                        <a
                                            href={primaryProject.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2.5 rounded-full border border-black/10 bg-white/70 hover:bg-black hover:text-white transition-all cursor-pointer"
                                            aria-label="GitHub Repository"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                        </a>
                                    )}

                                    {primaryProject.liveUrl && (
                                        <a
                                            href={primaryProject.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group/btn flex items-center gap-2 px-5 py-2.5 bg-white/70 border border-black/10 rounded-full mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"
                                        >
                                            <span>Live Website</span>
                                            <FiExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SpotlightBox>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {secondaryProjects.map(project => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                            >
                                <SpotlightBox
                                    color="rgba(0, 0, 0, 0.03)"
                                    className="h-full bg-white/40 backdrop-blur-sm border border-black/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-black/20 transition-all duration-300 group"
                                >
                                    <div>
                                        {project.imageUrl && (
                                            <div
                                                onClick={() => setSelectedProject(project)}
                                                className="relative w-full h-44 rounded-2xl overflow-hidden border border-black/5 mb-5 bg-black/5 cursor-pointer"
                                            >
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.imageAlt || project.title}
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                    referrerPolicy="no-referrer"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <span className="mono text-xs opacity-40 uppercase tracking-widest">
                                                {project.period}
                                            </span>
                                        </div>

                                        <h4 className="serif italic text-2xl md:text-3xl tracking-tight mb-2 group-hover:opacity-90 transition-opacity">
                                            {project.title}
                                        </h4>

                                        <p className="serif italic text-sm md:text-base opacity-60 mb-4 leading-relaxed">
                                            {project.tagline}
                                        </p>

                                        <p className="text-xs md:text-sm opacity-70 leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mb-8">
                                            {project.techStack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="mono text-[11px] px-2.5 py-1 bg-black/5 rounded-lg opacity-70"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center gap-2 mono text-xs uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                        >
                                            <span>View Details</span>
                                            <FiArrowUpRight className="w-3.5 h-3.5" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 rounded-full hover:bg-black/5 transition-colors"
                                                    aria-label={`${project.title} GitHub`}
                                                >
                                                    <FiGithub className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 rounded-full hover:bg-black/5 transition-colors"
                                                    aria-label={`${project.title} Live Demo`}
                                                >
                                                    <FiExternalLink className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </SpotlightBox>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </motion.section>
    );
};
