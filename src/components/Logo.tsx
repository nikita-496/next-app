import clsx from "clsx";

type LogoProps = {
	name: string;
	className?: string;
};

export function Logo({ name, className }: LogoProps) {
	const classMerged = clsx(
		"flex items-center justify-center bg-white rounded-2lg font-black text-[15.08px] px-[34px] pt-[2px] leading-[26px] md:leading-[38px] md:text-[21px] md:px-[50px]",
		className
	);
	return <div className={classMerged}>{name}</div>;
}
