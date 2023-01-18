import Image from "next/image";

import OurProjects from "../../content/projects.json";
import ButtonGit from "../ButtonGit";
import ProjectTags from "./ProjectTags";

function ProjectShort() {
	return (
		<>
			{Object.entries(OurProjects).map(([key, project]) => {
				return (
					<section className="mx-auto xl:max-w-7xl mb-16" key={key}>
						<div
							className={`flex flex-col md:items-center gap-4 lg:gap-10 my-8 xl:my-16 ${
								key % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
							}`}
						>
							<h3 className="text-3xl mt-4 md:my-0 lg:hidden">
								{project.name}
							</h3>
							<div className="md:w-full">
								<Image
									className="rounded-lg lg:w-[1000px] lg:h-auto object-cover md:w-3/4 lg:w-full mx-auto"
									width="470"
									height="200"
									src={project.photo}
									alt={project.name}
								/>
							</div>
							<div className="flex flex-col justify-around lg:justify-center pb-4 gap-4 w-full md:max-w-[400px]">
								<h3 className="text-3xl mt-4 md:my-0 hidden lg:block">
									{project.name}
								</h3>
								<div className="flex justify-center w-full mb-5">
									<ProjectTags tags={project.tags} />
								</div>
								<ButtonGit
									linkTo={`https://github.com/Evil-Bees/${project.name}/issues`}
									text="Check out issues on"
								/>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
}

export default ProjectShort;
