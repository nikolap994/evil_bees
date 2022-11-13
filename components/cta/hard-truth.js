import Image from "next/image";
import { React, useState } from "react";

import mouthIcon from "../../public/images/mouthF.png";

export default function HardTruthCTA() {
	return (
		<div className="relative overflow-hidden bg-indigo-900 pt-20 pb-28 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<Image
						height="42"
						width="74"
						src={mouthIcon}
						alt="Open mouth monster icon"
					/>
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
						Hard truth: Videos do not teach you how to code.
					</h2>
					<p className="mt-6 text-lg tracking-tight text-blue-100">
						Solution: Evil Bees is all about project-based learning. We work
						together to create some great web applications together.
					</p>

					<p className="mt-6 text-lg tracking-tight text-blue-100">
						There are several components that are integral for growth:
					</p>
				</div>

				<div>
					<div>
						<div
							className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
							role="tablist"
							aria-orientation="vertical"
						>
							<div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6">
								<h3 className="text-white">Challenge Solutions</h3>
								<p className="mt-2 hidden text-sm lg:block text-white">
									We come up with best practices when we are trying to solve a
									particular problem. But the problem you are trying to solve
									doesn’t necessarily have to be the same, so why should the
									solution be the same?
								</p>
							</div>
							<div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6">
								<h3 className="text-white">Collaborate</h3>
								<p className="mt-2 hidden text-sm lg:block text-white">
									Instead of just consuming content from the community,
									collaborate with others,try to take part in community with
									your own code and be helpful. You will gain a sense of pride
									and validation. It gets addictive. Then you will find ways to
									bring more value and grow as a developer.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
