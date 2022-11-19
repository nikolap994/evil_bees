import Link from "next/link";
import Image from "next/image";

import errorImg from "../public/images/error-bw.png";

export default function ErrorPage() {
	return (
		<section className="max-w-7xl mx-auto relative">
			<div className="flex flex-col-reverse lg:flex-row items-center px-12 my-12">
				<div className="lg:w-1/2">
					<h1 className="text-5xl text-indigo-900 mt-10 lg:mt-0">Oops!</h1>
					<p className="text-lg pt-6 pb-3">This bee somehow buzzed away.</p>
					<p className="text-lg">
						Try navigating back to the{" "}
						<Link className="text-indigo-900" href="/">
							homepage
						</Link>
						.
					</p>
				</div>
				<div className="lg:w-1/2">
					<Image alt="robot" src={errorImg} />
				</div>
			</div>
		</section>
	);
}
