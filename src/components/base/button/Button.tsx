import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = {
	variant?: "orange" | "black";
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps & PropsWithChildren>(
	(
		{ variant = "orange", className = "", disabled = false, children, ...rest },
		ref
	) => {
		const classMerged = clsx(
			styles.btn,
			styles[`btn-${variant}${disabled ? "-disabled" : ""}`],
			disabled && styles["btn-disabled"],
			className
		);

		return (
			<button ref={ref} className={classMerged} {...rest}>
				{children}
			</button>
		);
	}
);
