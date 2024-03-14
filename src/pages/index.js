import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col dark:bg-slate-900 bg-white/80 ${inter.className}`}
    >
      <Header/>
    </main>
  );
}