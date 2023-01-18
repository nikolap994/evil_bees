import ProjectShort from "./ProjectShort";

function ProjectsIntro() {
	return (
		<section className="py-16 md:py-24 pb-10 px-8 lg:px-12 border-b border-white text-lg  text-center">
			<div className="mx-auto max-w-3xl lg:max-w-7xl p-4 md:p-8">
				<h2 className="font-display mb-8 tracking-tight text-5xl">
					Our Projects
				</h2>
				<p className="pt-4">
					Just so you know we're not all talk, here are a couple of projects
					we're working on now.
				</p>
			</div>
			<ProjectShort />
		</section>
	);
}

export default ProjectsIntro;
