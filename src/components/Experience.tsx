import { ExperienceItem } from "./ExperienceItem";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => (
    <section id="experience" className="py-32 px-8 md:px-24 xl:pr-64 relative">
        <div className="absolute top-0 right-0 w-px h-full bg-black/5 hidden xl:block" />
        <div className="w-full">
            <SectionHeader number="01" title="Work Experience" />
            <ExperienceItem
                role="Full Stack Developer - Internship"
                company="Libaro Digital Innovation Partner"
                period="Feb 2025 — Jun 2025"
                description={[
                    "Contributed to 'LevelUp Desk', an innovative smart standing desk platform combining web, mobile, and IoT.",
                    "Developed and maintained backend features using Laravel (PHP) and MySQL.",
                    "Built frontend components using Vue.js, TypeScript, and Tailwind CSS.",
                    "Implemented a hybrid mobile application using Angular, Ionic, and Capacitor.",
                    "Integrated external APIs for automated invoicing and server-side push notifications.",
                    "Designed a fully multilingual system (NL/FR/EN) with SEO-optimized URLs."
                ]}
            />
        </div>
    </section>
);
