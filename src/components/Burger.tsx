"use client";
import { Nav } from "@/components/Nav";
import clsx from "clsx";
import { useState } from "react";

export function Burger({}) {
	const [active, setActive] = useState<boolean>(false);
	const handleClick = () => setActive(!active);
	const spanClassMerged = clsx(
		"relative block w-4 md:w-5 h-[2px] bg-orange transition duration-200 ease-in-out before:content-[''] before:absolute before:bg-orange before:top-[-8px] before:w-4 before:h-[2px] md:before:w-5 after:content-[''] after:absolute after:w-4 after:h-[2px] md:after:w-5 after:bg-orange after:top-[8px]",
		active &&
			"bg-transparent before:rotate-45 before:translate-y-[8px] before:transition before:duration-200 before:ease-in-out after:rotate-[-45deg] after:translate-y-[-8px] after:transition after:duration-200 ease-in-out"
	);
	const asideClass = clsx(
		"flex items-center absolute z-10 top-0 right-0 w-screen sm:w-1/3 h-screen bg-white transition ease-in-out delay-150",
		!active && "translate-x-full"
	);
	return (
		<>
			<a
				onClick={handleClick}
				className="relative z-20 flex justify-center items-center cursor-pointer px-3 border-2 border-orange rounded-2lg md:px-[10.4px] md:py-[19.4px] lg:hidden"
			>
				<span className={spanClassMerged}></span>
			</a>

			<aside className={asideClass}>
				<Nav />
			</aside>
		</>
	);
}
