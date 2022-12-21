import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";

function Contribute() {
	return (
		<section className="py-16 lg:py-24 px-8 lg:px-12 border-b border-white">
			<div className="max-w-2xl mx-auto md:p-y8 lg:p-0">
				<h2 className="font-display text-4xl md:text-5xl tracking-tight text-center mb-12">
					Start Contributing!
				</h2>
				<div>
					<p className="mb-4 text-justify mt-8 lg:mt-2 text-md">
						Eager to get to work?
					</p>
					<p className="text-justify">
						Instead of procrastinating and mulling over the different series of
						video tutorials for days, weeks, months on end — get started now!{" "}
						<span>Here's where you can find us:</span>
					</p>
					<ul className="flex flex-col md:flex-row justify-center gap-6 mt-10 mb-12">
						<li>
							<Link
								className="flex items-center gap-4 bg-github-black text-white justify-center py-4 md:w-[200px] mx-auto hover:animate-pulse"
								href="https://github.com/Evil-Bees"
							>
								GitHub <VscGithubInverted className="w-6 h-6" />{" "}
							</Link>
						</li>
						<li>
							<Link
								className="flex items-center gap-4 bg-discord-purple text-white justify-center py-4 md:w-[200px] mx-auto hover:animate-pulse"
								href="https://discord.gg/rvxGNrFhNz"
							>
								Discord <FaDiscord className="w-6 h-6" />
							</Link>
						</li>
					</ul>
				</div>
				<div className="md:px-4">
					<h3 className="text-3xl text-left">How We Do It</h3>
					<p className="text-justify my-8 lg:mt-2 lg:mb-0 text-md">
						All of the projects and ideas we work on are created using the
						<span className="font-bold"> latest technologies</span>, and we look
						into every aspect of the development before committing to a tech
						stack.
					</p>
					<p className="mt-4">
						However, should things go awry, there will be a contingency plan set
						in place, as well as supportive community for you to lean on, and
						bounce ideas off of.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Contribute;
