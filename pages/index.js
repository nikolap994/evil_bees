import Head from "next/head";

import OpenSourceFAQ from "../components/cta/open-source-faq";
import HardTruthCTA from "../components/cta/hard-truth";
import StandForCTA from "../components/cta/what-we-stand-for";
import SolvingProblems from "../components/cta/solving-problems";
import HomepageHero from "../components/hero/homepage-hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Evil Bees</title>
			</Head>
			<section>
				<HomepageHero />
				<HardTruthCTA />
				<OpenSourceFAQ />
				<StandForCTA />
				<SolvingProblems />
			</section>
		</>
	);
}
