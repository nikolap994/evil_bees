const tagsColors = [
	{
		name: "good first issue",
		colors: "bg-[#382b80] text-[#b7abff] border-[#b7abff]",
	},
	{
		name: "help wanted",
		colors: "bg-[#004339] text-[#35d7bf] border-[#35d7bf]",
	},
	{
		name: "beginner friendly",
		colors: "bg-[#882707] text-[#f3a78e] border-[#f3a78e]",
	},
	{
		name: "first-timers-only",
		colors: "bg-[#09560e] text-[#5cdb31] border-[#5cdb31]",
	},
];

const displayTagColor = tag => {
	let currentTagColor = "";

	for (const tagColor of tagsColors) {
		tag.trim().toLowerCase() === tagColor.name
			? (currentTagColor = tagColor.colors)
			: "";
	}

	return currentTagColor;
};

function ProjectTags({ tags }) {
	return (
		tags.length > 0 && (
			<div className="flex justify-center flex-wrap w-full gap-2 ">
				{tags.map((tag, index) => (
					<span
						className={`text-xs font-medium leading-4 border px-2 py-0.5 rounded-xl ${displayTagColor(
							tag
						)}`}
						key={index}
					>
						{tag}
					</span>
				))}
			</div>
		)
	);
}

export default ProjectTags;
