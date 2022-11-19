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

// background: #fff;
//     box-shadow: 0 32px 18px -20px var(--public-light-shadow-neutral);
//     transform: translateY(-4px) scale(1.03);
//     transition: var(--public-transition-hover-blur-cta);
//     transition-property: background-color,box-shadow,transform;
