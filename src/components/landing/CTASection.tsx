import { APP_NAME } from "@/data";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="py-16 text-center bg-gradient-to-br from-indigo-600 to-emerald-500">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Ready to Boost Your Coding Journey?
      </h2>
      <p className="text-lg md:text-2xl text-indigo-100 px-2 mx-auto mb-8">
        Join now to track progress with {APP_NAME}
      </p>
      <div className="">
        <Link href="/signup" className="px-8 py-3 bg-white text-lg text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-50 transition">
          Get Started For Free
        </Link>
      </div>
    </section>
  );
}
