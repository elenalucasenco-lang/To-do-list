// "use client";

// import { Users, Shirt, CircleCheck } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// import TasksImg from "@/public/landingImg/TasksImg.png";
// import ProgressImg from "@/public/landingImg/ProgressImg.png";
// import { Button } from "@/components/ui/button";
// export default function LandingProgressTracking() {
//   const [activeBtn, setActiveBtn] = useState<"tasks" | "progress">("tasks");
//   const tasks = ["Smart Sorting", "Focus Mode", "Habit Tracking"];
//   const progress = ["Streak Counter", "Weekly Insights", "Goal Completion"];
//   return (
//     <div className="flex flex-col gap-3 items-center text-center mt-20">
//       <span className="font-bold text-4xl">Plan. Focus. Flow.</span>
//       <span>
//         Flowly helps you organize your day with simple, effective tools designed
//         to keep you moving
//         <br /> forward.
//       </span>

//       <div className="rounded-full relative border p-2  shadow-sm border-gray-300 mt-5 h-auto flex flex-row gap-4">
//         <div
//           className={`absolute top-1.5 bottom-1.5 w-1/2  rounded-full transition-transform duration-300 ease-out ${
//             activeBtn === "progress" ? "translate-x-full" : "translate-x-0"
//           }`}
//         />
//         <button
//           onClick={() => setActiveBtn("tasks")}
//           className={`flex flex-row items-center gap-2 transition-colors ${activeBtn === "tasks" ? "bg-purple-400 text-white rounded-full p-1" : "bg-white"} `}
//         >
//           <Users className="font-bold w-5 h-5" />
//           <span className="font-bold">My Tasks</span>
//         </button>
//         <button
//           onClick={() => setActiveBtn("progress")}
//           className={`flex flex-row items-center gap-2 ${activeBtn === "progress" ? "bg-purple-400 text-white rounded-full p-1" : "bg-white"} `}
//         >
//           <Shirt className=" w-5 h-5 font-bold" />
//           <span className="font-bold">Progress</span>
//         </button>
//       </div>

//       {activeBtn === "tasks" && (
//         <div className="mt-10 flex flex-row items-center gap-12">
//           <Image
//             src={TasksImg}
//             alt="Tasks overview"
//             className="w-150 rounded-xl border-2 border-gray-300 shadow-2xl shadow-gray-300"
//           />

//           <div className="flex max-w-md flex-col items-start gap-3">
//             <span className="flex items-center gap-2 font-bold text-purple-500">
//               <Users className="h-5 w-5" />
//               Focus Engine
//             </span>

//             <span className="text-3xl font-bold">
//               Smart Task Prioritization
//             </span>

//             <span className="text-left leading-7 text-gray-600">
//               Flowly analyzes your daily habits to suggest the most impactful
//               tasks first. Keep your momentum high and your focus sharp all day
//               long.
//             </span>

//             <div className="flex flex-col gap-2 w-full">
//               {tasks.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row gap-2  border-2 rounded-xl border-purple-200 p-4 w-full"
//                 >
//                   <CircleCheck className="h-5 text-purple-500" />
//                   {item}
//                 </div>
//               ))}
//             </div>

//            <div className="flex flex-row gap-2">
//               <Button
//                 className=" bg-purple-600 p-4 text-sm font-semibold text-white  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105              
//               active:scale-95
              
//               hover:bg-purple-600"
//               >
//                 Get Started
//               </Button>
//               <Button className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105              
//               active:scale-95
//               hover:text-white
//               hover:bg-purple-600
//                bg-white
//               ">
//                 View Tasks
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {activeBtn === "progress" && (
//         <div className="mt-10 flex flex-row items-center gap-12">
//           <Image
//             src={ProgressImg}
//             alt="progress img"
//             className="w-150 rounded-xl border-2 border-gray-300 shadow-2xl shadow-gray-300"
//           />
//           <div className="flex max-w-md flex-col items-start gap-3">
//             <span className="flex items-center gap-2 font-bold text-purple-500">
//               <Shirt className="h-5 w-5" />
//               Growth Analytics
//             </span>

//             <span className="text-3xl font-bold">Visual Progress Tracking</span>
//             <span className="text-left leading-7 text-gray-600">
//               Flowly analyzes your daily habits to suggest the most impactful
//               tasks first. Keep your momentum high and your focus sharp all day
//               long.
//             </span>

//             <div className="flex flex-col gap-2 w-full">
//               {progress.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row gap-2  border-2 rounded-xl border-purple-200 p-4 w-full"
//                 >
//                   <CircleCheck className="h-5 text-purple-500" />
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-row gap-2">
//               <Button
//                 className=" bg-purple-600 p-4 text-sm font-semibold text-white  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105              
//               active:scale-95
              
//               hover:bg-purple-600"
//               >
//                 Get Started
//               </Button>
//               <Button className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
//               hover:-translate-y-1
//               hover:scale-105              
//               active:scale-95
//               hover:text-white
//               hover:bg-purple-600
//                bg-white
//               ">
//                 View Tasks
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "framer-motion";
import {
  CircleCheck,
  ListChecks,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import TasksImg from "@/public/landingImg/TasksImg.png";
import ProgressImg from "@/public/landingImg/ProgressImg.png";

type AnimatedButtonProps = {
  children: ReactNode;
  kind?: "primary" | "secondary";
};

function AnimatedButton({
  children,
  kind = "primary",
}: AnimatedButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full px-5 py-2 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 ${
        kind === "secondary"
          ? "border border-purple-300 text-purple-600 hover:bg-purple-50"
          : "bg-purple-500 text-white hover:bg-purple-600"
      }`}
    >
      {children}
    </motion.button>
  );
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 420, damping: 30 } as const;
const REVEAL = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type TabId = "tasks" | "progress";

type Tab = {
  id: TabId;
  label: string;
  icon: LucideIcon;
  image: StaticImageData;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  secondaryAction: string;
};

const TABS: Tab[] = [
  {
    id: "tasks",
    label: "My Tasks",
    icon: ListChecks,
    image: TasksImg,
    imageAlt: "Tasks overview",
    eyebrow: "Focus Engine",
    title: "Smart Task Prioritization",
    description:
      "Flowly analyzes your daily habits to suggest the most impactful tasks first. Keep your momentum high and your focus sharp all day long.",
    features: ["Smart Sorting", "Focus Mode", "Habit Tracking"],
    secondaryAction: "View Tasks",
  },
  {
    id: "progress",
    label: "Progress",
    icon: TrendingUp,
    image: ProgressImg,
    imageAlt: "Progress overview",
    eyebrow: "Growth Analytics",
    title: "Visual Progress Tracking",
    description:
      "Flowly turns your streaks and completed goals into clear charts, so you can see how far you have come and keep your momentum going.",
    features: ["Streak Counter", "Weekly Insights", "Goal Completion"],
    secondaryAction: "View Progress",
  },
];

const panelVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

type TabPanelProps = { tab: Tab };

function TabPanel({ tab }: TabPanelProps) {
  const { icon: Icon, image, imageAlt, eyebrow, title, description, features, secondaryAction } = tab;

  return (
    <motion.div
      role="tabpanel"
      variants={panelVariants}
      exit="exit"
      {...REVEAL}
      className="mt-10 flex flex-col items-center gap-12 lg:flex-row"
    >
      <motion.div variants={imageVariants}>
        <Image
          src={image}
          alt={imageAlt}
          className="h-auto w-[600px] max-w-full rounded-xl border-2 border-gray-300 shadow-2xl shadow-gray-300"
        />
      </motion.div>

      <motion.div
        variants={groupVariants}
        className="flex max-w-md flex-col items-start gap-3"
      >
        <motion.span
          variants={fadeUpVariants}
          className="flex items-center gap-2 font-bold text-purple-500"
        >
          <Icon className="h-5 w-5" />
          {eyebrow}
        </motion.span>

        <motion.h3 variants={fadeUpVariants} className="text-3xl font-bold">
          {title}
        </motion.h3>

        <motion.p
          variants={fadeUpVariants}
          className="text-left leading-7 text-gray-600"
        >
          {description}
        </motion.p>

        <motion.ul variants={groupVariants} className="flex w-full flex-col gap-2">
          {features.map((feature) => (
            <motion.li
              key={feature}
              variants={fadeUpVariants}
              className="flex items-center gap-2 rounded-xl border-2 border-purple-200 p-4 transition-colors duration-300 hover:border-purple-400 hover:bg-purple-50"
            >
              <CircleCheck className="h-5 w-5 shrink-0 text-purple-500" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex gap-2">
          <Link href={"/getStarted"} >
          <AnimatedButton>Get Started</AnimatedButton>
          </Link>
          <AnimatedButton kind="secondary">{secondaryAction}</AnimatedButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LandingProgressTracking() {
  const [activeTabId, setActiveTabId] = useState<TabId>("tasks");
  const activeTab = TABS.find((tab) => tab.id === activeTabId) ?? TABS[0];

  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto mt-20 flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          variants={groupVariants}
          {...REVEAL}
          className="flex flex-col items-center gap-3"
        >
          <motion.h2 variants={fadeUpVariants} className="text-4xl font-bold">
            Plan. Focus. Flow.
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="max-w-xl">
            Flowly helps you organize your day with simple, effective tools
            designed to keep you moving forward.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            role="tablist"
            className="mt-5 flex gap-1 rounded-full border border-gray-300 p-1.5 shadow-sm"
          >
            {TABS.map(({ id, label, icon: Icon }) => {
              const isActive = id === activeTabId;

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(id)}
                  className={`relative rounded-full px-4 py-2 font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 ${
                    isActive ? "text-white" : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-highlight"
                      className="absolute inset-0 rounded-full bg-purple-400"
                      transition={SPRING}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <TabPanel key={activeTab.id} tab={activeTab} />
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}