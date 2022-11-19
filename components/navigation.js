import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { VscChromeClose, VscListSelection } from "react-icons/vsc";

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header className="bg-black">
				<nav className="flex flex-col max-w-7xl mx-auto">
					<VscListSelection
						className="lg:hidden fill-white self-end w-8 h-8 mr-6 my-6"
						onClick={() => setIsNavOpen(prev => !prev)}
					/>

					<div
						className={`flex flex-col justify-start lg:flex-row items-center lg:justify-between lg:flex-wrap pt-0 lg:py-6 lg:pt-6 px-6 lg:px-12 md:px-6 pt-0 lg:px-8 text-white ${
							isNavOpen ? "showMenuNav" : "hideMenuNav"
						}`}
					>
						<VscChromeClose
							className={`lg:hidden fill-white self-end w-6 h-6 my-6`}
							onClick={() => setIsNavOpen(false)}
						/>
						<div className="self-start flex items-center flex-shrink-0 text-white mr-6">
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
						<div className="w-full block lg:flex lg:items-center lg:w-auto">
							<div className="text-lg flex flex-col gap-y-4 lg:flex-row justify-end gap-x-4 lg:flex-grow mb-8 lg:mb-0">
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/projects"
								>
									Projects
								</Link>
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/our-team"
								>
									Our Team
								</Link>
								<Link
									className="block lg:inline-block text-white-400 hover:text-white mr-4"
									href="/contact"
								>
									Contact us
								</Link>
							</div>
						</div>
						<Link
							className="inline-block text-l px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white"
							href="https://discord.gg/rvxGNrFhNz"
						>
							Join Us!
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
