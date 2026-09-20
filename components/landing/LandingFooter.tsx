import Image from "next/image";
import FlowlyLogo from "@/public/landingImg/FlowlyLogo.png";
import { MapPin, Mail, Phone, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub , FaYoutube , FaLinkedin  , FaTwitter } from "react-icons/fa";

import Link from "next/link";
const contactInfo = [
  {
    icon: MapPin,
    text: "Chisinau, Moldova",
  },
  {
    icon: Mail,
    text: "elenalucasenco@gmail.com",
  },
  {
    icon: Phone,
    text: "+373 68424765",
  },
];

export default function LandingFooter() {
  return (
    <div className="px-50   mb-10 mt-10 flex flex-col gap-10">
      <div className=" flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src={FlowlyLogo}
            alt="Flowly logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <span>
            Flowly helps you plan your day, focus on what matters, and
            <br />
            find your flow state with ease.
          </span>
          <div className="flex items-center gap-2 w-fit rounded-xl bg-purple-100 px-3 py-2">
            <div className="rounded-full animate-pulse bg-green-300 h-3 w-3"></div>
            <span className="text-purple-600"> All Systems Online </span>
          </div>
          <div>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-row gap-2 items-center">
                <item.icon className="text-purple-600 size-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col ">
          <span className="font-semibold mb-2">Navigation</span>
          <Link href="/" className="hover:text-purple-600">
            Tasks
          </Link>

          <Link href="/" className="hover:text-purple-600">
            Calendar
          </Link>
        </div>
        <div className="flex flex-col ">
          <span className="font-semibold">Features</span>
          <span>Daily Planning</span>
          <span>Task Tracking</span>
          <span>Schedule View</span>
          <span>Flow Insights</span>
        </div>

        <div className="flex flex-col h-auto w-auto gap-2 border-2 border-gray-200 p-2 rounded-xl shadow-2xl">
          <div className="flex flex-row items-center gap-2 text-purple-600">
            <CircleCheck className="size-4" />
            <span>Get Started</span>
          </div>
          <span className="font-bold text-xl">Plan your day better</span>
          <span className="text-gray-700">
            Start your journey to better
            <br />
            productivity with Flowly today.
          </span>

          <Button
            className="
              bg-purple-600
              mt-15
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-purple-700
              hover:shadow-lg
              active:translate-y-0
            "
          >
            Get started
          </Button>
        </div>
      </div>

      <div className="h-0.5 bg-gray-100 w-full"></div>
      <div className="flex flex-row justify-between">
        <span>© 2026 Flowly. All rights reserved.</span>
        <div className="flex flex-row gap-2">
          <button>Privacy</button>
          <button>Terms</button>
          <button>Security</button>
          <button>Status</button>
        </div>

        <div className="flex flex-row items-center gap-2 ">
          <FaGithub />
          <FaYoutube />
          <FaLinkedin />
          <FaTwitter/>
        </div>
      </div>
    </div>
  );
}
