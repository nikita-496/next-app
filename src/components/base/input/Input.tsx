import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import clsx from "clsx";

type InputProps = {
	invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
	({ invalid = false, ...rest }, ref) => {
		const classMerged = clsx(styles.input, invalid && styles["input-invalid"]);
		return <input ref={ref} className={classMerged} {...rest} />;
	}
);
