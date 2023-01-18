import OurProjects from "../../content/projects.json";
import Image from "next/image";
import Link from "next/link";
import ButtonGit from "../ButtonGit";
import ProjectTags from "./ProjectTags";
import ButtonPurple from "../ButtonPurple";

function ProjectShort() {
	return (
		<>
			{Object.entries(OurProjects).map(([key, project]) => {
				return (
					<section className="mx-auto xl:max-w-7xl" key={key}>
						<div className="flex flex-col lg:flex-row md:items-center gap-4 lg:gap-10 my-8 xl:my-16">
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
							<div className="flex flex-col justify-around lg:justify-center pb-4 lg:py-12 gap-4 w-full md:max-w-[400px]">
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
								<ButtonPurple linkTo={project.url} text="Read More!" />
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
}

export default ProjectShort;
