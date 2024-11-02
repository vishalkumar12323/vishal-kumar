import {useRef, useState, useEffect} from "react"
import {progressBar} from "../lib";

const skills = [
  {
    id: 1,
    name: "html5",
    value: 90,
    tValue: 100,
  },
  {
    id: 2,
    name: "css3",
    value: 80,
    tValue: 100,
  },
  {
    id: 3,
    name: "js",
    value: 65,
    tValue: 100,
  },
  {
    id: 4,
    name: "ts",
    value: 50,
    tValue: 100,
  },
  {
    id: 5,
    name: "react js",
    value: 60,
    tValue: 100,
  },
  {
    id: 6,
    name: "node js",
    value: 65,
    tValue: 100,
  },
  {
    id: 7,
    name: "mongodb",
    value: 60,
    tValue: 100,
  },
];

const Skills = () => {
  const [percentage, setPercentage] = useState();
  const percentageRef = useRef(null);
  


  useEffect(() => {
    progressBar();
  }, []);
  return (
    <div className="">
      <h2 className="uppercase underline text-center md:text-start text-3xl md:text-3xl mb-4">
        skills
      </h2>

      <div className="px-2 md:px-0 grid grid-cols-3 gap-4 p-2 shadow place-items-center border border-slate-800/90">
        {skills.map((s) => (
          <div
            key={s.id} dataset={s.value} className=" percentage flex justify-center text-[12px] md:text-xs items-center w-[4.5rem] md:w-20 h-[4.5rem] md:h-20 rounded-full text-center border border-slate-800/90 select-none"
          >
            <span className="flex items-center justify-center h-full w-0 bg-red-500">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
