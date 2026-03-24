export const SectionHeader = ({ number, title }: { number: string; title: string }) => (
    <div className="flex items-baseline gap-6 mb-4 md:mb-16 border-b border-black/5 pb-6">
        <span className="mono text-xs uppercase tracking-widest opacity-30">{number}</span>
        <h2 className="serif italic text-4xl md:text-6xl tracking-tight">{title}</h2>
    </div>
);