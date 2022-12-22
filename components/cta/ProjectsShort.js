import ProjectShort from "./ProjectShort";

function ProjectsShort() {
	return (
		<section className="py-16 md:py-24 lg:py-32 pb-10 px-8 lg:px-12 border-b border-white">
			<div className="mx-auto max-w-7xl p-4 md:p-8">
				<h2 className="font-display mb-8 text-3xl tracking-tight sm:text-4xl lg:text-center">
					What are we actually talking about here?
				</h2>
				<p className="lg:text-center">
					Just so you know we're not all talk, here are a couple of projects
					we're working on now.
				</p>
			</div>
			<ProjectShort />
		</section>
	);
}

export default ProjectsShort;
