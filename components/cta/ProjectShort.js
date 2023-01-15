import OurProjects from "../../content/projects.json";
import Image from "next/image";
import Link from "next/link";
import ButtonGit from "../ButtonGit";
import ProjectTags from "./ProjectTags";

function ProjectShort() {
	return (
		<>
			{Object.entries(OurProjects).map(([key, project]) => {
				return (
					<section className="mx-auto xl:max-w-7xl" key={key}>
						<div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-10 my-8 xl:my-16">
							<div className="md:w-full">
								<Image
									className="rounded-lg lg:w-[1000px] md:h-[220px] lg:h-auto object-cover"
									width="470"
									height="200"
									src={project.photo}
									alt={project.name}
								/>
							</div>
							<div className="flex flex-col justify-around lg:justify-center lg:gap-10 pb-4 lg:py-12 gap-4 w-full md:max-w-[400px]">
								<h3 className="text-3xl mt-4 mb-3 md:my-0">{project.name}</h3>
								<ProjectTags tags={project.tags} />
								<ButtonGit
									linkTo={`https://github.com/Evil-Bees/${project.name}/issues`}
									text="Check out issues on"
								/>
								<Link
									href={project.url}
									className="flex items-center gap-4 bg-discord-purple text-white justify-center py py-4 px-6 min-w-[250px] rounded-md hover:animate-pulse"
								>
									Read more!
								</Link>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
}

export default ProjectShort;
