import type { Project } from "../types/project";

export const projectsData: Project[] = [
    {
        id: "levelup-desk",
        title: "LevelUp Desk Ecosystem",
        tagline: "Smart ergonomic IoT workspace platform with cloud management & cross-platform apps",
        period: "02/2025 — 06/2025",
        description: "An end-to-end intelligent standing desk system integrating hardware telemetry, enterprise desk reservations, and real-time ergonomic habit tracking across web and mobile platforms with Libaro.",
        highlights: [
            "Developed full-stack features with Laravel, MySQL, Vue.js, and TypeScript for telemetry and reservations.",
            "Built hybrid cross-platform mobile apps with Angular, Ionic, and Capacitor for Bluetooth and WiFi desk controls.",
            "Integrated automated invoicing, push notifications, and OAuth 2.0 authentication workflows."
        ],
        techStack: ["Laravel", "Vue.js", "TypeScript", "Angular", "Ionic", "Capacitor", "MySQL", "Tailwind CSS"],
        imageUrl: "/projects/levelup-desk.jpg",
        imageAlt: "LevelUp Desk smart ergonomic workspace interface preview",
        liveUrl: "https://levelup-desk.com/"
    },
    {
        id: "wiki-game",
        title: "The Wiki Game",
        tagline: "Interactive speed navigation challenge powered by the live MediaWiki API",
        period: "2026",
        description: "A fast-paced web game where players navigate between two Wikipedia articles using only embedded links, featuring live article processing, step tracking, and session leaderboards.",
        highlights: [
            "Built the game engine with React, TypeScript, and Vite with fluid animations and responsive gameplay.",
            "Integrated MediaWiki API to process article markup and extract valid hyperlinks in real time.",
            "Engineered path visualizers, shortest distance metrics, and player statistics."
        ],
        techStack: ["React", "TypeScript", "Vite", "MediaWiki API", "Tailwind CSS", "Motion"],
        imageUrl: "/projects/wiki-game.jpg",
        imageAlt: "The Wiki Game interactive gameplay preview",
        githubUrl: "https://github.com/Waryab/WikiGame",
        liveUrl: "https://wikigame.waryab.com/"
    },
    {
        id: "webportfolio",
        title: "Interactive Web Portfolio",
        tagline: "Minimalist, typography-driven portfolio with reactive animations & contact pipeline",
        period: "2026",
        description: "A digital portfolio designed with precision typography, responsive fluid layouts, spotlight cursor interactions, and automated contact form delivery.",
        highlights: [
            "Crafted with React 19, TypeScript, and Tailwind CSS with custom editorial typography.",
            "Implemented custom cursor spotlights, fluid transitions, and accessible modals.",
            "Integrated serverless contact form submission with live validation feedback."
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite", "GitHub Actions"],
        imageUrl: "/projects/web-portfolio.jpg",
        imageAlt: "Personal Web Portfolio showcase preview",
        githubUrl: "https://github.com/Waryab/WebPortfolio2603",
        liveUrl: "https://www.waryab.com/"
    }
];
