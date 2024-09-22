import clsx from "clsx";

type BulletProps = {
	text: string;
	title?: string;
	className?: string;
	classNameIcon?: string;
};

export function Bullet({ text, title, className, classNameIcon }: BulletProps) {
	return (
		<div className={className}>
			<div
				className={clsx(
					"flex justify-center items-center bg-orange rounded-full w-[18px] h-[18px] md:w-6 md:h-6",
					classNameIcon
				)}
			>
				<svg
					width="8"
					height="8"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.46967 8.46979C0.176777 8.76269 0.176777 9.23756 0.46967 9.53045C0.762563 9.82335 1.23744 9.82335 1.53033 9.53045L0.46967 8.46979ZM9.75 1.00012C9.75 0.585909 9.41421 0.250122 9 0.250122H2.25C1.83579 0.250122 1.5 0.585909 1.5 1.00012C1.5 1.41434 1.83579 1.75012 2.25 1.75012H8.25V7.75012C8.25 8.16434 8.58579 8.50012 9 8.50012C9.41421 8.50012 9.75 8.16434 9.75 7.75012V1.00012ZM1.53033 9.53045L9.53033 1.53045L8.46967 0.469792L0.46967 8.46979L1.53033 9.53045Z"
						fill="white"
					/>
				</svg>
			</div>
			<div>
				{title && (
					<strong className="typography-h3 block my-4 screen_1440:typography-h2">
						{title}
					</strong>
				)}
				<p className="typography-body-text-2">{text}</p>
			</div>
		</div>
	);
}
