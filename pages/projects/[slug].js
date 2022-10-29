import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
	const files = fs.readdirSync("content/projects");
	const paths = files.map(fileName => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`content/projects/${slug}.md`, "utf-8");
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}

export default function PostPage({ frontmatter, content }) {
	return (
		<div className="container m-auto px-6 md:px-12 xl:px-6">
			<h1>{frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
		</div>
	);
}
