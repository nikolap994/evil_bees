import { GoogleAnalytics } from "nextjs-google-analytics";

import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps: pageProps }) {
	return (
		<Layout>
			<GoogleAnalytics trackPageViews />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
