export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const section = document.getElementById(link);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
