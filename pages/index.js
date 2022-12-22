import Head from "next/head";

import OpenSourceFAQ from "../components/cta/open-source-faq";
import HardTruthCTA from "../components/cta/hard-truth";
import SolvingProblems from "../components/cta/solving-problems";
import HomepageHero from "../components/hero/homepage-hero";
import Contribute from "../components/cta/Contribute";
import ProjectsShort from "../components/cta/ProjectsShort";

export default function Home() {
	return (
		<>
			<Head>
				<title>Evil Bees</title>
			</Head>
			<section>
				<HomepageHero />
				<HardTruthCTA />
				<Contribute />
				<ProjectsShort />
				<OpenSourceFAQ />
				<SolvingProblems />
			</section>
		</>
	);
}
