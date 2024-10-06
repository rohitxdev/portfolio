const skills = {
	Frontend: ["React", "React Native", "TypeScript", "Tailwind CSS", "Remix", "Next.js"],
	Backend: ["Go", "Node.js", "MongoDB", "PostgreSQL", "Redis", "SQLite"],
	DevOps: ["Docker", "Kubernetes", "AWS", "GCP"],
	Other: ["Bash", "Linux", "System design", "Python", "Chrome extension dev"],
};

export const Skills = () => {
	return (
		<section className="w-full space-y-4">
			<h2 className="text-4xl underline decoration-2 decoration-primary underline-offset-8">Skills</h2>
			<div className="flex flex-wrap gap-6">
				{Object.entries(skills).map(([category, skills]) => (
					<div className="w-64 flex-1 space-y-2 border border-amber-100 p-4" key={category}>
						<h3 className="font-medium text-3xl leading-none">{category}</h3>
						<ul className="space-y-2 text-xl">
							{skills.map((skill) => (
								<li className="flex" key={skill}>
									<span className="float-left mx-2">-</span>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
