"use client";

import FlowlyLogo from "../../public/landingImg/FlowlyLogo.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function LandingHearder() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center pt-10 relative">
      <div className="flex items-center  w-full max-w-7xl px-10 justify-between border-2 border-gray-100 shadow-xl rounded-3xl">
        <div className="transition-transform duration-300 hover:scale-105 flex flex-row items-center">
          <Image src={FlowlyLogo} alt="logoImg" className="h-15 w-auto  " />
        </div>

        <div className="flex flex-row gap-8">
          <button
            className="text-sm font-bold transition-all duration-300 
              hover:-translate-y-1 hover:text-purple-600 hover:bg-purple-100 rounded-xl p-2"
            onClick={() => scrollTo("home")}
          >
            How it works
          </button>
          <button
            className="text-sm font-semibold transition-all duration-300
              hover:-translate-y-1 hover:text-purple-600 hover:bg-purple-100 rounded-xl p-2"
            onClick={() => scrollTo("workspace")}
          >
            Features
          </button>
          <button
            className="text-sm font-semibold transition-all duration-300
              hover:-translate-y-1 hover:text-purple-600 hover:bg-purple-100 rounded-xl p-2"
            onClick={() => scrollTo("features")}
          >
            Home
          </button>
        </div>

        <div className="flex gap-4">
          <Button
            className=" bg-purple-600 p-1 text-sm font-semibold text-white  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
              hover:bg-purple-600"
          >
            Login
          </Button>

          <Button
            className=" bg-purple-600 p-1 text-sm font-semibold text-white  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
            hover:bg-purple-600"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState, type ReactNode } from "react";
// import Image from "next/image";
// import {
//   motion,
//   MotionConfig,
//   useMotionValueEvent,
//   useScroll,
//   type TargetAndTransition,
//   type Transition,
//   type Variants,
// } from "framer-motion";
// import logo from "../../public/landingImg/FlowlyLogo.png";
// import { Button } from "../ui/button";

// const NAV_LINKS = ["How it works", "Features", "Home"] as const;

// type NavLink = (typeof NAV_LINKS)[number];

// const SPRING: Transition = {
//   type: "spring",
//   stiffness: 380,
//   damping: 24,
// };

// const barVariants: Variants = {
//   hidden: { opacity: 0, y: -48 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//       when: "beforeChildren",
//       delayChildren: 0.1,
//       staggerChildren: 0.12,
//     },
//   },
// };

// const groupVariants: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.07,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: -12 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: "easeOut",
//     },
//   },
// };

// const BUTTON_HOVER: TargetAndTransition = {
//   y: -3,
//   scale: 1.05,
//   boxShadow: "0 12px 24px -8px rgba(147, 51, 234, 0.55)",
//   transition: SPRING,
// };

// const BUTTON_TAP: TargetAndTransition = {
//   scale: 0.95,
//   transition: SPRING,
// };

// type AnimatedButtonProps = {
//   children: ReactNode;
//   className?: string;
// };

// function AnimatedButton({
//   children,
//   className = "",
// }: AnimatedButtonProps) {
//   return (
//     <motion.div
//       variants={itemVariants}
//       whileHover={BUTTON_HOVER}
//       whileTap={BUTTON_TAP}
//       className="rounded-md"
//     >
//       <Button
//         className={`bg-purple-600 p-1 text-sm font-semibold text-white hover:bg-purple-600 ${className}`}
//       >
//         {children}
//       </Button>
//     </motion.div>
//   );
// }

// export default function LandingHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState<NavLink | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (y) =>
//     setIsScrolled(y > 24)
//   );

//   return (
//     <MotionConfig reducedMotion="user">
//       <motion.header
//         className="sticky top-0 z-50 flex justify-center px-3 sm:px-4"
//         animate={{
//           paddingTop: isScrolled ? 12 : 40,
//         }}
//         transition={{
//           duration: 0.4,
//           ease: "easeOut",
//         }}
//       >
//         <motion.div
//           variants={barVariants}
//           initial="hidden"
//           animate="show"
//           className={`flex w-full max-w-7xl items-center justify-between rounded-3xl border-2 border-gray-100 px-4 py-2 sm:px-6 lg:px-10 ${
//             isScrolled
//               ? "bg-white/70 shadow-2xl backdrop-blur-md"
//               : "bg-transparent shadow-xl"
//           }`}
//         >
//           <motion.div
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.06,
//               rotate: -2,
//               transition: SPRING,
//             }}
//             whileTap={{
//               scale: 0.97,
//               transition: SPRING,
//             }}
//             className="flex items-center"
//           >
//             <Image
//               src={logo}
//               alt="Flowly logo"
//               className="h-10 w-auto sm:h-12 lg:h-[60px]"
//             />
//           </motion.div>

//           <motion.nav
//             variants={groupVariants}
//             className="hidden gap-2 md:flex"
//             onMouseLeave={() => setActiveLink(null)}
//           >
//             {NAV_LINKS.map((link) => (
//               <motion.button
//                 key={link}
//                 type="button"
//                 variants={itemVariants}
//                 onMouseEnter={() => setActiveLink(link)}
//                 onFocus={() => setActiveLink(link)}
//                 onBlur={() => setActiveLink(null)}
//                 className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:text-purple-700"
//               >
//                 {activeLink === link && (
//                   <motion.span
//                     layoutId="nav-highlight"
//                     className="absolute inset-0 rounded-full bg-purple-100"
//                     transition={SPRING}
//                   />
//                 )}

//                 <span className="relative">{link}</span>
//               </motion.button>
//             ))}
//           </motion.nav>

//           <motion.div
//             variants={groupVariants}
//             className="hidden gap-4 sm:flex"
//           >
//             <AnimatedButton>Login</AnimatedButton>

//             <AnimatedButton className="group relative overflow-hidden">
//               <span
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/30 transition-transform duration-700 ease-out group-hover:translate-x-[500%]"
//               />

//               <span className="relative">
//                 Get started
//               </span>
//             </AnimatedButton>
//           </motion.div>

//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="rounded-xl p-2 text-2xl md:hidden"
//           >
//             ☰
//           </motion.button>
//         </motion.div>

//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute left-3 right-3 top-20 rounded-2xl border-2 border-gray-100 bg-white p-5 shadow-xl md:hidden"
//           >
//             <div className="flex flex-col gap-4">
//               {NAV_LINKS.map((link) => (
//                 <button
//                   key={link}
//                   onClick={() => setMenuOpen(false)}
//                   className="rounded-xl p-3 text-left font-semibold transition-all duration-300 hover:bg-purple-100 hover:text-purple-700"
//                 >
//                   {link}
//                 </button>
//               ))}

//               <div className="flex gap-3 border-t pt-4">
//                 <Button className="flex-1 bg-purple-600 hover:bg-purple-600">
//                   Login
//                 </Button>

//                 <Button className="flex-1 bg-purple-600 hover:bg-purple-600">
//                   Get started
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </motion.header>
//     </MotionConfig>
//   );
// }
