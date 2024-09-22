"use client";

import clsx from "clsx";
import styles from "./tabs.module.css";
import { useState } from "react";

type TabsProps = {
	items: string[];
	content?: string[] | null;
	className?: string;
};

export function Tabs({ items, content = null, className }: TabsProps) {
	const [active, setActive] = useState<number>(0);
	const handleClick = (index: number) => setActive(index);
	return (
		<div className={className}>
			<div className={styles.tabs}>
				{items.map((item, index) => (
					<button
						key={item}
						className={clsx(
							styles.tab,
							`${index === active && styles["tab-active"]}`
						)}
						onClick={() => handleClick(index)}
					>
						{item}
					</button>
				))}
			</div>
			{content &&
				content.map((contentItem, index) => (
					<p
						key={contentItem}
						className={clsx(
							styles.content,
							`${index === active && styles["content-active"]}`
						)}
					>
						{contentItem}
					</p>
				))}
		</div>
	);
}
