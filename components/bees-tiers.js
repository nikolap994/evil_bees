export default function BeesTeirs() {
	<div className="bg-slate-900 py-20 sm:py-32">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="md:text-center">
				<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
					Bee’s Tiers
				</h2>
			</div>

			<div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
				<section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
					<h3 className="mt-5 font-display text-lg text-white">The Busy Bee</h3>
					<p className="mt-2 text-base text-slate-400">
						You don’t have a lot of time to commit, or are dispersed around
						different projects and ideas. Maybe you’re just a beginner who’s
						unsure of how much they can contribute.
					</p>
				</section>
				<section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
					<h3 className="mt-5 font-display text-lg text-white">
						The Worker Bee
					</h3>
					<p className="mt-2 text-base text-slate-400">
						You have a good footing in the community, you’re the problem-solver,
						the hero of the Busy Bees. The worker bee is the backbone of any
						project.
					</p>
				</section>
				<section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
					<h3 className="mt-5 font-display text-lg text-white">
						The Drone Bee
					</h3>
					<p className="mt-2 text-base text-slate-400">
						You are the master of your field. If anyone needs anything done
						quickly — you’re the first person they’ll call.
					</p>
				</section>
			</div>
		</div>
	</div>;
}
