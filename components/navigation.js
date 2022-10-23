import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/about">About us</Link>
				</li>
				<ul>
					<li>
						<Link href="/members">Members</Link>
					</li>
					<li>
						<Link href="/members/hall-of-fame">Hall of Fame</Link>
					</li>
				</ul>
				<li>
					<Link href="/contact">Contact us</Link>
				</li>
			</ul>
		</nav>
	);
}
