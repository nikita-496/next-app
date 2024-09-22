import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

type LabelDirection = "left" | "right";

type CheckboxProps = {
	renderProps?: React.ReactNode;
	labelDirection?: LabelDirection;
	className?: string;
	classNameLabel?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Checkbox = forwardRef<Ref, CheckboxProps>(
	(
		{
			renderProps,
			labelDirection = "right",
			className,
			classNameLabel,
			...rest
		},
		ref
	) => {
		return (
			<div className={clsx("inline-flex items-center", className)}>
				<label
					className={clsx(
						"flex cursor-pointer select-none gap-2",
						classNameLabel
					)}
				>
					{renderProps && labelDirection === "left" ? renderProps : null}
					<div className="relative h-3.5 w-3.5">
						<input
							ref={ref}
							type="checkbox"
							className="peer absolute h-3.5 w-3.5 cursor-pointer transition-all appearance-none rounded border border-gray_01 checked:bg-orange checked:border-orange"
							{...rest}
						/>
						<span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3.5 w-3.5"
								viewBox="0 0 20 20"
								fill="currentColor"
								stroke="currentColor"
								strokeWidth="1"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
						</span>
					</div>
					{renderProps && labelDirection === "right" ? renderProps : null}
				</label>
			</div>
		);
	}
);
