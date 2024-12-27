import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth velocity with damping for consistent motion
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  // Scale velocity for a more subtle effect
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    clamp: false,
  });

  // Transform baseX for wrapping motion
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Adjust direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Add velocity factor to smooth out the movement
    moveBy += directionFactor.current * moveBy * velocityFactor.get() * 0.5;

    baseX.set(baseX.get() + moveBy);
  });

  const repeatCount = 2; // Number of repetitions for seamless motion
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index}>{children} </span>
        ))}
      </motion.div>
    </div>
  );
}

function Parallax({count, text}) {
  return (
    <section>
      <ParallaxText baseVelocity={-count}>{text}</ParallaxText>
      <ParallaxText baseVelocity={count}>{text}</ParallaxText>
    </section>
  );
}

export default Parallax;
