// import { ShieldCheck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// export default function LandingCta() {
//   return (
//     <div className="flex px-50">
//     <div className="flex flex-row justify-between w-full shadow-2xl rounded-xl p-4 border-2 items-center ">
//       <div className="flex flex-row gap-2 items-center">
//         <ShieldCheck className="text-purple-600 size-10 bg-purple-100 p-2 rounded-lg  "/>

//         <div className="flex flex-col">
//           <span className="font-semibold text-sm">Ready to find your flow?</span>
//           <span className="text-gray-800">Join thousands of users who plan their day with Flowly.</span>
//         </div>
//       </div>

//       <div className="flex flex-row gap-2">
//         <Button
//           className=" bg-purple-600 p-4 text-sm font-semibold text-white  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105
//               active:scale-95

//               hover:bg-purple-600"
//         >
//           Get Started
//         </Button>
//         <Button
//           className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105
//               active:scale-95
//               hover:text-white
//               hover:bg-purple-600
//                bg-white
//               "
//         >
//           Learn more
//         </Button>
//       </div>
//     </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link"
import type { ReactNode } from "react";
import {
  motion,
  MotionConfig,
  type Easing,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const SPRING: Transition = { type: "spring", stiffness: 380, damping: 24 };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: SPRING },
};

const BUTTON_HOVER: TargetAndTransition = {
  y: -3,
  scale: 1.05,
  boxShadow: "0 12px 24px -8px rgba(147, 51, 234, 0.55)",
  transition: SPRING,
};

const BUTTON_TAP: TargetAndTransition = { scale: 0.95, transition: SPRING };

const BUTTON_CLASSES = {
  primary:
    "group relative overflow-hidden bg-purple-600 text-white hover:bg-purple-700",
  secondary:
    "border border-purple-500 bg-white text-black hover:bg-purple-600 hover:text-white",
};

type ActionButtonProps = {
  children: ReactNode;
  kind?: keyof typeof BUTTON_CLASSES;
};

function ActionButton({ children, kind = "primary" }: ActionButtonProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={BUTTON_HOVER}
      whileTap={BUTTON_TAP}
      className="rounded-md"
    >
      <Button
        className={`p-4 text-sm font-semibold transition-colors duration-300 ${BUTTON_CLASSES[kind]}`}
      >
        {kind === "primary" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
          />
        )}
        <span className="relative">{children}</span>
      </Button>
    </motion.div>
  );
}

export default function LandingCta() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4 rounded-xl border-2 p-4 shadow-2xl transition-shadow duration-500 hover:shadow-purple-200 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-2">
            <motion.div variants={iconVariants}>
              <ShieldCheck className="size-10 rounded-lg bg-purple-100 p-2 text-purple-600" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col">
              <h2 className="text-sm font-semibold">
                Ready to find your flow?
              </h2>
              <p className="text-gray-800">
                Join thousands of users who plan their day with Flowly.
              </p>
            </motion.div>
          </div>

          <div className="flex gap-2">
            <Link href={"/getStarted"}>
              <ActionButton>Get Started</ActionButton>
            </Link>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
