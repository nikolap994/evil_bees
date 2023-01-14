import AlertItInfo from "../../content/alertit-info.json";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import BannerImage from "../../public/projects/alertit-banner.png";

export default function AlertIt() {
	return (
		<>
			<Head>
				<title>AlertIt</title>
			</Head>
			<section className="text-white py-16 md:py-24 lg:py-24 px-8 lg:px-12">
				<div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-6 gap-x-16">
					<div className="flex flex-col gap-8 justify-between">
						<h1 className="self-center text-white font-display text-4xl font-medium tracking-tight text-left sm:text-6xl">
							Monitoring everything that matters to you.
						</h1>
						<Link
							className="w-full col-span-2 text-center w-full lg:max-w-[300px] text-xl text-blue-600 hover:text-white visited:text-purple-600"
							target="_blank"
							href="https://github.com/Evil-Bees/Alertit"
						>
							<p className="p-4 bg-white hover:bg-zinc-700 ">
								{" "}
								Check out the Github repository!
							</p>
						</Link>
					</div>
					<Image
						className="mt-10 lg:mt-0"
						src={BannerImage}
						alt="Alertit banner"
					/>
					{Object.entries(AlertItInfo).map(([key, info]) => {
						return (
							<div key={key} className="mt-16 mb-8">
								<h2 className="bg-zinc-700 p-4 font-display text-xl tracking-tight sm:text-3xl text-white">
									{info.title}
								</h2>
								<p className="pl-6 mt-4 text-lg tracking-tight text-white">
									{info.text}
								</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
