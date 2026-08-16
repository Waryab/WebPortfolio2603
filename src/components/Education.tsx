
import { SectionHeader } from "./SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { motion } from "motion/react";
import { fadeInUp } from "../lib/motionPresets";
import { educationData } from "../data/education";

export const Education = () => (
  <motion.section
    id="education"
    className="pb-32 pt-8 md:pt-32 px-8 md:px-24 relative"
    {...fadeInUp}
  >
    <div className="w-full">
      <SectionHeader number="02" title="Education & Training" />
      {educationData.map((edu, index) => (
        <ExperienceItem
          key={edu.id || index}
          role={edu.role}
          company={edu.company}
          period={edu.period}
          description={edu.description}
        />
      ))}
    </div>
  </motion.section>
);

