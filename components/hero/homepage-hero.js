import Image from "next/image";
import growthImage from "../../public/images/growth-2.png";

export default function HomepageHero() {
	return (
		<section className="relative">
			<div className="absolute right-0 bottom-0 z-[-1]">
				<Image
					src={growthImage}
					alt="Man with purple hair flying on a rocket"
					className=""
				/>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-20">
				<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left text-slate-900 sm:text-7xl">
					Lack the drive to level up as a developer? You’re in the right place!
				</h1>
				<p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
					Make learning, levelling up fun and interactive.
				</p>
			</div>
		</section>
	);
}
