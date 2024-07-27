"use client";
import React, { useEffect } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Slide from "./Slide";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import Indicator from "./Indicator";
export default function Header() {
	return (
		<div className='site-full'>
			<Carousel className='site-full' opts={{ loop: true }} plugins={[Fade()]}>
				<CarouselContent>
					<CarouselItem className='site-container bg-red-800'>
						<Slide />
					</CarouselItem>
					<CarouselItem className='site-container bg-red-800'>
						<Slide />
					</CarouselItem>
					<CarouselItem className='site-container bg-green-800'>
						<Slide />
					</CarouselItem>
				</CarouselContent>
				<Indicator />
			</Carousel>
		</div>
	);
}
