import Growth from "./growth";

export default function HardTruthCTA() {
	return (
		<section className="bg-gray-100">
			<div className="text-black text-white py-16 md:py-24 lg:py-32 px-8 lg:px-12">
				<div className="mx-auto max-w-7xl">
					<div className="bg-white p-8 md:mx-auto md:text-center">
						<h2 className="font-display text-5xl tracking-tight mt-16">
							Hard truth: Videos <span className="font-medium">don&apos;t</span>{" "}
							teach you how to code.
						</h2>
						<p className="mt-8 text-lg tracking-tight text-justify lg:text-center max-w-4xl mx-auto">
							Let&apos;s be honest. All you&apos;re doing while watching a
							tutorial is blindly copying someone else&apos;s code - with no
							reason or rhyme. You&apos;re not developing critical thinking, or
							any actual skills that will help you grow as a developer.
						</p>

						<h2 className="mt-16 font-display text-5xl tracking-tight">
							Solution
						</h2>
						<p className="mt-8 text-lg tracking-tight mb-16 text-justify lg:text-center max-w-4xl mx-auto">
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
