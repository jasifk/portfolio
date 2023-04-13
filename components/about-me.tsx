import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-[1000px] flex-wrap items-start pt-4 pb-12 ">
        <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
          About Me
        </h2>
        <div className="w-full p-0 md:w-2/3">
          <div className="mx-auto my-10">
            <p className="text-lg text-slate-700 dark:text-slate-400 py-2">
              I&apos;m a Full Stack Web Developer with a passion for creating
              innovative and memorable digital experiences. My journey in web
              development started when I built a website for my college tech
              fest. I was fascinated by the power of technology to bring people
              together and solve problems.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-400 py-2">
              After completing my degree in Computer Science, I started my
              career as a Front-end Developer and quickly expanded my skillset
              to include Node.js, Express, and other back-end technologies.
              I&apos;ve since worked on a wide range of projects for clients in
              various industries, always striving to stay ahead of the curve and
              create solutions that exceed expectations.
            </p>
          </div>
        </div>
        <div className="w-full pl-12 md:w-1/3">
          <div className="mx-auto my-10 max-w-sm">
            <Image
              className="w-full"
              src="/profile-pic.png"
              alt="Profile picture"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
