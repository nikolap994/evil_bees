import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";

import OurProjects from "../../content/projects.json";
import ProjectTags from "../../components/cta/ProjectTags";

import BannerImage from "../../public/projects/booker-banner.png";
import MongoDBLogo from "../../public/images/MongoDB_Logo.svg";
import TailwindLogo from "../../public/images/tailwindcss-logo.svg";
import NextJSLogo from "../../public/images/nextjs-icon.svg";

export default function Booker() {
	return (
		<>
			<Head>
				<title>Booker</title>
			</Head>
			<section className="text-white">
				<div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-24 px-8 lg:px-12 flex flex-col gap-6">
					<div className="flex flex-col lg:flex-row gap-8 justify-between">
						<Image src={BannerImage} alt="Booker banner" className="lg:w-1/2" />
						<h1 className="self-center text-white font-display text-4xl font-medium tracking-tight text-left sm:text-6xl">
							Online Appointment scheduling
						</h1>
					</div>
					<Link href="https://github.com/Evil-Bees/Booker/issues">
						<ProjectTags tags={OurProjects[1].tags} />
					</Link>
					<div className="lg:flex gap-12 mt-6">
						<div className="lg:w-1/2">
							<h2 className="text-2xl">About:</h2>
							<p>
								Booker is an online Appointment scheduler with calendar
								integration for any business.
							</p>
						</div>
						<Link
							className="w-full md:w-1/3 lg:w-1/2 mx-auto mt-8 flex items-center justify-center gap-4 text-center text-xl text-blue-600 p-4 bg-white hover:bg-zinc-900 hover:text-white visited:text-purple-600 rounded-lg"
							target="_blank"
							href="https://github.com/Evil-Bees/Booker/issues"
						>
							{" "}
							Contribute on <VscGithub className="w-7 h-7" />
						</Link>
					</div>
					<div className="mt-7">
						<h3 className="text-2xl font-bold">Powered By</h3>
						<ul className="bg-white py-6 px-6 md:pr-0 mt-4 flex flex-col md:flex-row md:items-center justify-center lg:justify-around gap-6">
							<li>
								<Image
									className="w-[200px]"
									src={NextJSLogo}
									alt="Nextjs logo"
								/>
							</li>
							<li>
								<Image
									className="w-[200px]"
									src={MongoDBLogo}
									alt="MongoDB logo"
								/>
							</li>
							<li className="w-[200px]">
								<Image
									className="w-full"
									src={TailwindLogo}
									alt="Tailwindcss logo"
								/>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
