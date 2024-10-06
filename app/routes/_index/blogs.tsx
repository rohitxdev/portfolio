import { RiExternalLinkLine } from "react-icons/ri";

interface Blog {
	title: string;
	url: string;
}

const blogs = [
	{
		title: "How does Varsync store secrets securely?",
		url: "https://www.notion.so/How-does-Varsync-store-secrets-securely-3540914e77ac4c8fb054f59a614935eb",
	},
];

export const Blogs = () => {
	return (
		<section className="w-full space-y-4">
			<h2 className="text-4xl underline decoration-2 decoration-primary underline-offset-8">Blog</h2>
			<div className="flex flex-col gap-4">
				{blogs.map((item) => (
					<a
						className="group relative space-y-3 bg-stone-900 p-6 hover:bg-amber-100 hover:text-dark"
						href={item.url}
						target="_blank"
						rel="noreferrer"
						key={item.title}
					>
						<h3 className="font-medium text-3xl leading-none group-hover:font-semibold">{item.title}</h3>
						<RiExternalLinkLine className="absolute top-0 right-0 m-4 size-6" />
					</a>
				))}
			</div>
		</section>
	);
};
