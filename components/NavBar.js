import React from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
		transition: {
			duration: 5,
		},
	};
	const item1 = {
		visible: { y: 0 },
		hidden: { y: -250 },
	};
	return (
		<motion.div
			className="navbar-container"
			initial="hidden"
			animate="visible"
			variants={item1}
			transition={{ duration: 3, type: "spring", stiffness: 130 }}
		>
			<motion.h1 variants={item}>tic-tac-toe</motion.h1>
			<motion.h2 variants={item}>Welcome on Board</motion.h2>
		</motion.div>
	);
};
export default NavBar;
