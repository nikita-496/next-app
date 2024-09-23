import { Burger } from "@/components/Burger";
import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import clsx from "clsx";
type HeaderProps = {
	className?: string;
};

export function Header({ className }: HeaderProps) {
	const classMerged = clsx("flex justify-center bg-gray_03", className);
	return (
		<header className={classMerged}>
			<div className="container flex items-center justify-between">
				<Logo name="LOGO" className="z-20" />
				<Nav className="hidden lg:block" />
				<Burger />
			</div>
		</header>
	);
}
