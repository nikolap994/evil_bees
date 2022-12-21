import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navigation />
			<main className="flex-grow bg-gradient-to-t from-indigo-900 to-slate-900 text-white">
				{children}
			</main>
			<Footer />
		</div>
	);
}
