import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold leading-tight text-gray-800 lg:text-4xl xl:text-5xl">
            <span className="text-blue-600">The</span> best way to{" "}
            <span className="text-blue-600">Create </span> and{" "}
            <span className="text-blue-600">Have fun</span> while creating your{" "}
            <span className="text-blue-600">Reports</span>
          </h1>
          <p className="mt-6 text-gray-600 lg:text-lg">
            We provide you with the ready made templates to create your reports
            in a fun and interactive way so that you dont have to worry about
            the formatting.
          </p>
          <Link
            href={"/create-document"}
            className="mt-6 flex w-fit items-center rounded bg-blue-600 px-3 py-2 text-sm font-medium uppercase text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none"
          >
            Get started <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <Image
            src="https://cdn.devdojo.com/images/november2020/hero-image.png"
            alt="Hero"
            className="rounded-lg object-cover object-center"
            width={700}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
