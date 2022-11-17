import { React, useState } from "react";

export default function HardTruthCTA() {

	return (
		<div className="relative overflow-hidden bg-gray-100 text-black pt-20 pb-28 sm:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
				<div className="bg-white p-8 md:mx-auto md:text-center">
					<h2 className="font-display text-5xl tracking-tight">
						Hard truth: Videos <span className="font-medium">don't</span> teach you how to code.
					</h2>
					<p className="mt-6 text-lg tracking-tight">
						Let's be honest. All you're doing while watching a tutorial is blindly copying someone else's code - with no reason or rhyme. You're not developing critical thinking, or any actual skills that will help you grow as a developer.
					</p>

					<h2 className="mt-12 font-display text-5xl tracking-tight">
						Solution
					</h2>
					<p className="mt-6 text-lg tracking-tight">
						Evil Bees is all about project-based learning. This means that you'll get to work on cool ideas by yourself, and manage to learn a lot along the way. But, we won't leave you stranded. We pride ourselves on being a space for the community - by the community.
					</p>
				</div>

				<div>
					<div className="bg-black text-white mt-20 p-8">
						<h3 className="font-display text-3xl tracking-tight mt-3 mb-6">
							There are several components that are integral for growth:
						</h3>
						<div
							className="relative z-10 grid grid-cols-2 items-baseline text-center whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:whitespace-normal"
							role="tablist"
							aria-orientation="vertical"
						>
							<div className="group relative flex flex-col gap-y-4 rounded-full px-4 lg:rounded-r-none lg:rounded-l-xl lg:px-5 lg:py-5">
								<h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">Challenge Solutions</h3>
								<p className="text-left font-semibold text-white mt-2 text-md">
									We come up with best practices when we are trying to solve a
									particular problem. But the problem you are trying to solve
									doesn’t necessarily have to be the same, so why should the
									solution be the same?
								</p>
							</div>
							<div className="group flex flex-col gap-y-4 relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:py-5">
								<h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">Collaborate</h3>
								<p className="text-left text-white font-semibold mt-2 text-md">
									Instead of just consuming content from the community, collaborate with others,try to take part in community with your own code and be helpful. You will gain a sense of pride and validation. It gets addictive. Then you will find ways to bring more value and grow as a developer.
								</p>
							</div>
							<div className="group relative flex flex-col gap-y-4 rounded-full px-4 lg:rounded-r-none lg:rounded-l-xl lg:px-5 lg:py-5">
								<h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">Challenge Solutions</h3>
								<p className="text-left font-semibold text-white mt-2 text-md">
									We come up with best practices when we are trying to solve a
									particular problem. But the problem you are trying to solve
									doesn’t necessarily have to be the same, so why should the
									solution be the same?
								</p>
							</div>
							<div className="group flex flex-col gap-y-4 relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:py-5">
								<h3 className="animate-pulse bg-white text-black border-2 p-3 rounded-md text-2xl">Collaborate</h3>
								<p className="text-left text-white font-semibold mt-2 text-md">
									Instead of just consuming content from the community, collaborate with others,try to take part in community with your own code and be helpful. You will gain a sense of pride and validation. It gets addictive. Then you will find ways to bring more value and grow as a developer.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
