import React from "react";
import { motion } from "framer-motion";

export const Footer = ({
	jumpTo,
	history,
	winner,
	xO,
	setHistory,
	setStepNumber,
}) => {
	const reset = () => {
		setStepNumber(0);
		setHistory[Array(9).fill(null)];
	};
	const item1 = {
		visible: { y: 0 },
		hidden: { y: -1000 },
	};
	//const destination = move ? `Go to move #${move}` : "Go to Start";
	return (
		<motion.div
			className="footer-container"
			initial="hidden"
			animate="visible"
			variants={item1}
			transition={{ type: "spring", stiffness: 130 }}
		>
			<div className="left-part">
				<ul>
					{history.map((step, moves) => (
						<button onClick={() => jumpTo(moves)} className="stat-button">
							{moves ? `go to move ${moves}` : "go to start"}
						</button>
					))}
				</ul>
			</div>

			<div className="right-part">
				<h1>{winner ? "Winner: " + winner : "Next Player: " + xO}</h1>
			</div>
			<motion.button
				className="reset-button"
				onClick={() => reset()}
				whileTap={{ scale: 0.5 }}
			>
				Reset
			</motion.button>
		</motion.div>
	);
};
export default Footer;
