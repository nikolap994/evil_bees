import Image from "next/image";
import growthImage from "../../public/images/growth-2.png";

export default function HomepageHero() {
	return (
		<section className="relative">
			<div className="lg:block absolute right-0 2xl:right-[24%] bottom-0 z-[-1]">
				<Image
					src={growthImage}
					alt="Man with purple hair flying on a rocket"
					className="opacity-50 xl:opacity-100"
					priority={true}
				/>
			</div>
			<div className="mx-auto max-w-7xl text-center py-16 md:py-24 lg:py-32 px-8 lg:px-12">
				<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left text-slate-900 md:text-7xl">
					Want to level up as a developer?
				</h1>
				<p className="mx-auto lg:mx-0 mt-16 lg:max-w-2xl text-6xl tracking-tight text-left">
					You’re in the right place!
				</p>
			</div>
		</section>
	);
}
