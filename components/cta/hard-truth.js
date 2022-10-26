import Image from "next/image";

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
							<div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
								<h3>
									<button
										className="font-display text-lg text-blue-100 hover:text-white lg:text-white"
										role="tab"
										type="button"
										aria-selected="false"
										tabIndex="-1"
										data-headlessui-state=""
										aria-controls="headlessui-tabs-panel-:Rda9m:"
									>
										<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
										1
									</button>
								</h3>
								<p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry’s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
							<div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
								<h3>
									<button
										className="font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
										role="tab"
										type="button"
										aria-selected="false"
										tabIndex="-1"
										data-headlessui-state=""
										aria-controls="headlessui-tabs-panel-:Rda9m:"
									>
										<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
										1.
									</button>
								</h3>
								<p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry’s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
							<div className="group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
								<h3>
									<button
										className="font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"
										role="tab"
										type="button"
										aria-selected="false"
										tabIndex="-1"
										data-headlessui-state=""
										aria-controls="headlessui-tabs-panel-:Rda9m:"
									>
										<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"></span>
										1.
									</button>
								</h3>
								<p className="mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry’s
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
