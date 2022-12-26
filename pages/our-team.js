import Team from "../content/team.json";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { VscGithubInverted } from "react-icons/vsc";

import StandForCTA from "../components/cta/what-we-stand-for";

export default function OurTeam() {
	return (
		<>
			<Head>
				<title>Meet the Evil Bees</title>
			</Head>

			<section className="text-white py-16 md:py-24 lg:py-24 px-8 lg:px-12 lg:h-screen">
				<div className="max-w-7xl mx-auto">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="mx-auto mb-24 max-w-[510px] text-center">
								<span className="text-primary mb-2 block text-lg font-semibold">
									Our Team
								</span>
								<h2 className="text-dark mb-6 font-bold text-6xl md:text-[40px]">
									Meet the Evil Bees
								</h2>
								<p className="text-body-color text-base">
									Every community has to start from somewhere, and ours was
									started by these busy bees.
								</p>
							</div>
						</div>
					</div>

					<div className="-mx-4 justify-center">
						<div className="mx-auto w-full px-4 grid gap-2 lg:grid-cols-2 md:grid-cols-1">
							{Object.entries(Team).map(([key, member]) => {
								return (
									<div
										key={key}
										className="border rounded-lg border-gray-900 bg-gray-900 mb-16 "
									>
										<div className="relative lg:float-left">
											<Image
												src={member.photo}
												alt={member.name}
												height="300"
												width="300"
												className="rounded-full lg:mr-1 object-center m-auto mt-10"
												loading="lazy"
											/>
											<Link href={member.github}>
												<div className="absolute -top-7 flex justify-center h-12 lg:h-16 w-full text-center">
													<div className="relative flex flex+-col gap-4 items-center mx-6 overflow-hidden rounded-lg bg-gray-900 py-5 px-7">
														<VscGithubInverted className="h-6 w-6" />
														<h3 className="text-dark text-base font-semibold">
															{member.name}
														</h3>
														<p className="text-body-color text-sm">
															{member.role}
														</p>

														<span className="absolute left-0 bottom-0">
															<svg
																width="61"
																height="30"
																viewBox="0 0 61 30"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<circle
																	cx="16"
																	cy="45"
																	r="45"
																	fill="#13C296"
																	fillOpacity="0.11"
																/>
															</svg>
														</span>
													</div>
												</div>
											</Link>
										</div>
										<div className="py-8 px-6 md:px-12">
											<p className="text-justify text-sm leading-6">
												{member.about}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<StandForCTA />
			</section>
		</>
	);
}
