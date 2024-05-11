import GetStarted from "@/components/atoms/GetStartedButton";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GrammarGuardian.ar: Perfect Your English with AI-powered Assistance",
  description:
    "Discover the power of AI in enhancing your English. GrammarGuardian.ar provides instant feedback, refining your sentences and helping you communicate with clarity and confidence.",
};

const currentYear = new Date().getFullYear();

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center">
      <Head>
        <title>Grammar Guardian.ar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center text-center">
        <Image
          width={150}
          height={150}
          alt="Profile picture"
          referrerPolicy="no-referrer"
          className="rounded-full mx-auto mb-8 w-48 transition ease-in"
          priority
          src="/logo.png"
        />
        <h1 className="text-5xl font-extrabold text-white mb-8 transition ease-in animation-delay-500">
          Grammar Guardian.ar
        </h1>
        <p className="text-2xl text-blue-100 mb-12 transition ease-in animation-delay-1000">
          Learn Grammar with AI
        </p>
        <div className="transition ease-in animation-delay-1500">
          <GetStarted />
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-center text-blue-100 text-sm">
          &copy; {currentYear} Grammar Guardian.ar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
