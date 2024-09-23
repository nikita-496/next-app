"use client";

import { ids } from "@/constants/ids";
import { useScrollspy } from "@/hooks/useScrollspy";
import clsx from "clsx";
import Link from "next/link";

type NavProps = {
	className?: string;
};

export function Nav({ className }: NavProps) {
	const activeId = useScrollspy(ids, 92);
	return (
		<nav className={className}>
			<ul className="flex flex-col lg:flex-row">
				{ids.map((id, index) => (
					<li key={id} className="px-8 py-[10px]">
						<Link
							href={`#${id}`}
							className={clsx(
								"hover:text-orange typography-btn",
								id === activeId && "text-orange underline underline-offset-2"
							)}
						>
							{index === 0 ? "Преимущества" : "Как работаем"}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
