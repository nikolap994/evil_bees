import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { VscChromeClose, VscListSelection } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";
export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header className="bg-slate-900 border-b border-white">
				<nav className="flex flex-col max-w-7xl mx-auto">
					<VscListSelection
						className="lg:hidden fill-white self-end w-8 h-8 mr-6 my-6 hover:cursor-pointer"
						onClick={() => setIsNavOpen(prev => !prev)}
					/>
					<Link href="/" className="lg:hidden self-begin absolute top-0 left-5">
						<Image
							priority={true}
							src="/evil-bees.png"
							width="80"
							height="80"
							alt="evil-bees logo"
							onClick={() => setIsNavOpen(false)}
						/>
					</Link>

					<div
						className={`flex flex-col justify-start lg:flex-row items-center lg:justify-between lg:flex-wrap pt-0 lg:py-6 lg:pt-6 pt-0 px-4 sm:px-6 lg:px-8 text-white ${
							isNavOpen ? "showMenuNav" : "hideMenuNav"
						}`}
					>
						<VscChromeClose
							className={`lg:hidden fill-white self-end w-7 h-7 mt-10 mr-10 hover:cursor-pointer `}
							onClick={() => setIsNavOpen(false)}
						/>
						<div className="self-center lg:self-start flex items-center flex-shrink-0 text-white mr-6">
							<Link href="/">
								<Image
									priority={true}
									width="100"
									height="100"
									alt="evil-bees"
									src="/evil-bees.png"
									onClick={() => setIsNavOpen(false)}
								/>
							</Link>
						</div>
						<div className="w-full text-center block lg:flex lg:items-center lg:w-3/4 mb-4 lg:mb-0">
							<div className="text-lg flex flex-col gap-y-10 lg:gap-y-4 lg:flex-row justify-end gap-x-4 lg:flex-grow mb-8 lg:mb-0">
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/projects"
									onClick={() => setIsNavOpen(false)}
								>
									Projects
								</Link>
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/our-team"
									onClick={() => setIsNavOpen(false)}
								>
									Our Team
								</Link>
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/code-of-conduct"
									onClick={() => setIsNavOpen(false)}
								>
									Code of Conduct
								</Link>
							</div>
						</div>
						<Link
							className="inline-block text-l px-6 py-4 leading-none rounded-md flex items-center gap-4 bg-discord-purple text-white hover:animate-pulse"
							href="https://discord.gg/rvxGNrFhNz"
							onClick={() => setIsNavOpen(false)}
						>
							Join Us! <FaDiscord className="w-6 h-6" />
						</Link>
					</div>
				</nav>
			</header>
			<style>{`

			@media screen and (max-width: 1023px) {
				.hideMenuNav {
				display: none;
			}
		 }
		 .showMenuNav {
		   display: block;
		   position: absolute;
		   width: 100%;
		   height: 100vh;
		   top: 0;
		   left: 0;
		   background: #312e81;
		   z-index: 100;
		   display: flex;
		   flex-direction: column;
		   align-items: center;
		 }
	   `}</style>
		</>
	);
}
