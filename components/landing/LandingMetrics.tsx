// const statsData = [
//   {
//     value: "4.2/5.0",
//     label: "Flow State",
//     description: "High productivity levels",
//   },
//   {
//     value: "Work Tasks",
//     label: "Top Category",
//     description: "45% of total activity",
//   },
//   {
//     value: "12 days",
//     label: "Current Streak",
//     description: "Zero missed daily goals",
//   },
// ];

// export default function LandingMetrics() {
//   return (
//     <div className="px-50">
//       <div className="flex flex-row justify-between border-2 border-gray-200 rounded-xl p-4 px-30  ">
//         {statsData.map((item, index) => (
//           <div key={item.label} className="flex flex-row items-center">
//             <div className="flex flex-col pr-16">
//               <span className="font-semibold">{item.label}</span>
//               <span className="font-bold  text-3xl">{item.value}</span>
//               <span>{item.description}</span>
//             </div>

//             {index < statsData.length - 1 && (
//               <div className="w-px h-16 bg-gray-300 mx-8"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import {
  motion,
  MotionConfig,
  type Easing,
  type Variants,
} from "framer-motion";

type Metric = {
  label: string;
  value: string;
  description: string;
};

const METRICS: Metric[] = [
  {
    label: "Flow State",
    value: "4.2/5.0",
    description: "High productivity levels",
  },
  {
    label: "Top Category",
    value: "Work Tasks",
    description: "45% of total activity",
  },
  {
    label: "Current Streak",
    value: "12 days",
    description: "Zero missed daily goals",
  },
];

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

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

export default function LandingMetrics() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid divide-y divide-gray-300 rounded-xl border-2 border-gray-200 px-6 py-2 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-6"
        >
          {METRICS.map(({ label, value, description }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="group flex flex-col py-4 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-semibold">{label}</span>
              <span className="text-3xl font-bold transition-colors duration-300 group-hover:text-purple-600">
                {value}
              </span>
              <span>{description}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}