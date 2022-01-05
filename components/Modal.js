import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = ({ setModal, setHistory }) => {
	const doWork = () => {
		setModal(false);
		setHistory(0);
	};
	const item = {
		visible: { opacity: 1, y: 0, scale: 1.5 },
		hidden: { opacity: 0, y: -1000 },
		transition: {
			duration: 10,
			delay: 1,
		},
	};
	const backdrop = {
		visible: { opacity: 1, y: -310, x: -210 },
		hidden: { opacity: 0, y: -500, x: -110 },
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div className="motion" initial="hidden" animate="visible">
				<h1>Congratulations !! You Won</h1>
				<button onClick={() => doWork()}>Play Again</button>
				<h1>
					liked it??
					<span>
						{" "}
						Give me a <AiOutlineStar className="star" /> on
					</span>
				</h1>
				<motion.a href="https://github.com/AlanNJ" className="git">
					<BsGithub />
				</motion.a>
			</motion.div>
		</AnimatePresence>
	);
};
export default Modal;
