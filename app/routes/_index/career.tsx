import RhombusOutline from "~/assets/rhombus-outline.svg?react";
import Rhombus from "~/assets/rhombus.svg?react";

interface CareerItem {
	title: string;
	description: string;
	company?: string;
	startDate?: string;
	endDate?: string;
}

const careerHistory: CareerItem[] = [
	{
		title: "Full-Stack Engineer",
		description:
			"I work as a full-stack engineer, handling everything from web and mobile app development to building and migrating backend services. My main tools are Next.js for web, React Native for mobile, and Node.js for backend development. I’ve developed numerous features that have boosted our user count by 40% since joining the team. Additionally, I led the full migration of our infrastructure from AWS to GCP.",
		company: "IsManga",
		startDate: "09/2023",
	},
	{
		title: "Freelance Software Developer",
		description:
			"I worked as a freelance frontend developer for three months, serving two clients. I handled both the development and deployment of their applications using React and Cloudflare.",
		startDate: "06/2023",
		endDate: "08/2023",
	},
	{
		title: "Software Developer Intern",
		description:
			"I worked on multiple projects where I was responsible for building pixel-perfect UIs and integrating with third-party APIs such as Razorpay, OAuth2, and AWS. I also worked on building the MVP of a web3/crypto applciation using React, TypeScript, and Node.js.",
		company: "Rohini Tech Media Pvt Ltd",
		startDate: "01/2023",
		endDate: "04/2023",
	},
];

export const Career = () => {
	return (
		<section className="w-full space-y-4">
			<h2 className="text-4xl underline decoration-2 decoration-primary underline-offset-8">Career</h2>
			<div className="flex flex-col gap-4">
				{careerHistory.map((item) => (
					<div className="group flex" key={item.title}>
						<RhombusOutline className="m-4 size-6 shrink-0 text-light group-hover:hidden" />
						<Rhombus className="m-4 hidden size-6 shrink-0 text-light group-hover:block" />
						<div className="space-y-2">
							<h3 className="font-medium text-3xl leading-none">{item.title}</h3>
							<p className="text-xl">{item.description}</p>
							{item.company && <span className="mr-2 inline-block pb-2 text-xl">{item.company},</span>}
							<div className="inline-block">
								{item.startDate && <span className="pb-2 text-xl">{item.startDate}</span>}
								<span className="ml-2 inline-block pb-2 text-xl">- {item.endDate || "Present"}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
