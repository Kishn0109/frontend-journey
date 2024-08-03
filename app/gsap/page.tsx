"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function gsapPage() {
	const container = useRef();
	useGSAP(
		() => {
			// use selectors...
			let duration = 10;
			const sections = gsap.utils.toArray(".box");
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 2),
				ease: "none",
				duration: duration,
				scrollTrigger: {
					trigger: container.current,
					pin: true,
					scrub: true,
					snap: 1 / (sections.length - 2),
					end: () => "+=" + container.current?.offsetWidth,
				},
			});
		},
		{ scope: container }
	);
	return (
		<div
			id='adsfajkd'
			ref={container}
			className='flex items-center flex-nowrap w-fit   h-screen'>
			<div className='h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-red-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-green-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-green-400 w-full h-full'></div>
			</div>
			<div className='h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-red-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-green-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-yellow-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-green-400 w-full h-full'></div>
			</div>
			<div className=' h-[60vh] w-[50vw] px-4 shrink-0 box   '>
				<div className='rounded-lg bg-green-400 w-full h-full'></div>
			</div>
		</div>
	);
}
