import { Button } from "@/components/base/button/Button";
import { Input } from "@/components/base/input/Input";
import { Tabs } from "@/components/tabs/Tabs";
import { Textarea } from "@/components/base/textarea/Textarea";
import { Checkbox } from "@/components/base/checkbox/Checkbox";
import { Bullet } from "@/components/Bullet";
import styles from "./styles.module.css";
import clsx from "clsx";

import {
	ClickwaveImage,
	ComputerImage,
	NovasphereImage,
	VectorImage,
	ZyphronixImage,
} from "@/components/Image";

export default function Page() {
	return (
		<main>
			<section
				className={clsx(
					"pt-24 pb-10 sm:pt-40 sm:pb-10 screen_1440:pb-20",
					styles["section-hero"]
				)}
			>
				<div className="flex flex-col md:block container">
					<h1 className="typography-h1">
						Монетизируйте клиентскую базу, не снижая NPS
					</h1>
					<p className="typography-body-text-1 screen_1440:typography-h2-regular mt-8 md:w-[626px]">
						Найдите идеальный баланс выручки и удовлетворённости пользователей
						с платформой рекламной монетизации
					</p>
					<Button className="mt-[112px] sm:mt-[60px] screen_1440:mt-20">
						Заказать звонок
					</Button>
					<div className="flex flex-col xl:flex-row justify-between mt-20 screen_1440:mt-[180px]">
						<p className="typography-h2 screen_1440:typography-h1-bold md:w-[460px]">
							Дополнительные источники выручки для разных компаний
						</p>
						<Tabs
							items={["Оператором", "ОТТ сервисам"]}
							content={[
								"Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации",
								"Дополнительные возможности обогащения данных об аудитории и монетизации",
							]}
							className="mt-[22px] xl:mt-0 md:w-[560px]"
						/>
					</div>
				</div>
			</section>

			<section className="pt-10 pb-5 sm:pt-20 sm:pb-20 screen_1440:pt-[100px] screen_1440:pb-[90px]">
				<div className="container">
					<h2 className="typography-h2 md:px-[88px] screen_1440:typography-h1-bold screen_1440:px-[62px] md:text-center">
						Баланс между выручкой и удовлетворённостью пользователей
					</h2>
					<div className="flex flex-col mt-7 md:flex-row md:mt-20">
						<Bullet
							title="Частотность
под контролем"
							text="Чтобы не ронять NPS
и не увеличивать отток пользователей"
							className="md:w-[216px] lg:w-[300px] p-6 md:p-8"
						/>

						<VectorImage />
						<Bullet
							title="Максимальная выручка"
							text="За счёт заполенения всех рекламных мест по высокой цене"
							className="md:w-[216px] lg:w-[300px] p-6 md:p-8"
						/>
					</div>
				</div>
			</section>
			<section
				className={clsx(
					"pt-[60px] pb-20 sm:pt-10 sm:pb-[60px] screen_1440:pt-[90px] screen_1440:pb-[90px]",
					styles["section-gray"]
				)}
			>
				<div className="flex flex-col justify-between container md:gap-12 md:flex-row md:items-center">
					<h2 className="typography-h3 w-7/12 md:w-auto screen_1440:typography-h2">
						Наши партнёры по мотивации
					</h2>
					<ul className="flex flex-wrap gap-y-3 justify-between mt-5 md:mt-0 md:flex-nowrap md:items-center md:gap-[55px] screen_1440:gap-20 md:pr-10 md:flex-row md:justify-normal">
						<li className="order-1">
							<ClickwaveImage />
						</li>
						<li className="mx-auto min-[393px]:m-0 order-3 md:order-2 sm:mx-0">
							<ZyphronixImage />
						</li>
						<li className="order-2 md:order-3">
							<NovasphereImage />
						</li>
					</ul>
				</div>
			</section>
			<section className="pt-6 pb-[50px] sm:pt-[60px] sm:pb-20 screen_1440:pt-[90px] screen_1440:pb-14">
				<div className="flex flex-col justify-between py-10 md:flex-row">
					<div
						className={clsx(
							"md:w-[334px] screen_960:w-[420px] screen_1440:w-[497px]",
							styles.content
						)}
					>
						<h2 className="typography-h2 screen_1440:typography-h1-bold">
							Подробные отчёты для вас и правообладателей
						</h2>
						<ul className="mt-8">
							<li className="mb-4 pr-9">
								<Bullet
									text="Выручка, CTR, показы и другие показатели в реальном времени."
									className="flex gap-4"
									classNameIcon="flex-0-auto"
								/>
							</li>
							<li className="mb-4">
								<Bullet
									text="Инструменты контроля качества трафика."
									className="flex gap-4"
									classNameIcon="flex-0-auto"
								/>
							</li>
							<li className="pr-9">
								<Bullet
									text="Ежемесячные автоматические отчёты для каждого правообладателя."
									className="flex gap-4"
									classNameIcon="flex-0-auto"
								/>
							</li>
						</ul>
						<Button variant="black" className="mt-8 md:mt-20">
							Заказать звонок
						</Button>
					</div>
					<ComputerImage className="mt-[50px] w-[300px] overflow-hidden ml-auto md:flex md:justify-end md:mt-0 md:max-w-[700px] md:block screen_960:translate-y-[-30px] flex-1" />
				</div>
			</section>
			<section
				className={clsx(
					"pt-20 pb-7 sm:pt-10 sm:pb-[50px] screen_1440:pt-[100px] screen_1440:pb-10",
					styles["section-gray"]
				)}
			>
				<div className="container">
					<h2 className="typography-h2 screen_1440:typography-h1-bold">
						Заполните форму
					</h2>
					<form className="flex flex-col gap-10 mt-8  md:mt-16 screen_960:flex-row">
						<Textarea className="flex-1" placeholder="Напишить свой вопрос" />
						<div className="flex flex-col flex-1 gap-8 md:gap-0">
							<Input placeholder="Введите e-mail" />
							<Checkbox
								renderProps={
									<div className="typography-body-text-2 md:typography-body-text-3 w-full md:w-[438px]">
										<span>Я ознакомлен(а) с &nbsp;</span>
										<span className=" underline">
											политикой конфиденциальности
										</span>
										<span className="">
											&nbsp; и согласен(на) на обработку &nbsp;
										</span>
										<span className="underline">персональных данных</span>
									</div>
								}
								className="md:mt-8"
							/>
							<Button variant="black" className="md:mt-12">
								Отправить
							</Button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}
