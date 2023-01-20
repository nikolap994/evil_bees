import Link from "next/link";
import {
	FaGithub,
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
	FaDiscord,
	FaTiktok,
	FaFacebook,
	FaTwitter
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bottom-0 z-50 bg-slate-900 border-t border-white mt-auto">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="md:flex md:flex-row items-center pt-10 pb-5 md:pt-5 sm:flex-row sm:justify-between">
					<p className="text-center lg:text-left md:max-w-[400px] flex text-base leading-6 text-white">
						A constructive and inclusive community for software developers. With
						you every step of your journey.
					</p>
					<div className="mt-3 flex justify-center md:justify-between gap-y-4 gap-x-8 items-center">
						<div className="flex gap-x-6">
							<Link href="https://github.com/Evil-Bees" target="_blank">
								<FaGithub className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://discord.gg/rvxGNrFhNz" target="_blank">
								<FaDiscord className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://www.linkedin.com/company/evil-bees/" target="_blank">
								<FaLinkedinIn className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://www.instagram.com/evilbeesdev/" target="_blank">
								<FaInstagram className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://www.youtube.com/@evilbees" target="_blank">
								<FaYoutube className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://tiktok.com/@evilbeesdev" target="_blank">
								<FaTiktok className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://www.facebook.com/people/Evil-Bees/100088394168553/" target="_blank">
								<FaFacebook className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
						<div className="flex gap-x-6">
							<Link href="https://twitter.com/evilbeesdev/" target="_blank">
								<FaTwitter className="text-white w-6 h-6 hover:animate-pulse" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
