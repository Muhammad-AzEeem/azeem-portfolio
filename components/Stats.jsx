"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 30,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 24,

    text: "Code Commits",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-10 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, i) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center flex-wrap xl:justify-start "
                key={i}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  //   suffix={item.text}
                  className=" text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[120px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-center xl:text-left `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
