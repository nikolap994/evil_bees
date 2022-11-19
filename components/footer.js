import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bottom-0 z-50 bg-indigo-900 mt-auto">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="md:flex md:flex-row items-center py-5 sm:flex-row sm:justify-between">
					<p className="text-center lg:text-left md:max-w-[400px] flex text-base leading-6 text-white">
						A constructive and inclusive community for software developers. With
						you every step of your journey.
					</p>
					<div className="flex justify-center md:justify-between gap-x-4 items-center">
						<div className="flex mt-6 text-sm text-slate-500 sm:mt-0">
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
