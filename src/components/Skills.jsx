import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoReact,
} from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";

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

export const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.5,
			},
		},
	};

	const skillVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<section
			className="section skill-section w-full h-[90vh] md:h-[85vh] md:mt-[3.5rem] p-[10px] md:p-0"
			id="skill"
			ref={ref}
		>
			<div className="section-title">
				<motion.h2
					className="text-slate-900"
					initial={{ opacity: 0, y: -20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
					}
					transition={{ duration: 0.5 }}
				>
					SKILLS
				</motion.h2>
			</div>

			<motion.div
				className="skills mt-10"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				<div className="w-full h-full flex flex-wrap flex-row md:flex-col gap-5">
					{skills.map((skill) => (
						<motion.div
							key={skill.id}
							variants={skillVariants}
							className="w-full px-2 mb-2"
						>
							<div className="w-full flex justify-between items-center">
								<div className="flex gap-2 items-center">
									<span className="uppercase">
										{skill.skillName}
									</span>{" "}
									{skill.icon}
								</div>
								<div>{skill.value}%</div>
							</div>
							<div className="w-full bg-slate-200">
								<ProgressBar
									value={skill.value}
									bg={skill.color}
									isInView={isInView}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

const ProgressBar = ({ value, bg, isInView }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (isInView) {
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
		}
	}, [value, isInView]);

	return (
		<motion.div
			style={{
				width: `${progress}%`,
				height: "7px",
				backgroundColor: bg,
				borderRadius: "5px",
				boxShadow: `0px 0px 7px 0px ${bg}`,
			}}
			initial={{ width: 0 }}
			animate={{ width: `${progress}%` }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
		/>
	);
};
