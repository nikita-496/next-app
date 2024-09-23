import Image, { getImageProps } from "next/image";

import vector from "../public/vector.png";
import vectorVertical from "../public/vector-vertical.png";
import Computer399w from "../public/computer-399w.png";
import Computer501w from "../public/computer-501w.png";
import Computer721w from "../public/computer-721w.png";
import clickwave121w from "../public/clickwave-121w.png";
import clickwave134w from "../public/clickwave-134w.png";
import clickwave177w from "../public/clickwave-177w.png";
import novasphere131w from "../public/novasphere-131w.png";
import novasphere145w from "../public/novasphere-145w.png";
import novasphere191w from "../public/novasphere-191w.png";
import zyphronix69w from "../public/zyphronix_69w.png";
import zyphronix101w from "../public/zyphronix_101w.png";
import zyphronix82w from "../public/zyphronix_82w.png";

type ImageProps = {
	className?: string;
};

export function VectorImage() {
	const common = {
		alt: "Оранжевый квадрат с оранжевыми исходящими линиями по бокам",
	};
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		quality: 80,
		width: 530,
		height: 120,
		src: vector,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		quality: 70,
		src: vectorVertical,
	});
	return (
		<picture className="flex-1 self-center w-20  md:w-auto">
			<source media="(min-width: 768px)" srcSet={desktop}></source>
			<source media="(min-width: 320px)" srcSet={mobile}></source>
			<Image
				src={vector}
				alt="Оранжевый квадрат с оранжевыми исходящими линиями по бокам"
			/>
		</picture>
	);
}
export function ClickwaveImage() {
	const common = { alt: "Изображение логотипа ClickWave" };
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		quality: 80,
		src: clickwave177w,
		fill: true,
	});
	const {
		props: { srcSet: tablet },
	} = getImageProps({
		...common,
		quality: 80,
		src: clickwave121w,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		quality: 70,
		src: clickwave134w,
	});
	return (
		<picture className="block w-[134px] sm:w-[121px] screen_1440:w-[177px]">
			<source media="(min-width: 1440px)" srcSet={desktop}></source>
			<source media="(min-width: 786px)" srcSet={tablet}></source>
			<source media="(min-width: 320px)" srcSet={mobile}></source>
			<Image src={clickwave177w} alt="Изображение логотипа ClickWave" />
		</picture>
	);
}
export function ZyphronixImage() {
	const common = { alt: "Изображение логотипа Zyphronix" };
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		quality: 80,
		src: zyphronix101w,
		fill: true,
	});
	const {
		props: { srcSet: tablet },
	} = getImageProps({
		...common,
		quality: 80,
		src: zyphronix69w,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		quality: 70,
		src: zyphronix82w,
	});
	return (
		<picture className="block w-[82px] sm:w-[69px] screen_1440:w-[101px]">
			<source media="(min-width: 1440px)" srcSet={desktop}></source>
			<source media="(min-width: 786px)" srcSet={tablet}></source>
			<source media="(min-width: 320px)" srcSet={mobile}></source>
			<Image src={zyphronix101w} alt="Изображение логотипа Zyphronix" />
		</picture>
	);
}
export function NovasphereImage() {
	const common = { alt: "Изображение логотипа NovaSphere" };
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		quality: 80,
		src: novasphere191w,
		fill: true,
	});
	const {
		props: { srcSet: tablet },
	} = getImageProps({
		...common,
		quality: 80,
		src: novasphere131w,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		quality: 70,
		src: novasphere145w,
	});
	return (
		<picture className="block w-[145px] sm:w-[131px] screen_1440:w-[191px]">
			<source media="(min-width: 1440px)" srcSet={desktop}></source>
			<source media="(min-width: 786px)" srcSet={tablet}></source>
			<source media="(min-width: 320px)" srcSet={mobile}></source>
			<Image src={novasphere191w} alt="Изображение логотипа NovaSphere" />
		</picture>
	);
}

export function ComputerImage({ className }: ImageProps) {
	const common = { alt: "Ноутбук с изображением главной страницы" };
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		quality: 80,
		src: Computer721w,
		fill: true,
	});
	const {
		props: { srcSet: tablet },
	} = getImageProps({
		...common,
		quality: 80,
		src: Computer399w,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		quality: 70,
		src: Computer501w,
	});
	return (
		<picture className={className}>
			<source media="(min-width: 1440px)" srcSet={desktop}></source>
			<source media="(min-width: 768px)" srcSet={tablet}></source>
			<source media="(min-width: 320px)" srcSet={mobile}></source>
			<Image
				src={Computer721w}
				alt="Ноутбук с изображением главной страницы"
				className="max-w-none w-[501px] md:max-w-full md:w-auto"
			/>
		</picture>
	);
}
