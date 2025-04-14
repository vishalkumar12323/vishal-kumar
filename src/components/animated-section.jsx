import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedSection = ({
  children,
  animationVariants,
  threshold = 0.5,
  ...rest
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.unobserve(sectionRef.current);
          } else {
            controls.start("hidden");
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, threshold]);
  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      viewport={{ once: true, amount: 0.5 }}
      variants={animationVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
