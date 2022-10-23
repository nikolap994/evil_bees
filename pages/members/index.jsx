import { useEffect, useState } from "react";
export default function Members() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("/api/members")
			.then(res => res.json())
			.then(data => {
				setData(data.data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<div>
			{data.map((index, key) => (
				<div key={key}>
					{index.username} {index.points}
				</div>
			))}
		</div>
	);
}
