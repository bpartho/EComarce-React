import { ArrowUpRight, CheckIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-primary text-white px-4 md:px-0">
      <div className="max-w-6xl mx-auto py-6">
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-semibold text-center font-secondary tracking-wide">
          Fresh Made <span className="text-secondary">Fast</span>
        </h1>

        <div className="flex flex-col flex-wrap md:flex-row items-center text-center md:text-left">
          <div className="flex flex-col gap-12 flex-1 justify-center">
            <div className="space-y-6">
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, tempore!
              </p>
              <Link to="/shop">
                <button className="btn flex gap-1 hover:animate-pulse duration-75">
                  Shop Now
                  <ArrowUpRight />
                </button>
              </Link>
            </div>
            <div className="space-y-4">
              <p className="flex gap-2 py-2 justify-center border border-white/30 w-[180px] rounded-full font-bold">
                <CheckIcon />
                Always Fresh
              </p>
              <p className="flex gap-2 py-2 justify-center border border-white/30 w-[260px] rounded-full font-bold">
                <span>
                  <CheckIcon />
                </span>
                <span>Fast & Realiable Delivery</span>
              </p>
              <div className="mt-8">
                <h1 className="flex gap-2 text-secondary text-6xl font-bold">
                  4.5{" "}
                  <span className="self-end">
                    <Star />
                  </span>
                </h1>
                <p className="text-sm text-gray-300">Market Rating</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-2">
            <img
              src="/public/hero1.png"
              alt="hero image"
              className="w-[1000px] md:-mt-16"
            />
          </div>
          <div className="flex-1 self-center">
            <div className="p-6 border border-white/30 rounded-4xl">
              <h1 className="text-6xl font-semibold">350+</h1>
              <p className="text-lg text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//git
