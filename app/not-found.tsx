import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found | GrammarGuardian.ar",
  description: "Oops! The page you're looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center">
      <Head>
        <title>Page Not Found | Grammar Guardian.ar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center text-center">
        <div className="relative mb-8">
          <Image
            width={150}
            height={150}
            alt="Profile picture"
            referrerPolicy="no-referrer"
            className="rounded-full mx-auto w-48 transition-all duration-500 ease-in-out transform hover:scale-110 border-4 border-yellow-400 animate-logo-pulse"
            priority
            src="/logo.png"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"></div>
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-8 opacity-0 animate-fade-in-slower animation-delay-500">
          404 - Page Not Found
        </h1>
        <p className="text-2xl text-blue-100 mb-12 opacity-0 animate-fade-in-slower animation-delay-1000">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="opacity-0 animate-fade-in-slower animation-delay-1500">
          <Link href="/">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300">
              Go Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
