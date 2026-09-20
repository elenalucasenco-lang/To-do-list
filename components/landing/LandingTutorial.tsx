// import Image from "next/image";
// import TutorialExemple from "../../public/landingImg/TutorialExemple.png";
// import { Button } from "../ui/button";

// export default function LandingTutorial() {
//   const hour = new Date().getHours();

//   let eventText = "";

//   if (hour >= 5 && hour < 12) {
//     eventText = "Good morning!";
//   } else if (hour >= 12 && hour < 18) {
//     eventText = "Good afternoon!";
//   } else if (hour >= 18 && hour < 22) {
//     eventText = "Good evening!";
//   } else {
//     eventText = "Good night!";
//   }

//   return (
//     <div className="flex flex-row items-center justify-center gap-20">
//       <div className="flex flex-col items-start gap-4">
//         <div className="animate-[pulse_2s_ease-in-out_infinite] flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
//           <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-purple-600"></span>

//           <span>{eventText}</span>
//         </div>

//         <span className="animate-[fadeIn_0.8s_ease-out] text-6xl font-bold">
//           Plan. Focus. Flow.
//         </span>

//         <span className="animate-[fadeIn_1s_ease-out_0.2s_both]">
//           Flowly helps you organize your daily tasks with ease. Stay
//           <br />
//           productive, track your progress, and find your flow state every
//           <br />
//           single day.
//         </span>

//         <div className="animate-[fadeIn_1s_ease-out_0.4s_both]">
//           <Button
//             className="
//               bg-purple-600
//               font-bold
//               text-white
//               transition-all
//               duration-300
//               hover:-translate-y-1
//               hover:bg-purple-700
//               hover:shadow-lg
//               active:translate-y-0
//             "
//           >
//             Get started
//           </Button>
//         </div>
//       </div>

//       <div className="animate-[slideInRight_1s_ease-out]">
//         <Image
//           src={TutorialExemple}
//           alt="tutorial exemple"
//           className="
//             h-100
//             w-auto
//             rounded-lg
//             shadow-2xl
//             shadow-gray-300
//             transition-all
//             duration-500
//             hover:-translate-y-2
//             hover:shadow-purple-200
//           "
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  type Easing,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "framer-motion";
import tutorialExample from "../../public/landingImg/TutorialExemple.png";
import { Button } from "../ui/button";

const HEADLINE_WORDS = ["Plan.", "Focus.", "Flow."];

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const SPRING: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 24,
};

const contentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

const headlineVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: EASE_OUT,
    },
  },
};

const BUTTON_HOVER: TargetAndTransition = {
  y: -3,
  scale: 1.05,
  boxShadow: "0 12px 24px -8px rgba(147, 51, 234, 0.55)",
  transition: SPRING,
};

const BUTTON_TAP: TargetAndTransition = {
  scale: 0.95,
  transition: SPRING,
};

const IMAGE_HOVER: TargetAndTransition = {
  y: -8,
  transition: SPRING,
};

function getGreeting(hour: number) {
  if (hour >= 5 && hour < 12) return "Good morning!";
  if (hour >= 12 && hour < 18) return "Good afternoon!";
  if (hour >= 18 && hour < 22) return "Good evening!";
  return "Good night!";
}

function GreetingBadge() {
  const greeting = useSyncExternalStore(
    () => () => {},
    () => getGreeting(new Date().getHours()),
    () => null,
  );

  return (
    <div className="h-[38px]">
      {greeting && (
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-600" />
          </span>

          <span>{greeting}</span>
        </motion.div>
      )}
    </div>
  );
}

export default function LandingTutorial() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-12 lg:gap-20"
      >
        <motion.div
          variants={contentVariants}
          className="flex w-full max-w-xl flex-col items-start gap-4 md:w-1/2"
        >
          <GreetingBadge />

          <motion.h1
            variants={headlineVariants}
            className="flex flex-wrap gap-x-3 text-4xl font-bold sm:text-5xl md:gap-x-4 md:text-6xl"
          >
            {HEADLINE_WORDS.map((word) => (
              <span key={word} className="overflow-hidden pb-2">
                <motion.span
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-md text-sm leading-6 text-gray-600 sm:text-base"
          >
            Flowly helps you organize your daily tasks with ease. Stay
            productive, track your progress, and find your flow state every
            single day.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            whileHover={BUTTON_HOVER}
            whileTap={BUTTON_TAP}
            className="rounded-md"
          >
            <Button className="group relative overflow-hidden bg-purple-600 font-bold text-white hover:bg-purple-700">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
              />

              <span className="relative">Get started</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          whileHover={IMAGE_HOVER}
          className="w-full md:w-1/2"
        >
          <Image
            src={tutorialExample}
            alt="Example of the Flowly tutorial"
            className="h-auto w-full rounded-lg shadow-2xl shadow-gray-300 transition-shadow duration-500 hover:shadow-purple-200"
          />
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}