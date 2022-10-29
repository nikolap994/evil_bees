import Image from "next/image";
import growthImage from "../../public/images/growth-2.png";
import chatBot from "../../public/images/chatbot.svg";

export default function HomepageHero() {
	return (
		<section className="relative">
			<div className="hidden lg:block absolute right-0 bottom-0 z-[-1]">
				<Image
					priority={true}
					src={growthImage}
					alt="Man with purple hair flying on a rocket"
					className="opacity-50 xl:opacity-100"
				/>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
				<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left text-slate-900 sm:text-7xl">
					Lack the drive to level up as a developer? You’re in the right place!
				</h1>
				<p className="mx-auto lg:mx-0 mt-16 max-w-2xl text-2xl tracking-tight text-indigo-700 lg:text-left animate-bounce">
					Make learning, levelling up &mdash; fun and interactive.
				</p>
			</div>
		</section>
	);
}
