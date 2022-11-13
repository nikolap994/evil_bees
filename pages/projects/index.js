import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

function date_sort(a, b) {
	return (
		new Date(b.frontmatter.date).getTime() -
		new Date(a.frontmatter.date).getTime()
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync("content/projects");

	let posts = files.map(fileName => {
		const slug = fileName.replace(".md", "");
		const readFile = fs.readFileSync(`content/projects/${fileName}`, "utf-8");
		const { data: frontmatter } = matter(readFile);
		return {
			slug,
			frontmatter,
		};
	});
	posts = posts.sort(date_sort);
	return {
		props: {
			posts,
		},
	};
}

export default function Projects({ posts }) {
	return (
		<div className="container m-auto px-6 md:px-12 xl:px-6">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
				{posts.map(({ slug, frontmatter }) => (
					<div
						key={slug}
						className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
					>
						<Link href={`/projects/${slug.toLowerCase()}`}>
							<Image
								width={650}
								height={340}
								alt={frontmatter.title}
								src={frontmatter.socialImage}
							/>
							<p className="p-4">{frontmatter.description}</p>
							<h1 className="p-4">{frontmatter.title}</h1>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
