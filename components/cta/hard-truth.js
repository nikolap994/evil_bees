import Growth from "./growth";

export default function HardTruthCTA() {
	return (
		<section>
			<div className="relative overflow-hidden bg-gray-100 text-black pt-20 pb-28 sm:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
					<div className="bg-white p-8 md:mx-auto md:text-center">
						<h2 className="font-display text-5xl tracking-tight">
							Hard truth: Videos <span className="font-medium">don&apos;t</span>{" "}
							teach you how to code.
						</h2>
						<p className="mt-6 text-lg tracking-tight">
							Let&apos;s be honest. All you&apos;re doing while watching a
							tutorial is blindly copying someone else&apos;s code - with no
							reason or rhyme. You&apos;re not developing critical thinking, or
							any actual skills that will help you grow as a developer.
						</p>

						<h2 className="mt-12 font-display text-5xl tracking-tight">
							Solution
						</h2>
						<p className="mt-6 text-lg tracking-tight">
							Evil Bees is all about project-based learning. This means that
							you&apos;ll get to work on cool ideas by yourself, and manage to
							learn a lot along the way. But, we won&apos;t leave you stranded.
							We pride ourselves on being a space for the community - by the
							community.
						</p>
					</div>
				</div>
			</div>
			<Growth />
		</section>
	);
}
