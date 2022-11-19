import Head from "next/head";

export default function AlertIt() {
	return (
		<>
			<Head>
				<title>AlertIt</title>
			</Head>
			<div className="container m-auto px-6 md:px-12 xl:px-6">
				<h1 className="z-10 max-w-3xl font-display text-4xl font-medium tracking-tight text-left text-slate-900 sm:text-6xl">
					Monitoring everything that matters to you.
				</h1>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Website observation
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					Know right away if your website is offline! Reliable monitoring saves
					you money by alerting you before any major problems arise.
				</p>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Monitoring pings
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					Utilize one of the instruments that administrators use the most
					frequently to verify the availability of network devices.
				</p>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Port surveillance
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					Is email service still available? What about the crucial database
					server, for instance? Let&#39;s verify! Track any specified service
					that is active on any port.
				</p>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Keyword monitoring
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					Check the presence of the specific text in the content of the site by
					crawling it whenever you want.
				</p>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Provide updates on incidents
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					To the subscribers of your Status page, send out status updates
					through email or other services you support.
				</p>
				<br />
				<h2 className="font-display text-xl tracking-tight text-slate-900 sm:text-3xl">
					Response periods
				</h2>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					View your response times as a graph to identify performance blips.
				</p>
				<p>
					There are times when things go wrong. Be informed! Even the strongest
					among us have downtime. However, it&apos;s crucial to be aware of it
					before clients are impacted!
				</p>
				<p className="mt-4 text-lg tracking-tight text-slate-700">
					Using status pages, you can inform your consumers about incidents. Be
					open-minded. Customers should be informed of scheduled interruptions.
					Show them how you are thriving to provide a 100% online service.
				</p>
			</div>
		</>
	);
}
