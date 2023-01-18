import BookerInfo from "../../content/booker-info.json";
import OurProjects from "../../content/projects.json";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import BannerImage from "../../public/projects/booker-banner.png";
import ProjectTags from "../../components/cta/ProjectTags";

export default function Booker() {
	return (
		<>
			<Head>
				<title>Booker</title>
			</Head>
			<section className="py-16 md:py-24 lg:py-24 px-8 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col-reverse xl:flex-row-reverse gap-10 lg:gap-16 mb-12">
						<div className="flex flex-col gap-8 lg:gap-10 justify-between">
							<h1 className="text-white max-w-6xl text-left font-display text-5xl font-medium tracking-tight text-left">
								Online Appointment scheduling with calendar integration for any
								business.
							</h1>
							<ProjectTags tags={OurProjects[1].tags} />
							<Link
								className="text-center lg:max-w-[300px] text-xl hover:text-white visited:text-zinc-900"
								target="_blank"
								href="https://github.com/Evil-Bees/Booker"
							>
								<p className="bg-amber-200 p-4 bg-white hover:bg-amber-400 lg:max-w-[300px]">
									{" "}
									Check out the Github repository!
								</p>
							</Link>
						</div>

						<Image
							className="mt-10 lg:mt-0 object-contain"
							src={BannerImage}
							alt="Booker banner"
						/>
					</div>
					<div className="md:grid grid-cols-2 gap-6">
						{Object.entries(BookerInfo).map(([key, info]) => {
							return (
								<div key={key} className="mt-16 mb-8 max-w-sm">
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
				</div>
			</section>
		</>
	);
}
