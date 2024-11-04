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

      <div className="px-2 md:px-0 grid grid-cols-3 gap-5 p-2 shadow-md place-items-center">
        <div className="flex justify-center items-center flex-col">
          <BiLogoReact className="w-14 h-14 bg-blue-600 text-white rounded-full" />
          <span className="text-center uppercase">Reactjs</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiLogoHtml5 className="w-14 h-14 bg-red-600 text-white rounded-full" />
          <span className="text-center uppercase">HTML5</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <BiLogoCss3 className="w-14 h-14 bg-blue-500 text-white rounded-full" />
          <span className="text-center uppercase">CSS3</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiLogoJavascript className="w-14 h-14 bg-yellow-600 text-white rounded-full" />
          <span className="text-center uppercase">javascript</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiLogoTypescript className="w-14 h-14 bg-blue-500 text-white rounded-full" />
          <span className="text-center uppercase">typescript</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <BiLogoNodejs className="w-14 h-14 bg-green-700 text-white rounded-full" />
          <span className="text-center uppercase">nodejs</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <BiLogoGithub className="w-14 h-14 rounded-full" />
          <span className="text-center uppercase">github</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <BiLogoMongodb className="w-14 h-14 bg-green-600 text-white rounded-full" />
          <span className="text-center uppercase">mongodb</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <BiLogoDocker className="w-14 h-14 bg-blue-500 text-white rounded-full" />
          <span className="text-center uppercase">docker</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
