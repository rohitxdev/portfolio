import { Link } from "@remix-run/react";
import { RiExternalLinkLine } from "react-icons/ri";

interface Project {
	name: string;
	description: string;
	url: string;
	icons: string[];
}

const projects = (
	[
		{
			name: "Varsync",
			description: "A fully fledged feature flags and secrets managing tool with zero-knowledge encryption.",
			url: "https://varsync.com",
			icons: ["react.png", "remix.png", "mongodb.png", "webrtc.png"].sort(),
		},
		{
			name: "FilterCV",
			description: "A web app for recruiters to filter resumes based on their criteria. Built using Gemini 1.5 flash.",
			url: "https://filtercv.com",
			icons: ["react.png", "remix.png"],
		},
		{
			name: "Relay",
			description: "A webRTC based group video-calling app with realtime chat, screen sharing, camera switching and PWA support.",
			url: "https://github.com/rohitxdev/relay",
			icons: ["react.png", "mongodb.png", "nodejs.png"],
		},
		{
			name: "Bitsy",
			description: "A simple URL shortener app with QR code generation.",
			url: "https://github.com/rohitxdev/bitsy",
			icons: ["react.png", "nodejs.png", "postgres.png"],
		},
		{
			name: "Web analytics app",
			description: "A web analytics app built with Remix, Golang and MongoDB.",
			url: "https://github.com/rohitxdev/analytics-app-api",
			icons: ["react.png", "remix.png", "mongodb.png", "go.png"],
		},
	] as Project[]
).map((item) => ({ ...item, icons: item.icons.sort() }));

const Projects = () => {
	return (
		<section className="w-full space-y-4">
			<h2 className="text-4xl underline decoration-2 decoration-primary underline-offset-8">Projects</h2>
			<div className="flex flex-col gap-4">
				{projects.map((item) => (
					<Link
						className="group relative space-y-3 bg-stone-900 p-6 hover:bg-amber-100 hover:text-dark"
						to={item.url}
						key={item.name}
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="font-medium text-3xl leading-none group-hover:font-semibold">{item.name}</h3>
						<p className="text-xl group-hover:font-medium">{item.description}</p>
						<div className="flex gap-2">
							{item.icons.map((icon) => (
								<img
									className="rounded-full border border-amber-100/50 object-contain p-2 group-hover:border-stone-900/50"
									src={icon}
									width={40}
									height={40}
									alt=""
									key={icon}
								/>
							))}
						</div>
						<RiExternalLinkLine className="absolute top-0 right-0 m-4 size-6" />
					</Link>
				))}
			</div>
			<p className="text-xl">
				...and more on&nbsp;
				<a className="underline decoration-1 underline-offset-4" href="https://github.com/rohitxdev" target="_blank" rel="noreferrer">
					GitHub
				</a>
			</p>
		</section>
	);
};

export default Projects;
