export default function Members(props) {
	return (
		<div>
			<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
				<h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
					Join us and be part of our community.
				</h2>
				<p className="mt-6 text-lg tracking-tight">
					We always work to reward most active members of our community
				</p>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
				<div class="flex flex-col">
					<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div class="overflow-hidden">
								<table class="min-w-full">
									<thead class="border-b">
										<tr>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4"
											>
												Username
											</th>
											<th
												scope="col"
												class="text-sm font-medium text-gray-900 px-6 py-4"
											>
												Points
											</th>
										</tr>
									</thead>
									<tbody>
										{props.data.map((index, key) => (
											<tr class="border-b" key={key}>
												<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
													{index.username}
												</td>{" "}
												<td>{index.points}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	// TODO: Change this to load only required data without password info
	// TODO: And add limit by points, top 100 or something like that
	const res = await fetch(process.env.NEXTAUTH_URL + "/api/users")
		.then(res => res.json())
		.then(data => data.data);

	return {
		props: {
			data: res,
		},
	};
}
