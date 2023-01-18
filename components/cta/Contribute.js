import Link from "next/link";

import ButtonGit from "../ButtonGit";
import ButtonPurple from "../ButtonPurple";

function Contribute() {
	return (
		<section className="bg-white text-black py-16 lg:py-24 px-8 lg:px-12 border-b border-white text-lg">
			<div className="max-w-2xl mx-auto md:p-y8 lg:p-0">
				<h2 className="font-display text-4xl md:text-5xl tracking-tight lg:text-center mb-12">
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
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contribute;
