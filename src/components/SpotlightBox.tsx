"use client";

import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type SpotlightProps = {
    children: ReactNode;
    className?: string;
    color?: string;
};

export const SpotlightBox = ({ children, className = "", color = "white" }: SpotlightProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      ${color} 0%,
      transparent 100%
    )
  `;

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{ background }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};