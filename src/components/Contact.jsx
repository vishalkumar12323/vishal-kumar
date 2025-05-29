import { MdOutlineLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
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
		hidden: { opacity: 0, x: -20 },
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
		<section
			className="section contact-section w-full h-auto md:h-[75vh] overflow-x-hidden"
			id="contact"
			ref={ref}
		>
			<motion.div
				className="section-title"
				initial={{ opacity: 0, y: -20 }}
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
				}
				transition={{ duration: 0.5 }}
			>
				<h2 className="text-slate-900">contact</h2>
			</motion.div>

			<motion.div
				className="grid grid-two-cols gap-4 mt-[2.5rem]"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				<motion.div
					className="contact-info c-left"
					variants={itemVariants}
				>
					<div className="form flex flex-col justify-center gap-[10px]">
						<div className="address flex items-center p-4 gap-4">
							<MdOutlineLocationOn size={25} />
							<div>
								<h3>location</h3>
								<p>Jhoonjhoonu, Raj. India</p>
							</div>
						</div>
						<div className="email flex items-center p-4 gap-4">
							<IoMailUnreadOutline size={23} />
							<div>
								<h3>email</h3>
								<p>dev.vishal556@gmail.com</p>
							</div>
						</div>
						<div className="phone flex items-center p-4 gap-4">
							<MdOutlinePhoneInTalk size={20} />
							<div>
								<h3>phone</h3>
								<p>+91 8949087009</p>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="contact-form c-right"
					variants={itemVariants}
				>
					<form
						action="https://formspree.io/f/xdknnbed"
						method="POST"
					>
						<div className="user-info flex gap-4 mt-[10px] items-center">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Your Name"
								required
								className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your Email"
								required
								className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
							/>
						</div>
						<div className="subject-info mt-[10px]">
							<input
								type="text"
								name="subject"
								id="subject"
								placeholder="subject"
								required
								className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
							/>
						</div>
						<div className="message-info mt-[10px]">
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="7"
								placeholder="message"
								className="pl-1 w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
							></textarea>
						</div>

						<div className="form-button">
							<button
								type="submit"
								className="btn bg-slate-900 text-white mt-2"
							>
								send message
							</button>
						</div>
					</form>
				</motion.div>
			</motion.div>
		</section>
	);
};
