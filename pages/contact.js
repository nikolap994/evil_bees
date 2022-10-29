import Contacts from "../content/contacts.json";

export default function Contact() {
	return (
		<div>
			<h1>Projects</h1>
			<div>
				{Object.entries(Contacts).map(([key, contact]) => {
					return (
						<div key={key}>
							<div>Email: {contact.email}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
