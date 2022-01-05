import React from "react";
import Board from "../components/Board";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { calculateWinner } from "./winner";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/Modal";
//import audio from "../public/food_G1U6tlb.mp3";

export const index = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [modal, setModal] = useState(false);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? "X" : "O";
	const [audio] = useState(
		typeof Audio !== "undefined" && new Audio("/food_G1U6tlb.mp3")
	);
	useEffect(() => {
		handleClick();
	}, [modal]);

	// const handleClick = (i) => {
	// 	const historyPoint = history.slice(0, stepNumber + 1);
	//
	// 	const current = historyPoint[stepNumber];
	//
	// 	const squares = [...current];
	// 	squares[i] = x0;
	// 	setHistory([...historyPoint, squares]);
	// 	setStepNumber(historyPoint.length);
	// 	setXisNext(!xIsNext);
	// 	console.log(history);
	// };
	console.log(history);
	const handleClick = async (i) => {
		const historyPoint = history.slice(0, stepNumber + 1);

		const current = historyPoint[stepNumber];
		const squares = [...current];
		// return if won or occupied
		if (winner || squares[i]) {
			return;
		}
		audio.play();

		// select square
		squares[i] = xO;

		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(!xIsNext);
		if (winner) {
			setModal(true);
		}
	};
	const renderMove = () => {
		console.log("hey man");
	};
	const jumpTo = (move) => {
		setStepNumber(move);
		setXisNext(stepNumber % 2 === 0);
	};

	return (
		<>
			<motion.div className="index-container">
				<NavBar />
				<Board squares={history[stepNumber]} onClick={handleClick} />
				<Footer
					renderMove={renderMove}
					jumpTo={jumpTo}
					history={history}
					winner={winner}
					xO={xO}
					setHistory={setHistory}
					setStepNumber={setStepNumber}
				/>
			</motion.div>
			<AnimatePresence>
				{winner && <Modal setModal={setModal} setHistory={setStepNumber} />}
			</AnimatePresence>
		</>
	);
};
export default index;
