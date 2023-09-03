"use client";
import { TypeAnimation } from "react-type-animation";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/public/2.png";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (

    <div className="container mx-auto py-30">
      <div className="flex  flex-col gap-y-8 lg:flex-row lg:items-center ">
        <div className="flex-1 text-center  lg:text-left">
          <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110] ">
            AI-Powered Creations
          </h1>
          <div className=" text-[36px] mb-6 lg:text[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "AI-Powered Chatbot.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Image and Video Generation.",
                1000,
                "Content Creation.",
                1000,
                "Voice Command Interaction.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="mb-10 max-w-lg mx-auto lg:mx-5 text-zinc-400">
            Welcome to our AI-Enhanced Content Creation Platform – where
            creativity knows no bounds! Our platform harnesses the power of
            artificial intelligence to empower creators, students, and
            businesses alike. Whether you are looking to generate stunning images
            and videos, compose engaging blog posts, or even engage in
            voice-powered interactions, our platform has you covered. Unleash
            your imagination, save time, and explore new possibilities in
            content creation. Join us on this journey of innovation and
            creativity.
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-1'>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant="premium"
                className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
              >
                Start Generating
              </Button>
            </Link>
          </div>
          
        </div>
        <div className="object-scale-down h-100 w-96  ">
          <Image src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};
