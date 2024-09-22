import { forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.css";
import clsx from "clsx";

type TextareaProps = {
	className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Ref = HTMLTextAreaElement;

export const Textarea = forwardRef<Ref, TextareaProps>(
	({ className, ...rest }, ref) => {
		return (
			<textarea
				ref={ref}
				className={clsx(styles.textarea, className)}
				{...rest}
			/>
		);
	}
);
