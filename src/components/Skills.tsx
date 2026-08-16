import type { IconType } from "react-icons";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiOpenjdk,
    SiKotlin,
    SiSharp,
    SiPhp,
    SiHtml5,
    SiCss,
    SiSass,
    SiTailwindcss,
    SiReact,
    SiVuedotjs,
    SiSvelte,
    SiNodedotjs,
    SiLaravel,
    SiDeno,
    SiBun,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiFigma
} from "react-icons/si";
import { fadeInUp } from "../lib/motionPresets";

interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: SiOpenjdk, color: "#007396" },
            { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
            { name: "C#", icon: SiSharp, color: "#239120" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
            { name: "Sass", icon: SiSass, color: "#CC6699" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
            { name: "Svelte", icon: SiSvelte, color: "#FF3E00" }
        ]
    },
    {
        title: "Backend & Runtime",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "Deno", icon: SiDeno, color: "#000000" },
            { name: "Bun", icon: SiBun, color: "#FBF0DF" }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" }
        ]
    }
];

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
                                        className="size-8 drop-shadow-sm"
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