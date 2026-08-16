import { fadeInUp } from "../lib/motionPresets";
import { ExperienceItem } from "./ExperienceItem";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import { experienceData } from "../data/experience";

export const Experience = () => (
    <motion.section
        id="experience"
        className="pb-32 pt-8 md:pt-32 px-8 md:px-24 relative"
        {...fadeInUp}
    >
        <div className="w-full">
            <SectionHeader number="01" title="Work Experience" />
            {experienceData.map((exp, index) => (
                <ExperienceItem
                    key={exp.id || index}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                />
            ))}
        </div>
    </motion.section>
);

