import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoGithub,
  BiLogoMongodb,
  BiLogoDocker,
} from "react-icons/bi";

const skills = [
  {
    id: 1,
    name: "html5",
    icon: (
      <BiLogoHtml5 className="w-16 h-16 rounded-full text-white bg-red-600" />
    ),
  },
  {
    id: 2,
    name: "css3",
    icon: (
      <BiLogoCss3 className="w-16 h-16 rounded-full text-white bg-blue-600" />
    ),
  },
  {
    id: 3,
    name: "javascript",
    icon: (
      <BiLogoJavascript className="w-16 h-16 rounded-full text-white bg-yellow-500" />
    ),
  },
  {
    id: 4,
    name: "typescript",
    icon: (
      <BiLogoTypescript className="w-16 h-16 rounded-full text-white bg-blue-500" />
    ),
  },
  {
    id: 5,
    name: "reactjs",
    icon: (
      <BiLogoReact className="w-16 h-16 rounded-full text-white bg-blue-600" />
    ),
  },
  {
    id: 6,
    name: "nodejs",
    icon: (
      <BiLogoNodejs className="w-16 h-16 rounded-full text-white bg-green-500" />
    ),
  },
  {
    id: 7,
    name: "mongodb",
    icon: (
      <BiLogoMongodb className="w-16 h-16 rounded-full text-white bg-green-400" />
    ),
  },
  {
    id: 8,
    name: "github",
    icon: <BiLogoGithub className="w-16 h-16 rounded-full" />,
  },
  {
    id: 9,
    name: "docker",
    icon: (
      <BiLogoDocker className="w-16 h-16 rounded-full text-white bg-blue-700" />
    ),
  },
];
const Skills = () => {
  return (
    <div className="">
      <h2 className="capitalize text-center md:text-start text-3xl md:text-3xl mb-4">
        skills
      </h2>

      <div className=" md:px-0 grid grid-cols-3 gap-5 place-items-center">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="p-3 w-28 h-28 rounded-md flex justify-center items-center flex-col border border-slate-900/90 shadow-md"
            >
              {skill.icon}
              <span className="text-center uppercase">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
