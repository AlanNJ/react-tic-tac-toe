import React from "react";
import { motion } from "framer-motion";

export const Square = ({ value, onClick }) => {
	const style = value ? "red game-button" : "game-button";
	const varient = {
		visible: { scale: 1.2 },
		hidden: { scale: 0 },
		transition: {
			duration: 1.3,
			delay: 0.5,
		},
	};
	return (
		<div className="square-container" onClick={onClick}>
			<motion.button className="game-button">{value}</motion.button>
		</div>
	);
};
export default Square;
