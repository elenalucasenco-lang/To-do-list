// import Image from "next/image";
// import FlowlyLogo from "@/public/landingImg/FlowlyLogo.png";
// import { MapPin, Mail, Phone, CircleCheck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { FaGithub , FaYoutube , FaLinkedin  , FaTwitter } from "react-icons/fa";

// import Link from "next/link";
// const contactInfo = [
//   {
//     icon: MapPin,
//     text: "Chisinau, Moldova",
//   },
//   {
//     icon: Mail,
//     text: "elenalucasenco@gmail.com",
//   },
//   {
//     icon: Phone,
//     text: "+373 68424765",
//   },
// ];

// export default function LandingFooter() {
//   return (
//     <div className="px-50   mb-10 mt-10 flex flex-col gap-10">
//       <div className=" flex flex-row justify-between">
//         <div className="flex flex-col gap-4">
//           <Image
//             src={FlowlyLogo}
//             alt="Flowly logo"
//             width={120}
//             height={40}
//             className="object-contain"
//           />
//           <span>
//             Flowly helps you plan your day, focus on what matters, and
//             <br />
//             find your flow state with ease.
//           </span>
//           <div className="flex items-center gap-2 w-fit rounded-xl bg-purple-100 px-3 py-2">
//             <div className="rounded-full animate-pulse bg-green-300 h-3 w-3"></div>
//             <span className="text-purple-600"> All Systems Online </span>
//           </div>
//           <div>
//             {contactInfo.map((item, index) => (
//               <div key={index} className="flex flex-row gap-2 items-center">
//                 <item.icon className="text-purple-600 size-4" />
//                 <span>{item.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col ">
//           <span className="font-semibold mb-2">Navigation</span>
//           <Link href="/" className="hover:text-purple-600">
//             Tasks
//           </Link>

//           <Link href="/" className="hover:text-purple-600">
//             Calendar
//           </Link>
//         </div>
//         <div className="flex flex-col ">
//           <span className="font-semibold">Features</span>
//           <span>Daily Planning</span>
//           <span>Task Tracking</span>
//           <span>Schedule View</span>
//           <span>Flow Insights</span>
//         </div>

//         <div className="flex flex-col h-auto w-auto gap-2 border-2 border-gray-200 p-2 rounded-xl shadow-2xl">
//           <div className="flex flex-row items-center gap-2 text-purple-600">
//             <CircleCheck className="size-4" />
//             <span>Get Started</span>
//           </div>
//           <span className="font-bold text-xl">Plan your day better</span>
//           <span className="text-gray-700">
//             Start your journey to better
//             <br />
//             productivity with Flowly today.
//           </span>

//           <Button
//             className="
//               bg-purple-600
//               mt-15
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

//       <div className="h-0.5 bg-gray-100 w-full"></div>
//       <div className="flex flex-row justify-between">
//         <span>© 2026 Flowly. All rights reserved.</span>
//         <div className="flex flex-row gap-2">
//           <button>Privacy</button>
//           <button>Terms</button>
//           <button>Security</button>
//           <button>Status</button>
//         </div>

//         <div className="flex flex-row items-center gap-2 ">
//           <FaGithub />
//           <FaYoutube />
//           <FaLinkedin />
//           <FaTwitter/>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  type Easing,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "framer-motion";
import {
  CircleCheck,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import FlowlyLogo from "@/public/landingImg/FlowlyLogo.png";
import { Button } from "@/components/ui/button";

type ContactItem = { icon: LucideIcon; text: string };
type FooterLink = { label: string; href: string };
type SocialLink = { icon: IconType; label: string; href: string };

const CONTACT_INFO: ContactItem[] = [
  { icon: MapPin, text: "Chisinau, Moldova" },
  { icon: Mail, text: "elenalucasenco@gmail.com" },
  { icon: Phone, text: "+373 68424765" },
];

const NAV_LINKS: FooterLink[] = [
  { label: "Tasks", href: "/" },
  { label: "Calendar", href: "/" },
];

const FEATURES = [
  "Daily Planning",
  "Task Tracking",
  "Schedule View",
  "Flow Insights",
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
  { label: "Status", href: "#" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
];

const LINK_CLASS =
  "relative w-fit transition-colors duration-300 hover:text-purple-600 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-purple-600 after:transition-[width] after:duration-300 hover:after:w-full";

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const SPRING: Transition = { type: "spring", stiffness: 380, damping: 24 };

const REVEAL = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const BUTTON_HOVER: TargetAndTransition = {
  y: -3,
  scale: 1.05,
  boxShadow: "0 12px 24px -8px rgba(147, 51, 234, 0.55)",
  transition: SPRING,
};

const BUTTON_TAP: TargetAndTransition = { scale: 0.95, transition: SPRING };

const CARD_HOVER: TargetAndTransition = { y: -6, transition: SPRING };

type FooterColumnProps = {
  title: string;
  children: ReactNode;
};

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <motion.div variants={fadeUpVariants} className="flex flex-col gap-2">
      <h3 className="font-semibold">{title}</h3>
      {children}
    </motion.div>
  );
}

function StatusBadge() {
  return (
    <div className="flex w-fit items-center gap-2 rounded-xl bg-purple-100 px-3 py-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-300" />
      </span>
      <span className="text-purple-600">All Systems Online</span>
    </div>
  );
}

export default function LandingFooter() {
  return (
    <MotionConfig reducedMotion="user">
      <footer className="mx-auto mb-10 mt-10 flex w-full max-w-6xl flex-col gap-10 px-6">
        <motion.div
          variants={groupVariants}
          {...REVEAL}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeUpVariants} className="flex flex-col gap-4">
            <Image
              src={FlowlyLogo}
              alt="Flowly logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <p className="max-w-sm">
              Flowly helps you plan your day, focus on what matters, and find
              your flow state with ease.
            </p>
            <StatusBadge />
            <ul className="flex flex-col gap-1">
              {CONTACT_INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="size-4 text-purple-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <FooterColumn title="Navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className={LINK_CLASS}>
                {label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Features">
            <ul className="flex flex-col gap-1">
              {FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </FooterColumn>

          <motion.div
            variants={fadeUpVariants}
            whileHover={CARD_HOVER}
            className="flex flex-col gap-2 rounded-xl border-2 border-gray-200 p-4 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-purple-600">
              <CircleCheck className="size-4" />
              <span>Get Started</span>
            </div>
            <h3 className="text-xl font-bold">Plan your day better</h3>
            <p className="text-gray-700">
              Start your journey to better productivity with Flowly today.
            </p>

            <motion.div
              variants={fadeUpVariants}
              whileHover={BUTTON_HOVER}
              whileTap={BUTTON_TAP}
              className="mt-6 rounded-md"
            >
              <Button className="group relative w-full overflow-hidden bg-purple-600 p-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-purple-700">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
                />
                <span className="relative">Get started</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="h-0.5 w-full bg-gray-100" />

        <motion.div
          variants={groupVariants}
          {...REVEAL}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <motion.span variants={fadeUpVariants}>
            © 2026 Flowly. All rights reserved.
          </motion.span>

          <motion.nav
            variants={fadeUpVariants}
            aria-label="Legal"
            className="flex gap-4"
          >
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className={LINK_CLASS}>
                {label}
              </Link>
            ))}
          </motion.nav>

          <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-[color,transform] duration-300 hover:-translate-y-1 hover:text-purple-600"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </MotionConfig>
  );
}