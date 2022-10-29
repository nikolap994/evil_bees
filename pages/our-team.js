import Team from "../content/team.json";

export default function OurTeam() {
	return (
		<div>
			<h1>Team</h1>
			<div>
				{Object.entries(Team).map(([key, member]) => {
					return (
						<div key={key}>
							<div>
								Name: {member.firstName} {member.lastName}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
