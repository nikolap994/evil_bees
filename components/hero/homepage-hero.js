import Image from "next/image";
import growthImage from "../../public/images/growth-2.png";
import chatBot from "../../public/images/chatbot.svg";

export default function HomepageHero() {
	return (
		<section className="relative overflow-hidden bg-indigo-900 py-32 text-white bg-geo-pattern bg-repeat animate-rtl-linear-infinite">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
				<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left sm:text-7xl">
					Lack the drive to level up as a developer? You’re in the right place!
				</h1>
				<p className="mx-auto lg:mx-0 mt-16 max-w-2xl text-2xl tracking-tight lg:text-left">
					Make learning, levelling up &mdash; fun and interactive.
				</p>
			</div>
		</section>
	);
}
