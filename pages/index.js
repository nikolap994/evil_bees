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
				<meta property="og:image" content="https://evilbees.com/images/growth-2.png"/>
				<meta property="og:title" content="Evil Bees"/>
				<meta property="og:description" content="We create open source projects that everyone is welcome to contribute to. This way, you'll be able to learn the skills you need to become a developer."/>
				<meta property="og:image:width" content="1200"/>
				<meta property="og:image:height" content="630"/>
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
