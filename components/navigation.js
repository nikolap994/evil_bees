import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

	return (
		<header className="bg-indigo-900 mb-10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  text-white">
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="/">
							<Image
								priority={true}
								width="100"
								height="100"
								alt="evil-bees"
								src="/evil-bees.png"
							/>
						</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/our-team">Our Team</Link>
						<Link href="/code-of-conduct">Code of Conduct</Link>
						<Link href="/contact">Contact us</Link>
					</div>
					<Link className="flex items-center md:gap-x-12" href="https://discord.gg/rvxGNrFhNz">Join Us!</Link>
				</nav>
			</div>
		</header>
	);
}
