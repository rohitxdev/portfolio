import type { MetaFunction } from "@remix-run/cloudflare";
import { Blogs } from "./blogs";
import { Career } from "./career";
import { Me } from "./me";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const meta: MetaFunction = () => {
	return [
		{ title: "Rohit's Portfolio" },
		{
			tagName: "link",
			rel: "shortcut icon",
			href: "/favicon.png",
			type: "image/png",
		},
	];
};

const Index = () => {
	return (
		<div className="flex flex-col items-center gap-8">
			<Me />
			<Skills />
			<Projects />
			<Career />
			<Blogs />
		</div>
	);
};

export default Index;
