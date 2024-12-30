import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full xl:pt-8 xl:pb-24 ">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Muhamed Azeem</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            {/* btn & social icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1X0Pni7JFQ66TTM782l7vB1abdJUf-6G7/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-primary"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
