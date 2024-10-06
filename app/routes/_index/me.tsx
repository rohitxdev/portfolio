import { GrDownload } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import GithubOutline from "~/assets/github-outline.svg?react";
import X from "~/assets/x.svg?react";

export const Me = () => {
	return (
		<div className="flex w-full items-center justify-between gap-12 max-sm:flex-col-reverse">
			<div>
				<div className="flex items-center gap-8">
					<h1 className="pb-2 font-bold text-5xl max-md:text-4xl">Hi, I&apos;m Rohit.</h1>
					<a
						className="flex h-8 items-center gap-2 bg-primary px-3 font-medium text-dark text-sm leading-none"
						href="https://drive.google.com/file/d/1_ACHocrtd8dh6qlV7h6YcWpz8M7wLOeG/view?usp=drive_link"
					>
						<GrDownload className="size-3" /> Rèsumé
					</a>
				</div>
				<p className="max-w-prose text-xl">
					I'm a full-stack developer with a passion for building scalable and performant web applications. I have experience in multiple
					areas of software development, including frontend, backend, and DevOps. I love tinkering with new technologies and reading
					technical blogs. My current favourite tools are Go, Bash, PostgreSQL and Docker. Other than that, I also enjoy working out,
					watching anime, and playing video games.
					<img className="ml-2 inline" src="sword.png" width={24} alt="" />
				</p>
				<div className="mt-4 flex gap-4 *:rounded-full *:border *:p-2">
					<a href="https://github.com/rohitxdev" target="_blank" rel="noreferrer" className="text-xl">
						<GithubOutline className="size-6" />
					</a>
					<a href="https://twitter.com/themeowdev" target="_blank" rel="noreferrer" className="text-xl">
						<X className="size-6 p-1" />
					</a>
					<a href="https://www.linkedin.com/in/rohit-reddy-36256920a/">
						<SlSocialLinkedin className="size-6 p-0.5" />
					</a>
					<a href="mailto:rohitreddygr8@gmail.com" className="text-xl">
						<TfiEmail className="size-6" />
					</a>
				</div>
			</div>
			<div className="after:-z-10 relative mx-8 translate-y-4 rotate-6 scale-90 after:absolute after:top-0 after:size-full after:bg-amber-100 after:content-[''] hover:rotate-3">
				<img className="-translate-x-2 -translate-y-2 min-w-32 max-w-full object-contain" src="me.png" width={200} alt="" />
			</div>
		</div>
	);
};
