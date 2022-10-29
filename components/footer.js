import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="relative z-50 bg-indigo-900 mt-auto">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
					<div className="flex gap-x-6">
						<Link href="https://github.com/Evil-Bees">
							<Image width="80" height="80" alt="github" src="/github.png" />
						</Link>
					</div>
					<div className="mt-6 text-sm text-slate-500 sm:mt-0">
						<Link href="/">
							<Image
								priority={true}
								width="100"
								height="100"
								alt="evil-bees"
								src="/evil-bees.png"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
