// import {
//   Activity,
//   Clock,
//   Flame,
//   Layers,
//   Sparkles,
//   TrendingUp,
//   CheckCircle,
// } from "lucide-react";

// export default function DailyTracks() {
//   const stats = [
//     {
//       icon: Activity,
//       badge: "Active",
//       value: "24",
//       unit: "tasks",
//       title: "Tasks Completed",
//       description: "Total items checked off your daily to-do list.",
//       footer: { type: "trend", text: "+12% this week" },
//     },
//     {
//       icon: Clock,
//       badge: "Focused",
//       value: "480",
//       unit: "min",
//       title: "Focus Minutes",
//       description: "Time spent in deep work mode on your projects.",
//       footer: { type: "trend", text: "+60 min vs avg" },
//     },
//     {
//       icon: Flame,
//       badge: "On Track",
//       value: "85%",
//       suffix: "target 80%",
//       title: "Daily Goal",
//       description: "Consistency in hitting your daily task targets.",
//       footer: { type: "progress", percent: 85, text: "4 of 5 days met" },
//     },
//     {
//       icon: Layers,
//       badge: "Ongoing",
//       value: "3/5",
//       unit: "categories",
//       title: "Active Projects",
//       description: "Work, Personal, Health, Study, and Creative.",
//       footer: {
//         type: "tags",
//         tags: ["Work", "Personal", "Health"],
//         text: "Balanced flow",
//       },
//     },
//   ];
//   return (
//     <div className="flex items-start gap-2 flex-col px-60">
//       <div className="w-fit animate-[pulse_2s_ease-in-out_infinite] flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
//         <Sparkles className="h-4 w-4 animate-pulse text-purple-600" />
//         <span>Flowly Insights</span>
//       </div>

//       <span className="animate-[fadeIn_0.8s_ease-out] text-5xl font-bold">
//         Track your daily flow and stay on
//         <br />
//         target.
//       </span>
//       <span className="pt-3">
//         Monitor your task completion, focus time, and streaks to keep your
//         momentum
//         <br />
//         steady every single day.
//       </span>
//       <div className="flex flex-row gap-5 w-full mt-10  ">
//         {stats.map((item) => (
//           <div
//             key={item.title}
//             className="border-2 border-gray-200 rounded-xl flex  flex-col w-100  h-auto p-4"
//           >
//             <div className="flex justify-between items-center w-full gap-2">
//               <item.icon className="text-purple-600 size-10 bg-purple-100 p-2 rounded-lg  " />
//               <span className="text-purple-600 bg-purple-100 p-1 rounded-xl px-2">
//                 {item.badge}
//               </span>
//             </div>

//             <div className="flex flex-row gap-1 items-center pt-4">
//               <span className="font-bold text-4xl">{item.value}</span>
//               <span className="pt-2">{item.unit}</span>
//             </div>
//             <span className="font-bold pb-2">{item.title}</span>
//             <span className="pb-15">{item.description}</span>

//             <div className="bg-gray-300 w-full h-0.5"></div>

//             {item.footer.type === "trend" && (
//               <div className="flex flex-row items-center gap-2 mt-5">
//                 <TrendingUp size={14} className="text-purple-600" />
//                 <span>{item.footer.text}</span>
//               </div>
//             )}

//             {item.footer.type === "progress" && (
//               <div>
//                 <div className="flex mt-4 flex-row  justify-between">
//                   <span>Goal Progress</span>
//                   <span>{item.footer.percent}%</span>
//                 </div>

//                 <div className="rounded-xl mt-2 border-2  border-gray-100">
//                   <div
//                     className="bg-purple-400 h-2 rounded-xl"
//                     style={{ width: `${item.footer.percent}%` }}
//                   ></div>
//                 </div>

//                 <div className="flex flex-row items-center gap-2">
//                   <CheckCircle size={14} className="text-purple-600" />
//                   <span>{item.footer.text}</span>
//                 </div>
//               </div>
//             )}

//             {item.footer.type === "tags" && (
//               <div className="mt-4">
//                 <div className="flex flex-row gap-3">
//                   {item.footer.tags?.map((tag) => (
//                     <span key={tag}  className="text-purple-600 bg-purple-100 p-1 rounded-xl px-2">{tag}</span>
//                   ))}
//                 </div>
//                 <div className="flex flex-row items-center gap-2 mt-5">
//                 <TrendingUp size={14} className="text-purple-600" />
//                 <span>{item.footer.text}</span>
//               </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Easing,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "framer-motion";
import {
  Activity,
  CheckCircle,
  Clock,
  Flame,
  Layers,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Footer =
  | { type: "trend"; text: string }
  | { type: "progress"; percent: number; text: string }
  | { type: "tags"; tags: string[]; text: string };

type Stat = {
  icon: LucideIcon;
  badge: string;
  value: number;
  valueSuffix?: string;
  unit?: string;
  title: string;
  description: string;
  footer: Footer;
};

const STATS: Stat[] = [
  {
    icon: Activity,
    badge: "Active",
    value: 24,
    unit: "tasks",
    title: "Tasks Completed",
    description: "Total items checked off your daily to-do list.",
    footer: { type: "trend", text: "+12% this week" },
  },
  {
    icon: Clock,
    badge: "Focused",
    value: 480,
    unit: "min",
    title: "Focus Minutes",
    description: "Time spent in deep work mode on your projects.",
    footer: { type: "trend", text: "+60 min vs avg" },
  },
  {
    icon: Flame,
    badge: "On Track",
    value: 85,
    valueSuffix: "%",
    unit: "target 80%",
    title: "Daily Goal",
    description: "Consistency in hitting your daily task targets.",
    footer: { type: "progress", percent: 85, text: "4 of 5 days met" },
  },
  {
    icon: Layers,
    badge: "Ongoing",
    value: 3,
    valueSuffix: "/5",
    unit: "categories",
    title: "Active Projects",
    description: "Work, Personal, Health, Study, and Creative.",
    footer: {
      type: "tags",
      tags: ["Work", "Personal", "Health"],
      text: "Balanced flow",
    },
  },
];

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const SPRING: Transition = { type: "spring", stiffness: 380, damping: 24 };

const IN_VIEW_ONCE = { once: true, amount: 0.2 };

const PILL_CLASS = "rounded-xl bg-purple-100 px-2 py-1 text-purple-600";

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const CARD_HOVER: TargetAndTransition = { y: -6, transition: SPRING };

type CountUpProps = {
  to: number;
  suffix?: string;
};

function CountUp({ to, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const label = useTransform(
    count,
    (latest) => `${Math.round(latest)}${suffix}`,
  );

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      count.set(to);
      return;
    }

    const controls = animate(count, to, { duration: 1.2, ease: EASE_OUT });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, count, to]);

  return <motion.span ref={ref}>{label}</motion.span>;
}

type TrendRowProps = { text: string };

function TrendRow({ text }: TrendRowProps) {
  return (
    <div className="flex items-center gap-2">
      <TrendingUp size={14} className="text-purple-600" />
      <span>{text}</span>
    </div>
  );
}

type ProgressFooterProps = { percent: number; text: string };

function ProgressFooter({ percent, text }: ProgressFooterProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Goal Progress</span>
        <span>{percent}%</span>
      </div>

      <div className="rounded-xl border-2 border-gray-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
          className="h-2 rounded-xl bg-purple-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle size={14} className="text-purple-600" />
        <span>{text}</span>
      </div>
    </div>
  );
}

type TagsFooterProps = { tags: string[]; text: string };

function TagsFooter({ tags, text }: TagsFooterProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span key={tag} className={PILL_CLASS}>
            {tag}
          </span>
        ))}
      </div>
      <TrendRow text={text} />
    </div>
  );
}

type CardFooterProps = { footer: Footer };

function CardFooter({ footer }: CardFooterProps) {
  switch (footer.type) {
    case "trend":
      return <TrendRow text={footer.text} />;
    case "progress":
      return <ProgressFooter percent={footer.percent} text={footer.text} />;
    case "tags":
      return <TagsFooter tags={footer.tags} text={footer.text} />;
  }
}

type StatCardProps = { stat: Stat };

function StatCard({ stat }: StatCardProps) {
  const { icon: Icon, badge, value, valueSuffix, unit, title, description, footer } = stat;

  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={CARD_HOVER}
      className="group flex flex-col rounded-xl border-2 border-gray-200 p-4 transition-[border-color,box-shadow] duration-300 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100"
    >
      <div className="flex w-full items-center justify-between gap-2">
        <Icon className="size-10 rounded-lg bg-purple-100 p-2 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
        <span className={PILL_CLASS}>{badge}</span>
      </div>

      <div className="flex items-center gap-1 pt-4">
        <span className="text-4xl font-bold">
          <CountUp to={value} suffix={valueSuffix} />
        </span>
        {unit && <span className="pt-2">{unit}</span>}
      </div>

      <h3 className="pb-2 font-bold">{title}</h3>
      <p className="grow pb-6">{description}</p>

      <div className="h-0.5 w-full bg-gray-300" />

      <div className="min-h-[5rem] pt-4">
        <CardFooter footer={footer} />
      </div>
    </motion.article>
  );
}

export default function DailyTracks() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-2 px-6">
        <motion.div
          variants={groupVariants}
          initial="hidden"
          whileInView="show"
          viewport={IN_VIEW_ONCE}
          className="flex flex-col items-start gap-2"
        >
          <motion.div
            variants={fadeUpVariants}
            className="flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
          >
            <Sparkles className="h-4 w-4 animate-pulse text-purple-600" />
            <span>Flowly Insights</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="max-w-2xl text-balance text-5xl font-bold"
          >
            Track your daily flow and stay on target.
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="max-w-xl pt-3">
            Monitor your task completion, focus time, and streaks to keep your
            momentum steady every single day.
          </motion.p>
        </motion.div>

        <motion.div
          variants={groupVariants}
          initial="hidden"
          whileInView="show"
          viewport={IN_VIEW_ONCE}
          className="mt-10 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}

