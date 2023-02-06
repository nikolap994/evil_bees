import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";

function ButtonGit({ text, linkTo }) {
	return (
		<Link
			className="flex items-center gap-4 bg-github-black text-white justify-center py-4 px-2 md:min-w-[250px] rounded-md hover:animate-pulse"
			href={linkTo}
			target="_blank"
		>
			{text}
			<VscGithubInverted className="w-6 h-6" />{" "}
		</Link>
	);
}

export default ButtonGit;
