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
				containerClasses="flex justify-between px-12 py-2 border border-double bg-white color-black"
				buttonClasses="bg-emerald-500 p-2 ml-3"
				declineButtonClasses="bg-stone-900 text-white p-2"
				contentClasses="py-2"
				disableStyles={true}
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
