import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import { fadeInUp } from "../lib/motionPresets";
import { skillCategories } from "../data/skills";

export const Skills = () => (
    <motion.section
        id="skills"
        className="pb-32 pt-8 md:pt-32 px-8 md:px-24"
        {...fadeInUp}
    >
        <div className="w-full">
            <SectionHeader number="04" title="The Toolkit" />
            <div className="flex flex-col gap-24">
                {skillCategories.map((category, catIdx) => (
                    <div key={category.title}>

                        <div className="flex items-center gap-4 mb-12">
                            <span className="mono text-xs opacity-20">0{catIdx + 1}</span>
                            <h3 className="serif text-3xl italic tracking-tight">{category.title}</h3>
                            <div className="grow h-px bg-black/5" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="group relative p-6 bg-white/40 backdrop-blur-sm border border-black/5 rounded-2xl flex flex-col items-center justify-center gap-4">
                                    <skill.icon
                                        className="size-8"
                                        style={{ color: skill.color }}
                                    />
                                    <span className="mono text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all text-center" >
                                        {skill.name}
                                    </span>
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.section>
);
