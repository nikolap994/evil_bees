import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
		<div className="container m-auto px-6 md:px-12 xl:px-6">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
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
						<p className="p-4">Monitoring everything that matters to you.</p>
						<h1 className="p-4">Alertit</h1>
					</Link>
				</div>
			</div>
		</div>
	);
}
