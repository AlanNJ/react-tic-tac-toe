import React from "react";
import Square from "./Square";
import { motion } from "framer-motion";

export const Board = ({ squares, onClick }) => {
	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
		transition: { delay: 0.1, duration: 2 },
	};

	return (
		<>
			<motion.div
				className="board-container"
				initial="hidden"
				animate="visible"
				variants={variants}
				transition={{ delay: 1, duration: 0.5 }}
			>
				{squares.map((square, i) => (
					<Square key={i} value={square} onClick={() => onClick(i)} />
				))}
			</motion.div>
		</>
	);
};
export default Board;
