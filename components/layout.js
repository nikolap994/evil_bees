import Navigation from "./Navigation";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navigation />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
