import clsx from "clsx";

type LogoProps = {
	name: string;
	className?: string;
};

export function Logo({ name, className }: LogoProps) {
	const classMerged = clsx(
		"flex items-center h-10 bg-white rounded-2lg font-black px-12 py-1",
		className
	);
	return <div className={classMerged}>{name}</div>;
}
