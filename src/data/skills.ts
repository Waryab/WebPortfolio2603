import type { SkillCategory } from "../types/skills";
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

export const skillCategories: SkillCategory[] = [
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
            { name: "Bun", icon: SiBun, color: "#edd4b2" }
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
