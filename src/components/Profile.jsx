import { MdOutlineArrowRightAlt } from "react-icons/md";
import {
  IoReorderThreeOutline,
  IoLogoGithub,
  IoOpenOutline,
  IoLogoLinkedin,
} from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Profile = ({ setOpenSideBar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="hero-section w-full md:h-screen h-auto relative"
      id="home"
      ref={ref}
    >
      <div className="section-top fixed top-0 right-0 w-[7rem] h-[3rem] flex justify-center items-center">
        <div className="menu-bar hidden fixed right-[2%] top-[1.5%] cursor-pointer">
          <IoReorderThreeOutline
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              setOpenSideBar((isOpen) => !isOpen);
            }}
            className="text-black"
          />
        </div>
      </div>
      <motion.div
        className="section-mid w-full h-[85%] flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container w-full h-full grid grid-cols-2">
          <motion.div
            className="left-side flex justify-center flex-col"
            variants={itemVariants}
          >
            <div className="left-side flex justify-center flex-col">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
              >
                <h1 className=" text-[2.5rem] md:text[4rem] font-extrabold uppercase text-slate-900">
                  vishal kumar
                </h1>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50, y: -25 },
                  visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
              >
                <p className="h-description pt-[10px] pl-[11px]">
                  <span className="text-[1.1rem]">I'm a </span>
                  <ReactTyped
                    strings={[
                      "web developer",
                      "javascript dev.",
                      "react js dev.",
                      "node js dev.",
                      "freelancer",
                    ]}
                    typeSpeed={30}
                    backSpeed={30}
                    loop
                  ></ReactTyped>
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
              >
                <p className="pt-[10px] pl-[11px] text-[14px]">
                  Passionate and results-driven Full-Stack Web Developer with
                  2.5 years of hands-on experience in building responsive
                  front-end interfaces and scalable back-end APIs. Proficient in
                  JavaScript, React.js, Node.js, PostgreSQL, and Docker, with a
                  strong foundation in web architecture, RESTful services, and
                  modern UI/UX principles. Excels in building full-featured web
                  applications and solving complex problems in dynamic
                  environments.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50, y: 25 },
                  visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
              >
                <a
                  href="/white-blue-paper-resume.pdf"
                  target="_blank"
                  className="flex justify-between w-[6.5rem] hover:w-[8.5rem] py-[8px] px-[20px] text-[17px] capitalize border text-white bg-slate-900 rounded transition-all duration-300 items-center"
                  style={{
                    marginLeft: "11px",
                    marginTop: "10px",
                  }}
                >
                  <span>Resume</span>
                  <MdOutlineArrowRightAlt size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="right-side h-[430px] md:h-auto flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.img
              src="/profile-photo-lightt.png"
              alt="Profile image"
              initial={{
                x: 200,
                y: 200,
                scale: 1,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1.5,
                opacity: [0.2, 0.4, 0.6, 0.8, 1],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
              className=" w-[200px] h-[200px] md:w-[225px] md:h-[225px] object-cover rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="section-bottom w-full h-[15%]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container w-auto h-full grid gap-4 place-items-center grid-cols-3">
          <motion.a
            href="https://github.com/vishalkumar12323"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border border-gray-400 rounded transition-all hover:bg-slate-900 hover:text-white"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            <IoLogoGithub size={25} />
            <IoOpenOutline size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vishal-ninaniya/"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border border-gray-400 rounded transition-all hover:bg-slate-900 hover:text-white"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            <IoLogoLinkedin size={25} />
            <IoOpenOutline size={20} />
          </motion.a>
          <motion.a
            href="https://x.com/vishalkumar2654"
            target="_blank"
            className="social-link-card w-full h-[4.5rem] flex justify-between items-center px-4 border border-gray-400 rounded transition-all hover:bg-slate-900 hover:text-white"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            <RiTwitterXFill size={25} />
            <IoOpenOutline size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
