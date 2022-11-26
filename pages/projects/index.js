import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<section className="py-16 bg-violet-100">
				<div className="max-w-7xl mx-auto pb-8 max-w-[510px] text-center">
					<h2 className="text-dark mb-6 font-bold text-6xl md:text-[40px]">
						Our Projects
					</h2>
					<p className="text-body-color text-base">
						We take great pride, and put our hearts and soul into each project.
						Take a look at a few we're particularly proud of.
					</p>
				</div>
				<div className="p-4 md:p-0">
					<Link href={`/projects/alertit`}>
						<div className="snap-x mx-auto snap-mandatory flex w-full overflow-scroll">
							<div className="snap-start w-[80%] flex-shrink-0 flex items-center justify-center">
								<Image
									className="w-full"
									width={2400}
									height={340}
									alt="alertit logo"
									src="/projects/alertit-banner.png"
									priority={true}
								/>
							</div>
							<div className="snap-start bg-amber-200 w-[80%] flex-shrink-0  flex items-center justify-center text-xl p-12">
								Monitoring everything that matters to you.
							</div>
							<div className="snap-start bg-indigo-200 w-[80%] flex-shrink-0 flex items-center justify-center text-xl  p-12">
								Alertit is a tool for monitoring...
							</div>
							<div className="snap-start bg-gray-200 w-[80%] flex-shrink-0 flex items-center justify-center text-xl  p-12">
								Techstack ??
							</div>
						</div>
					</Link>
				</div>
			</section>
		</>
	);
}
