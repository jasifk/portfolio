import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="container h-auto pb-40">
      <div className="mx-auto flex flex-wrap items-start pb-6 pt-4">
        <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
          About Me<span className="text-emerald-400">.</span>
        </h2>
        <div className="w-full p-0 md:w-2/3">
          <div className="mx-auto">
            <p className="py-2 text-lg text-slate-700 dark:text-slate-400">
              I&apos;m a{" "}
              <span className="font-bold text-emerald-400">
                Full Stack Web Developer
              </span>{" "}
              with a passion for creating innovative and memorable digital
              experiences. My journey in web development started when I built a
              website for my college tech fest. I was fascinated by the power of
              technology to bring people together and solve problems.
            </p>
            <p className="py-2 text-lg text-slate-700 dark:text-slate-400">
              After completing my{" "}
              <span className="font-bold text-emerald-400">
                degree in Computer Science
              </span>
              , I started my career as a Front-end Developer and quickly
              expanded my skillset to include Node.js, Express, and other
              back-end technologies. I&apos;ve since worked on a wide range of
              projects for clients in various industries, always striving to
              stay ahead of the curve and create solutions that exceed
              expectations.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:pl-12">
          <div className="flex justify-center py-12 md:py-0">
            <div className="rounded-full border-4 border-emerald-400 p-2 transition-all hover:p-0">
              <Image
                className="size-48 rounded-full object-cover grayscale transition-all hover:grayscale-0"
                src="/profile-pic.jpg"
                alt="Profile picture"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
