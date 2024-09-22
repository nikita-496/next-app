type NavProps = {
	className?: string;
};

export function Nav({ className }: NavProps) {
	return (
		<nav className={className}>
			<ul className="flex flex-col lg:flex-row">
				<li className="px-8 py-[10px]">
					<a href="">Преимущества</a>
				</li>
				<li className="px-8 py-[10px]">
					<a href="">Как работаем</a>
				</li>
			</ul>
		</nav>
	);
}
