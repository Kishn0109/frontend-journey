"use client";
import React, { useEffect, useMemo } from "react";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";
import { useCarousel } from "../ui/carousel";

export default function Indicator() {
	const { api } = useCarousel();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const [progress, setProgress] = React.useState(0);
	useEffect(() => {
		const id = setInterval(() => {
			setProgress((state) => {
				if (state < 100) {
					return state + 1;
				} else {
					api?.scrollNext();
					return 0;
				}
			});
		}, 50);
		return () => {
			clearInterval(id);
			setProgress(0);
		};
	}, [current]);
	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	const indicators = useMemo(() => Array.from(Array(count).keys()), [count]);
	return (
		<div className='site-main flex items-center justify-center gap-4 p-4 absolute bottom-10 -translate-x-1/2 left-1/2 right-1/2 w-fit '>
			{indicators.map((_, index) => (
				<Progress
					value={index + 1 === current ? progress : 0}
					key={index + 1}
					onClick={() => {
						api?.scrollTo(index);
					}}
					className={cn("h-1.5 border cursor-pointer bg-opacity-40", {
						"w-40": index + 1 === current,
						"w-10": index + 1 !== current,
					})}></Progress>
			))}
		</div>
	);
}
