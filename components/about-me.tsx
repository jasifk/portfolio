import Image from "next/image"

export default function AboutMe() {
  return (
    // <section id="about" className="container h-auto pb-40">
    //   <div className="mx-auto flex flex-wrap items-start pb-6 pt-4">
    //     <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
    //       About Me<span className="text-emerald-400">.</span>
    //     </h2>
    //     <div className="w-full p-0 md:w-2/3">
    //       <div className="mx-auto">
    //         <p className="py-2 text-lg text-slate-700 dark:text-slate-400">
    //           I&apos;m a{" "}
    //           <span className="font-bold text-emerald-400">
    //             Full Stack Web Developer
    //           </span>{" "}
    //           with a passion for creating innovative and memorable digital
    //           experiences. My journey in web development started when I built a
    //           website for my college tech fest. I was fascinated by the power of
    //           technology to bring people together and solve problems.
    //         </p>
    //         <p className="py-2 text-lg text-slate-700 dark:text-slate-400">
    //           After completing my{" "}
    //           <span className="font-bold text-emerald-400">
    //             degree in Computer Science
    //           </span>
    //           , I started my career as a Front-end Developer and quickly
    //           expanded my skillset to include Node.js, Express, and other
    //           back-end technologies. I&apos;ve since worked on a wide range of
    //           projects for clients in various industries, always striving to
    //           stay ahead of the curve and create solutions that exceed
    //           expectations.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-full md:w-1/3 md:pl-12">
    //       <div className="flex justify-center py-12 md:py-0">
    //         <div className="rounded-full border-4 border-emerald-400 p-2 transition-all hover:p-0">
    //           <Image
    //             className="size-48 rounded-full object-cover grayscale transition-all hover:grayscale-0"
    //             src="/profile-pic.jpg"
    //             alt="Profile picture"
    //             width={250}
    //             height={250}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-80 h-80 rounded-2xl flex items-center justify-center">
              <Image
                className="overflow-hidden rounded-2xl object-cover grayscale transition-all hover:grayscale-0"
                src="/profile-pic.jpg"
                alt="Profile picture"
                width={288}
                height={288}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
              About Me<span className="text-emerald-400">.</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              <p>
                Hello! I&apos;m Jasif, a passionate and experienced
                <span className="font-bold text-emerald-400">
                  Backend Tech Lead and Full-Stack Developer
                </span>
                based in Kerala, India. For over seven years, I&apos;ve been immersed
                in the world of software development, leading the architecture
                and creation of high-performance backend systems.
              </p>

              <p>
                My expertise lies in the Node.js ecosystem, particularly with
                TypeScript and NestJS, complemented by a strong command of
                technologies like RabbitMQ, Redis, and PostgreSQL to ensure
                optimal performance and reliability. I have a proven track
                record of guiding architectural decisions, mentoring engineering
                teams, and maintaining high standards for code quality.
              </p>

              <p>
                I thrive in fast-paced startup environments and enjoy
                collaborating with product managers and cross-functional teams
                to bring ideas to life. My experience spans the full development
                lifecycle, from translating initial concepts into technical
                requirements to implementing robust CI/CD pipelines for seamless
                deployment on cloud platforms like AWS. My goal is always the
                same: to build efficient, scalable, and reliable software that
                solves real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
