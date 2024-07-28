import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export default function Projects() {
	return (
		<>
			<div className='site-wide h-screen flex flex-col'>
				<div className='flex-1 flex w-full items-center'>
					<Carousel className='w-full' opts={{ loop: true, align: "start" }}>
						<CarouselContent>
							<CarouselItem className='h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-red-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-green-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-green-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className='h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-red-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-green-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
							</CarouselItem>
							<CarouselItem className=' h-96 md:basis-1/2  '>
								<div className='rounded-lg bg-green-400 w-full h-full'></div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
				<div className='h-10 flex items-center text-secondary-foreground font-semibold text-lg py-10'>
					<div>PROJECTS</div>
					<div className='flex-1'></div>
					<div>2021 - 2024</div>
				</div>
			</div>
		</>
	);
}
