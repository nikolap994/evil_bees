import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
	return (
		<header className="bg-indigo-900 mb-10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  text-white">
				<nav className="flex items-center justify-between lg:flex-wrap p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<Link href="/">
							<Image
								priority={true}
								width="100"
								height="100"
								alt="evil-bees"
								src="/evil-bees.png"
							/>
						</Link>
					</div>
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-lg flex lg:flex-grow">
							<Link
								className="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4"
								href="/projects"
							>
								Projects
							</Link>
							<Link
								className="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4"
								href="/our-team"
							>
								Our Team
							</Link>
							<Link
								className="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4"
								href="/contact"
							>
								Contact us
							</Link>
						</div>
					</div>
					<Link
						className="inline-block text-l px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
						href="https://discord.gg/rvxGNrFhNz"
					>
						Join Us!
					</Link>
				</nav>
			</div>
		</header>
	);
}
