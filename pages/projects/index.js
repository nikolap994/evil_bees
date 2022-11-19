import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Evil Bees Projects</title>
			</Head>
			<div className="container m-auto my-16 px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0">
					<div
						key="alertit"
						className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
					>
						<Link href={`/projects/alertit`}>
							<Image
								width={650}
								height={340}
								alt="alertit"
								src="/projects/alertit-logo.png"
							/>
							<h1 className="p-4 pb-0">Alertit</h1>
							<p className="p-4">Monitoring everything that matters to you.</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
