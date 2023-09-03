"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, Codesandbox, Cog, Command, Film, ImageIcon, LayoutDashboard, ListMusic, MessagesSquare, Mic, Music, Paintbrush2, Send, Settings, VideoIcon } from "lucide-react";
import {MessageSquare} from "lucide-react";
import {usePathname} from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
import img from "@/public/1.png"

const routes = [
  {
    label: "Command Center",
    icon: Command,
    href: "/dashboard",
    color: "text-sky-500",

  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
    
  },
  {
    label: "AI Artistry",
    icon: Paintbrush2,
    href: "/image",
    color: "text-pink-500",
    
  },
  {
    label: "Dynamic Videos",
    icon: Film,
    href: "/video",
    color: "text-orange-500",
    
  },
  {
    label: "Music Maestro",
    icon: ListMusic ,
    href: "/music",
    color: "text-emerald-500",

    
  },
  {
    label: "Instant Code",
    icon: Codesandbox,
    href: "/code",
    color: "text-green-500",
    
  },
  {
    label: "Voice Interaction",
    icon: Mic,
    href: "/dora ",
    
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/setting ",
    
  },
];

const Sidebar = () => {
  const pathname= usePathname();
  return (
    <div className=" space-y-4 py-4 flex flex-col h-full text-primary bg-secondary ">
      <div className="py-3 py-w flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className=" relative w-10 h-12  mr-7">
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            AiDora
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",pathname=== route.href ? "text-primary bg-primary/10" : "text-gray-500")}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
