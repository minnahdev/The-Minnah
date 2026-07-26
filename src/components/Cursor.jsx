import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const x = useSpring(mouseX, {
        stiffness: 500,
        damping: 30,
    });

    const y = useSpring(mouseY, {
        stiffness: 500,
        damping: 30,
    });

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX - 4);
            mouseY.set(e.clientY - 4);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <motion.div
            style={{ x, y }}
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00FF88] pointer-events-none z-[9999] shadow-[0_0_12px_#00FF88]"
        />
    );
}