import Image from "next/image";
import Octopus from "../../public/images/8.png";

export default function StandForCTA() {
	return (
		<section className="relative bg-gradient-to-t from-indigo-900 to-indigo-200 text-white py-16 md:py-24 lg:py-32 px-8 lg:px-12">
			<Image
				className="md:animate-bounce absolute -top-[80px] left-[100px] md:top-[90px] md:left-[50%] lg:top-[40px] lg:left-[10%] w-[150px]"
				src={Octopus}
			/>
			<div className="mx-auto max-w-7xl p-4 md:p-8">
				<h2 className="font-display mb-8 text-3xl tracking-tight sm:text-4xl">
					What We Stand For
				</h2>
				<p className="mt-4 text-lg tracking-tight py-4">
					We are not a web development organization, nor a marketing
					organization. We are a group of like-minded individuals who are
					unified by a single idea —{" "}
					<strong>
						create something great, learn & improve ourselves along the way.
					</strong>{" "}
					All of the projects and ideas we work on are created using the{" "}
					<strong>latest technologies,</strong> and we look into every aspect of
					the development before committing to a tech stack. We think that
					communication and planning is key, and don&apos;t go into projects
					without thinking every aspect through. However, should things go awry,
					there will be a contingency plan set in place, as well as supportive
					community for you to lean on, and bounce ideas off of.
				</p>
			</div>
		</section>
	);
}
