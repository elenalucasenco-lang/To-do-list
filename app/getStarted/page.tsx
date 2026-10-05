// import Link from "next/link";
// import { Checkbox } from "@/components/ui/checkbox";
// export default function GetStarted() {
//   const previewTasks = [
//     { title: "Finish landing page", tag: "Work" },
//     { title: "Read 20 pages", tag: "Study" },
//     { title: "Evening run", tag: "Health" },
//     {
//       title: "Plan tomorrow",
//       tag: "Personal",
//     },
//   ];
//   return (
//     <div className="flex justify-center border-2 p-20 flex-row border-gray-200 h-auto  items-center">
//       <div className="flex flex-col gap-2">
//         <h1 className="text-4xl font-bold "> Start planning your day</h1>
//         <p className="text-sm text-gray-500">
//           {" "}
//           Create a free account and add your first task in under <br />a minute.
//         </p>
//         <p className="font-bold">Full name</p>
//         <input
//           type="text"
//           className="w-full h-10 pl-2 text-gray-500 border-2 border-geay-200 rounded-xl"
//           placeholder="John Doe"
//         />

//         <p className="font-bold">Email</p>
//         <input
//           type="Email"
//           className="w-full h-10 pl-2 text-gray-500 border-2 border-geay-200 rounded-xl"
//           placeholder="johndoe@gmail.com"
//         />

//         <p className="font-bold">Password</p>
//         <input
//           type="Password"
//           className="w-full h-10 pl-2 text-gray-500 border-2 border-geay-200  rounded-xl"
//           placeholder="Enter a password"
//         />
//         <button className="h-10 w-full bg-purple-600 font-bold text-white text-center rounded-lg">
//           Create account
//         </button>

//         <p>
//           {" "}
//           Already have an account?{" "}
//           <Link href={"/"} className="hover:text-blue-500">
//             Log in
//           </Link>
//         </p>
//       </div>

//       <div className="bg-purple-100 p-10 items-start">
//         <p className="text-sm font-semibold text-purple-600">
//           Your day, at a glance
//         </p>

//         <p className="text-2xl font-bold ">2 of 4 tasks completed</p>
//         <div className="w-full h-2 rounded-xl bg-purple-200">
//           <div className="h-2 rounded-xl w-40 bg-purple-600"></div>
//         </div>

//         <div>
//           {previewTasks.map((item, index) => (
//             <div
//               key={index}
//               className=" bg-white rounded-xl p-3 flex flex-row border-2  border-gray-200 items-center justify-between"
//             >
//               <Checkbox />
//               <p
//                 className={`font-semibold text-black ${item.title === "Read 20 pages" && "text-gray-400 line-through"} ${item.title === "Finish landing page" && "text-gray-400 line-through"}`}
//               >
//                 {item.title}
//               </p>
//               <p className="text-purple-700  bg-purple-200 rounded-xl p-1 px-2">
//                 {item.tag}
//               </p>
//             </div>
//           ))}
//         </div>

//         <p className="text-sm text-gray-400">
//           12-day streak. Keep your momentum going.
//         </p>
//       </div>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const initialTasks = [
  { title: "Finish landing page", tag: "Work", done: true },
  { title: "Read 20 pages", tag: "Study", done: true },
  { title: "Evening run", tag: "Health", done: false },
  { title: "Plan tomorrow", tag: "Personal", done: false },
];

const inputClass =
  "w-full h-12 px-4 text-gray-700 bg-white border border-gray-200 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100";

export default function GetStarted() {
  const [tasks, setTasks] = useState(initialTasks);

  const doneCount = tasks.filter((t) => t.done).length;
  const percent = (doneCount / tasks.length) * 100;

  const toggle = (index: number) =>
    setTasks((prev) =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
    );

  return (
    <div className="relative min-h-screen overflow-hidden   flex items-center justify-center p-6">
      {/* Animatii (keyframes) */}
      <style>{`
        @keyframes gs-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gs-slide-in {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gs-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes gs-fill {
          from { width: 0%; }
        }
        @keyframes gs-flame {
          0%, 100% { transform: rotate(-6deg) scale(1); }
          50%      { transform: rotate(6deg) scale(1.2); }
        }
        .gs-rise     { animation: gs-rise 0.7s cubic-bezier(.2,.8,.2,1) both; }
        .gs-slide-in { animation: gs-slide-in 0.6s cubic-bezier(.2,.8,.2,1) both; }
        .gs-float    { animation: gs-float 9s ease-in-out infinite; }
        .gs-fill     { animation: gs-fill 1.2s cubic-bezier(.2,.8,.2,1) 0.5s both; }
        .gs-flame    { display: inline-block; animation: gs-flame 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .gs-rise, .gs-slide-in, .gs-float, .gs-fill, .gs-flame { animation: none !important; }
        }
      `}</style>

      {/* Blob-uri decorative in fundal */}
      <div className=" " />
      <div
        className=""
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative z-10 flex w-full max-w-6xl md:min-h-[680px] flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-2xl shadow-purple-200/50 backdrop-blur-xl md:flex-row">
        {/* Formular */}
        <div className="flex flex-1 flex-col justify-center gap-5 p-10 md:p-16">
          <div className="gs-rise" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Start planning your day
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Create a free account and add your first task in under a minute.
            </p>
          </div>

          <div className="gs-rise flex flex-col gap-2" style={{ animationDelay: "0.15s" }}>
            <label htmlFor="name" className="text-sm font-semibold text-gray-800">
              Full name
            </label>
            <input id="name" type="text" className={inputClass} placeholder="John Doe" />
          </div>

          <div className="gs-rise flex flex-col gap-2" style={{ animationDelay: "0.25s" }}>
            <label htmlFor="email" className="text-sm font-semibold text-gray-800">
              Email
            </label>
            <input id="email" type="email" className={inputClass} placeholder="johndoe@gmail.com" />
          </div>

          <div className="gs-rise flex flex-col gap-2" style={{ animationDelay: "0.35s" }}>
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">
              Password
            </label>
            <input id="password" type="password" className={inputClass} placeholder="Enter a password" />
          </div>

          <button
            className="gs-rise mt-2 h-14 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-purple-300/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-300 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
            style={{ animationDelay: "0.45s" }}
          >
            Create account
          </button>

          <p className="gs-rise text-sm text-gray-600" style={{ animationDelay: "0.55s" }}>
            Already have an account?{" "}
            <Link
              href="/"
              className="font-semibold text-purple-600 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Previzualizare */}
        <div
          className="gs-slide-in flex flex-1 flex-col justify-center gap-5 bg-gradient-to-br from-purple-100 to-indigo-100 p-10 md:p-16"
          style={{ animationDelay: "0.3s" }}
        >
          <div>
            <p className="text-sm font-semibold text-purple-600">Your day, at a glance</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">
              {doneCount} of {tasks.length} tasks completed
            </p>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-purple-200">
            <div
              className="gs-fill h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-[width] duration-700 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex flex-col gap-4">
            {tasks.map((item, index) => (
              <div
                key={item.title}
                onClick={() => toggle(index)}
                className="gs-rise flex cursor-pointer items-center gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ animationDelay: `${0.5 + index * 0.12}s` }}
              >
                <Checkbox
                  checked={item.done}
                  onCheckedChange={() => toggle(index)}
                  onClick={(e) => e.stopPropagation()}
                />
                <p
                  className={`flex-1 text-lg font-semibold transition-all duration-300 ${
                    item.done ? "text-gray-400 line-through" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold `}
                >
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            <span className="gs-flame"></span> 12-day streak. Keep your momentum going.
          </p>
        </div>
      </div>
    </div>
  );
}