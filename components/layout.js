import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navigation />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
