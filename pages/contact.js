import Head from "next/head";
import Link from "next/link";

import Contacts from "../content/team.json";
import Image from "next/image";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us</title>
			</Head>
			<section className="container m-auto px-6 md:px-12 xl:px-6 my-12 lg:my-20">
				<div className="flex flex-wrap items-center	items-center">
					<div className="basis-auto w-full md:w-6/12 px-3 lg:px-6 lg:mt-20">
						<h2 className="text-3xl font-bold mb-6">
							Get in touch, we’d love to hear from you
						</h2>
						<p className="text-black-500 mb-10">
							If you wanna get in touch, talk to me about a project
							collaboration or just say hi, send an email to
						</p>
						{Object.entries(Contacts).map(([key, contact]) => {
							return (
								<Link href={`mailto:${contact.email}`}>
									<p key={key} className="text-black-500 mb-1">
										{contact.name} - {contact.email}
									</p>
								</Link>
							);
						})}
					</div>
					<div className="basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
						<Image
							src="/images/contact-me.png"
							alt="contact-me"
							width="1000"
							height="1000"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
