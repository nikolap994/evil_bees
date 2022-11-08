import { useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import CookieConsent, {
	getCookieConsentValue,
	Cookies,
} from "react-cookie-consent";

import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps: pageProps }) {
	const handleAcceptCookie = () => {
		<GoogleAnalytics trackPageViews />;
	};

	const handleDeclineCookie = () => {
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
	};

	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			handleAcceptCookie();
		}
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
			<CookieConsent
				enableDeclineButton
				onAccept={handleAcceptCookie}
				onDecline={handleDeclineCookie}
				buttonClasses="bg-emerald-500"
				containerClasses="bg-white color-black"
				contentClasses="py-2"
			>
				This website uses cookies to enhance the user experience.
			</CookieConsent>
			{getCookieConsentValue() == "true" ? (
				<GoogleAnalytics trackPageViews />
			) : (
				""
			)}
		</Layout>
	);
}

export default MyApp;
