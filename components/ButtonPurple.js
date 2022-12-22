import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

function ButtonPurple({ text, linkTo }) {
	return (
		<Link
			className="flex items-center gap-4 bg-discord-purple text-white justify-center py py-4 px-6 min-w-[250px] rounded-md hover:animate-pulse"
			href={linkTo}
		>
			{text} <FaDiscord className="w-6 h-6" />
		</Link>
	);
}

export default ButtonPurple;
