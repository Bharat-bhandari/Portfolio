import React from "react";

import Image from "../assets/images/bharat.jpg";
import MyInfo from "./MyInfo";
import { motion } from "framer-motion";
import { techStack } from "../utils/constants";

const Content = () => {
  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        {/*End of profile section */}
        <section
          className="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52"
          id="about"
        >
          <div className="flex flex-col items-center m-auto space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row">
            <img
              className="w-64 md:mb-6 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image Alt Text"
            />
            <MyInfo />
          </div>
        </section>
        {/* End of profile section */}

        {/*  Skills */}
        <section className="w-full min-h-screen" id="skills">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-5 text-3xl font-bold">
              🥷 Skills and Technologies
            </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0">
            <p>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>

            <motion.div className="flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg ">
              {techStack.map((el, index) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                >
                  <div className="items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-52 bg-gray-50 md:m-4 hover:scale-125 md:w-48">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                  <div className="flex flex-col items-center w-32 px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:hidden bg-gray-50 hover:scale-125">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* End od skills */}

        {/* Projects */}
        <section className="w-full min-h-screen" id="work">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-2 text-3xl font-bold sm:pr-5">
              💻 Projects and Work
            </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <a
              href="https://github.com/Bharat-bhandari"
              className="pl-2 text-sm text-right sm:pl-5 hover:text-link-color"
            >
              Visit Archive
            </a>
          </div>
        </section>
        {/* Projects */}

        {/* Contact */}
        <section className="flex flex-col w-full min-h-screen" id="contact">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 className="px-5 text-3xl font-bold">📭 Contact</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="flex flex-col my-auto transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="mx-auto space-y-8">
              <h1 className="text-3xl font-extrabold text-center">
                Get in Touch
              </h1>
              <p className="text-slate-500 dark:text-slate-300">
                Currently seeking internships for web and software development
                positions. Can start Imediately..
                <br />
              </p>
              <p className="text-slate-500 dark:text-slate-300">
                Also looking to build a team for projects &amp; startup ideas or
                just make professional connections.
                <br />
              </p>
              <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-5">
                <a href="mailto:bharatbhandari1024@gmail.com" target="_blank">
                  <button className="px-6 py-2 duration-300 bg-transparent border shadow-sm border-button-color shadow-button-color text-button-color hover:text-white hover:bg-button-color focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                    Reach Out
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}

        <footer className="hidden mb-5 text-center md:block">
          <a
            href="https://github.com/Bharat-bhandari"
            className="hover:text-link-color"
            target="_blank"
          >
            Code available on Github 👾
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Content;
