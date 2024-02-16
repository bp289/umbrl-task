import Image from "next/image";
import { Hero } from "./components/Hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Hero />
      <h1>Check our features</h1>
      <section>
        <p>
          with lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <p>Build your next consultancy website withing a few minutes.</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10"></div>
      <div>
        <div></div>
      </div>
    </main>
  );
}
