import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import clsx from "clsx";

type InputProps = {
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
	({ error = "", ...rest }, ref) => {
		const classMerged = clsx(styles.input, error && styles["input-invalid"]);
		return (
			<div className="flex flex-col">
				<input ref={ref} className={classMerged} {...rest} />
				{error && <span className={styles.error}>{error}</span>}
			</div>
		);
	}
);
