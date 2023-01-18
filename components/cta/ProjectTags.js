const tagsColors = [
	{
		name: "good first issue",
		colors:
			"bg-good-first-issue text-good-first-issue-tag-light border-good-first-issue-tag-light",
	},
	{
		name: "help wanted",
		colors:
			"bg-help-wanted-tag text-help-wanted-tag-light border-help-wanted-tag-light",
	},
	{
		name: "beginner friendly",
		colors:
			"bg-beginner-friendly-tag text-beginner-friendly-tag-light border-beginner-friendly-tag-light",
	},
	{
		name: "first-timers-only",
		colors:
			"bg-first-timers-only-tag text-first-timers-only-tag-light border-first-timers-only-tag-light",
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
