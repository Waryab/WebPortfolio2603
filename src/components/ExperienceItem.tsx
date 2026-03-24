export const ExperienceItem = ({ role, company, period, description }: { role: string; company: string; period: string; description: string[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-4 md:gap-12 mb-24 last:mb-0">
        <div className="mono text-xs opacity-40 uppercase tracking-[0.2em] pt-2">
            {period}
        </div>
        <div>
            <h3 className="text-3xl font-medium mb-2 serif tracking-tight">{role}</h3>
            <p className="serif italic text-xl opacity-60 mb-8">{company}</p>
            <ul className="space-y-4">
                {description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-base leading-relaxed opacity-70">
                        <span className="mt-3 w-1 h-0.5 bg-black shrink-0 opacity-20" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);