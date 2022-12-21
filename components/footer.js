import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bottom-0 z-50 bg-slate-900 mt-auto">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="md:flex md:flex-row items-center pt-10 pb-5 md:pt-5 sm:flex-row sm:justify-between">
					<p className="text-center lg:text-left md:max-w-[400px] flex text-base leading-6 text-white">
						A constructive and inclusive community for software developers. With
						you every step of your journey.
					</p>
					<div className="mt-3 flex justify-center md:justify-between gap-y-4 gap-x-8 items-center">
						<div className="flex text-sm text-slate-500 sm:mt-0">
							<Link href="/">
								<Image
									priority={true}
									width="80"
									height="50"
									alt="evil-bees"
									src="/evil-bees.png"
								/>
							</Link>
						</div>

						<div className="flex gap-x-6">
							<Link href="https://github.com/Evil-Bees">
								<Image width="50" height="50" alt="github" src="/github.png" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
