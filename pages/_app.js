import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps: pageProps }) {
	return (
		<Layout>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}

export default MyApp;
