"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, ScrollSmoother } from "gsap/all";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, Draggable);
export default function gsapPage() {
	const container = useRef();
	const sliderContainer = useRef();
	const slider = useRef();
	const [progress, setProgress] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	useEffect(() => {
		const calculateScrollPercentage = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			setScrollPosition(scrollPercent);
		};

		window.onscroll = calculateScrollPercentage;
		return () => {
			window.onscroll = null;
		};
	}, []);
	useGSAP(
		() => {
			// use selectors...
			let duration = 10;
			const sections = gsap.utils.toArray(".box");
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 2),
				ease: "none",
				// duration: duration,
				scrollTrigger: {
					trigger: container.current,
					pin: true,
					scrub: true,
					// snap: 1 / (sections.length - 2),
					end: () => "+=" + container.current?.offsetWidth,
					onscroll: () => {
						console.log("scroll");
					},
				},
			});
		},
		{ scope: container }
	);
	const { context, contextSafe } = useGSAP(
		() => {
			const elements = Draggable.create(slider.current, {
				type: "x",
				bounds: sliderContainer.current,
				inertia: true,
				minDuration: 1,

				onDrag: function () {
					const containerWidth = sliderContainer.current.offsetWidth;
					const elementWidth = slider.current.offsetWidth;
					const maxDraggableDistance = containerWidth - elementWidth;
					const currentDragPosition = this.x;
					const currentProgress =
						(currentDragPosition / maxDraggableDistance) * 100;
					scrollToPercentage(currentProgress);
					setProgress(currentProgress);
					setIsDragging(true);
				},
				onDragEnd: function () {
					setTimeout(() => {
						setIsDragging(false);
					}, 1000);
				},
			});
			return elements;
		},
		{ scope: sliderContainer }
	);
	const scrollToPercentage = (percentage) => {
		const scrollHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollTo = (percentage / 100) * scrollHeight;

		gsap.to(window, {
			scrollTo: { y: scrollTo },
		});
	};

	useEffect(() => {
		const dragElement = context.data[0];
		// console.log(dragElement, "context");
		const containerWidth = sliderContainer.current.offsetWidth;
		const elementWidth = slider.current.offsetWidth;
		const maxDraggableDistance = containerWidth - elementWidth;
		const currentPosition = (scrollPosition / 100) * maxDraggableDistance;
		console.log(dragElement.target, "scrollPosition");
		if (!isDragging) {
			gsap.to(dragElement.target, {
				x: currentPosition,
			});
			dragElement.update();
		}
	}, [scrollPosition]);
	return (
		<>
			{/* <div className='h-screen w-screen bg-red-100'></div> */}
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
				<div
					id='myBox'
					className=' h-[60vh] w-[50vw] px-4 shrink-0 box  box-3  '>
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
			<div
				ref={sliderContainer}
				className='h-10 w-52 bg-red-400 fixed bottom-10 left-1/2 right-1/2 -translate-x-1/2'>
				<div
					ref={slider}
					className='h-10 w-10 bg-green-400 border-2 border-black '></div>
			</div>
			{/* <div className='h-screen w-screen bg-green-100'></div> */}
		</>
	);
}
