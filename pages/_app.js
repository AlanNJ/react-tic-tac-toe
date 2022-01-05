import "./index.css";
import Head from "next/head";
import "./motion.css";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Yuji+Hentaigana+Akari&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&family=Yuji+Hentaigana+Akari&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
