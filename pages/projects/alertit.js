import AlertItInfo from "../../content/alertit-info.json";
import Head from "next/head";
import Link from "next/link";

export default function AlertIt() {
	return (
		<>
			<Head>
				<title>AlertIt</title>
			</Head>
			<section className="bg-gradient-to-b from-indigo-900 to-indigo-200 text-white py-16 md:py-24 lg:py-24 px-8 lg:px-12">
				<div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-6">
					<h1 className="self-center text-white max-w-3xl font-display text-4xl font-medium tracking-tight text-left sm:text-6xl">
						Monitoring everything that matters to you.
					</h1>

					{Object.entries(AlertItInfo).map(([key, info]) => {
						{
							console.log(info.title);
							return (
								<div className="mt-16 mb-8">
									<h2 className="bg-zinc-700 p-4 font-display text-xl tracking-tight sm:text-3xl">
										{info.title}
									</h2>
									<p className="pl-6 mt-4 text-lg tracking-tight text-slate-900">
										{info.text}
									</p>
								</div>
							);
						}
					})}

					<Link
						className="w-full col-span-2 text-center w-full  lg:max-w-[300px] text-xl mx-auto text-blue-600 hover:invert visited:text-purple-600"
						href="https://github.com/Evil-Bees/alertit"
					>
						<p className="p-4 bg-white"> Check out the Github repository!</p>
					</Link>
				</div>
			</section>
		</>
	);
}
