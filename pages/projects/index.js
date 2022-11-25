import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Evil Bees Projects</title>
			</Head>
			<div className="max-w-7xl m-auto my-16">
				<div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-0">
					<div
						key="alertit"
						className="border border-gray-200 m-2 mb-6 rounded-xl shadow-lg overflow-hidden flex flex-col"
					>
						<Link href={`/projects/alertit`}>
							<Image
								className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 overflow-hidden"
								width={650}
								height={340}
								sizes="(max-width: 768px) 100vw,
										(max-width: 1200px) 50vw,
										30vw"
								alt="alertit logo"
								src="/projects/alertit-logo.png"
								priority={true}
							/>
							<div className="bg-white">
								<h1 className="p-4 pb-0">Alertit</h1>
								<p className="p-4">
									Monitoring everything that matters to you.
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
