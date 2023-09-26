import React from 'react';

export default function About() {
    
   
    const Image = (Images) => {
      return (
        <img src='https://images.pexels.com/photos/15495017/pexels-photo-15495017/free-photo-of-model-in-jacket-with-glamour-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      )
    }
    
  return (
		<div className="aboutsection h-screen flex flex-col justify-center items-center px-[60px] bg-neutral-900 text-white gap-10">
			<div className="w-full flex justify-between text-neutral-300 uppercase my-[10px] px-[70px] text-3xl font-bold">
				<h1 className="">About me.</h1>
				<h1>haggai gisore</h1>
			</div>
			<div className="flex text-3xl">
				<div className="left w-2/3 px-[70px]">
					<h1 className="text-neutral-500 leading-[45px]">
						Hello, I'm{" "}
						<span className="text-neutral-200 font-bold">Haggai Gisore</span>, a
						budding software developer based in the vibrant city of Nairobi,
						Kenya. I specialize in crafting remarkable digital experiences,
						combining cutting-edge technologies with my expertise in ReactJS,
						NextJS, NodeJS and motion design to create interactive, user-centric
						solutions.
					</h1>
					<div className="my-10">
						<h1 className="uppercase my-10 font-bold text-neutral-300">
							techstack.
						</h1>
						<div className="flex flex-wrap gap-[20px] text-gray-100">
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								NextJS
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								ReactJS
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								NodeJS
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								ExpressJS
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								JavaScript
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								TypeScript
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								Babel
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								WebPack
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								REDUX
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								MongoDB
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								Jest
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								Tailwind
							</div>
							<div className="px-[15px] py-[10px] w-[140px] text-center border rounded-full hover:bg-white hover:text-black">
								Bootstrap
							</div>
						</div>
					</div>

					<h1 className="text-neutral-300">
						<i>"Creating business through user experience."</i>
					</h1>
				</div>
				<div className="right px-[70px]">
					<Image />
				</div>
			</div>
		</div>
	);
}
