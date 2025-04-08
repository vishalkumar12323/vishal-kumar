import { useEffect, useRef, useState } from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";

const skills = [
  {
    id: 1,
    skillName: "html5",
    icon: <IoLogoHtml5 size={18} color="red" />,
    value: 90,
    color: "red",
  },
  {
    id: 2,
    skillName: "css3",
    icon: <IoLogoCss3 size={18} color="blue" />,
    value: 70,
    color: "blue",
  },
  {
    id: 3,
    skillName: "javascript",
    icon: <IoLogoJavascript size={18} color="yellow" />,
    value: 65,
    color: "yellow",
  },
  {
    id: 4,
    skillName: "typescript",
    icon: <BiLogoTypescript size={18} color="blue" />,
    value: 50,
    color: "blue",
  },
  {
    id: 5,
    skillName: "react js",
    icon: <IoLogoReact size={18} color="blue" />,
    value: 60,
    color: "blue",
  },
  {
    id: 6,
    skillName: "node js",
    icon: <IoLogoNodejs size={18} color="green" />,
    value: 60,
    color: "green",
  },
  {
    id: 7,
    skillName: "mongodb",
    icon: <BiLogoMongodb size={18} color="green" />,
    value: 55,
    color: "green",
  },
];

const Skills = () => {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) return;
      setVisible(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section
      className="section skill-section w-full h-[90vh] md:h-[85vh] mt-[3.5rem] p-[10px] md:p-0"
      id="skill"
      ref={elementRef}
    >
      <div className="section-title">
        <h2 className="text-slate-900">SKILLS</h2>
      </div>

      <div className="skills mt-10">
        <div className="w-full h-full flex flex-wrap flex-row md:flex-col gap-5">
          {visible &&
            skills.map((skill) => (
              <div key={skill.id} className="w-full px-2 mb-2">
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="uppercase">{skill.skillName}</span>{" "}
                    {skill.icon}
                  </div>
                  <div>{skill.value}%</div>
                </div>
                <div className="w-full bg-slate-200">
                  <ProgressBar value={skill.value} bg={skill.color} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const ProgressBar = ({ value, bg }) => {
  const [progress, setProgress] = useState(0);

  const createProgress = () => {};

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      style={{
        width: `${progress}%`,
        height: "7px",
        backgroundColor: bg,
        borderRadius: "5px",
        transition: "width 0.5s ease-in-out",
        boxShadow: `0px 0px 7px 0px ${bg}`,
      }}
    ></div>
  );
};
