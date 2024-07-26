import Image from "next/image";
import React from "react";
export default function Analytics() {
	return (
		<div className='site-full header-background h-fit py-24 lg:py-36'>
			<div className='site-wide grid grid-cols-12 gap-4'>
				<div className='col-span-12 md:col-span-6  flex flex-col gap-2 justify-center relative z-10 order-2 md:order-none'>
					<h2 className='text-xl font-medium text-[#43E97B]'>INTRODUCING</h2>
					<h3 className='text-3xl lg:text-5xl xl:text-7xl font-medium text-white  whitespace-nowrap'>
						The all new Stinger
					</h3>
					<div className="className='text-xl font-medium text-white">
						Elevate possibilities with cutting-edge drone technology,redefining
						the horizon of intelligent versatility
					</div>
					<button className='text-white border border-white w-fit p-1 px-2 rounded-lg mt-2'>
						Read More
					</button>
				</div>
				<div className='col-span-12 md:col-span-6 flex justify-center items-center '>
					<Image src={"/Drone.svg"} alt='drone' width={990} height={556} />
				</div>
			</div>
		</div>
	);
}
