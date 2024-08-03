"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);
export default function Projects() {
	const container = useRef();
	useGSAP(
		() => {
			let smoother = ScrollSmoother?.create({
				smooth: 20,
				effects: true,
				normalizeScroll: true,
			});
		},
		{ scope: container }
	);
	return (
		<div className='h-[calc((20vw*8)+24px*7)]'>
			<div
				className='h-screen flex flex-col fixed top-0 bottom-0 left-0 right-0 overflow-x-hidden'
				id='smooth-wrapper'>
				<div
					className='flex-1 flex gap-6  items-center'
					ref={container}
					id='smooth-content'>
					<div className='h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-red-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-green-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-green-400 w-full h-full'></div>
					</div>
					<div className='h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-red-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-green-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
					</div>
					<div className=' h-96 w-[40vw] shrink-0   '>
						<div className='rounded-lg bg-green-400 w-full h-full'></div>
					</div>
				</div>
				{/* <div className='h-10 flex items-center text-secondary-foreground font-semibold text-lg py-10'>
					<div>PROJECTS</div>
					<div className='flex-1'></div>
					<div>2021 - 2024</div>
				</div> */}
			</div>
		</div>
	);
}
