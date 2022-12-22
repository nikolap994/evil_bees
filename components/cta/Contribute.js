import Link from "next/link";

import ButtonGit from "../ButtonGit";
import ButtonPurple from "../ButtonPurple";

function Contribute() {
	return (
		<section className="py-16 lg:py-24 px-8 lg:px-12 border-b border-white text-lg">
			<div className="max-w-2xl mx-auto md:p-y8 lg:p-0">
				<h2 className="font-display text-4xl md:text-5xl tracking-tight text-center mb-12">
					Start Contributing!
				</h2>
				<div>
					<p className="mb-4 text-justify mt-8 lg:mt-2">
						Eager to get to work?
					</p>
					<p className="text-justify">
						Instead of procrastinating and mulling over the different series of
						video tutorials for days, weeks, months on end — get started now!{" "}
						<span>Here's where you can find us:</span>
					</p>
					<ul className="flex flex-col md:flex-row justify-center gap-6 mt-10 mb-12">
						<li>
							<ButtonGit linkTo="https://github.com/Evil-Bees" text="GitHub" />
						</li>
						<li>
							<ButtonPurple
								linkTo="https://discord.gg/rvxGNrFhNz"
								text="Discord"
							/>
						</li>
					</ul>
				</div>
				<div className="md:px-4">
					<h3 className="text-3xl text-left mb-7">How We Do It</h3>
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
