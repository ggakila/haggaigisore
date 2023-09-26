import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
		<div className="homepage relative h-screen md:h-screen text-neutral-900 w-screen">
			<header className=" absolute w-full top-0 flex justify-between items-center py-5 px-5 sm:px-10 ">
				<div className="flex items-center">
					<div className="flex text-[30px] sm:text-[80px] font-bold">
						<h1 className="">H</h1>
						<h1 className="">G</h1>
					</div>
					<h1 className="studios sm:font-bold uppercase text-sm">studios</h1>
				</div>
				<div className="navs flex flex-col md:flex-row  font-semibold sm:gap-10">
					<div className="about text-[10px] md:text-xl">about.</div>
					<div className="projects text-[10px] md:text-xl">works.</div>
					<div className="contact text-[10px] md:text-xl">contact.</div>
				</div>
			</header>
			<div className="h-full w-full flex flex-col justify-center items-center ">
				<div className="flex items-center gap-3">
					<h1 className="text-lg font-bold mx-auto uppercase text-gray-400">
						turning ideas into:
					</h1>{" "}
					<h1 className="textswitch text-center font-bold text-xl sm:text-3xl text-gray-400 underline uppercase">
						<Typewriter
							options={{
								strings: [" experiences", " businesses", " brands"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
				<div className="flex text-[50px] md:text-[100px] lg:text-[200px] font-bold ">
					<h1>HAGGAI</h1><span className="text-black">.</span>
					<h1 className="gisore font-medium">GISORE</h1>
				</div>
				<h3 className="text-xl md:text-3xl font-bold">Software Developer - (Frontend)</h3>
				<div className=" hidden absolute md:flex gap-5 w-full marquee uppercase justify-center items-center text-xl font-bold bottom-0 mb-10">
					<h2 className="transpa">Mobile app development</h2>
					<h2 className="">software development</h2>
					<h2 className="transpa">User Experience Design</h2>
					<h2>SEO</h2>
					<h2 className="transpa">Interactive experiences</h2>
					<h2>product design</h2>
					<h2 className="transpa">motion design</h2>
				</div>
			</div>
		</div>
	);
}
