import Link from "next/link";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <section id="hero" className="">
      <div className="lg:min-h-[calc(100vh-52px)] pt-30 py-10 px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
            Track Your Coding Progress
          </h1>

          <h2 className="text-center text-xl md:text-4xl font-semibold mt-4 text-secondary-foreground">
            All Your Profiles in One Place
          </h2>

          <p className="max-w-2xl mt-4 text-lg md:text-xl text-center text-tertiary-foreground">
            Unify your programming profiles in one dashboard and keep track of your progress with ease.
          </p>

          <div className="mt-8">
            <Link href="/signup">
              <Button variant="gradient" className="px-8 py-3 font-semibold shadow-md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
