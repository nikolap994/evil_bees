import { useState } from "react";

import Link from "next/link";

export default function Register() {
	const [isEyeOpen, toggleEye] = useState(0);

	const onSubmit = event => {
		event.preventDefault();

		const firstName = event.target.firstname.value;
		const lastName = event.target.lastname.value;
		const username = event.target.username.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const repeatPassword = event.target.repeatpassword.value;

		if (password !== repeatPassword) {
			console.log("Passwords are not the same!");
			return;
		}

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			email: email,
			firstName: firstName,
			lastName: lastName,
			password: password,
			username: username,
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch(`/api/users`, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	};

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="flex justify-center h-screen">
				<div className="hidden lg:block relative bg-slate-400 bg-cover lg:block lg:w-1/2">
					<div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
						<div className="z-10">
							<h2 className="text-5xl font-bold text-white">Evil Bees</h2>
							<p className="max-w-xl text-lg mt-3 text-gray-300">
								Some text
								<span className="block">some text</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-1/2 xl:w-2/6">
					<div className="flex-1">
						<div className="text-center">
							<h1 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
								Sign Up
							</h1>
						</div>

						<form
							onSubmit={onSubmit}
							className="flex flex-col gap-7 mt-8"
							method="post"
							action="/api/auth/callback/credentials"
						>
							<div>
								<label
									htmlFor="firstname"
									className="flex flex-col block text-gray-600 dark:text-gray-200"
								>
									First name
								</label>
								<input
									type="text"
									name="firstname"
									placeholder="Enter your first name"
									className="text-sm dark:bg-gray-200 dark:text-black block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
								></input>
							</div>

							<div>
								<label
									htmlFor="lastname"
									className="flex flex-col block text-gray-600 dark:text-gray-200"
								>
									Last name
								</label>
								<input
									type="text"
									name="lastname"
									placeholder="Enter your last name"
									className="text-sm dark:bg-gray-200 dark:text-black block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
								></input>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm text-gray-600 dark:text-gray-200"
								>
									Email
									<input
										placeholder="ex: john@gmail.com"
										className=" dark:bg-gray-200 dark:text-black block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										autoComplete="email"
										name="email"
										type="email"
									/>
								</label>
							</div>

							<div>
								<label
									htmlFor="username"
									className="block text-sm text-gray-600 dark:text-gray-200"
								>
									Username
									<input
										placeholder="ex: john@gmail.com"
										className=" dark:bg-gray-200 dark:text-black block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										autoComplete="username"
										name="username"
										type="text"
									/>
								</label>
							</div>

							<div>
								<label
									htmlFor="password"
									className="relative flex flex-col block text-sm text-gray-600 dark:text-gray-200"
								>
									Password
									<input
										placeholder="Enter your password"
										autoComplete="current-password"
										name="password"
										type="password"
										className="block w-full dark:bg-gray-200 dark:text-black px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</label>
								<a
									href="/forgotten-password"
									className="text-sm self-end text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
								>
									Forgot password?
								</a>
							</div>

							<div>
								<label
									htmlFor="repeatpassword"
									className="relative flex flex-col block text-sm text-gray-600 dark:text-gray-200"
								>
									Repeat Password
									<input
										placeholder="Enter your password"
										autoComplete="current-password"
										name="repeatpassword"
										type="password"
										className="block w-full dark:bg-gray-200 dark:text-black px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</label>
							</div>

							<div className="w-full bg-white"> Progress bar </div>

							<button
								className="py-2 px-8 mx-auto border border-transparent	rounded-md bg-white fade-out hover:bg-indigo-600 hover:text-white"
								type="submit"
							>
								Sign Up
							</button>

							<p className="text-sm text-center text-gray-400">
								Already have an account?
								<Link
									className="text-blue-400 focus:outline-none focus:underline hover:underline"
									href="/signin"
								>
									Sign in.
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
