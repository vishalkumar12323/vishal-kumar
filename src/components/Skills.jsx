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

const Skills = () => {
  return (
    <div className="">
      <h2 className="uppercase underline text-center md:text-start text-3xl md:text-3xl mb-4">
        skills
      </h2>

      <div className="px-2 md:px-0 grid grid-cols-3 gap-5 p-2 shadow place-items-center">
        <BiLogoReact className="w-14 h-14 bg-blue-600 text-white" />
        <BiLogoHtml5 className="w-14 h-14 bg-red-600 text-white" />
        <BiLogoCss3 className="w-14 h-14 bg-blue-500 text-white" />
        <BiLogoJavascript className="w-14 h-14 bg-yellow-600 text-white" />
        <BiLogoTypescript className="w-14 h-14 bg-blue-500 text-white" />
        <BiLogoNodejs className="w-14 h-14 bg-green-700 text-white" />
        <BiLogoGithub className="w-14 h-14" />
        <BiLogoMongodb className="w-14 h-14 bg-green-600 text-white" />
        <BiLogoDocker className="w-14 h-14 bg-blue-500 text-white" />
      </div>
    </div>
  );
};

export default Skills;
