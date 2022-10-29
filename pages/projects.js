import Projects from "../content/projects.json";

export default function Project() {
	return (
		<div>
			<h1>Projects</h1>
			<div>
				{Object.entries(Projects).map(([key, project]) => {
					return (
						<div key={key}>
							<div>Name: {project.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
