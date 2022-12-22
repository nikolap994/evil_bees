import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps: pageProps }) {
	return (
		<Layout>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta name="description" content="Evil Bees is all about project-based learning."></meta>
				<meta name="keywords" content="Community, Evil Bees"></meta>
			</Head>
			{process.env.NODE_ENV != 'development' && <GoogleAnalytics />}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
