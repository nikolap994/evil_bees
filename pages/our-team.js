import Team from "../content/team.json";
import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
	return (
		<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
			<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left text-slate-900 sm:text-7xl">
				Team
			</h1>
			<br />
			<div>
				{Object.entries(Team).map(([key, member]) => {
					return (
						<div key={key}>
							<div className="p-6 border border-indigo-900 rounded-xl bg-indigo-900 sm:flex sm:space-x-8 sm:p-8 mb-5">
								<Image
									className="w-40 h-40 mx-auto rounded-full"
									src={member.photo}
									alt={member.name}
									height="220"
									width="220"
									loading="lazy"
								/>
								<div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
									<p className="text-white">{member.about}</p>
									<div>
										<h6 className="text-xl font-semibold text-white leading-none">
											{member.name}

											<div className="float-right">
												<Link
													className="inline-block m-1"
													href={"mailto:" + member.email}
												>
													<Image
														src="/email.png"
														width="30"
														height="30"
														loading="lazy"
														alt="Email"
													/>
												</Link>
												<Link
													className="inline-block m-1"
													href={member.linkedin}
												>
													<Image
														src="/ln.png"
														width="30"
														height="30"
														loading="lazy"
														alt="Linkedin"
													/>
												</Link>
												<Link className="inline-block m-1" href={member.github}>
													<Image
														src="/github.png"
														width="30"
														height="30"
														loading="lazy"
														alt="Github"
													/>
												</Link>
												<Link
													className="inline-block m-1"
													href={member.twitter}
												>
													<Image
														src="/twitter.png"
														width="30"
														height="30"
														loading="lazy"
														alt="Twitter"
													/>
												</Link>
											</div>
										</h6>
										<span className="text-s text-white bold">
											{member.role}
										</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
