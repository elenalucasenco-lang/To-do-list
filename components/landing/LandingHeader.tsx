import FlowlyLogo from "../../public/landingImg/FlowlyLogo.png"
import Image from "next/image";
export default function LandingHearder() {
  return (
    <div className="flex flex-row justify-center ">
      <div>
        <Image src={FlowlyLogo} alt="logoImg" className="h-40 w-auto" />
      </div>

      <div className="flex gap-4 flex-row">
        <button className="text-2xl font-bold text-bold ">How it works</button>
        <button className="text-2xl font-bold ">Features</button>
        <button className="text-2xl font-bold ">Home</button>
      </div>

      <div>
        <button>Login</button>
        <button>Get started</button>
      </div>
    </div>
  );
}
