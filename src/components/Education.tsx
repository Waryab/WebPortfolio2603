import { SectionHeader } from "./SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Education = () => (
  <section id="education" className="py-32 px-8 md:px-24 xl:pr-64 relative">
    <div className="absolute top-0 right-0 w-px h-full bg-black/5 hidden xl:block" />
    <div className="w-full">
      <SectionHeader number="02" title="Education & Training" />
      <ExperienceItem 
        role="Bachelor's Degree Applied Computer Science"
        company="Howest, Bruges"
        period="Sep 2021 — Jun 2025"
        description={[
          "Developed strong programming skills in Java, Python, and JavaScript through project-based coursework.",
          "Built full-stack applications with REST APIs and relational databases.",
          "Applied object-oriented programming principles and basic design patterns.",
          "Collaborated in Agile/Scrum team environments to simulate real industry workflows."
        ]}
      />
      <ExperienceItem 
        role="Grand Challenge Week"
        company="Cardiff Metropolitan University"
        period="Apr 2024"
        description={[
          "Conducted research in Cardiff to identify real-world community challenges and define a focused problem statement.",
          "Analyzed user needs and explored potential digital solutions within a one-week innovation sprint.",
          "Designed a mobile application concept to address the selected challenge.",
          "Created structured wireframes and interactive prototypes using Figma.",
          "Presented the final concept and design solution to peers and academic evaluators."
        ]}
      />
    </div>
  </section>
);
