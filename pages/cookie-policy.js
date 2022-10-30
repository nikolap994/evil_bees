export default function CookiePolicy() {
	return (
		<div className="container m-auto px-6 md:px-12 xl:px-6 pb-14">
			<h1 className="z-10 max-w-4xl font-display text-5xl font-medium tracking-tight text-left text-slate-900 sm:text-7xl">
				COOKIE POLICY
			</h1>
			<br />
			<p>
				Evil Bees does not use cookies for any purpose that isn’t listed in the
				cookie policy document. By using our website you agree that cookies may
				be sent to your computer and/or any other device you use to access our
				website.
			</p>
			<br />
			<h2 className="z-10 max-w-4xl font-display text-2xl font-medium tracking-tight text-left text-slate-900 sm:text-3xl">
				Cookie
			</h2>
			<br />
			<p>
				A cookie is a small information set that is used for several different
				purposes on the web and is sent to your web browser when certain
				websites or web applications are visited. The browser will then use this
				cookie to send it back to a web server. Usually, a cookie is used to
				identify the visitor and keep it logged in on the website or web
				application. This is how websites know that you are logged when browsing
				them. Cookies help the website understand the behaviour or browsing
				party and help browsers remember the certain state of the visitor and
				setting may have been used on the website. This behaviour is useful
				especially for HTTP protocol since it makes the browser remembers the
				state of the visit even though HTTP is a stateless protocol. Cookies are
				usually used for session control (keeping you logged in on the website),
				personalisation (settings considering the user’s environment) and
				tracking (analytics of any sort).
			</p>

			<br />
			<h2 className="z-10 max-w-4xl font-display text-l font-medium tracking-tight text-left text-slate-900 sm:text-l">
				What types of cookies do we send?
			</h2>
			<br />
			<p>
				We are sending session cookies in order to maintain user login
				functional and no other purpose is imposed on the end-user. There are
				three types of session cookies that we are using to maintain the
				functionality of the website and those are CSRF, JWT and standard HTTP
				Session cookies. CSRF cookies protect the credibility and of data sent
				through HTTP forms across the website. JWT help strengthens the security
				of communication between the frontend of the website. An HTTP Session
				cookie makes sure you are staying logged on the website when you enter
				your login details. We also use Google Analytics to improve our metrics
				system and help us understand how our visitors interact with our
				website. For more information on how Google Analytics works and how they
				use cookies, please, visit their help page which discloses accurate
				information on this matter.
			</p>
			<br />
			<h2 className="z-10 max-w-4xl font-display text-l font-medium tracking-tight text-left text-slate-900 sm:text-l">
				How long they persist on your browser
			</h2>
			<br />
			<p>
				Per EvilBees.com cookie policy, all cookies we use for session control
				are valid for 12 hours after which logged in user will be asked to
				re-login back on the platform in order for us to re-validate login and
				to refresh the cookie validity to extend it for another 12 hours. Note
				that we are unable to control the existence of the cookie on your
				browser but, the only thing that is manageable from our end is the
				expiration of the cookie after which the browser starts treating it as
				invalid. The only way for a cookie to be deleted from the browser is for
				you to delete it manually.
			</p>

			<br />

			<h2 className="z-10 max-w-4xl font-display text-l font-medium tracking-tight text-left text-slate-900 sm:text-l">
				What data they track
			</h2>
			<br />
			<p>
				Per EvilBees.com cookie policy, our session control cookies do not track
				any data nor are used to transmit personal or other data to our backend
				system or any 3rd party entity. Our platform generates these cookies and
				it applies certain data to the cookie itself for the browser to prove
				its legitimacy. The server on our end would just validate that it’s the
				same data is sent to the browser after which access to the end-user is
				granted. Google Analytics cookies are sending behavioural information to
				their analytics system which tells us how the pages are browsed, what
				button is clicked, how long visitor was on certain pages, etc. for full
				description, please, visit their help page that describes this purpose
				in detail.
			</p>
			<br />
		</div>
	);
}
