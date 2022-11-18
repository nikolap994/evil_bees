import Navigation from "./Navigation";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
