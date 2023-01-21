import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";

import OurProjects from "../../content/projects.json";
import BannerImage from "../../public/projects/alertit-banner.png";
import ProjectTags from "../../components/cta/ProjectTags";

import MongoDBLogo from "../../public/images/MongoDB_Logo.svg";
import TailwindLogo from "../../public/images/tailwindcss-logo.svg";
import NextJSLogo from "../../public/images/nextjs-icon.svg";

export default function AlertIt() {
	return (
		<>
			<Head>
				<title>AlertIt</title>
			</Head>
			<section className="text-white">
				<div className="max-w-7xl mx-auto py-16 md:py-24 lg:py-24 px-8 lg:px-12 flex flex-col gap-6">
					<div className="flex flex-col lg:flex-row gap-8 justify-between">
						<Image
							src={BannerImage}
							alt="Alertit banner"
							className="lg:w-1/2"
						/>
						<h1 className="self-center text-white font-display text-4xl font-medium tracking-tight text-left sm:text-6xl">
							AlertIt — Monitoring everything that matters to you.
						</h1>
					</div>
					<Link href="https://github.com/Evil-Bees/Alertit/issues">
						<ProjectTags tags={OurProjects[0].tags} />
					</Link>
					<div className="lg:flex gap-12 mt-6">
						<div className="lg:w-1/2">
							<h2 className="text-2xl">About:</h2>
							<p>
								Alertit let's you Know if your website is offline right away. It
								allows users to utilize a number of instruments that
								administrators use most frequently to verify the availability of
								network devices.
							</p>
						</div>
						<Link
							className="w-full md:w-1/3 lg:w-1/2 mx-auto mt-8 flex items-center justify-center gap-4 text-center text-xl text-blue-600 p-4 bg-white hover:bg-zinc-900 hover:text-white visited:text-purple-600 rounded-lg"
							target="_blank"
							href="https://github.com/Evil-Bees/Alertit/issues"
						>
							{" "}
							Contribute on <VscGithub className="w-7 h-7" />
						</Link>
					</div>
					<div className="mt-7">
						<h3 className="text-2xl font-bold">Powered By</h3>
						<ul className="bg-white py-6 mt-4 flex flex-col md:flex-row md:items-center justify-center lg:justify-around gap-6">
							<li>
								<Image className="w-[200px]" src={NextJSLogo} alt="" />
							</li>
							<li>
								<Image className="w-[200px]" src={MongoDBLogo} alt="" />
							</li>
							<li className="w-[200px]">
								<Image className="w-full" src={TailwindLogo} alt="" />
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
